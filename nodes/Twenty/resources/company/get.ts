import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['get'],
};

export const companyGetDescription: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier of the company to retrieve',
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
];

