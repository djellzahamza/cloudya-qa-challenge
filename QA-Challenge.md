# 🧪 QA Challenge — Quality Engineer

## Overview

This challenge helps us understand how you approach testing, automation, and quality engineering in a practical situation.

We are **not expecting a perfect solution**. We want to see:

- How you explore and test an application
- How you prioritize testing
- How you write automated tests
- How you use AI tools effectively in your workflow

⏱ **Maximum time:** 1 hour 30 minutes

📅 **Submission deadline:** within 3 days

Please **do not spend more than 90 minutes** on this task.

---

## Application

You will test **Cloudya Lite** — a simplified communication platform with login and contact search functionality.

### How to Run

**Prerequisites:** Node.js 18+, npm

```bash
cd app
npm install
npx playwright install
npm start
```

App available at **http://localhost:3000**

**Test credentials:**
- `admin@cloudya.com` / `Test1234!`
- `user@cloudya.com` / `Welcome1!`

### Run existing tests
```bash
npm test
```

### Main areas to test

1. **Login**
2. **Contact Search (after login)**
3. **Related backend/API behavior**
4. **Mobile responsiveness** (test on small screen sizes)

You may inspect API requests using **browser developer tools** or other tools.

---

## What You Need To Do

### 1. Explore the Application

Spend some time exploring the login flow and contact search functionality.

Try to identify potential issues, edge cases, or improvements.

---

### 2. Create a QA Report

Provide a short report that includes:

- Bugs or issues you found
- Steps to reproduce
- Expected result
- Actual result
- Severity or impact
- Optional: ideas about possible causes

The report should help a developer quickly understand and fix the issue.

---

### 3. Create Automated Tests

Create a small automated test suite.

**Minimum requirements:**

#### UI Automation
Create **at least one automated UI test**, for example:
- Successful login
- Contact search

#### API / Backend Test
Create **at least one automated API test**, for example:
- Login request validation
- Contact search API validation

#### Negative Case
Include **at least one negative or edge case**, such as:
- Invalid login
- Empty search query
- No results found
- Unauthorized API request

#### Mobile Test
Include **at least one test using mobile device emulation**, for example:
- Login flow on a mobile viewport (e.g., iPhone 13, Pixel 5)
- Contact search on a small screen

The goal is **not to automate everything**, but to demonstrate your approach.

---

### 4. Suggest Improvements

Provide a few suggestions for improving the application, such as:

- UX improvements
- Validation improvements
- Automation opportunities
- Quality improvements

---

### 5. README File

Please include a `README.md` explaining:

- How to run your tests
- Tools used
- Assumptions you made
- Structure of your solution

---

### 6. AI Usage

Please include a short section describing:

- Which AI tools you used
- How they helped you
- What you verified manually
- One example where you corrected AI output

We are interested in how you **use AI responsibly**, not just whether you use it.

---

## Allowed Tools

You may use any tools you prefer.

**UI testing:** Playwright, Cypress, Selenium, Robot Framework

**API testing:** Playwright API, Supertest, Postman / Newman, Robot Framework (RequestsLibrary)

**Preferred languages:** JavaScript, TypeScript, Python (for Robot Framework)

**Nice to have:** Kotlin

---

## Optional Question

If you had **one additional day**, how would you extend the automation strategy for this application?

---

## Deliverables Summary

Please submit:

- ✅ QA report
- ✅ Automated tests
- ✅ README
- ✅ AI usage note
