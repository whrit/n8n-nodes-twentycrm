import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['note'],
	operation: ['delete'],
};

export const noteDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Note ID',
		name: 'noteId',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier of the note to delete',
		displayOptions: {
			show: displayOptions,
		},
	},
];

