# Luminous Technical Editorial Design

## Goal

Give the existing AI/ML engineering portfolio a distinct, calm, premium visual identity while preserving its evidence-led content model, route structure, accessibility behaviour, static generation, and truthful project status language.

## Visual thesis

The interface should read like an annotated technical publication rather than a startup landing page: deep, carefully lit surfaces frame serious content; electric blue communicates navigational and evidentiary emphasis; cyan and violet appear only as low-opacity atmospheric light. Editorial spacing and asymmetric hero composition create memorability without inventing product visuals or overstating outcomes.

## Tokens

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--background` | `#F5F7FB` | `#08111F` | Page ground |
| `--foreground` | `#102033` | `#EDF4FF` | Main copy |
| `--muted` | `#516174` | `#A6B5C8` | Supporting copy |
| `--surface` | `#FFFFFF` | `#0E1B2D` | Reading/card surface |
| `--surface-raised` | `#F9FBFF` | `#13243A` | Elevated content |
| `--border` | `#D7E0EC` | `#263A54` | Low-contrast dividers |
| `--accent` | `#1D5FD1` | `#67AEFF` | Primary action / focus |
| `--accent-strong` | `#1247AC` | `#9ACBFF` | Hover / emphasized text |
| `--violet` | `#7456D9` | `#9C82FF` | Limited project/aurora accent |
| `--cyan` | `#0A90A8` | `#45D6E8` | Limited project/aurora accent |
| `--glow` | `rgba(48, 112, 225, .14)` | `rgba(91, 159, 255, .18)` | Ambient layers only |

Text sits on solid or semi-solid surfaces wherever an aurora layer is present. Statuses retain labels and shapes; color is supplementary only.

## Typography and layout rhythm

Keep the self-hosted Next/Geist family. Headings use a tight `1.05–1.15` line-height and stronger size contrast: display `clamp(2.75rem, 7vw, 5.75rem)`, H1 `clamp(2.25rem, 5vw, 4.25rem)`, H2 `clamp(1.75rem, 3vw, 2.6rem)`, H3 `1.125–1.375rem`. Body remains at least 1rem with 1.6–1.75 line-height; labels use 0.6875–0.75rem mono text.

Adopt a 4px base rhythm with dominant section intervals of 80/112px desktop and 56/72px mobile. Content widths remain readable: standard 72rem, wide 80rem, prose 48rem. Cards use 14–20px radii only where elevation matters; thin rules replace unnecessary boxes.

## Component changes

| File / area | Change |
| --- | --- |
| `src/app/globals.css` | Replace neutral-only variables with the token map; add scoped aurora/grid, surface, button, focus, hover, and reduced-motion utilities. |
| `src/components/ui/ambient-background.tsx` | Server-safe decorative gradient/grid layer; accepts `hero`, `cta`, and project accent variants. |
| `src/components/ui/reveal.tsx` | Small client wrapper around `motion` viewport reveals; reduced motion renders immediately. |
| `src/components/ui/section-heading.tsx` or existing shared heading | Extend the established heading primitive with an editorial eyebrow/rule treatment rather than duplicate headings. |
| `src/components/home/hero-visual.tsx` | Decorative abstract signal-path visual, labelled as decorative and built with CSS/SVG—never a fake dashboard. |
| `src/components/home/*` | Recompose hero, proof, project cards, focus, research, and CTA using the new primitives and editorial rhythm. |
| `src/components/layout/site-header.tsx`, `mobile-nav.tsx`, `theme-toggle.tsx` | Add scroll-aware restrained glass, improved active state/toggle feedback, and a full-height translucent drawer without changing focus-trap semantics. |
| `src/components/projects/*` | Give cards/case study hero/overview/workflow/evidence/navigation an accent-aware editorial hierarchy; polish diagram containers and row interactions. |
| `src/components/projects/project-architecture-diagram.tsx` | Preserve existing architecture content. Desktop retains structured lanes; under `md`, each diagram is a vertically ordered stacked flow with connector labels between blocks—no horizontal scrolling. |
| route pages | Add page-level visual wrappers/reveals only where the route benefits; no new routes or invented content. |

## Motion inventory

`motion` is the sole added animation dependency.

| Interaction | Duration | Behaviour | Reduced motion |
| --- | --- | --- | --- |
| Hero group entrance | 360ms, 60ms stagger | opacity + 12px y offset | visible immediately |
| Section/card reveal | 320–420ms | opacity + 10px y offset once in viewport | visible immediately |
| Case-study diagram entrance | 360ms | container fade; no node-by-node animation | visible immediately |
| Button/card/nav feedback | 120–220ms CSS | small translate, border/shadow/underline changes | color/focus only |
| Aurora movement | 18–22s CSS | barely perceptible background position/opacity | static or absent |

No page wipes, bouncing, counters, looping spinners, cursor effects, or animation of paragraphs, tables, tags, and individual diagram nodes.

## Per-route treatment

- `/`: asymmetric hero with portrait frame and decorative evidence signal; refined credential strip; project-card accents by domain; alternating engineering/research editorial modules; high-intent aurora CTA.
- `/projects`: catalogue title area and card hierarchy; no fake thumbnails.
- `/projects/[slug]`: accent-aware project hero, readable metadata rail, layered architecture surface, vertically reflowed mobile diagram, evidence distinctions, polished adjacent navigation.
- `/research`, `/about`, `/resume`: reading-first editorial layouts with selective dividers, compact visual anchors, and restrained reveals.
- `/contact`: deliberate contact surface with limited ambient treatment; direct channels remain clear.
- `not-found`: compact editorial recovery state using the shared visual vocabulary.

## Accessibility and performance safeguards

- Preserve semantic landmarks, heading order, skip link, existing focus trap, Escape close, and trigger-focus restoration.
- Retain visible `:focus-visible` rings, 44px-adjacent mobile controls, descriptive status labels, and accessible image/SVG alternatives.
- Use `prefers-reduced-motion` both in CSS and `useReducedMotion`; content is never hidden pending animation.
- No Canvas, WebGL, images fabricated for decoration, or full-page blur. Aurora effects use pseudo-elements, transforms, and opacity only in the hero/selected project heroes/CTA/header/drawer.
- Avoid animating layout properties, use `next/image` for the portrait, preserve static server rendering, and keep client wrappers narrow.
- At narrow widths diagrams become a single-column sequence; tables retain their existing stacked-card presentation.

## Verification

Run `npm run typecheck`, `npm run lint`, and `npm run build`. Browser-check every requested route in both themes at 375, 768, 1280, and 1440px; validate reduced motion, no horizontal overflow, diagram readability, keyboard drawer close/focus restoration, and console errors.
