import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['person'],
	operation: ['bulkMatch'],
};

export const personBulkMatchDescription: INodeProperties[] = [
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
		displayName: 'People (JSON)',
		name: 'peopleJson',
		type: 'json',
		default: '[]',
		description:
			'Array of person payloads to match (for example [{"emails":{"primaryEmail":"user@example.com"}}])',
		displayOptions: {
			show: displayOptions,
		},
	},
];

