# Twenty n8n Integration — Implementation Plan & Tracker

**Package name:** `n8n-nodes-twenty`
**Nodes in package:**

* `Twenty` — **declarative** REST actions (People, Companies, Notes, etc.)
* `TwentyTrigger` — **programmatic** Trigger for Twenty webhooks

> n8n recommends **declarative** for REST nodes and **programmatic** for triggers. ([n8n Docs][1])

---

## 0) What this integration assumes

* You’ll create Twenty API keys and webhooks **inside your workspace** at **Settings → Developers → API & Webhooks**. Twenty’s public docs point there, and the **in-app** docs/playground reflect your exact data model & endpoints. ([twenty.com][2])
* You’ll ship both nodes in **one npm package** (multiple nodes per package is supported; each node in its own folder under `nodes/`). ([n8n Docs][3])

---

## 1) Repo bootstrap

**Scaffold the package** (choose *HTTP API* template for the action node):

```bash
npm create @n8n/node@latest
# name: n8n-nodes-twenty
# kind: HTTP API
```

Then add a second node folder for the trigger (programmatic) within the same repo. ([n8n Docs][4])

**Target structure**

```
n8n-nodes-twenty/
├─ credentials/
│  └─ TwentyApi.credentials.ts
├─ nodes/
│  ├─ Twenty/               # declarative REST node
│  │  ├─ Twenty.node.ts
│  │  ├─ Twenty.node.json
│  │  └─ resources/…        # (optional per-op files)
│  └─ TwentyTrigger/        # programmatic trigger node
│     ├─ TwentyTrigger.node.ts
│     └─ TwentyTrigger.node.json
├─ .github/workflows/ci.yml
├─ README.md
├─ CHANGELOG.md
├─ package.json
└─ tsconfig.json
```

n8n supports **more than one node in a package**, one folder per node. ([n8n Docs][3])

---

## 2) Credentials

**`credentials/TwentyApi.credentials.ts`**

* Field(s):

  * `apiKey: string` (required)
* Used as HTTP **Bearer** auth: `Authorization: Bearer {{$credentials.apiKey}}`.
  Twenty keys are created under **Settings → API & Webhooks**. ([twenty.com][5])

---

## 3) Node: **Twenty** (Declarative / HTTP API)

**Why declarative:** less boilerplate, `requestDefaults` + `routing`, built for REST; “future-proof” in n8n’s model. ([n8n Docs][6])

**Header (key parts)**

```ts
// nodes/Twenty/Twenty.node.ts
requestDefaults: {
  baseURL: '={{$parameter["baseUrl"]}}',
  headers: { Authorization: '={{"Bearer " + $credentials.apiKey}}' },
},
credentials: [{ name: 'twentyApi', required: true }],
properties: [
  { displayName: 'Base URL', name: 'baseUrl', type: 'string',
    default: 'https://crm.quikturn.io', description: 'Your Twenty base URL' },
  { displayName: 'Resource', name: 'resource', type: 'options',
    options: [{ name: 'Person', value: 'person' },
              { name: 'Company', value: 'company' },
              { name: 'Note', value: 'note' }],
    default: 'person' },
  // … operations…
]
```

> **Endpoint paths:** Use the ones shown in your **in-app API docs** under Settings; the public site confirms API docs are accessed there (and include a playground). ([twenty.com][2])

### v1 Operations (recommended)

Start with the core CRUD you’ll actually use. Each operation uses `routing.request` (and optional `output.postReceive`). ([n8n Docs][7])

1. **People → Create**

   * **Method/URL:** `POST` `=/rest/people` *(adjust to your workspace path)*
   * **Body (send.properties):** `firstName`, `lastName`, `primaryEmail`, `companyName`, plus optional custom fields
   * **Output:** pass through created record

2. **People → Find by Email**

   * **Method/URL:** `GET` `=/rest/people` with `qs: { email }`
   * Use for dedupe/“upsert” patterns

3. **People → Update**

   * **Method/URL:** `PATCH` `=/rest/people/{{$parameter["personId"]}}`
   * **Body:** only changed fields

4. **Companies → Create / Update**

   * Similar pattern: `=/rest/companies`, `=/rest/companies/{id}`

5. **Notes → Create**

   * **Method/URL:** `POST` `=/rest/notes` (or the path your in-app docs specify), with fields to attach to a person/company (e.g., `recordId`, `content`)

> If you later need **multi-call orchestration** (e.g., “find then update” inside one op), either:
> (a) keep ops simple and compose in workflows, or
> (b) implement that **specific op** programmatically. ([n8n Docs][8])

---

## 4) Node: **TwentyTrigger** (Programmatic)

**Why programmatic:** trigger nodes must be programmatic (implement a handler that receives POSTs and emits items). ([n8n Docs][1])

**What it does**

* Exposes a public URL (via n8n) to receive Twenty webhooks.
* Validates optional shared secret.
* Filters to selected event types.
* Emits one item per event and responds **2xx** quickly (important for retries).
  **Where to create webhooks:** Twenty app → Settings → API & Webhooks → *Webhooks*. ([twenty.com][5])

**Implementation guide:** follow n8n’s programmatic tutorial (trigger node mechanics + `execute()`/trigger lifecycle). ([n8n Docs][8])

**Params to expose**

* `secret` (string; optional) — compare with `X-Twenty-Secret` (or your chosen header)
* `events` (multi-select) — e.g., `person.created`, `person.updated`, `company.created`, …

---

## 5) Example routing snippet (People → Find by Email)

```ts
// inside an 'options' entry for Operation = "Find by Email"
routing: {
  request: {
    method: 'GET',
    url: '=/rest/people',                    // confirm in your in-app docs
    qs: { email: '={{$parameter["email"]}}' }
  },
  output: { postReceive: [{ type: 'set', properties: { value: '={{$response}}' } }] }
}
```

Declarative nodes use `requestDefaults` + per-op `routing`; see n8n’s reference & tutorial for patterns. ([n8n Docs][7])

---

## 6) Testing Plan

**Local dev loop** (scaffold provides commands): bring up the package in n8n’s dev runner so both nodes appear in the UI. ([n8n Docs][4])

**Sample workflows (add to `/examples`)**

1. **Upsert Person from email list**

   * “Set” → *Twenty: Find by Email* → IF (found?) → *Twenty: Update* : *Twenty: Create*
2. **Webhook → Note**

   * *TwentyTrigger* (e.g., `person.updated`) → *Twenty: Create Note* with event payload.

**Export/import** workflows as JSON to share. ([n8n Docs][9])

---

## 7) CI, versioning, and releases

* **CI:** lint + build on PR with your existing `ci.yml`.
* **Versioning:** Declarative nodes use **light versioning**; if you later need full versioning (or heavy transforms), add a programmatic op or bump carefully. ([n8n Docs][1])
* **Publish:** tag `v1.0.0`, publish to npm as `n8n-nodes-twenty`.

---

## 8) Security

* Never log API keys.
* Document how users rotate Twenty keys in **Settings → API & Webhooks**. ([twenty.com][5])
* Trigger: verify shared secret (optional), return **2xx** quickly.

---

## 9) Acceptance Criteria (DoD)

* [ ] `Twenty` node implements **People create / findByEmail / update** (+ Company create/update, Note create) using **Bearer** auth and your base URL parameter.
* [ ] `TwentyTrigger` receives POSTs from Twenty, filters events, emits items, responds **200**.
* [ ] Two example workflows run in a clean n8n instance.
* [ ] README explains setup (API key, base URL, webhook creation) with links to Twenty docs. ([twenty.com][10])

---

## 10) Backlog / vNext

* **GraphQL ops** (if you prefer GQL): n8n advises **programmatic** for non-REST, or keep a simple declarative POST if it’s just one call. ([n8n Docs][1])
* **Composite “Upsert Person”** op (find-then-update/create) as a dedicated programmatic op.
* **Pagination helpers** and typed outputs for better downstream UX.

---

## Quick Links

* **Twenty → API & Webhooks** (public entry; in-app docs & playground live under Settings) ([twenty.com][10])
* **Create Twenty webhooks** (steps) ([twenty.com][5])
* **n8n: choose node style (declarative vs programmatic)** ([n8n Docs][1])
* **n8n: declarative tutorial** (requestDefaults, routing) ([n8n Docs][6])
* **n8n: programmatic tutorial / execute method** (triggers) ([n8n Docs][8])
* **n8n: multiple nodes in one package / file structure** ([n8n Docs][3])
* **n8n: export/import workflows** (share examples) ([n8n Docs][9])

---