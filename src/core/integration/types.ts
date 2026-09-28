import type { CorrelationId, EntityId, Timestamp } from '../shared';

export type IntegrationMessageKind = 'COMMAND' | 'EVENT' | 'QUERY';

export interface IntegrationMessage<TPayload = unknown> {
  id: EntityId;
  kind: IntegrationMessageKind;
  name: string;
  occurredAt: Timestamp;
  source: string;
  correlationId?: CorrelationId;
  payload: TPayload;
}

export interface IntegrationAdapter {
  send<TPayload>(message: IntegrationMessage<TPayload>): Promise<void>;
}
