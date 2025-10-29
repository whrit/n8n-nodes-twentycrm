import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['person'],
	operation: ['findDuplicates'],
};

export const personFindDuplicatesDescription: INodeProperties[] = [
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
		displayName: 'Person IDs',
		name: 'ids',
		type: 'string',
		default: [],
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add ID',
		},
		description: 'List of person IDs to check for duplicates',
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
			'Optional raw JSON array of people payloads to compare against existing records',
		displayOptions: {
			show: displayOptions,
		},
	},
];

