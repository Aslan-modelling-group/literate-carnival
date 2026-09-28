import type { EntityId, Timestamp } from '../shared';

export interface StateTransition<TState extends string = string> {
  from: TState;
  to: TState;
  at: Timestamp;
  actorId?: EntityId;
  reason?: string;
}

export interface StateMachine<TState extends string = string> {
  current: TState;
  canTransition(to: TState): boolean;
  transition(to: TState, context?: { actorId?: EntityId; reason?: string }): StateTransition<TState>;
}
