import type { INodeProperties } from 'n8n-workflow';

const showForCore = {
	resource: ['core'],
};

export const coreDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showForCore,
		},
		options: [
			{
				name: 'Get OpenAPI Spec',
				value: 'getOpenApiSpec',
				action: 'Get openapi spec',
				description: 'Retrieve the OpenAPI specification for the Twenty core schema',
				routing: {
					request: {
						method: 'GET',
						url: '=/open-api/core',
					},
				},
			},
		],
		default: 'getOpenApiSpec',
	},
];

