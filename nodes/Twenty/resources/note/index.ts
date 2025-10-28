import type { INodeProperties } from 'n8n-workflow';
import { noteCreateDescription } from './create';

const showForNote = {
	resource: ['note'],
};

const buildCreatePayload = `={{ (() => {
	const payload = {
		bodyV2: {
			markdown: $parameter["content"],
		},
	};

	if ($parameter["title"]) {
		payload.title = $parameter["title"];
	}

	const additional = $parameter["additionalFields"] ?? {};
	if (typeof additional.position === 'number' && additional.position !== 0) {
		payload.position = additional.position;
	}

	const targets = $parameter["targets"] ?? [];
	if (Array.isArray(targets) && targets.length) {
		const noteTargets = targets
			.map((target) => {
				if (target.person && target.person.personId) {
					return { personId: target.person.personId };
				}
				if (target.company && target.company.companyId) {
					return { companyId: target.company.companyId };
				}
				return null;
			})
			.filter((entry) => entry !== null);

		if (noteTargets.length) {
			payload.noteTargets = noteTargets;
		}
	}

	return payload;
})() }}`;

export const noteDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showForNote,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
					action: 'Create note',
					description: 'Create a timeline note and attach it to records',
					routing: {
						request: {
							method: 'POST',
							url: '=/notes',
							body: buildCreatePayload,
						},
					},
				},
			],
		default: 'create',
	},
	...noteCreateDescription,
];
