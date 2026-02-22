# Critical Paths

Critical paths (CP) are flows that act as **release gates**. No release if any CP manual test is red.

## Definition

A critical path is any flow that impacts:

- Authentication / Authorization / Tenant isolation
- Payments / billing
- Data integrity (create/update/delete), auditability
- Messaging / documents / PII access
- Cross-app navigation / shared database writes

## CP list

| ID | Name | Owner | Manual case | Automation |
|----|------|-------|-------------|------------|
| *(add rows when defining CPs)* | | | `testcases/manual/CP-*.md` | `automation/playwright/tests/smoke/` or `e2e/` |

## Regression scenarios

Bugs that touch a CP get a regression test (manual + automated when feasible). See `testcases/manual/REG-*.md` and `automation/playwright/tests/regression/`.
