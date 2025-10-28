import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['person'],
	operation: ['create'],
};

export const personCreateDescription: INodeProperties[] = [
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		default: '',
		description: 'Given name for the person',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		default: '',
		description: 'Family name for the person',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Primary Email',
		name: 'primaryEmail',
		type: 'string',
		required: true,
		default: '',
		description: 'Primary email address used to identify the person',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		default: '',
		description: 'Twenty company ID to associate with the person',
		displayOptions: {
			show: displayOptions,
		},
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
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Fields (JSON)',
				name: 'customFieldsJson',
				type: 'json',
				default: '{}',
				description: 'Raw JSON object to merge into the person custom fields',
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LinkedIn Label',
				name: 'linkedinLabel',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LinkedIn URL',
				name: 'linkedinUrl',
				type: 'string',
				default: '',
				description: 'Primary LinkedIn profile URL',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Primary Phone Calling Code',
				name: 'primaryPhoneCallingCode',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Primary Phone Country Code',
				name: 'primaryPhoneCountryCode',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Primary Phone Number',
				name: 'primaryPhoneNumber',
				type: 'string',
				default: '',
			},
		],
	},
];
