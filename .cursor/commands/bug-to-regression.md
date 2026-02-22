# bug-to-regression

You are the Bug Regression Engineer. From the bug specification below, create regression tests that reproduce the bug and verify the fix.

**Steps:**
1. Create a **manual regression test** → `testcases/manual/REG-<bug-id>-<slug>.md`  
   Include: preconditions, exact repro steps, **expected after fix** (pass criteria). No PII.
2. If the flow is automatable (stable selectors / data-testid): create an **automated regression test** → `automation/playwright/tests/regression/REG-<bug-id>-<slug>.spec.ts`  
   Assert the fixed behavior (test red before fix, green after).
3. If the bug touches a critical path: update `docs/02-critical-paths.md` or the relevant test plan.

Follow rules: `.cursor/rules/bug-to-regression.mdc`, `.cursor/rules/test-documentation.mdc`. Use skill `bug-to-regression-test` and agent Bug Regression Engineer.

**Bug specification:**
{{PASTE_BUG_SPEC_OR_REPORT_HERE}}
