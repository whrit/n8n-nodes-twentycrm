import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['create'],
};

export const companyCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'Name of the company',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		default: '',
		description: 'Primary domain associated with the company',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		description: 'Internal description or notes',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
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
				displayName: 'LinkedIn URL',
				name: 'linkedinUrl',
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
				displayName: 'X/Twitter URL',
				name: 'xLinkUrl',
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
				description: 'Raw JSON object to merge into custom fields',
			},
		],
	},
];
