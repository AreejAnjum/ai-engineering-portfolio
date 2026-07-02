# Week 4 Quality Checklist

## Goal

This document records the quality checks for the Personal Learning Dashboard after the TypeScript-style clean code refactor.

## What was checked?

* The dashboard loads without JavaScript errors.
* Existing tasks render correctly.
* Empty form submission shows a useful error.
* Missing category shows a useful error.
* Valid task submission adds a new task.
* Invalid fields receive focus.
* Form fields use `aria-invalid`.
* The error message uses `role="alert"`.
* Browser console shows useful success and failure logs.

## Manual test cases

| Test                          | Expected result           |
| ----------------------------- | ------------------------- |
| Submit empty form             | Error message appears     |
| Submit title without category | Category error appears    |
| Submit valid task             | New task appears          |
| Use keyboard Tab              | Focus is visible          |
| Open browser console          | Logs/warnings are visible |

## Files checked

```text
apps/learning-dashboard/index.html
apps/learning-dashboard/style.css
apps/learning-dashboard/script.js
```

## Evidence folder

```text
docs/evidence/week-04/day-05/
```

## Lesson learned

Quality work means checking success paths, failure paths, accessibility signals, and developer logs before calling a feature complete.
