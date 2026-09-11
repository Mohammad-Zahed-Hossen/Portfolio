# Mohammad Zahed Hossen - Engineering Portfolio

A production-grade, editorial technical portfolio representing **Mohammad Zahed Hossen**, final-year Computer Science & Engineering student specializing in reliable AI systems, evaluation workflows, document intelligence, and vision-language model research.

Built using Next.js App Router, strict TypeScript, Tailwind CSS v4, and `next-themes`.

---

## 1. Setup & Installation

### Prerequisites
- Node.js `v18.18.0` or later (tested on Node `v24.x`)
- npm `v10.x` or later

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 2. Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server |
| `npm run build` | Compiles production-ready bundle and validates routes |
| `npm run start` | Starts the production server locally |
| `npm run lint` | Runs ESLint analysis across the project |
| `npm run typecheck` | Executes strict TypeScript type validation (`tsc --noEmit`) |

---

## 3. Project Architecture & Folder Structure

```
PortFolio/
├── assets/                       # Source uncompressed assets & original documents
├── public/                       # Static public assets served by Next.js
│   └── assets/
│       ├── images/               # Optimized profile portraits & headshots
│       └── projects/             # Future verified screenshots organized by project slug
├── src/
│   ├── app/                      # Next.js App Router routes & layouts
│   │   ├── layout.tsx            # Root layout with fonts, theme provider, landmarks
│   │   ├── page.tsx              # Home route scaffold
│   │   ├── about/page.tsx        # About route scaffold
│   │   ├── projects/page.tsx     # Projects catalogue
│   │   ├── projects/[slug]/      # Dynamic case study route with generateStaticParams()
│   │   ├── research/page.tsx     # Research trajectory route
│   │   ├── resume/page.tsx       # Resume / CV overview route
│   │   ├── contact/page.tsx      # Contact route scaffold
│   │   ├── not-found.tsx         # 404 handler
│   │   ├── icon.tsx              # Dynamic SVG/PNG favicon generator
│   │   ├── robots.ts             # Search engine crawler instructions
│   │   ├── sitemap.ts            # Dynamic sitemap index
│   │   └── globals.css           # Tailwind v4 theme tokens & reduced motion reset
│   ├── components/
│   │   ├── layout/               # Shell components (SiteHeader, SiteFooter, MobileNav, PageContainer)
│   │   ├── providers/            # ThemeProvider (next-themes)
│   │   ├── shared/               # Reusable primitives (ThemeToggle, SectionHeading, ExternalLink)
│   │   └── ui/                   # Future UI primitives
│   ├── content/                  # Typed content records (single source of truth)
│   │   ├── site-config.ts        # Personal info, social links, positioning statement
│   │   ├── projects.ts           # Case studies data & honest statuses
│   │   └── research.ts           # Research directions & focus topics
│   ├── lib/
│   │   └── utils.ts              # cn helper combining clsx and tailwind-merge
│   └── types/
│       └── index.ts              # TypeScript interface definitions
├── package.json                  # Pinned dependencies & scripts
├── postcss.config.mjs            # PostCSS configuration for @tailwindcss/postcss
└── tsconfig.json                 # Strict TypeScript configuration
```

---

## 4. How to Add Assets

1. **Profile / Hero Photos**:
   - Save web-ready, cropped portraits in `public/assets/images/`.
   - Update references in `src/app/page.tsx` or `src/app/about/page.tsx` using `next/image` with meaningful `alt` text.

2. **Project Screenshots**:
   - Store screenshots in `public/assets/projects/[project-slug]/`:
     - Product overview screen
     - Architecture / data-flow diagram
     - Benchmark / evaluation output
     - Edge-state / mobile capture
   - Optimize images (WebP/PNG) before committing.

---

## 5. How to Update Site Configuration & Content

All personal details, project facts, and research topics are decoupled from UI components:

1. **Profile & Links (`src/content/site-config.ts`)**:
   - Update name, email, GitHub, LinkedIn, location, or the positioning statement.
   - Modifying `navItems` automatically updates both desktop and mobile navigation menus.

2. **Projects & Case Studies (`src/content/projects.ts`)**:
   - Add or update project records adhering to the `Project` interface.
   - Use honest status flags (`active-development`, `research-prototype`, `in-progress`).
   - `generateStaticParams()` in `src/app/projects/[slug]/page.tsx` and `src/app/sitemap.ts` automatically reflect new project slugs.

3. **Research Areas (`src/content/research.ts`)**:
   - Update research directions, focus topics, or notes to reflect thesis progress and reproduction studies.

---

## 6. Design System Tokens

Colors are defined in `src/app/globals.css` via CSS custom properties and mapped to Tailwind v4 theme variables:

| Token | Light Theme | Dark Theme | Purpose |
| :--- | :--- | :--- | :--- |
| `--background` | `#F8FAFC` | `#111827` | Page canvas background |
| `--foreground` | `#16181D` | `#F3F4F6` | Primary high-contrast text |
| `--muted` | `#4B5563` | `#9CA3AF` | Supporting copy & metadata |
| `--accent` | `#1D4ED8` | `#60A5FA` | Active links, highlights, focus rings |
| `--border` | `#D9E1EA` | `#374151` | Subtle card borders & dividers |
