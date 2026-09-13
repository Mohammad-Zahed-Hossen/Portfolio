# Product Quality Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (inline execution approved).

**Goal:** Make the portfolio read as one coherent professional product through typography, action, and route-orientation consistency.

**Architecture:** Extend existing shared heading/link primitives and keep the remaining refinements close to their semantic components. Use a small client observer only for desktop case-study orientation.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, existing Motion.

**Spec:** `docs/superpowers/specs/2026-09-13-product-quality-refinement-design.md`

## Tasks

- [ ] Refine `SectionHeading` and add link-only `ActionLink`; migrate repeated internal actions.
- [ ] Add stable desktop active section navigation without changing mobile anchor behaviour.
- [ ] Improve explanatory text and panel rhythm in case-study, contact, research, resume, and unavailable-resume states while retaining compact metadata styles.
- [ ] Validate duplicate reduction, typecheck, lint, build, responsive rendering, themes, navigation keyboard behaviour, and known Next lint warning status.
