import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['note'],
	operation: ['create'],
};

export const noteCreateDescription: INodeProperties[] = [
	{
		displayName: 'Content (Markdown)',
		name: 'content',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 5,
		},
		description: 'Content of the note saved as markdown',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		description: 'Optional title for the note',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Targets',
		name: 'targets',
		type: 'fixedCollection',
		default: [],
		placeholder: 'Add Target',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: displayOptions,
		},
		options: [
			{
				displayName: 'Person',
				name: 'person',
				values: [
					{
						displayName: 'Person ID',
						name: 'personId',
						type: 'string',
						default: '',
						required: true,
					},
				],
			},
			{
				displayName: 'Company',
				name: 'company',
				values: [
					{
						displayName: 'Company ID',
						name: 'companyId',
						type: 'string',
						default: '',
						required: true,
					},
				],
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: displayOptions,
		},
		options: [
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Optional ordering for timeline placement',
			},
		],
	},
];
