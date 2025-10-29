import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['delete'],
};

export const companyDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier of the company to delete',
		displayOptions: {
			show: displayOptions,
		},
	},
];

