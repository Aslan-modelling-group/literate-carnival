import type { EntityId } from '../shared/ids';

/** M02 organization boundary. M04 owns organization lifecycle and membership implementation. */
export interface OrganizationReference {
  organizationId: EntityId;
}

export interface OrganizationReader {
  exists(organizationId: EntityId): Promise<boolean>;
}
