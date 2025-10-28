import { describe, expect, it } from 'vitest';
import { TwentyTrigger } from '../nodes/TwentyTrigger/TwentyTrigger.node';

describe('TwentyTrigger node description', () => {
	const node = new TwentyTrigger();
	const { description } = node;

	it('configures webhook endpoint for POST requests', () => {
		expect(description.webhooks?.length).toBeGreaterThan(0);
		const webhook = description.webhooks?.[0];
		expect(webhook?.httpMethod).toBe('POST');
		expect(webhook?.responseMode).toBe('onReceived');
		expect(webhook?.path).toBe('default');
	});

	it('exposes secret and event filters', () => {
		const secretProperty = description.properties.find((property) => property.name === 'secret');
		expect(secretProperty?.type).toBe('string');

		const eventsProperty = description.properties.find((property) => property.name === 'events');
		expect(eventsProperty?.type).toBe('multiOptions');
		expect(Array.isArray(eventsProperty?.options)).toBe(true);
		expect(eventsProperty?.options?.length).toBeGreaterThan(0);
		expect(eventsProperty?.options?.map((option) => option.value)).toEqual(
			expect.arrayContaining([
				'person.created',
				'person.updated',
				'company.created',
			]),
		);
	});

	it('implements webhook lifecycle methods', () => {
		expect(typeof node.webhookMethods?.default?.checkExists).toBe('function');
		expect(typeof node.webhookMethods?.default?.create).toBe('function');
		expect(typeof node.webhookMethods?.default?.delete).toBe('function');
		expect(typeof node.webhook).toBe('function');
	});
});
