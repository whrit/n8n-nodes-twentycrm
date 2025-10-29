import type { INodeProperties } from 'n8n-workflow';
import { noteCreateDescription } from './create';
import { noteListDescription } from './list';
import { noteGetDescription } from './get';
import { noteDeleteDescription } from './delete';
import { noteFindDuplicatesDescription } from './findDuplicates';

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
			{
				name: 'List',
				value: 'list',
				action: 'List notes',
				description: 'Retrieve notes with filtering, sorting, and pagination',
				routing: {
					request: {
						method: 'GET',
						url: '=/notes',
						qs: {
							limit: '={{$parameter["limit"]}}',
							order_by: '={{$parameter["orderBy"] || undefined}}',
							filter: '={{$parameter["filter"] || undefined}}',
							depth: '={{$parameter["depth"] ?? undefined}}',
							starting_after: '={{$parameter["startingAfter"] || undefined}}',
							ending_before: '={{$parameter["endingBefore"] || undefined}}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get note',
				description: 'Retrieve a specific note by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/notes/{{$parameter["noteId"]}}',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete note',
				description: 'Remove a note from Twenty',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/notes/{{$parameter["noteId"]}}',
					},
				},
			},
			{
				name: 'Find Duplicates',
				value: 'findDuplicates',
				action: 'Find note duplicates',
				description: 'Identify potential duplicate notes',
				routing: {
					request: {
						method: 'POST',
						url: '=/notes/duplicates',
						qs: {
							depth: '={{$parameter["depth"] ?? undefined}}',
						},
						body: {
							data: '={{$parameter["notesJson"] ? JSON.parse($parameter["notesJson"]) : undefined}}',
							ids: '={{$parameter["ids"]?.length ? $parameter["ids"] : undefined}}',
						},
					},
				},
			},
		],
		default: 'create',
	},
	...noteCreateDescription,
	...noteListDescription,
	...noteGetDescription,
	...noteDeleteDescription,
	...noteFindDuplicatesDescription,
];
