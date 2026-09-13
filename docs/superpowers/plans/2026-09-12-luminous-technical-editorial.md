# Luminous Technical Editorial Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing portfolio into a premium, evidence-led Luminous Technical Editorial experience with scoped atmosphere and purposeful motion.

**Architecture:** A compact UI layer supplies ambient decoration and motion reveal primitives, while global design tokens drive visual consistency. Existing content, routes, and content-driven case studies remain intact; route components only compose enhanced primitives and do not acquire invented data.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, Lucide, next-themes, Motion.

**Spec:** `docs/superpowers/specs/2026-09-12-luminous-technical-editorial-design.md`

## Global Constraints

- Add only `motion`; use CSS for hover states and ambient layers.
- Keep the exact existing route map and typed content system.
- Preserve truthful status/evidence labels, including SchoolBridge as in progress.
- Scope aurora, grid, glow, and glass to hero, selected project heroes, final CTA, header, and mobile drawer.
- Never use fake product visuals, dashboards, benchmarks, screenshots, or AI imagery.
- At narrow widths, architecture diagrams must be stacked and must not horizontally scroll.
- Respect reduced motion in CSS and Motion; content must remain visible with animation disabled.

---

### Task 1: Establish motion and visual primitives

**Files:**
- Modify: `package.json`, `package-lock.json`, `src/app/globals.css`
- Create: `src/components/ui/ambient-background.tsx`, `src/components/ui/reveal.tsx`

**Interfaces:**
- Produces `AmbientBackground({ variant, className })` for decorative scoped surfaces.
- Produces `Reveal({ children, delay, className })` for once-per-viewport entrance motion.

- [ ] Install the single `motion` dependency and confirm it is listed in `package.json`.
- [ ] Define paired light/dark semantic tokens and utility classes for raised surfaces, fine technical grid, scoped ambient layers, responsive display typography, and focus treatment.
- [ ] Implement `AmbientBackground` as inert `aria-hidden` content with the `hero`, `cta`, and `project` variants.
- [ ] Implement `Reveal` with 12px/opacity entrance values, 360ms default transition, and `useReducedMotion` immediate rendering.
- [ ] Run `npm run typecheck` and correct type errors introduced by the new primitives.

### Task 2: Recompose global chrome and homepage

**Files:**
- Modify: `src/components/layout/site-header.tsx`, `src/components/layout/mobile-nav.tsx`, `src/components/shared/theme-toggle.tsx`, `src/components/home/hero-section.tsx`, `src/components/home/proof-strip.tsx`, `src/components/home/featured-projects.tsx`, `src/components/home/engineering-focus.tsx`, `src/components/home/research-preview.tsx`, `src/components/home/final-cta.tsx`, `src/components/projects/project-card.tsx`
- Create: `src/components/home/hero-visual.tsx`

**Interfaces:**
- `HeroVisual()` is an accessible decorative signal-path composition.
- Existing navigation, social, project, and status interfaces remain unchanged.

- [ ] Add scroll-aware header styling without changing nav selection or mobile focus restoration behaviour.
- [ ] Upgrade the mobile drawer to a glass sheet while retaining its Escape and focus-trap logic.
- [ ] Recompose the hero around its real portrait and `HeroVisual`; use scoped hero atmosphere and unchanged truthful copy.
- [ ] Turn proof and homepage editorial areas into rhythmically distinct sections.
- [ ] Give project cards a domain-specific accent custom property, directional affordance, and CSS-only hover elevation.
- [ ] Apply `Reveal` only to major groups and ensure `motion-reduce` leaves every group visible.
- [ ] Run `npm run typecheck` and `npm run lint`.

### Task 3: Upgrade catalogue, content pages, and case-study system

**Files:**
- Modify: `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/projects/[slug]/page.tsx`, `src/app/research/page.tsx`, `src/app/resume/page.tsx`, `src/app/contact/page.tsx`, `src/app/not-found.tsx`, `src/components/projects/project-case-study-hero.tsx`, `src/components/projects/project-architecture-diagram.tsx`, `src/components/projects/project-overview-grid.tsx`, `src/components/projects/project-workflow.tsx`, `src/components/projects/project-decision-table.tsx`, `src/components/projects/project-evidence-section.tsx`, `src/components/projects/project-limitations.tsx`, `src/components/projects/project-repository-cta.tsx`, `src/components/projects/project-navigation.tsx`

**Interfaces:**
- Project status/evidence data remains consumed from existing `Project` and `ProjectEvidence` types.
- Diagram layout changes are presentation-only and preserve node text/semantics.

- [ ] Add editorial wrappers/reveals to page intro areas without changing route content or metadata.
- [ ] Give project heroes a project-aware ambient variant, measured metadata hierarchy, and a safe reading surface.
- [ ] Replace the mobile architecture diagram branch with stacked vertical nodes and labelled down connectors; retain desktop lanes only at `md` and above.
- [ ] Improve workflow, table, evidence, limitations, repository CTA, and adjacent navigation hierarchy while preserving evidence labels and mobile table cards.
- [ ] Run `npm run typecheck` and `npm run lint`.

### Task 4: Validate visual, accessibility, and production outcomes

**Files:**
- Modify only if defects are found during validation.

- [ ] Run `npm run typecheck`, `npm run lint`, and `npm run build`.
- [ ] Browser-test all specified routes in light and dark at 375, 768, 1280, and 1440px; check no unwanted horizontal scroll and confirm mobile diagrams are vertical.
- [ ] Verify the mobile drawer with keyboard: focus trap, Escape, and focus restoration.
- [ ] Enable reduced motion and confirm animated surfaces are static and content visible.
- [ ] Inspect browser console errors and fix any application regressions.
