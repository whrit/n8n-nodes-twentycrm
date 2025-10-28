# n8n-nodes-twenty

Community nodes that let you work with the [Twenty](https://twenty.com) CRM API from inside n8n. The package ships two nodes:

- **Twenty** — declarative REST actions for people, companies, and notes.
- **Twenty Trigger** — programmatic webhook trigger for as-you-happen updates from Twenty.

## Installation

Follow the [n8n community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) to add this package to your n8n instance.

## Credentials

Create a Twenty API key in **Settings → Developers → API & Webhooks** inside your workspace. When configuring the `Twenty API` credentials in n8n:

1. Paste the generated API key into the `API Key` field.
2. Set the `Base URL` parameter on the node to your workspace’s REST endpoint (for example `https://app.twenty.com/rest` or `https://crm.quikturn.io/rest`).

The nodes authenticate using Bearer tokens sent via the `Authorization` header.

## Operations

### Twenty node

| Resource | Operation | Description |
| --- | --- | --- |
| Person | Create | Create a person with name, primary email, optional company, and profile details. |
| Person | Find by Email | Look up one or more people by primary email using Twenty filters. |
| Person | Update | Patch an existing person with only the fields you supply. |
| Company | Create | Create a company record including domain, profile, and ownership fields. |
| Company | Update | Update selected attributes on an existing company record. |
| Note | Create | Publish a markdown note and attach it to people or companies. |

Each action exposes additional optional fields (phones, links, custom fields, etc.) that map directly to Twenty’s REST schema defined in [`docs/API-Docs/twenty-schema-core-api-docs.md`](docs/API-Docs/twenty-schema-core-api-docs.md).

### Twenty Trigger

Receives webhook calls from Twenty. Configure one or more event types (e.g. `person.created`, `person.updated`, `company.created`, `note.created`) and, optionally, a shared secret. The trigger validates the `X-Twenty-Webhook-Signature` header when a secret is set and only emits events that match the selected filters.

> **Webhook setup:** After activating a workflow, copy the production webhook URL provided by n8n and register it in Twenty under **Settings → Developers → Webhooks** with the same shared secret (if used).

## Usage tips

- **Base URL:** Ensure the field includes the `/rest` suffix for your workspace domain (e.g. `https://your-workspace.twenty.com/rest`).
- **Custom fields:** Supply JSON objects via the `Custom Fields (JSON)` inputs to merge arbitrary custom field data into records.
- **Webhook verification:** Keep the shared secret in sync between Twenty and the trigger node to prevent replay or spoofing.

## Compatibility

Tested with n8n `1.64.x` and later and Twenty’s REST API `2025-01` schema. Earlier n8n versions that support community nodes and declarative routing should also work.

## Resources

- [Twenty in-app API reference](https://app.twenty.com/settings/developers)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Full Twenty schema (OpenAPI)](docs/API-Docs/twenty-schema-core-api-docs.md)

## Version history

- `0.1.0` – Initial release with people/company/note actions and webhook trigger.
