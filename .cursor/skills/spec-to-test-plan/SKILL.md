---
name: spec-to-test-plan
description: Examines a specification or website context and produces a test plan, exploratory charter, manual test cases, and automation candidates. Use when the user provides a feature spec, requirements doc, or asks to "examine a website", "generate test plan from spec", "create tests from specification", or "analyze URL for testing".
---

# Spec-to-Test-Plan Skill

Produce a full test design from a **specification** or **website examination**: test plan, exploratory charter, manual cases, and (when ready) automation.

## When to use

- User provides a feature/requirements specification (paste or path).
- User asks to examine a website or URL and create test plans/tests.
- User wants test plans and manual/automated tests generated from a spec.

## Steps

1. **Parse input**  
   Identify: feature name, scope, main flows, constraints. If only a URL is given, infer a minimal spec (main pages, key actions, forms, navigation) and note assumptions.

2. **Create test plan**  
   File: `docs/test-plans/<feature-slug>-plan.md`  
   Include: scope (in/out), risks (top 5–10), test levels (exploratory → manual → automation), dependencies (env, data, users).

3. **Create exploratory charter**  
   File: `testcases/exploratory/<feature-slug>-charter.md`  
   Use project charter template: goal, scope, approach, timeboxes, test ideas, expected outputs (session notes, candidate CPs).

4. **Critical path check**  
   If any flow is a CP (auth, payments, data integrity, PII, tenant isolation, cross-app):  
   - Update `docs/02-critical-paths.md`.  
   - Create manual CP case: `testcases/manual/CP-<id>-<slug>.md`.

5. **Manual test cases**  
   For each flow that needs a repeatable manual case:  
   - `testcases/manual/<feature-slug>-<id>.md` or `CP-<id>-<slug>.md`.  
   Content: preconditions, numbered steps, expected results per step, data/security checks, automation readiness.

6. **Automation**  
   Only if: stable selectors or `data-testid`, deterministic flow, test data strategy.  
   Add tests under `automation/playwright/tests/smoke/` or `e2e/`, using fixtures as needed. Document missing selectors.

## Output summary

| Artifact | Path |
|----------|------|
| Test plan | `docs/test-plans/<feature-slug>-plan.md` |
| Charter | `testcases/exploratory/<feature-slug>-charter.md` |
| Manual CP | `testcases/manual/CP-<id>-<slug>.md` |
| Manual cases | `testcases/manual/<feature-slug>-<id>.md` |
| Automation | `automation/playwright/tests/smoke/*.spec.ts` or `e2e/*.spec.ts` |

Follow project rules: `.cursor/rules/spec-to-test.mdc`, `.cursor/rules/test-documentation.mdc`. No PII in any artifact.
