# M02 — Core Foundation

## Decision
M02 establishes the reusable Core boundary required by the approved ASLAN architecture. It is a contract layer, not a duplicate implementation of M03–M09.

## Included
- shared entity/correlation identifiers and timestamp boundary
- Result/CoreError primitives
- configuration reader boundary
- identity reference boundary
- authorization reader boundary
- organization reference boundary
- security policy boundary
- centralized event contract and publisher boundary
- audit record/writer boundary
- integration message/adapter boundary
- idempotency store boundary
- state-transition contract
- single `src/core/index.ts` export boundary

## Ownership boundaries
- M03 implements Identity & Authentication.
- M04 implements Roles, Permissions & Organizations.
- M05 implements Security, Environment & Configuration.
- M08 implements Events, Idempotency, Retry & Recovery infrastructure.
- M09 implements Audit & Compliance.

M02 must not absorb the business truth of Commerce, Services, Academy, Talent, Partners, CRM, Marketing, Payments, or other domains.

## Existing application preservation
This unit intentionally does not move or delete `src/lib/*`, existing routes, middleware, Supabase code, or current domain UI. Those responsibilities move only when their replacement unit exists and has passed verification.

## Verification gate
Before committing this unit to `main`:
1. TypeScript compilation passes.
2. Production build passes.
3. Existing routes remain functional.
4. No secret is introduced into client code.
5. No existing file is deleted merely to make the tree look like the blueprint.

If a gate fails, repair the unit before starting the next M02 unit.
