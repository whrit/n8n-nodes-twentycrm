import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TwentyApi implements ICredentialType {
	name = 'twentyApi';

	displayName = 'Twenty API';

	icon: Icon = { light: 'file:twenty.svg', dark: 'file:twenty.dark.svg' };

	documentationUrl = 'https://github.com/whrit/n8n-nodes-twentycrm#readme';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'API key created in Twenty under Settings → Developers → API & Webhooks.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.twenty.com/rest',
			url: '/people?limit=1',
			method: 'GET',
		},
	};
}
