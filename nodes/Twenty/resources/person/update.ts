import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	resource: ['person'],
	operation: ['update'],
};

export const personUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Person ID',
		name: 'personId',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier of the person to update',
		displayOptions: {
			show: displayOptions,
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
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
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Fields (JSON)',
				name: 'customFieldsJson',
				type: 'json',
				default: '{}',
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
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Primary Email',
				name: 'primaryEmail',
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
