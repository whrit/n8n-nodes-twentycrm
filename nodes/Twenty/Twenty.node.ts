import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { personDescription } from './resources/person';
import { companyDescription } from './resources/company';
import { noteDescription } from './resources/note';
import { batchDescription } from './resources/batch';
import { coreDescription } from './resources/core';

export class Twenty implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Twenty',
		name: 'twenty',
		icon: { light: 'file:twenty.svg', dark: 'file:twenty.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Twenty API',
		defaults: {
			name: 'Twenty',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'twentyApi', required: true }],
		requestDefaults: {
			baseURL: '={{$parameter["baseUrl"]}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: '={{"Bearer " + $credentials.apiKey}}',
			},
		},
		properties: [
			{
				displayName: 'Base URL',
				name: 'baseUrl',
				type: 'string',
				default: 'https://app.twenty.com/rest',
				description:
					'Base URL for your Twenty workspace REST API (include the /rest suffix, e.g. https://your-workspace.twenty.com/rest)',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Person', value: 'person' },
					{ name: 'Company', value: 'company' },
					{ name: 'Note', value: 'note' },
					{ name: 'Batch', value: 'batch' },
					{ name: 'Core Schema', value: 'core' },
				],
				default: 'person',
			},
			...personDescription,
			...companyDescription,
			...noteDescription,
			...batchDescription,
			...coreDescription,
		],
	};
}
