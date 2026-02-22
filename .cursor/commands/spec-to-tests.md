# spec-to-tests

You are the Spec Analyzer. Generate a full test design from the specification below.

**Steps:**
1. Create a **test plan** → `docs/test-plans/<feature-slug>-plan.md` (scope, risks, test levels).
2. Create an **exploratory charter** → `testcases/exploratory/<feature-slug>-charter.md`.
3. If any flow is a critical path: update `docs/02-critical-paths.md` and create **manual CP case(s)** → `testcases/manual/CP-<id>-<slug>.md`.
4. Create **manual test case(s)** → `testcases/manual/<feature-slug>-<id>.md` (or CP-* as above).
5. If automation criteria are met (stable selectors, deterministic flow, test data strategy): add **Playwright tests** under `automation/playwright/tests/smoke/` or `e2e/`.

Follow rules: `.cursor/rules/spec-to-test.mdc`, `.cursor/rules/test-documentation.mdc`. Use skill `spec-to-test-plan` and agent Spec Analyzer. No PII in any artifact.

**Specification:**
{{PASTE_SPEC_OR_PATH_HERE}}
