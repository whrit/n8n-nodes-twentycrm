import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['person'],
	operation: ['bulkMatch'],
};

export const personBulkMatchDescription: INodeProperties[] = [
	{
		displayName: 'Match Source',
		name: 'matchMode',
		type: 'options',
		options: [
			{
				name: 'Builder',
				value: 'collection',
				description: 'Manually configure match candidates inside this node',
			},
			{
				name: 'From Incoming Items',
				value: 'input',
				description: 'Use an array present on the incoming item data',
			},
			{
				name: 'Raw JSON',
				value: 'json',
				description: 'Paste a JSON array describing the match candidates',
			},
		],
		default: 'collection',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Match Entries',
		name: 'matchEntries',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Person',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'person',
				displayName: 'Person',
				values: [
					{
						displayName: 'City',
						name: 'city',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Company ID',
						name: 'companyId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'First Name',
						name: 'firstName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Job Title',
						name: 'jobTitle',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Last Name',
						name: 'lastName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Primary Email',
						name: 'primaryEmail',
						type: 'string',
						default: '',
						description: 'Expression or value for the primary email address',
					},
				],
			},
		],
		displayOptions: {
			show: {
				...displayOptions,
				matchMode: ['collection'],
			},
		},
	},
	{
		displayName: 'Input Property Name',
		name: 'inputPropertyName',
		type: 'string',
		default: 'people',
		description:
			'Dot notation path to the array on the incoming item that holds the match candidates',
		displayOptions: {
			show: {
				...displayOptions,
				matchMode: ['input'],
			},
		},
	},
	{
		displayName: 'People (JSON)',
		name: 'peopleJson',
		type: 'json',
		default: '[]',
		description:
			'JSON array describing the match candidates, for example [{"emails":{"primaryEmail":"user@example.com"}}]',
		displayOptions: {
			show: {
				...displayOptions,
				matchMode: ['json'],
			},
		},
	},
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
];
