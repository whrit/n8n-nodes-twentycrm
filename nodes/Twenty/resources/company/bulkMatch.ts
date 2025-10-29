import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['bulkMatch'],
};

export const companyBulkMatchDescription: INodeProperties[] = [
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
	{
		displayName: 'Companies (JSON)',
		name: 'companiesJson',
		type: 'json',
		default: '[]',
		description:
			'Array of company payloads to match (for example [{"name":"Acme"},{"domainName":{"primaryLinkUrl":"https://example.com"}}])',
		displayOptions: {
			show: displayOptions,
		},
	},
];

