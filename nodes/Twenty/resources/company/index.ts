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
	const parseArray = (input) => {
		if (Array.isArray(input)) {
			return input;
		}
		if (typeof input === "string" && input.trim().length > 0) {
			const parsed = JSON.parse(input);
			if (!Array.isArray(parsed)) {
				throw new Error('Companies (JSON) must be an array');
			}
			return parsed;
		}
		if (input && typeof input === "object" && !Array.isArray(input)) {
			throw new Error('Companies (JSON) must be an array');
		}
		return undefined;
	};

	const fromParam = parseArray($parameter["companiesJson"]);
	if (fromParam) {
		return fromParam;
	}

	const fromInput = parseArray($json["companies"]);
	if (fromInput) {
		return fromInput;
	}

	throw new Error('Provide Companies (JSON) or an incoming "companies" array for bulk company match');
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
								const domain = ($parameter["domain"] ?? "").trim();
								const name = ($parameter["name"] ?? "").trim();
								const strategy = $parameter["fallbackStrategy"] ?? "domainThenName";
								if (domain && strategy !== "nameOnly") {
									if (name && strategy === "domainOrName") {
										return \`or(domainName.primaryLinkUrl[eq]:"\${domain}",name[eq]:"\${name}")\`;
									}
									return \`domainName.primaryLinkUrl[eq]:"\${domain}"\`;
								}
								if (name && strategy !== "domainOnly") {
									return \`name[eq]:"\${name}"\`;
								}
								return undefined;
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
