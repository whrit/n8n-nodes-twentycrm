import type { INodeProperties } from 'n8n-workflow';
import { companyCreateDescription } from './create';
import { companyUpdateDescription } from './update';
import { companyListDescription } from './list';
import { companyGetDescription } from './get';
import { companyDeleteDescription } from './delete';
import { companyFindDuplicatesDescription } from './findDuplicates';
import { companyMatchDescription } from './match';
import { companyBulkMatchDescription } from './bulkMatch';

const showForCompany = {
	resource: ['company'],
};

const buildCreatePayload = `={{ (() => {
	const payload = {
		name: $parameter["name"],
	};

	if ($parameter["domain"]) {
		payload.domainName = { primaryLinkUrl: $parameter["domain"] };
	}

	if ($parameter["description"]) {
		payload.description = $parameter["description"];
	}

	const additional = $parameter["additionalFields"] ?? {};

	if (additional.accountOwnerId) {
		payload.accountOwnerId = additional.accountOwnerId;
	}

	if (additional.employees) {
		payload.employees = additional.employees;
	}

	if (additional.industry) {
		payload.industry = additional.industry;
	}

	if (additional.linkedinUrl || additional.linkedinLabel) {
		payload.linkedinLink = {};
		if (additional.linkedinUrl) {
			payload.linkedinLink.primaryLinkUrl = additional.linkedinUrl;
		}
		if (additional.linkedinLabel) {
			payload.linkedinLink.primaryLinkLabel = additional.linkedinLabel;
		}
	}

	if (additional.xLinkUrl || additional.xLinkLabel) {
		payload.xLink = {};
		if (additional.xLinkUrl) {
			payload.xLink.primaryLinkUrl = additional.xLinkUrl;
		}
		if (additional.xLinkLabel) {
			payload.xLink.primaryLinkLabel = additional.xLinkLabel;
		}
	}

	if (additional.addressCity || additional.addressCountry) {
		payload.address = {};
		if (additional.addressCity) {
			payload.address.addressCity = additional.addressCity;
		}
		if (additional.addressCountry) {
			payload.address.addressCountry = additional.addressCountry;
		}
	}

	if (additional.customFieldsJson) {
		try {
			payload.customFields = JSON.parse(additional.customFieldsJson);
		} catch (error) {
			throw new Error('Invalid JSON in "Custom Fields (JSON)" for company create');
		}
	}

	return payload;
})() }}`;

const buildUpdatePayload = `={{ (() => {
	const payload = {};
	const update = $parameter["updateFields"] ?? {};

	if (update.name) {
		payload.name = update.name;
	}

	if (update.domain) {
		payload.domainName = { primaryLinkUrl: update.domain };
	}

	if (update.description) {
		payload.description = update.description;
	}

	if (update.accountOwnerId) {
		payload.accountOwnerId = update.accountOwnerId;
	}

	if (update.employees) {
		payload.employees = update.employees;
	}

	if (update.industry) {
		payload.industry = update.industry;
	}

	if (update.linkedinUrl || update.linkedinLabel) {
		payload.linkedinLink = {};
		if (update.linkedinUrl) {
			payload.linkedinLink.primaryLinkUrl = update.linkedinUrl;
		}
		if (update.linkedinLabel) {
			payload.linkedinLink.primaryLinkLabel = update.linkedinLabel;
		}
	}

	if (update.xLinkUrl || update.xLinkLabel) {
		payload.xLink = {};
		if (update.xLinkUrl) {
			payload.xLink.primaryLinkUrl = update.xLinkUrl;
		}
		if (update.xLinkLabel) {
			payload.xLink.primaryLinkLabel = update.xLinkLabel;
		}
	}

	if (update.addressCity || update.addressCountry) {
		payload.address = {};
		if (update.addressCity) {
			payload.address.addressCity = update.addressCity;
		}
		if (update.addressCountry) {
			payload.address.addressCountry = update.addressCountry;
		}
	}

	if (update.customFieldsJson) {
		try {
			payload.customFields = JSON.parse(update.customFieldsJson);
		} catch (error) {
			throw new Error('Invalid JSON in "Custom Fields (JSON)" for company update');
		}
	}

	return payload;
})() }}`;


const buildBulkMatchCompaniesPayload = `={{ (() => {
	const mode = $parameter["matchMode"] ?? "collection";

	const getByPath = (source, path) => {
		if (!path || !source || typeof source !== "object") {
			return undefined;
		}
		return path.split(".").reduce((acc, key) => {
			if (acc && typeof acc === "object" && key in acc) {
				return acc[key];
			}
			return undefined;
		}, source);
	};

	const extractFirst = (candidate, paths) => {
		for (const path of paths) {
			const value = getByPath(candidate, path);
			if (
				value !== undefined &&
				value !== null &&
				!(typeof value === "string" && value.trim() === "")
			) {
				return value;
			}
		}
		return undefined;
	};

	const normalizeUrl = (value) => {
		if (typeof value !== "string") {
			return undefined;
		}
		let trimmed = value.trim();
		if (!trimmed) {
			return undefined;
		}
		const lower = trimmed.toLowerCase();
		if (lower.startsWith("http://") || lower.startsWith("https://")) {
			return trimmed;
		}
		while (trimmed.startsWith("/")) {
			trimmed = trimmed.slice(1);
		}
		return \`https://\${trimmed}\`;
	};

	const normalizeString = (value) => {
		if (typeof value !== "string") {
			return undefined;
		}
		const trimmed = value.trim();
		return trimmed ? trimmed : undefined;
	};

	const buildCompany = (candidate) => {
		if (!candidate || typeof candidate !== "object") {
			return null;
		}

		const domainCandidate = extractFirst(candidate, [
			"domainName.primaryLinkUrl",
			"domainUrl",
			"domain",
			"website",
			"url",
			"match.domainUrl",
			"match.domain",
			"match.website",
			"lead.website",
			"lead.company_url",
		]);
		const normalizedDomain = normalizeUrl(domainCandidate);

		const nameCandidate = normalizeString(
			extractFirst(candidate, [
				"name",
				"companyName",
				"company_name",
				"match.name",
				"match.nameNormalized",
				"lead.company_name",
				"lead.companyName",
			]),
		);

		const accountOwnerId = extractFirst(candidate, ["accountOwnerId"]);
		const description = normalizeString(extractFirst(candidate, ["description"]));
		const industry = normalizeString(extractFirst(candidate, ["industry"]));

		const result = {};

		if (normalizedDomain) {
			result.domainName = { primaryLinkUrl: normalizedDomain };
		}
		if (nameCandidate) {
			result.name = nameCandidate;
		}
		if (accountOwnerId) {
			result.accountOwnerId = accountOwnerId;
		}
		if (industry) {
			result.industry = industry;
		}
		if (description) {
			result.description = description;
		}

		return Object.keys(result).length ? result : null;
	};

	const parseJsonArray = (input, errorMessage) => {
		if (Array.isArray(input)) {
			return input;
		}
		if (typeof input === "string") {
			const trimmed = input.trim();
			if (!trimmed.length) {
				return undefined;
			}
			try {
				const parsed = JSON.parse(trimmed);
				if (!Array.isArray(parsed)) {
					throw new Error(errorMessage);
				}
				return parsed;
			} catch (error) {
				throw new Error(errorMessage);
			}
		}
		if (input && typeof input === "object") {
			throw new Error(errorMessage);
		}
		return undefined;
	};

	let rawCandidates;

	if (mode === "collection") {
		const entries = Array.isArray($parameter["matchEntries"]) ? $parameter["matchEntries"] : [];
		rawCandidates = entries.map((entry) => entry.company ?? {});
	} else if (mode === "json") {
		const parsed = parseJsonArray(
			$parameter["companiesJson"],
			'Companies (JSON) must be a JSON array',
		);
		if (!parsed || parsed.length === 0) {
			throw new Error('Provide at least one entry under Companies (JSON)');
		}
		rawCandidates = parsed;
	} else {
		const propertyName = ($parameter["inputPropertyName"] ?? "companies").trim();
		const incoming = propertyName ? getByPath($json, propertyName) : undefined;
		if (!incoming) {
			throw new Error('No data found at the specified input property for bulk company match');
		}
		if (!Array.isArray(incoming)) {
			throw new Error('The incoming property must resolve to an array for bulk company match');
		}
		rawCandidates = incoming;
	}

	const payload = (Array.isArray(rawCandidates) ? rawCandidates : [])
		.map((candidate) => buildCompany(candidate))
		.filter((entry) => entry !== null);

	if (payload.length === 0) {
		throw new Error(
			'Unable to construct any company payloads for bulk match. Provide domains or names.',
		);
	}

	return payload;
})() }}`;

const buildBulkMatchCompaniesOutput = `={{ ($response.data ?? []).map((entry) => ({
	totalCount: entry.totalCount ?? (entry.companyDuplicates?.length ?? 0),
	matches: entry.companyDuplicates ?? [],
	pageInfo: entry.pageInfo ?? null,
})) }}`;

export const companyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showForCompany,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create company',
				description: 'Create a company record',
				routing: {
					request: {
						method: 'POST',
						url: '=/companies',
						body: buildCreatePayload,
					},
				},
			},
			{
				name: 'Match',
				value: 'match',
				action: 'Match company',
				description: 'Look up an existing company by domain or name',
				routing: {
					request: {
						method: 'GET',
						url: '=/companies',
						qs: {
							filter: `={{ (() => {
								const normalizeUrl = (value) => {
									if (typeof value !== "string") {
										return undefined;
									}
									let trimmed = value.trim();
									if (!trimmed) {
										return undefined;
									}
									const lower = trimmed.toLowerCase();
									if (lower.startsWith("http://") || lower.startsWith("https://")) {
										return trimmed;
									}
									while (trimmed.startsWith("/")) {
										trimmed = trimmed.slice(1);
									}
									return \`https://\${trimmed}\`;
								};

								const escapeValue = (input) =>
									typeof input === "string" ? input.replace(/"/g, '\\"') : input;

								const domain = ($parameter["domain"] ?? "").trim();
								const name = ($parameter["name"] ?? "").trim();
								const strategy = $parameter["fallbackStrategy"] ?? "domainThenName";

								const normalizedDomain = normalizeUrl(domain);
								const altDomain =
									normalizedDomain?.startsWith("https://")
										? normalizedDomain.replace("https://", "http://")
										: normalizedDomain?.startsWith("http://")
											? normalizedDomain.replace("http://", "https://")
											: undefined;

								const parts = [];

								if (normalizedDomain && strategy !== "nameOnly") {
									parts.push(
										\`domainName.primaryLinkUrl[eq]:"\${escapeValue(normalizedDomain)}"\`,
									);
									if (altDomain) {
										parts.push(
											\`domainName.primaryLinkUrl[eq]:"\${escapeValue(altDomain)}"\`,
										);
									}
								}

								if (name && strategy !== "domainOnly") {
									const escapedName = escapeValue(name);
									parts.push(\`name[ilike]:"%\${escapedName}%"\`);
								}

								if (parts.length === 0) {
									return undefined;
								}

								if (parts.length === 1) {
									return parts[0];
								}

								return \`or(\${parts.join(",")})\`;
							})() }}`,
							limit: '1',
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ (() => {\n\tconst match = $response.data?.companies?.[0];\n\tif (!match) {\n\t\treturn { matchFound: false, companyId: null, company: null };\n\t}\n\treturn { matchFound: true, companyId: match.id, company: match };\n})() }}',
								},
							},
						],
					},
				},
			},
			{
				name: 'Bulk Match',
				value: 'bulkMatch',
				action: 'Bulk match companies',
				description: 'Match multiple companies and return potential duplicates for each',
				routing: {
					request: {
						method: 'POST',
						url: '=/companies/duplicates',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
						body: {
							data: buildBulkMatchCompaniesPayload,
						},
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: buildBulkMatchCompaniesOutput,
								},
							},
						],
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				action: 'List companies',
				description: 'Retrieve companies with filtering, sorting, and pagination',
				routing: {
					request: {
						method: 'GET',
						url: '=/companies',
						qs: {
							limit: '={{$parameter["limit"]}}',
							order_by: '={{$parameter["orderBy"] || undefined}}',
							filter: '={{$parameter["filter"] || undefined}}',
							depth: '={{$parameter["depth"] ?? undefined}}',
							starting_after: '={{$parameter["startingAfter"] || undefined}}',
							ending_before: '={{$parameter["endingBefore"] || undefined}}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get company',
				description: 'Retrieve a specific company by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/companies/{{$parameter["companyId"]}}',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete company',
				description: 'Remove a company from Twenty',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/companies/{{$parameter["companyId"]}}',
					},
				},
			},
			{
				name: 'Find Duplicates',
				value: 'findDuplicates',
				action: 'Find company duplicates',
				description: 'Identify potential duplicate company records',
				routing: {
					request: {
						method: 'POST',
						url: '=/companies/duplicates',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
						body: {
							data: '={{$parameter["companiesJson"] ? JSON.parse($parameter["companiesJson"]) : undefined}}',
							ids: '={{$parameter["ids"]?.length ? $parameter["ids"] : undefined}}',
						},
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update company',
				description: 'Update an existing company record',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/companies/{{$parameter["companyId"]}}',
						body: buildUpdatePayload,
					},
				},
			},
		],
		default: 'create',
	},
	...companyCreateDescription,
	...companyMatchDescription,
	...companyBulkMatchDescription,
	...companyListDescription,
	...companyGetDescription,
	...companyDeleteDescription,
	...companyFindDuplicatesDescription,
	...companyUpdateDescription,
];
