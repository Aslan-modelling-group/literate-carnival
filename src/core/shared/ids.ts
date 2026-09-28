/** Domain-neutral opaque identifiers. Business meaning belongs to the owning domain. */
export type EntityId = string & { readonly __brand: 'EntityId' };
export type CorrelationId = EntityId;

export function entityId(value: string): EntityId {
  const normalized = value.trim();
  if (!normalized) throw new Error('EntityId cannot be empty.');
  return normalized as EntityId;
}
