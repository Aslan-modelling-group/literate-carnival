import type { EntityId } from '../shared/ids';

/** M02 identity contract. M03 owns authentication and session implementation. */
export interface IdentityReference {
  userId: EntityId;
  organizationId?: EntityId;
}

export interface IdentityReader {
  getCurrentIdentity(): Promise<IdentityReference | null>;
}
