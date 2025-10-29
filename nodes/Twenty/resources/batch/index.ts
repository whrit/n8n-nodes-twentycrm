import type { INodeProperties } from 'n8n-workflow';

const showForBatch = {
	resource: ['batch'],
};

const showForBatchOperations = {
	resource: ['batch'],
	operation: ['createPeople', 'createCompanies', 'createNotes'],
};

const buildBatchPayload = `={{$json["items"] ?? ($parameter["itemsJson"] ? JSON.parse($parameter["itemsJson"]) : [])}}`;

const buildBatchQuery = {
	depth: '={{$parameter["depth"] ?? undefined}}',
	upsert: '={{$parameter["upsertStrategy"] === "upsert"}}',
};

export const batchDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showForBatch,
		},
		options: [
			{
				name: 'Create People',
				value: 'createPeople',
				action: 'Create people (batch)',
				description: 'Create multiple people in one request',
				routing: {
					request: {
						method: 'POST',
						url: '=/batch/people',
						qs: buildBatchQuery,
						body: buildBatchPayload,
					},
				},
			},
			{
				name: 'Create Companies',
				value: 'createCompanies',
				action: 'Create companies (batch)',
				description: 'Create multiple companies in one request',
				routing: {
					request: {
						method: 'POST',
						url: '=/batch/companies',
						qs: buildBatchQuery,
						body: buildBatchPayload,
					},
				},
			},
			{
				name: 'Create Notes',
				value: 'createNotes',
				action: 'Create notes (batch)',
				description: 'Create multiple notes in one request',
				routing: {
					request: {
						method: 'POST',
						url: '=/batch/notes',
						qs: buildBatchQuery,
						body: buildBatchPayload,
					},
				},
			},
		],
		default: 'createPeople',
	},
	{
		displayName: 'Records (JSON)',
		name: 'itemsJson',
		type: 'json',
		default: '[]',
		description:
			'Raw JSON array containing the records to send in the batch request. Leave empty to use the incoming item data.',
		displayOptions: {
			show: showForBatchOperations,
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
			show: showForBatchOperations,
		},
	},
	{
		displayName: 'Upsert Strategy',
		name: 'upsertStrategy',
		type: 'options',
		default: 'skip',
		options: [
			{ name: 'Create Only', value: 'skip', description: 'Skip existing matches' },
			{ name: 'Upsert', value: 'upsert', description: 'Update existing matches while creating new records' },
		],
		description: 'Controls whether existing records are updated when matching criteria is met',
		displayOptions: {
			show: showForBatchOperations,
		},
	},
];

