import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['person'],
	operation: ['delete'],
};

export const personDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Person ID',
		name: 'personId',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier of the person to delete',
		displayOptions: {
			show: displayOptions,
		},
	},
];

