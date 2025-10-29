import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['company'],
	operation: ['findDuplicates'],
};

export const companyFindDuplicatesDescription: INodeProperties[] = [
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
		displayName: 'Company IDs',
		name: 'ids',
		type: 'string',
		default: [],
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add ID',
		},
		description: 'List of company IDs to check for duplicates',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Companies (JSON)',
		name: 'companiesJson',
		type: 'json',
		default: '[]',
		description:
			'Optional raw JSON array of company payloads to compare against existing records',
		displayOptions: {
			show: displayOptions,
		},
	},
];

