# Week 3 Proof - JavaScript Dashboard Interaction

## Goal

This document proves that the Week 3 JavaScript feature works in the Personal Learning Dashboard.

## What was built

The dashboard was upgraded from a static HTML/CSS page into an interactive JavaScript dashboard.

## What works now

* Task data is stored in JavaScript.
* Tasks are rendered on the page.
* The form can read user input.
* A new task can be added from the form.
* Empty or invalid form input shows an error message.
* Valid input adds a new task to the dashboard.
* Console logs show success and failure paths.

## Feature flow

```text
User fills form
→ JavaScript reads input values
→ validation checks the input
→ valid task is added to the task array
→ task list re-renders
→ new task appears on the dashboard
```

## Failure path

```text
Invalid input
→ validation message appears
→ task is not added
→ user can fix the form
```

## Files involved

```text
apps/learning-dashboard/index.html
apps/learning-dashboard/style.css
apps/learning-dashboard/script.js
```

## Evidence folder

```text
docs/evidence/week-03/day-06/
```

## Lesson learned

A feature is stronger when I can prove both the success path and the failure path.
