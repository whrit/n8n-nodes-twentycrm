import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['list'],
};

export const companyListDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: {
			maxValue: 200,
			minValue: 1,
		},
		description: 'Max number of results to return',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		type: 'string',
		default: '',
		description:
			'Comma-separated list describing the sort order, e.g. name[AscNullsFirst]',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		description:
			'Filter string using Twenty syntax, e.g. domainName.primaryLinkUrl[eq]:"https://example.com"',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'options',
		default: 1,
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
		displayName: 'Starting After',
		name: 'startingAfter',
		type: 'string',
		default: '',
		description: 'Cursor to resume pagination after a given entry',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Ending Before',
		name: 'endingBefore',
		type: 'string',
		default: '',
		description: 'Cursor to request records ending before the given entry',
		displayOptions: {
			show: displayOptions,
		},
	},
];
