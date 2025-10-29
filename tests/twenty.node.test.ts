/* eslint-disable @n8n/community-nodes/no-restricted-imports */
import { describe, expect, it } from 'vitest';
import type { INodeProperties } from 'n8n-workflow';
import { Twenty } from '../nodes/Twenty/Twenty.node';

type Context = Record<string, string>;

function matchesContext(property: INodeProperties, context: Context = {}): boolean {
	const show = property.displayOptions?.show;
	if (!show) {
		return Object.keys(context).length === 0;
	}

	return Object.entries(context).every(([key, value]) => {
		const allowed = (show as Record<string, string[]>)[key];
		if (!Array.isArray(allowed)) {
			return false;
		}
		return allowed.includes(value);
	});
}

function findProperty(
	properties: INodeProperties[],
	name: string,
	context: Context = {},
): INodeProperties | undefined {
	return properties.find((property) => property.name === name && matchesContext(property, context));
}

describe('Twenty node description', () => {
	const node = new Twenty();
	const { description } = node;

	it('uses base URL parameter and bearer auth header', () => {
		const baseUrlProperty = findProperty(description.properties, 'baseUrl');
		expect(baseUrlProperty).toBeDefined();
		expect(baseUrlProperty?.default).toBe('https://app.twenty.com/rest');

		expect(description.requestDefaults?.baseURL).toBe('={{$parameter["baseUrl"]}}');
		expect(description.requestDefaults?.headers?.Authorization).toBe(
			'={{"Bearer " + $credentials.apiKey}}',
		);
		expect(description.credentials?.[0].name).toBe('twentyApi');
	});

	it('exposes person operations for create, list, get, delete, duplicates, and update', () => {
		const resourceProperty = findProperty(description.properties, 'resource');
		expect(resourceProperty).toBeDefined();

		const resourceOptions = resourceProperty?.options ?? [];
		const resourceValues = resourceOptions.map((option) => option.value);
		expect(resourceValues).toEqual(
			expect.arrayContaining(['person', 'company', 'note', 'batch', 'core']),
		);

		const personOperation = findProperty(description.properties, 'operation', { resource: 'person' });
		expect(personOperation).toBeDefined();

		const personOperations = personOperation?.options ?? [];
		const personOperationValues = personOperations.map((option) => option.value);
		expect(personOperationValues).toEqual(
			expect.arrayContaining(['create', 'findByEmail', 'list', 'get', 'delete', 'findDuplicates', 'update']),
		);

		const createOp = personOperations.find((option) => option.value === 'create');
		expect(createOp?.routing?.request?.method).toBe('POST');
		expect(createOp?.routing?.request?.url).toBe('=/people');

		const findOp = personOperations.find((option) => option.value === 'findByEmail');
		expect(findOp?.routing?.request?.method).toBe('GET');
		expect(findOp?.routing?.request?.url).toBe('=/people');
		expect(findOp?.routing?.request?.qs?.filter).toBe(
			'={{"emails.primaryEmail[eq]:" + $parameter["email"]}}',
		);

		const listOp = personOperations.find((option) => option.value === 'list');
		expect(listOp?.routing?.request?.method).toBe('GET');
		expect(listOp?.routing?.request?.url).toBe('=/people');
		expect(listOp?.routing?.request?.qs).toMatchObject({
			limit: expect.any(String),
			order_by: expect.any(String),
			filter: expect.any(String),
			depth: expect.any(String),
			starting_after: expect.any(String),
			ending_before: expect.any(String),
		});

		const getOp = personOperations.find((option) => option.value === 'get');
		expect(getOp?.routing?.request?.method).toBe('GET');
		expect(getOp?.routing?.request?.url).toBe('=/people/{{$parameter["personId"]}}');
		expect(getOp?.routing?.request?.qs?.depth).toBe('={{$parameter["depth"] ?? undefined}}');

		const deleteOp = personOperations.find((option) => option.value === 'delete');
		expect(deleteOp?.routing?.request?.method).toBe('DELETE');
		expect(deleteOp?.routing?.request?.url).toBe('=/people/{{$parameter["personId"]}}');

		const duplicatesOp = personOperations.find((option) => option.value === 'findDuplicates');
		expect(duplicatesOp?.routing?.request?.method).toBe('POST');
		expect(duplicatesOp?.routing?.request?.url).toBe('=/people/duplicates');
		expect(duplicatesOp?.routing?.request?.body?.data).toBe(
			'={{$parameter["peopleJson"] ? JSON.parse($parameter["peopleJson"]) : undefined}}',
		);
		expect(duplicatesOp?.routing?.request?.body?.ids).toBe(
			'={{$parameter["ids"]?.length ? $parameter["ids"] : undefined}}',
		);

		const updateOp = personOperations.find((option) => option.value === 'update');
		expect(updateOp?.routing?.request?.method).toBe('PATCH');
		expect(updateOp?.routing?.request?.url).toBe('=/people/{{$parameter["personId"]}}');
	});

	it('provides person list query parameter fields', () => {
		const limitField = findProperty(description.properties, 'limit', {
			resource: 'person',
			operation: 'list',
		});
		expect(limitField?.type).toBe('number');

		const orderByField = findProperty(description.properties, 'orderBy', {
			resource: 'person',
			operation: 'list',
		});
		expect(orderByField?.type).toBe('string');

		const filterField = findProperty(description.properties, 'filter', {
			resource: 'person',
			operation: 'list',
		});
		expect(filterField?.type).toBe('string');

		const startingAfterField = findProperty(description.properties, 'startingAfter', {
			resource: 'person',
			operation: 'list',
		});
		expect(startingAfterField?.type).toBe('string');

		const endingBeforeField = findProperty(description.properties, 'endingBefore', {
			resource: 'person',
			operation: 'list',
		});
		expect(endingBeforeField?.type).toBe('string');

		const depthField = findProperty(description.properties, 'depth', {
			resource: 'person',
			operation: 'list',
		});
		expect(depthField?.type).toBe('options');
	});

	it('exposes person identifiers and depth for get/delete operations', () => {
		const idField = findProperty(description.properties, 'personId', {
			resource: 'person',
			operation: 'get',
		});
		expect(idField?.required).toBe(true);

		const deleteIdField = findProperty(description.properties, 'personId', {
			resource: 'person',
			operation: 'delete',
		});
		expect(deleteIdField?.required).toBe(true);

		const depthField = findProperty(description.properties, 'depth', {
			resource: 'person',
			operation: 'get',
		});
		expect(depthField).toBeDefined();
	});

	it('exposes company operations for create, match, list, get, delete, duplicates, and update', () => {
		const companyOperation = findProperty(description.properties, 'operation', { resource: 'company' });
		expect(companyOperation).toBeDefined();

		const options = companyOperation?.options ?? [];
		const values = options.map((option) => option.value);
		expect(values).toEqual(
			expect.arrayContaining(['create', 'match', 'list', 'get', 'delete', 'findDuplicates', 'update']),
		);

		const matchOp = options.find((option) => option.value === 'match');
		expect(matchOp?.routing?.request?.method).toBe('GET');
		expect(matchOp?.routing?.request?.url).toBe('=/companies');
		expect(matchOp?.routing?.request?.qs?.filter).toEqual(expect.any(String));
		expect(matchOp?.routing?.output?.postReceive).toBeDefined();

		const listOp = options.find((option) => option.value === 'list');
		expect(listOp?.routing?.request?.method).toBe('GET');
		expect(listOp?.routing?.request?.qs).toMatchObject({
			limit: expect.any(String),
			order_by: expect.any(String),
			filter: expect.any(String),
			depth: expect.any(String),
			starting_after: expect.any(String),
			ending_before: expect.any(String),
		});

		const getOp = options.find((option) => option.value === 'get');
		expect(getOp?.routing?.request?.method).toBe('GET');
		expect(getOp?.routing?.request?.url).toBe('=/companies/{{$parameter["companyId"]}}');

		const deleteOp = options.find((option) => option.value === 'delete');
		expect(deleteOp?.routing?.request?.method).toBe('DELETE');
		expect(deleteOp?.routing?.request?.url).toBe('=/companies/{{$parameter["companyId"]}}');

		const duplicatesOp = options.find((option) => option.value === 'findDuplicates');
		expect(duplicatesOp?.routing?.request?.method).toBe('POST');
		expect(duplicatesOp?.routing?.request?.url).toBe('=/companies/duplicates');
	});

	it('provides match input fields for company operations', () => {
		const domainField = findProperty(description.properties, 'domain', {
			resource: 'company',
			operation: 'match',
		});
		expect(domainField?.type).toBe('string');

		const nameField = findProperty(description.properties, 'name', {
			resource: 'company',
			operation: 'match',
		});
		expect(nameField?.type).toBe('string');

		const fallbackField = findProperty(description.properties, 'fallbackStrategy', {
			resource: 'company',
			operation: 'match',
		});
		expect(fallbackField?.type).toBe('options');
	});

	it('defines input fields for person create and update operations', () => {
		const firstNameField = findProperty(description.properties, 'firstName', {
			resource: 'person',
			operation: 'create',
		});
		expect(firstNameField?.type).toBe('string');
		expect(firstNameField?.required).toBe(true);

		const primaryEmailField = findProperty(description.properties, 'primaryEmail', {
			resource: 'person',
			operation: 'create',
		});
		expect(primaryEmailField?.type).toBe('string');
		expect(primaryEmailField?.required).toBe(true);

		const updateFields = findProperty(description.properties, 'updateFields', {
			resource: 'person',
			operation: 'update',
		});
		expect(updateFields?.type).toBe('collection');
	});

	it('provides note operations for create, list, get, delete, and duplicates', () => {
		const noteOperation = findProperty(description.properties, 'operation', { resource: 'note' });
		expect(noteOperation).toBeDefined();

		const options = noteOperation?.options ?? [];
		const values = options.map((option) => option.value);
		expect(values).toEqual(
			expect.arrayContaining(['create', 'list', 'get', 'delete', 'findDuplicates']),
		);

		const createOp = options.find((option) => option.value === 'create');
		expect(createOp?.routing?.request?.method).toBe('POST');
		expect(createOp?.routing?.request?.url).toBe('=/notes');

		const listOp = options.find((option) => option.value === 'list');
		expect(listOp?.routing?.request?.method).toBe('GET');
		expect(listOp?.routing?.request?.qs).toMatchObject({
			limit: expect.any(String),
			order_by: expect.any(String),
			filter: expect.any(String),
			depth: expect.any(String),
			starting_after: expect.any(String),
			ending_before: expect.any(String),
		});

		const getOp = options.find((option) => option.value === 'get');
		expect(getOp?.routing?.request?.method).toBe('GET');
		expect(getOp?.routing?.request?.url).toBe('=/notes/{{$parameter["noteId"]}}');

		const deleteOp = options.find((option) => option.value === 'delete');
		expect(deleteOp?.routing?.request?.method).toBe('DELETE');
		expect(deleteOp?.routing?.request?.url).toBe('=/notes/{{$parameter["noteId"]}}');

		const duplicatesOp = options.find((option) => option.value === 'findDuplicates');
		expect(duplicatesOp?.routing?.request?.method).toBe('POST');
		expect(duplicatesOp?.routing?.request?.url).toBe('=/notes/duplicates');

		const contentField = findProperty(description.properties, 'content', {
			resource: 'note',
			operation: 'create',
		});
		expect(contentField?.type).toBe('string');

		const targetsField = findProperty(description.properties, 'targets', {
			resource: 'note',
			operation: 'create',
		});
		expect(targetsField?.type).toBe('fixedCollection');
	});

	it('exposes batch operations for people, companies, and notes', () => {
		const batchOperation = findProperty(description.properties, 'operation', { resource: 'batch' });
		expect(batchOperation).toBeDefined();

		const options = batchOperation?.options ?? [];
		const values = options.map((option) => option.value);
		expect(values).toEqual(
			expect.arrayContaining(['createPeople', 'createCompanies', 'createNotes']),
		);

		const peopleBatch = options.find((option) => option.value === 'createPeople');
		expect(peopleBatch?.routing?.request?.method).toBe('POST');
		expect(peopleBatch?.routing?.request?.url).toBe('=/batch/people');
		expect(peopleBatch?.routing?.request?.body).toBe(
			'={{$json["items"] ?? ($parameter["itemsJson"] ? JSON.parse($parameter["itemsJson"]) : [])}}',
		);
		expect(peopleBatch?.routing?.request?.qs?.depth).toBe('={{$parameter["depth"] ?? undefined}}');
		expect(peopleBatch?.routing?.request?.qs?.upsert).toBe(
			'={{$parameter["upsertStrategy"] === "upsert"}}',
		);
	});

	it('exposes core discovery operation for the OpenAPI schema', () => {
		const coreOperation = findProperty(description.properties, 'operation', { resource: 'core' });
		expect(coreOperation).toBeDefined();

		const options = coreOperation?.options ?? [];
		const getSpec = options.find((option) => option.value === 'getOpenApiSpec');
		expect(getSpec?.routing?.request?.method).toBe('GET');
		expect(getSpec?.routing?.request?.url).toBe('=/open-api/core');
	});
});
