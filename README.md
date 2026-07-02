# AI Engineering Portfolio

This repository documents my 32-week project-based journey to become job-ready in AI Engineering, with a focus on LLM applications, RAG, AI agents, tool calling, evaluation, LLMOps, and production-ready systems.

## Goal

Build a strong AI Engineering portfolio through real projects, clean documentation, daily commits, practical evidence, and deployed portfolio projects.

## Current Focus

**Week 4:** TypeScript-style thinking, clean JavaScript, validation, quality checks, and refactoring
**Current Project:** Project 1 - Personal Learning Dashboard

## Live Demo

Personal Learning Dashboard:

[Open Live Dashboard](https://ai-engineering-portfolio-wine.vercel.app/)

## Portfolio Roadmap

* Project 0: Developer Command Center
* Project 1: Personal Learning Dashboard
* Project 2: Support Ticket UI
* Project 3: Python Automation Toolkit
* Project 4: Full-Stack Support Ticket Dashboard
* Project 5: AI Text Intelligence Assistant
* Project 6: Document Search App
* Project 7: AI Document Intelligence Platform with RAG
* Project 8: AI Support Agent with Tool Calling
* Project 9: Enterprise Agent Memory Hub
* Project 10: MCP-Style Enterprise Tool Hub
* Project 11: Multi-Agent Enterprise Assistant
* Project 12: Enterprise Data Intelligence Copilot
* Project 13: AI Engineering Control Center

## Daily Learning System

Every day I follow this workflow:

1. Learn one concept
2. Build one small useful feature or setup step
3. Verify that it works
4. Save evidence
5. Commit and push to GitHub
6. Write a short reflection

## Daily Score System

| Area    | Points |
| ------- | -----: |
| Learn   |     15 |
| Build   |     45 |
| Verify  |     15 |
| Ship    |     15 |
| Reflect |     10 |
| Total   |    100 |

## Proof System

Every day must produce at least one type of proof:

* Notes
* Screenshots
* Git commits
* GitHub updates
* Working code
* Documentation
* Test output
* Demo evidence

---

# Project 0: Developer Command Center

## Week 1 Progress

* [x] Day 1: Developer environment setup
* [x] Day 2: Terminal basics
* [x] Day 3: Git basics
* [x] Day 4: VS Code workflow
* [x] Day 5: Learning system
* [x] Day 6: Mini project setup
* [x] Day 7: Week 1 review

## Week 1 Review

In Week 1, I completed Project 0: Developer Command Center.

I set up my developer environment, practiced terminal basics, learned Git basics, configured VS Code, created reusable learning templates, updated the README command center, and saved evidence for each day.

Week 1 proof:

* Developer tools verified
* GitHub repository created
* Daily notes system created
* Evidence folder structure created
* VS Code workspace configured
* README command center added
* Week 1 review completed

---

# Project 1: Personal Learning Dashboard

A responsive static dashboard built with HTML, CSS, and JavaScript to track AI Engineering learning progress, daily goals, task categories, and score system.

## Live Demo

[Open Live Dashboard](https://ai-engineering-portfolio-wine.vercel.app/)

## Screenshot

![Personal Learning Dashboard](docs/assets/learning-dashboard-screenshot.png)

## What this project shows

* Semantic HTML structure
* Responsive CSS layout
* Card-based dashboard design
* Accessible form labels and focus states
* Keyboard navigation basics
* JavaScript task rendering
* Form submission handling
* Input validation and error messages
* TypeScript-style JavaScript with JSDoc
* Clean code refactoring
* Deployment with Vercel
* GitHub documentation and proof

---

# Week 2: HTML, CSS, and Web Layout

## Week 2 Progress

* [x] Day 8: HTML skeleton
* [x] Day 9: CSS layout
* [x] Day 10: Forms
* [x] Day 11: Accessibility
* [x] Day 12: Deployment preview
* [x] Day 13: README proof
* [x] Day 14: Week 2 review

## Week 2 Review

In Week 2, I built the first version of the Personal Learning Dashboard.

I created semantic HTML structure, added responsive CSS, built a learning task form, improved accessibility, deployed the dashboard to Vercel, and documented the project with a live link and screenshot.

Week 2 proof:

* Semantic HTML dashboard created
* Responsive CSS layout added
* Form UI added
* Accessibility improved
* Live Vercel deployment completed
* README proof added with screenshot and live link
* Week 2 review completed

---

# Week 3: JavaScript Fundamentals

## Week 3 Progress

* [x] Day 15: Foundation map
* [x] Day 16: Core JavaScript concept 1
* [x] Day 17: Core JavaScript concept 2
* [x] Day 18: Integration day
* [x] Day 19: Quality day
* [x] Day 20: Proof day
* [x] Day 21: Review day

## Week 3 JavaScript Proof

In Week 3, I upgraded the Personal Learning Dashboard with JavaScript interactivity.

Proof added:

* JavaScript task rendering
* Task data stored with arrays and objects
* Form submission handling
* Input validation
* Error messages
* Console logs
* Success and failure path testing
* Safe rendering improved with `textContent`

Evidence:

* `docs/week-03-plan.md`
* `docs/week-03-proof.md`
* `docs/evidence/week-03/`

## Week 3 Review

In Week 3, I learned how JavaScript connects to HTML, stores task data in arrays and objects, renders tasks into the DOM, handles form submission, validates user input, shows error messages, and logs success/failure paths.

Week 3 completed Project 1’s first interactive upgrade.

---

# Week 4: TypeScript and Clean Code

## Week 4 Progress

* [x] Day 22: Foundation map
* [x] Day 23: Core concept 1
* [x] Day 24: Core concept 2
* [x] Day 25: Integration day
* [x] Day 26: Quality day
* [x] Day 27: Proof day
* [x] Day 28: Review day

## Week 4 Goal

Improve the Personal Learning Dashboard with TypeScript-style thinking, cleaner JavaScript structure, safer data handling, validation checks, accessibility improvements, and quality documentation.

## Week 4 Proof So Far

In Week 4, I improved the dashboard code so it is easier to understand, safer to change, and closer to professional frontend engineering standards.

Proof added so far:

* TypeScript-style task data contracts with JSDoc
* `// @ts-check` added for stricter JavaScript checking
* Clear `LearningTask`, `TaskCategory`, `TaskStatus`, and `TaskDraft` definitions
* Safer HTML element selection with `getRequiredElement`
* Validation test cases for valid and invalid tasks
* Cleaner function groups for form reading, validation, rendering, error handling, state updates, and initialization
* Better form errors
* `maxlength` protection for title and notes
* `aria-invalid` support for invalid form fields
* `role="alert"` for form error messages
* Manual quality checklist for success and failure paths

## Week 4 Files

* `docs/week-04-plan.md`
* `docs/week-04-validation-tests.md`
* `docs/week-04-clean-code-flow.md`
* `docs/week-04-quality-checklist.md`
* `docs/evidence/week-04/`
* `apps/learning-dashboard/script.js`

## Week 4 Technical Summary

The dashboard JavaScript was refactored into cleaner function groups:

| Function group    | Purpose                            |
| ----------------- | ---------------------------------- |
| Data contracts    | Define the expected task shape     |
| Element selection | Safely find required HTML elements |
| Form reading      | Read values from HTML inputs       |
| Validation        | Check task data before using it    |
| Error handling    | Show and clear form errors         |
| Rendering         | Create and display task cards      |
| State update      | Add new tasks to the task list     |
| Initialization    | Start the dashboard logic          |

## Week 4 Feature Flow

```text
initDashboard()
→ render existing tasks
→ listen for form submit
→ read form values
→ validate task
→ show error OR add task
→ render updated task list
```

## Week 4 Quality Checks

Manual quality checks completed:

* Dashboard loads without JavaScript errors
* Existing tasks render correctly
* Empty form submission shows a useful error
* Missing category shows a useful error
* Valid task submission adds a new task
* Invalid fields receive focus
* Form fields use `aria-invalid`
* Error message uses `role="alert"`
* Browser console shows useful success and failure logs

## Week 4 Lessons Learned

Week 4 showed me that clean code is not only about making a feature work. A professional feature should have clear data structure, validation, safer DOM handling, useful errors, accessibility signals, and evidence that both success and failure paths were tested.


Day 28 completed the Week 4 review, final manual checks, README cleanup, and `week-04-done` Git tag.