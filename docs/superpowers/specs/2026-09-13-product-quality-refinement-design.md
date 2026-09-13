# Product Quality Refinement Design

## Scope

Refine the existing Luminous Technical Editorial portfolio for consistency, readability, route orientation, and interaction quality. No new theme concept, visual effects, animation patterns, routes, content claims, or dependencies are introduced.

## Decisions

- Refine the existing `SectionHeading` rather than add a second heading system.
- Add `ActionLink` only for internal navigation links; it renders Next `Link`, never a button or generic polymorphic control.
- Do not add a surface wrapper. Existing semantic panels are varied and a generic wrapper would conceal Tailwind rather than reduce meaningful duplication.
- Add active desktop case-study section orientation through a client `IntersectionObserver`, guarded by a `min-width: 1024px` media query and a stable viewport threshold.
- Raise body-like explanatory copy to `text-sm leading-relaxed`; retain `text-xs` for labels, compact metadata, tags, statuses, timestamps, and technical annotations.
- Preserve the current ESLint flat config: the Next warning is a non-blocking detection heuristic, not a correctness defect.

## Verification

Run typecheck, lint, production build, and browser audits at 375, 768, 1280, and 1440px in both themes. Confirm one H1 per route, no horizontal overflow, mobile stacked diagrams, desktop active-section navigation, mobile drawer Escape/focus restoration, and reduced-motion-visible content.
