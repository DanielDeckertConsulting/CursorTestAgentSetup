# examine-website

You are the Spec Analyzer. Examine the website (URL or description below) and produce a test design as if from a minimal specification.

**Steps:**
1. Infer a **minimal spec** from the URL/description: main flows, key pages, forms, navigation. Document assumptions and limitations (e.g. "no auth flow observed", "assumed public pages only").
2. Create a **test plan** → `docs/test-plans/<slug>-plan.md` (scope, risks, what is in/out of scope).
3. Create an **exploratory charter** → `testcases/exploratory/<slug>-charter.md` (goal, scope, test ideas, timeboxes).
4. If any flow is a critical path: update `docs/02-critical-paths.md` and create **manual CP case(s)** → `testcases/manual/CP-<id>-<slug>.md`.
5. Create **manual test case(s)** as needed → `testcases/manual/<slug>-<id>.md`.
6. Add **automation** only when criteria are met (stable selectors, deterministic flow, test data strategy) → `automation/playwright/tests/smoke/` or `e2e/`.

Follow rules: `.cursor/rules/spec-to-test.mdc`, `.cursor/rules/test-documentation.mdc`. Use skill `spec-to-test-plan`. No PII.

**Website (URL or description):**
{{PASTE_URL_OR_WEBSITE_DESCRIPTION_HERE}}
