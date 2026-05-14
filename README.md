# Cloudya Lite — QA Challenge

**Tester:** Djellza Hamza
**Date:** 14.05.2026
**App:** Cloudya Lite

---

## Setup & Execution

### Prerequisites
- Node.js 18+
- npm

### Install & Run the App

cd app
npm install
npx playwright install
npm start

App runs at http://localhost:3000

**Test credentials:**
- admin@cloudya.com / Test1234!
- user@cloudya.com / Welcome1!

---

## How to Run Tests

### Run all tests headless
cd app
npx playwright test

### Run all tests headed - see the browser
npx playwright test --headed

### Run with UI mode
npx playwright test --ui

### Run by category
npx playwright test tests/ui/
npx playwright test tests/api/
npx playwright test tests/mobile/

### Run a specific file
npx playwright test tests/ui/login.spec.ts

### Run with HTML report
npx playwright test --reporter=html
npx playwright show-report

### Debug a specific test
npx playwright test --debug tests/ui/login.spec.ts

---

## Project Structure

app/
  tests/
    ui/
      login.spec.ts         - Login UI tests
      search.spec.ts        - Contact search UI tests
    api/
      auth.spec.ts          - Authentication API tests
      contact.spec.ts       - Contacts API tests
    mobile/
      login.mobile.spec.ts  - Mobile viewport tests iPhone 13
  pages/
    LoginPage.ts            - Login page POM
    ContactsPage.ts         - Contacts page POM
  playwright.config.js
docs/
  qa-report.pdf
README.md

---

## Approach & Strategy

### What I tested and why

I prioritized testing in this order:
1. Login flow -> everything depends on authentication working correctly
2. API security -> highest risk area, tested endpoints without auth token, happy path
3. Contact search -> core feature of the application, checked the name, department and email
4. Mobile responsiveness -> tested on iPhone 13 and ipad mini viewports

### How I prioritized under time constraints

- Security issues first (API auth, session management)
- Core happy paths second (login, search)
- Edge cases third (special characters, empty search)
- Mobile last (lower risk but required by the brief)

---

## QA Report Summary

8 issues found during exploratory testing.
3 High severity, 4 Medium severity, 1 Low severity.
Improvments and suggestions.

ID      | Title                                      | Severity
--------|--------------------------------------------|---------
BUG-001 | Password displayed in plain text           | Medium
BUG-002 | API accessible without authentication      | High
BUG-003 | Login API returns 200 for failed auth      | Medium
BUG-004 | Search does not handle special characters  | Medium
BUG-005 | Logout does not clear session properly     | High
BUG-006 | UI elements cut off on small viewports     | Medium
BUG-007 | URL does not update on navigation          | Low
BUG-008 | Login API exposes password in response     | High

Full report with screenshots: docs/qa-report.pdf

---

## AI Usage

### Tools used
- Playwright Codegen -> recorded login and search interactions to generate initial selectors automatically
- Claude terminal -> used to refactor codegen output into a Page Object Model structure

### How they helped
- Codegen captured all real selectors from the live app quickly
- Claude suggested POM class structure and test file organization

### What I verified manually
- All selectors verified against live DOM in DevTools
- API endpoints and response structures confirmed via Network tab
- All bugs discovered through manual exploratory testing
- Mobile issues found through DevTools device emulation

### Example where I corrected AI output
Claude initially placed test.use inside the test.describe block in the mobile spec file. Playwright threw an error saying it must be top-level. I moved it outside the describe block and the tests passed correctly.

---

## Extended Strategy If I Had One More Day

### Test coverage
- Add tests for all search types by email by department
- Extend API tests, by adding schema validation and response time
- Test role-based access between admin and user accounts
- Plan properly the test plan, and then execute it

### CI/CD integration
- Add GitHub Actions workflow to run full suite on every PR
- Publish Playwright HTML report or Allure as PR artifact
- Fail PR on any unexpected test failures
- Run mobile tests in separate CI job

### Test data management
- Use storageState for authentication
- Store credentials in environment variables not hardcoded

### Scalability and maintainability
- Set up flakiness monitoring
- Add Slack notifications on CI failure
- Implement parallel test execution for faster runs