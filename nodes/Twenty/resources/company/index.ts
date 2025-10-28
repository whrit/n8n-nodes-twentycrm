import type { INodeProperties } from 'n8n-workflow';
import { companyCreateDescription } from './create';
import { companyUpdateDescription } from './update';

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
	...companyUpdateDescription,
];
