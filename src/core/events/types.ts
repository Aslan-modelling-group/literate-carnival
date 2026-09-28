import type { CorrelationId, EntityId, Timestamp } from '../shared';

export type CoreEventName = string & { readonly __brand: 'CoreEventName' };

export interface CoreEvent<TPayload = unknown> {
  id: EntityId;
  name: CoreEventName;
  occurredAt: Timestamp;
  aggregateType: string;
  aggregateId: EntityId;
  version: number;
  correlationId?: CorrelationId;
  causationId?: EntityId;
  payload: TPayload;
}

export interface EventPublisher {
  publish<TPayload>(event: CoreEvent<TPayload>): Promise<void>;
}
