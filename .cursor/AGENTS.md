# Cursor Agents (Testing Specialization)

Use these agents for test design, manual test creation, and automated test generation.

## When to use which agent

| Scenario | Primary agent | Optional |
|----------|----------------|----------|
| **Spec or website → test plan + manual + automation** | Spec Analyzer | Exploratory Tester, Test Lead, Automation Engineer |
| **Bug report → regression test (manual + automated)** | Bug Regression Engineer | Triage, Automation Engineer |
| **Feature → exploratory charter + session notes** | Exploratory Tester | Test Lead |
| **Exploratory findings → CP manual test case** | Test Lead | — |
| **CP cases → smoke suite (Playwright)** | Automation Engineer (Playwright) | Test Lead |
| **Smoke/CI failure → triage + bug report + mitigation** | Triage | Bug Regression Engineer |

## Agent list

- **spec-analyzer** — Spec/website → test plan, charter, manual cases, automation candidates.
- **bug-regression-engineer** — Bug spec → manual + automated regression tests, fix verification.
- **test-lead** — Test strategy, CP definition, manual CP cases, smoke scope, release gates.
- **exploratory-tester** — Charters, session notes, risk/edge-case findings.
- **automation-engineer-playwright** — Playwright smoke/e2e/regression implementation, fixtures, reports.
- **triage** — Failure categorization, bug report, quarantine/fix recommendations.

## Commands (quick ref)

| Command | Role | Input placeholder |
|---------|------|-------------------|
| **spec-to-tests** | Spec Analyzer | `{{PASTE_SPEC_OR_PATH_HERE}}` |
| **examine-website** | Spec Analyzer | `{{PASTE_URL_OR_WEBSITE_DESCRIPTION_HERE}}` |
| **bug-to-regression** | Bug Regression Engineer | `{{PASTE_BUG_SPEC_OR_REPORT_HERE}}` |
| **test-charter** | Exploratory Tester | `{{PASTE_FEATURE_SPEC_HERE}}` |
| **test-case** | Test Lead | `{{PASTE_FINDINGS_HERE}}` |
| **smoke-suite** | Automation Engineer | `{{PASTE_CP_CASES_HERE}}` |
| **bug-report** | Triage | `{{PASTE_LOGS_OR_SCREENSHOTS_DESC_HERE}}` |
| **release-readyness** | Test Lead | (CP results, smoke results, known issues) |

## Skills (project)

- **spec-to-test-plan** — Spec/website → full test design (plan, charter, manual, automation).
- **bug-to-regression-test** — Bug spec → manual + automated regression tests and fix verification.

Rules live in `.cursor/rules/`; agents in `.cursor/agents/`; commands in `.cursor/commands/`.
