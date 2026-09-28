/** M02 security boundary. M05 owns concrete security controls and environment enforcement. */
export interface SecurityContext {
  requestId?: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface SecurityPolicy {
  check(context: SecurityContext): Promise<void>;
}
