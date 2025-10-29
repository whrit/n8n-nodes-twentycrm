import type { INodeProperties } from 'n8n-workflow';
import { personCreateDescription } from './create';
import { personFindByEmailDescription } from './findByEmail';
import { personListDescription } from './list';
import { personGetDescription } from './get';
import { personDeleteDescription } from './delete';
import { personFindDuplicatesDescription } from './findDuplicates';
import { personUpdateDescription } from './update';
import { personBulkMatchDescription } from './bulkMatch';

const showForPerson = {
	resource: ['person'],
};

const buildCreatePayload = `={{ (() => {
	const payload = {
		name: {
			firstName: $parameter["firstName"],
			lastName: $parameter["lastName"],
		},
		emails: {
			primaryEmail: $parameter["primaryEmail"],
		},
	};

	if ($parameter["companyId"]) {
		payload.companyId = $parameter["companyId"];
	}

	const additional = $parameter["additionalFields"] ?? {};

	if (additional.jobTitle) {
		payload.jobTitle = additional.jobTitle;
	}

	if (additional.position) {
		payload.position = additional.position;
	}

	if (additional.city) {
		payload.city = additional.city;
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

	if (
		additional.primaryPhoneNumber ||
		additional.primaryPhoneCountryCode ||
		additional.primaryPhoneCallingCode
	) {
		payload.phones = {};
		if (additional.primaryPhoneNumber) {
			payload.phones.primaryPhoneNumber = additional.primaryPhoneNumber;
		}
		if (additional.primaryPhoneCountryCode) {
			payload.phones.primaryPhoneCountryCode = additional.primaryPhoneCountryCode;
		}
		if (additional.primaryPhoneCallingCode) {
			payload.phones.primaryPhoneCallingCode = additional.primaryPhoneCallingCode;
		}
	}

	if (additional.customFieldsJson) {
		try {
			payload.customFields = JSON.parse(additional.customFieldsJson);
		} catch (error) {
			throw new Error('Invalid JSON in "Custom Fields (JSON)" for person create');
		}
	}

	return payload;
})() }}`;

const buildUpdatePayload = `={{ (() => {
	const payload = {};
	const update = $parameter["updateFields"] ?? {};

	if (update.firstName || update.lastName) {
		payload.name = {};
		if (update.firstName) {
			payload.name.firstName = update.firstName;
		}
		if (update.lastName) {
			payload.name.lastName = update.lastName;
		}
	}

	if (update.primaryEmail) {
		payload.emails = { primaryEmail: update.primaryEmail };
	}

	if (update.companyId) {
		payload.companyId = update.companyId;
	}

	if (update.jobTitle) {
		payload.jobTitle = update.jobTitle;
	}

	if (update.position) {
		payload.position = update.position;
	}

	if (update.city) {
		payload.city = update.city;
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

	if (
		update.primaryPhoneNumber ||
		update.primaryPhoneCountryCode ||
		update.primaryPhoneCallingCode
	) {
		payload.phones = {};
		if (update.primaryPhoneNumber) {
			payload.phones.primaryPhoneNumber = update.primaryPhoneNumber;
		}
		if (update.primaryPhoneCountryCode) {
			payload.phones.primaryPhoneCountryCode = update.primaryPhoneCountryCode;
		}
		if (update.primaryPhoneCallingCode) {
			payload.phones.primaryPhoneCallingCode = update.primaryPhoneCallingCode;
		}
	}

	if (update.customFieldsJson) {
		try {
			payload.customFields = JSON.parse(update.customFieldsJson);
		} catch (error) {
			throw new Error('Invalid JSON in "Custom Fields (JSON)" for person update');
		}
	}

	return payload;
})() }}`;


const buildBulkMatchPeoplePayload = `={{ (() => {
	const mode = $parameter["matchMode"] ?? "collection";

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

	if (mode === "json") {
		const parsed = parseJsonArray($parameter["peopleJson"], 'People (JSON) must be a JSON array');
		if (!parsed || parsed.length === 0) {
			throw new Error('Provide at least one entry under People (JSON)');
		}
		return parsed;
	}

	if (mode === "collection") {
		const entries = Array.isArray($parameter["matchEntries"]) ? $parameter["matchEntries"] : [];
		const payload = entries
			.map((entry) => entry.person ?? {})
			.map((person) => {
				const result = {};
				if (person.primaryEmail) {
					result.emails = { primaryEmail: person.primaryEmail };
				}
				if (person.firstName || person.lastName) {
					result.name = {};
					if (person.firstName) result.name.firstName = person.firstName;
					if (person.lastName) result.name.lastName = person.lastName;
				}
				if (person.companyId) {
					result.companyId = person.companyId;
				}
				if (person.city) {
					result.city = person.city;
				}
				if (person.jobTitle) {
					result.jobTitle = person.jobTitle;
				}
				return Object.keys(result).length ? result : null;
			})
			.filter((entry) => entry !== null);
		if (payload.length === 0) {
			throw new Error('Add at least one match entry to "Match Entries"');
		}
		return payload;
	}

	const propertyName = ($parameter["inputPropertyName"] ?? "people").trim();
	const getByPath = (source, path) => {
		if (!path) {
			return undefined;
		}
		return path.split('.').reduce((acc, key) => {
			if (acc && typeof acc === "object" && key in acc) {
				return acc[key];
			}
			return undefined;
		}, source);
	};

	const incoming = propertyName ? getByPath($json, propertyName) : undefined;
	if (!incoming) {
		throw new Error('No data found at the specified input property for bulk person match');
	}
	if (!Array.isArray(incoming)) {
		throw new Error('The incoming property must resolve to an array for bulk person match');
	}
	return incoming;
})() }}`;

const buildBulkMatchPeopleOutput = `={{ ($response.data ?? []).map((entry) => ({
	totalCount: entry.totalCount ?? (entry.personDuplicates?.length ?? 0),
	matches: entry.personDuplicates ?? [],
	pageInfo: entry.pageInfo ?? null,
})) }}`;

export const personDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showForPerson,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create person',
				description: 'Create a person in Twenty',
				routing: {
					request: {
						method: 'POST',
						url: '=/people',
						body: buildCreatePayload,
					},
				},
			},
			{
				name: 'Find by Email',
				value: 'findByEmail',
				action: 'Find person by email',
				description: 'Retrieve people that match an email address',
				routing: {
					request: {
						method: 'GET',
						url: '=/people',
						qs: {
							filter: '={{"emails.primaryEmail[eq]:" + $parameter["email"]}}',
						},
					},
				},
			},
			{
				name: 'Bulk Match',
				value: 'bulkMatch',
				action: 'Bulk match people',
				description: 'Match multiple people and return potential duplicates for each',
				routing: {
					request: {
						method: 'POST',
						url: '=/people/duplicates',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
						body: {
							data: buildBulkMatchPeoplePayload,
						},
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: buildBulkMatchPeopleOutput,
								},
							},
						],
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				action: 'List people',
				description: 'Retrieve people with filtering, sorting, and pagination',
				routing: {
					request: {
						method: 'GET',
						url: '=/people',
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
				action: 'Get person',
				description: 'Retrieve a specific person by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/people/{{$parameter["personId"]}}',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete person',
				description: 'Remove a person from Twenty',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/people/{{$parameter["personId"]}}',
					},
				},
			},
			{
				name: 'Find Duplicates',
				value: 'findDuplicates',
				action: 'Find person duplicates',
				description:
					'Identify potential duplicates using record IDs or person payloads',
				routing: {
					request: {
						method: 'POST',
						url: '=/people/duplicates',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
						body: {
							data: '={{$parameter["peopleJson"] ? JSON.parse($parameter["peopleJson"]) : undefined}}',
							ids: '={{$parameter["ids"]?.length ? $parameter["ids"] : undefined}}',
						},
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update person',
				description: 'Update an existing person in Twenty',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/people/{{$parameter["personId"]}}',
						body: buildUpdatePayload,
					},
				},
			},
		],
		default: 'create',
	},
	...personCreateDescription,
	...personFindByEmailDescription,
	...personBulkMatchDescription,
	...personListDescription,
	...personGetDescription,
	...personDeleteDescription,
	...personFindDuplicatesDescription,
	...personUpdateDescription,
];
