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

	it('exposes person operations for create, find by email, and update', () => {
		const resourceProperty = findProperty(description.properties, 'resource');
		expect(resourceProperty).toBeDefined();

		const resourceOptions = resourceProperty?.options ?? [];
		const resourceValues = resourceOptions.map((option) => option.value);
		expect(resourceValues).toEqual(expect.arrayContaining(['person', 'company', 'note']));

		const personOperation = findProperty(description.properties, 'operation', { resource: 'person' });
		expect(personOperation).toBeDefined();

		const personOperations = personOperation?.options ?? [];
		const personOperationValues = personOperations.map((option) => option.value);
		expect(personOperationValues).toEqual(
			expect.arrayContaining(['create', 'findByEmail', 'update']),
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

		const updateOp = personOperations.find((option) => option.value === 'update');
		expect(updateOp?.routing?.request?.method).toBe('PATCH');
			expect(updateOp?.routing?.request?.url).toBe('=/people/{{$parameter["personId"]}}');
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

	it('exposes company operations for create and update', () => {
		const companyOperation = findProperty(description.properties, 'operation', { resource: 'company' });
		expect(companyOperation).toBeDefined();

		const options = companyOperation?.options ?? [];
		const values = options.map((option) => option.value);
		expect(values).toEqual(expect.arrayContaining(['create', 'update']));

		const createOp = options.find((option) => option.value === 'create');
		expect(createOp?.routing?.request?.method).toBe('POST');
			expect(createOp?.routing?.request?.url).toBe('=/companies');

		const updateOp = options.find((option) => option.value === 'update');
		expect(updateOp?.routing?.request?.method).toBe('PATCH');
			expect(updateOp?.routing?.request?.url).toBe('=/companies/{{$parameter["companyId"]}}');
	});

	it('provides a note create operation', () => {
		const noteOperation = findProperty(description.properties, 'operation', { resource: 'note' });
		expect(noteOperation).toBeDefined();

		const options = noteOperation?.options ?? [];
		const values = options.map((option) => option.value);
		expect(values).toContain('create');

		const createOp = options.find((option) => option.value === 'create');
		expect(createOp?.routing?.request?.method).toBe('POST');
			expect(createOp?.routing?.request?.url).toBe('=/notes');

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
});
