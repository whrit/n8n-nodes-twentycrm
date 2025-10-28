import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['update'],
};

export const companyUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier of the company to update',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: displayOptions,
		},
		options: [
			{
				displayName: 'Account Owner ID',
				name: 'accountOwnerId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Address City',
				name: 'addressCity',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Address Country',
				name: 'addressCountry',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Fields (JSON)',
				name: 'customFieldsJson',
				type: 'json',
				default: '{}',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: { rows: 4 },
				default: '',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Employees',
				name: 'employees',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LinkedIn Label',
				name: 'linkedinLabel',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LinkedIn URL',
				name: 'linkedinUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'X/Twitter Label',
				name: 'xLinkLabel',
				type: 'string',
				default: '',
			},
			{
				displayName: 'X/Twitter URL',
				name: 'xLinkUrl',
				type: 'string',
				default: '',
			},
		],
	},
];
