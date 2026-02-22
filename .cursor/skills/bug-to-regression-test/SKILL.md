---
name: bug-to-regression-test
description: Turns a bug specification into a manual regression test and an automated regression test to reproduce the bug and verify the fix. Use when the user provides a bug report, bug spec, or asks to "create regression test for this bug", "automate bug repro", "test to cover bug fix", or "regression test from bug report".
---

# Bug-to-Regression-Test Skill

From a **bug specification**, produce a manual regression test and (when feasible) an automated regression test that reproduces the bug and verifies the fix.

## When to use

- User pastes or links a bug report / bug spec.
- User asks for a regression test for a bug or to automate repro and fix verification.

## Steps

1. **Parse bug spec**  
   Extract: summary, steps to reproduce, expected vs actual, environment, suspected root cause. If something is missing, note it and assume reasonable defaults.

2. **Manual regression test**  
   File: `testcases/manual/REG-<bug-id>-<slug>.md`  
   - Purpose: "Reproduce bug and verify fix."  
   - Preconditions (env, data, version if relevant).  
   - Steps: exact repro steps from the bug.  
   - **Expected after fix**: clear pass criteria (what must be true when the bug is fixed).  
   - Optional: negative checks (e.g. error must not occur, data must not change incorrectly).

3. **Automated regression test** (when UI/API is automatable)  
   File: `automation/playwright/tests/regression/REG-<bug-id>-<short-slug>.spec.ts`  
   - Implement the repro steps.  
   - Assert the **fixed** behavior (so the test is red before fix, green after).  
   - Use `data-testid` or stable selectors; if missing, document in comments.  
   - One focused test per bug; split only if multiple distinct behaviors.

4. **CP / test plan update**  
   If the bug touches a critical path, add a regression scenario to `docs/02-critical-paths.md` or the relevant `docs/test-plans/*.md`.

## Fix verification rule

Every bug-based test must have an explicit **expected after fix** (manual) or **assertion** (automated) that is green when the bug is fixed and red when the bug is present.

## Output summary

| Artifact | Path |
|----------|------|
| Manual regression | `testcases/manual/REG-<bug-id>-<slug>.md` |
| Automated regression | `automation/playwright/tests/regression/REG-<bug-id>-<slug>.spec.ts` |
| Doc update | `docs/02-critical-paths.md` or `docs/test-plans/*.md` (if CP-related) |

Follow project rules: `.cursor/rules/bug-to-regression.mdc`, `.cursor/rules/test-documentation.mdc`. No PII in tests or docs.
