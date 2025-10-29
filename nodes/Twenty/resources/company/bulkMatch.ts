import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['bulkMatch'],
};

export const companyBulkMatchDescription: INodeProperties[] = [
	{
		displayName: 'Match Source',
		name: 'matchMode',
		type: 'options',
		options: [
			{
				name: 'Builder',
				value: 'collection',
				description: 'Configure the company records to match inside this node',
			},
			{
				name: 'From Incoming Items',
				value: 'input',
				description: 'Read an array from the incoming item data',
			},
			{
				name: 'Raw JSON',
				value: 'json',
				description: 'Paste a JSON array describing the company match candidates',
			},
		],
		default: 'collection',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Match Entries',
		name: 'matchEntries',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Company',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'company',
				displayName: 'Company',
				values: [
					{
						displayName: 'Account Owner ID',
						name: 'accountOwnerId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Domain URL',
						name: 'domainUrl',
						type: 'string',
						default: '',
						description: 'Expression or value for the company domain URL',
					},
					{
						displayName: 'Industry',
						name: 'industry',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				...displayOptions,
				matchMode: ['collection'],
			},
		},
	},
	{
		displayName: 'Input Property Name',
		name: 'inputPropertyName',
		type: 'string',
		default: 'companies',
		description:
			'Dot notation path to the array on the incoming item that holds the company match candidates',
		displayOptions: {
			show: {
				...displayOptions,
				matchMode: ['input'],
			},
		},
	},
	{
		displayName: 'Companies (JSON)',
		name: 'companiesJson',
		type: 'json',
		default: '[]',
		description:
			'JSON array describing the company match candidates, for example [{"name":"Acme"},{"domainName":{"primaryLinkUrl":"https://example.com"}}]',
		displayOptions: {
			show: {
				...displayOptions,
				matchMode: ['json'],
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'options',
		default: 0,
		options: [
			{ name: 'Primary Record Only', value: 0 },
			{ name: 'Include Direct Relations', value: 1 },
		],
		description: 'Controls whether related records are expanded in the response',
		displayOptions: {
			show: displayOptions,
		},
	},
];
