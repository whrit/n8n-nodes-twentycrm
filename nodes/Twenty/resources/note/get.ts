import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['note'],
	operation: ['get'],
};

export const noteGetDescription: INodeProperties[] = [
	{
		displayName: 'Note ID',
		name: 'noteId',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier of the note to retrieve',
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

