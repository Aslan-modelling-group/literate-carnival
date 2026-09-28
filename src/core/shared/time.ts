/** Canonical timestamp boundary used by Core contracts. Runtime validation belongs to infrastructure. */
export type Timestamp = string & { readonly __brand: 'Timestamp' };

export function timestamp(value: string): Timestamp {
  const normalized = value.trim();
  if (!normalized) throw new Error('Timestamp cannot be empty.');
  return normalized as Timestamp;
}
