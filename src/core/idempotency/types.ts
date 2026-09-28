import type { EntityId, Timestamp } from '../shared';

/** M02 contract. M08 owns persistence, expiry, retry and recovery behavior. */
export interface IdempotencyRecord {
  key: string;
  requestId: EntityId;
  createdAt: Timestamp;
  expiresAt?: Timestamp;
  responseHash?: string;
}

export interface IdempotencyStore {
  has(key: string): Promise<boolean>;
  put(record: IdempotencyRecord): Promise<void>;
}
