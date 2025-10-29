import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['match'],
};

export const companyMatchDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		default: '',
		description:
			'Website domain (primaryLinkUrl) used to locate an existing company record',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'Exact company name to match when a domain is unavailable',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Fallback Strategy',
		name: 'fallbackStrategy',
		type: 'options',
		default: 'domainThenName',
		options: [
			{
				name: 'Domain then Name',
				value: 'domainThenName',
				description: 'Try domain first; if not provided, fall back to name',
			},
			{
				name: 'Domain Only',
				value: 'domainOnly',
				description: 'Only attempt matching by domain',
			},
			{
				name: 'Name Only',
				value: 'nameOnly',
				description: 'Only attempt matching by name',
			},
			{
				name: 'Domain or Name',
				value: 'domainOrName',
				description: 'Match using either domain or name in a single request',
			},
		],
		displayOptions: {
			show: displayOptions,
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

