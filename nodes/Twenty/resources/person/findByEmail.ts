import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['person'],
	operation: ['findByEmail'],
};

export const personFindByEmailDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		description: 'Email address to search for',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'options',
		default: 0,
		displayOptions: {
			show: displayOptions,
		},
		options: [
			{ name: 'Primary Object Only', value: 0 },
			{ name: 'Include Direct Relations', value: 1 },
		],
		description: 'Controls how much related data is returned by the API',
		routing: {
			send: {
				type: 'query',
				property: 'depth',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 1,
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		displayOptions: {
			show: displayOptions,
		},
		description: 'Maximum number of matches to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
];
