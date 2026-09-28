import type { EntityId } from '../shared/ids';

/** M02 authorization boundary. M04 owns roles, permissions and policy implementation. */
export interface AuthorizationContext {
  actorId: EntityId;
  organizationId?: EntityId;
}

export interface AuthorizationReader {
  can(context: AuthorizationContext, action: string, resource: string): Promise<boolean>;
}
