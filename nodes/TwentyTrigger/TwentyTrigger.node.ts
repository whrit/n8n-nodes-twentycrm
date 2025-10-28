import { createHmac, timingSafeEqual } from 'crypto';
import type {
	IDataObject,
	IHookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

const webhookEvents = [
	{ name: 'Person Created', value: 'person.created' },
	{ name: 'Person Updated', value: 'person.updated' },
	{ name: 'Company Created', value: 'company.created' },
	{ name: 'Company Updated', value: 'company.updated' },
	{ name: 'Note Created', value: 'note.created' },
	{ name: 'Note Updated', value: 'note.updated' },
];

export class TwentyTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Twenty Trigger',
		name: 'twentyTrigger',
		icon: { light: 'file:twenty.svg', dark: 'file:twenty.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle:
			'={{$parameter["events"].length ? $parameter["events"].join(", ") : "All Events"}}',
		description: 'Handle webhook events emitted by Twenty',
		defaults: {
			name: 'Twenty Trigger',
		},
		usableAsTool: true,
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'default',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				default: [],
				options: webhookEvents,
				description:
					'Select the Twenty events to emit. Leave empty to receive all webhook events.',
			},
			{
				displayName: 'Shared Secret',
				name: 'secret',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				description:
					'Shared secret configured in Twenty. Incoming requests must include a matching signature.',
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions) {
				// Webhooks are managed from the Twenty app dashboard.
				return false;
			},
			async create(this: IHookFunctions) {
				// No automatic registration available; users configure the webhook manually.
				return true;
			},
			async delete(this: IHookFunctions) {
				// Nothing to clean up when the workflow is disabled.
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const body = (this.getBodyData() ?? {}) as IDataObject;
		const secret = (this.getNodeParameter('secret', 0) as string).trim();
		const headers = this.getHeaderData();
		const eventName = typeof body.eventName === 'string' ? body.eventName : undefined;

		if (secret) {
			const signatureHeader =
				(headers['x-twenty-webhook-signature'] as string | undefined) ??
				(headers['X-Twenty-Webhook-Signature'] as string | undefined);
			const timestampHeader =
				(headers['x-twenty-webhook-timestamp'] as string | undefined) ??
				(headers['X-Twenty-Webhook-Timestamp'] as string | undefined);

			if (!signatureHeader || !timestampHeader) {
				return {
					webhookResponse: {
						status: 401,
						body: { message: 'Missing Twenty webhook signature headers' },
					},
				};
			}

			const request = this.getRequestObject();
			const rawBody = request.rawBody ? request.rawBody.toString('utf8') : JSON.stringify(body);
			const computedSignature = createHmac('sha256', secret)
				.update(`${timestampHeader}:${rawBody}`)
				.digest('hex');

			let signaturesMatch = false;
			try {
				const providedBuffer = Buffer.from(signatureHeader, 'hex');
				const computedBuffer = Buffer.from(computedSignature, 'hex');
				if (providedBuffer.length === computedBuffer.length) {
					signaturesMatch = timingSafeEqual(providedBuffer, computedBuffer);
				}
			} catch {
				signaturesMatch = false;
			}

			if (!signaturesMatch) {
				return {
					webhookResponse: {
						status: 403,
						body: { message: 'Invalid Twenty webhook signature' },
					},
				};
			}
		}

		const rawEvents = this.getNodeParameter('events', 0) as string[] | string;
		const selectedEvents = Array.isArray(rawEvents)
			? rawEvents
			: rawEvents
				? [rawEvents]
				: [];
		if (selectedEvents.length > 0 && (!eventName || !selectedEvents.includes(eventName))) {
			return {
				workflowData: [],
				webhookResponse: {
					body: { received: true },
				},
			};
		}

		const responseData = this.helpers.returnJsonArray([
			{
				...body,
				headers: {
					signature:
						headers['x-twenty-webhook-signature'] ?? headers['X-Twenty-Webhook-Signature'],
					timestamp:
						headers['x-twenty-webhook-timestamp'] ?? headers['X-Twenty-Webhook-Timestamp'],
					nonce: headers['x-twenty-webhook-nonce'] ?? headers['X-Twenty-Webhook-Nonce'],
				},
			},
		]);

		return {
			workflowData: [responseData],
			webhookResponse: {
				body: { received: true },
			},
		};
	}
}
