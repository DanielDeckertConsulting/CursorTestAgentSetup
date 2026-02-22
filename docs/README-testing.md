# Testing Setup

This project is specialized for **manual tests**, **test documentation**, and **automated test generation** from specifications and bug reports.

## Flows

### 1. Spec → Tests (or Website → Tests)

- **Command:** `spec-to-tests` or `examine-website`
- **Agents:** Spec Analyzer (primary), Test Lead, Exploratory Tester, Automation Engineer
- **Skills:** `spec-to-test-plan`
- **Outputs:** Test plan, exploratory charter, manual cases (including CP), optional Playwright tests

### 2. Bug → Regression Tests

- **Command:** `bug-to-regression`
- **Agents:** Bug Regression Engineer (primary), Triage (if categorizing failure), Automation Engineer
- **Skills:** `bug-to-regression-test`
- **Outputs:** Manual regression test (`REG-*`), optional Playwright regression test, CP/test plan update if relevant

### 3. Existing commands

- **test-charter** — Exploratory charter from feature description
- **test-case** — Critical path manual test case from exploratory findings
- **smoke-suite** — Smoke suite plan and Playwright implementation from CP cases
- **bug-report** — Crisp bug report from failure info (Triage)
- **release-readyness** — Release readiness report (Test Lead)

## Directory layout

| Path | Purpose |
|------|---------|
| `docs/02-critical-paths.md` | List of critical paths and ownership |
| `docs/test-plans/` | Per-feature test plans |
| `docs/reports/` | Release readiness, triage reports |
| `testcases/exploratory/` | Charters and session notes |
| `testcases/manual/` | Manual cases: CP-*, REG-*, &lt;feature&gt;-* |
| `automation/playwright/tests/smoke/` | Smoke tests |
| `automation/playwright/tests/e2e/` | E2E tests |
| `automation/playwright/tests/regression/` | Bug regression tests |

## Rules (summary)

- **Quality gates:** No release if CP manual test is red; no merge if PR smoke is red. Flaky: first → quarantine + ticket, second → fix before expanding.
- **Spec-to-test:** `.cursor/rules/spec-to-test.mdc`
- **Bug-to-regression:** `.cursor/rules/bug-to-regression.mdc`
- **Test documentation:** `.cursor/rules/test-documentation.mdc`
- **Testing / low-code:** `.cursor/rules/testing.mdc`, `.cursor/rules/lowcode.mdc`

No PII in docs, tests, or logs. Use placeholders (e.g. user_123, example@example.com).

---

## How to use it

1. **From a spec or URL**  
   Run the **spec-to-tests** or **examine-website** command in Cursor (Command Palette), or ask the agent to “examine this website” / “generate tests from this spec”. Paste your specification or URL into the command placeholder. The agent will produce a test plan, exploratory charter, manual cases, and automation when criteria are met.

2. **From a bug**  
   Run the **bug-to-regression** command (or paste a bug report and ask for a regression test). You get a manual regression case (`testcases/manual/REG-*.md`) and, when feasible, a Playwright regression test that fails before the fix and passes after.

3. **Reference**  
   See **.cursor/AGENTS.md** for when to use which agent and **.cursor/commands/** for all command placeholders.

---

## How to test it

- **Commands:** In Cursor, open the Command Palette and run **spec-to-tests**, **examine-website**, or **bug-to-regression** with a pasted spec, URL, or bug report. Confirm the expected files appear under `docs/`, `testcases/`, and `automation/playwright/tests/`.
- **Smoke / E2E:** From the project root:
  ```bash
  cd automation/playwright && npm test
  ```
  Existing smoke and e2e suites run as before; the `regression/` folder is for new REG-* specs added via **bug-to-regression**.
- **Impact:** Setup is additive (rules, skills, agents, commands, folders). No change to application code or existing test logic.
