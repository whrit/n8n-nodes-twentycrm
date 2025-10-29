import type { INodeProperties } from 'n8n-workflow';
import { personCreateDescription } from './create';
import { personFindByEmailDescription } from './findByEmail';
import { personListDescription } from './list';
import { personGetDescription } from './get';
import { personDeleteDescription } from './delete';
import { personFindDuplicatesDescription } from './findDuplicates';
import { personUpdateDescription } from './update';

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
	...personListDescription,
	...personGetDescription,
	...personDeleteDescription,
	...personFindDuplicatesDescription,
	...personUpdateDescription,
];
