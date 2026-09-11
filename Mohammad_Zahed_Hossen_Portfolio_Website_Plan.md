**IMPLEMENTATION HANDBOOK**

Professional Portfolio Website Plan

A durable, evidence-led roadmap for an AI and ML engineering portfolio

**Mohammad Zahed Hossen**

Final year CSE student | AI and ML systems | Chattogram, Bangladesh

## Purpose

This plan defines how to build, launch, and maintain a professional portfolio website that can grow with your skills, projects, and thesis work. It is not a visual template. It is a long-term career asset designed to show credible engineering work, research direction, and clear technical thinking.

The current CV and resume are useful reference material, but not the source of truth for the website. The portfolio should evolve with verified work: repositories, real screenshots, technical case studies, evaluations, learning progress, and thesis milestones.

| **Current public inputs** | **Use in the site** |
| --- | --- |
| Professional headshot | Hero image and About page. Use a consistent crop; avoid placing the photo on every section. |
| GitHub | https://github.com/Mohammad-Zahed-Hossen |
| LinkedIn | https://www.linkedin.com/in/mohammad-zahed-hossen-41374b391 |
| Contact email | mdzahedhossen7599@gmail.com |
| Deployment | Vercel; no custom domain is required for the first release. |

Document version: 1.0 | Prepared: September 2026

1 Product definition

## 1.1 Primary outcome

A recruiter, collaborator, or supervisor should understand three things quickly: who you are, what you can build, and what evidence supports those claims. The site should help secure AI/ML engineering and research opportunities; it is not a personal social profile or a list of every tool you have touched.

## 1.2 Audience and jobs to support

| **Audience** | **What they need** | **Portfolio response** |
| --- | --- | --- |
| Recruiters | Fast evidence of fit, skills, and a resume | Clear hero, selected projects, downloadable resume, direct contact. |
| Engineering interviewers | Architecture and technical judgment | Deep case studies with choices, constraints, test/evaluation evidence, and repository links. |
| Research supervisors | Direction, rigor, and potential | Research page that states the VLM/MLLM direction without overstating novelty or results. |
| Peers and collaborators | Work worth exploring | Readable project pages, public repos, and a simple way to contact you. |

## 1.3 Positioning statement

Use this working positioning, then revise only when it no longer reflects verified work:

Final-year CSE student building reliable AI systems, evaluation workflows, and practical full-stack tools. Focused on evidence-grounded retrieval, document intelligence, and trustworthy vision-language model research.

## 1.4 Product principles

- Evidence over claims. Show repositories, screenshots, architecture, measurements, and limitations.
- Depth over quantity. Three strong case studies are better than ten shallow cards.
- Long-term maintainability. Content must be data-driven, reusable, and easy to update.
- Professional motion. Animation supports hierarchy and feedback; it never hides weak content.
- Accessible and fast by default. A portfolio that is slow or hard to use undermines its engineering message.

2 Scope and content strategy

## 2.1 Release scope

| **Release 1 required** | **Release 1.1 after screenshots** | **Later only when earned** |
| --- | --- | --- |
| Home, About, Projects, 3 project detail pages, Research, Resume, Contact; responsive navigation; dark/light theme; metadata; Vercel deployment. | Real screenshots, architecture diagrams, project metrics, project filters, Open Graph image, improved written case studies. | Blog, interactive demos, technical articles, a CMS, analytics dashboard, multilingual pages. |

## 2.2 Content source of truth

Maintain one portfolio content file or Markdown source per project. A CV is a snapshot optimized for application scanning; the portfolio is a living evidence base. Before publishing any statement, verify it against the repository, current project documentation, a test/evaluation artifact, or a real deployment.

| **Content type** | **Required evidence before publishing** |
| --- | --- |
| Project outcome | Repository, screenshots, a reproducible command, test report, benchmark output, or actual user-visible result. |
| Technical skill | Used meaningfully in a project, coursework, research replication, or documented learning artifact. |
| Research interest | Current reading focus, reproduction work, thesis plan, or supervisor-approved direction. |
| Metric or claim | A clearly described measurement setup, date, hardware/context, and limitation. |

## 2.3 Projects to feature

| **Project** | **Role in portfolio** | **What must be shown** |
| --- | --- | --- |
| EvidenceOps and LiteBridge | Primary AI systems case study | Evidence-grounded retrieval, bounded adaptive planning, citation validation, abstention, deterministic evaluation, local-first trade-offs. |
| Unified Markdown Converter | Primary document intelligence case study | Routing strategy, quality modes, CPU-first constraints, output examples, real 113-page benchmark context. |
| SchoolBridge | Full-stack product case study | User roles, workflows, mobile/web UI, backend model, current completion status. Clearly mark incomplete work as in progress. |

Do not feature unfinished experimental repositories as equal to these three. They may appear later under “Experiments” only if they have a clear learning purpose and honest status.

3 Information architecture

## 3.1 Site map

| **Route** | **Purpose** | **Main conversion** |
| --- | --- | --- |
| / | Make the professional value proposition obvious | Projects or resume |
| /projects | Show a concise catalogue of verified work | Project case study |
| /projects/[slug] | Prove engineering thinking in depth | Repository, demo, or contact |
| /research | Show thesis trajectory and research discipline | Research focus or contact |
| /about | Provide human context without repeating the resume | Projects or contact |
| /resume | Make application materials easy to access | Download current PDF |
| /contact | Provide a reliable contact path | Send message or email |

## 3.2 Navigation rules

- Desktop: name mark on the left; Projects, Research, About, Resume, Contact on the right.
- Mobile: compact menu with visible primary CTA. Do not hide email or resume behind multiple layers.
- Keep the navigation persistent but visually light. Add an active route state and keyboard-focus treatment.
- Avoid a separate “Skills” page. Skills should be attached to proof in case studies and summarized on About.

## 3.3 Home page sequence

| **Section** | **Content** | **Design and interaction** |
| --- | --- | --- |
| Hero | Headshot, positioning statement, 2 CTAs, GitHub and LinkedIn | Strong type, calm visual entry, short motion only. |
| Proof strip | Education/role context and three focused capabilities | Compact text, no inflated counters. |
| Selected work | Three project cards | Hover feedback; each card links to a case study. |
| Engineering focus | AI systems, document intelligence, trustworthy MLLMs | Small explanatory blocks, not a logo wall. |
| Research direction | Current VLM/MLLM reliability direction and careful status | Link to Research; do not claim publication status. |
| Final CTA | Contact route and resume | Simple, unmistakable next step. |

4 Case study content system

## 4.1 Mandatory project page structure

- Project summary: title, one-sentence value, status, repository, and demo only if it is maintained.
- Problem: practical user or engineering problem, not generic marketing language.
- Constraints: hardware, cost, privacy, reliability, data availability, or time constraints that shaped the solution.
- Solution: architecture diagram plus explanation of core modules and data flow.
- Technical decisions: why these libraries/patterns were chosen, what alternatives were rejected, and trade-offs.
- Evidence: tests, benchmark results, example outputs, screenshots, or evaluation protocol. State the setup.
- Limitations and next steps: candidly state what remains weak or incomplete.
- Stack: concise list, secondary to the explanation above.

## 4.2 EvidenceOps and LiteBridge page outline

| **Section** | **Specific portfolio content** |
| --- | --- |
| Problem | Unreliable answers when retrieval is shallow, evidence is weak, or source support is missing. |
| Approach | Hybrid retrieval, reranking, bounded planning, citation validation, sufficiency/conflict handling, abstention. |
| Architecture visual | Query -> retrieval -> evidence checks -> bounded loop -> prepared context -> response/abstention. |
| Evidence | Unit-tested contracts and deterministic fixtures; explain what these prove and what they do not. |
| Trade-off | Local-first and provider-neutral design can reduce cost/control dependency but may limit real-time external data. |

## 4.3 Screenshot backlog

Add screenshots only after a screen tells a technical story. For each project, collect: one clear product screen, one architecture/data-flow figure, one evidence/metric view, and one mobile or edge-state screen when relevant. Use descriptive captions and optimize each image before committing it.

5 Design system and visual direction

## 5.1 Design target

The visual character should feel like a thoughtful engineering portfolio: editorial, modern, precise, and human. Avoid a “futuristic AI” appearance. The design needs enough personality to be memorable without making the work hard to read.

| **Token** | **Light mode** | **Dark mode** | **Use** |
| --- | --- | --- | --- |
| Surface | #F8FAFC | #111827 | Page background |
| Text | #16181D | #F3F4F6 | Primary copy |
| Muted | #4B5563 | #9CA3AF | Supporting copy |
| Accent | #1D4ED8 | #60A5FA | Links, focus, restrained emphasis |
| Border | #D9E1EA | #374151 | Structure and card edges |

## 5.2 Typography and layout

- Use one readable sans-serif family such as Geist, Inter, or Manrope. A monospace face may be used only for labels, dates, or code-like metadata.
- Create a clear type scale: display heading, page heading, section heading, body, caption. Do not use decorative fonts.
- Use a responsive 12-column desktop grid, a simpler mobile grid, generous whitespace, and a content width that supports comfortable reading.
- Use flat surfaces, subtle borders, and restrained shadows. Do not use glassmorphism throughout the site.

## 5.3 Headshot treatment

Use the supplied professional portrait once in the hero and once, optionally, on About. Crop consistently, preserve the full professional styling, provide a meaningful alt text such as “Mohammad Zahed Hossen in a dark green suit,” and do not use it as a background texture.

## 5.4 Explicit anti-patterns

No particle fields, auto-playing video, animated skill bars, random 3D objects, excessive gradient text, generic AI artwork, carousel-only project discovery, or hidden contact information. These patterns consume attention without proving engineering ability.

6 Motion and dynamic behavior

## 6.1 Motion contract

| **Interaction** | **Behavior** | **Guardrail** |
| --- | --- | --- |
| Initial load | Hero content fades and rises subtly | 180 to 350 ms; no long intro. |
| Section reveal | One-time opacity/translate reveal on viewport entry | Do not animate every paragraph. |
| Project card | Small elevation/border change and image scale | Keep text stable and readable. |
| Route change | Subtle content transition | Avoid full-screen transition effects. |
| Filters | Animated reflow of project cards | Filters are optional until enough projects exist. |
| Theme toggle | Short color transition | Store preference; prevent flash on load. |

## 6.2 Accessibility rule

Respect the operating-system reduced-motion preference. When it is enabled, remove non-essential transitions, parallax, looping elements, and large transforms. Motion must never be required to understand content or operate the interface.

## 6.3 Dynamic features worth building

- Theme preference with system default and local persistence.
- Project tags and client-side filtering once there are at least five published entries.
- A real contact form with validation, spam protection, success/error states, and email fallback.
- Content-driven project pages generated from typed local data or MDX.
- A reading/research timeline only if it is regularly updated with substantive entries.

7 Technical architecture

## 7.1 Recommended implementation stack

| **Layer** | **Recommendation** | **Reason** |
| --- | --- | --- |
| Framework | Next.js App Router with TypeScript | Static-first pages, clear routing, metadata support, strong Vercel fit. |
| Styling | Tailwind CSS plus design tokens | Responsive, consistent, easy to maintain. |
| Components | shadcn/ui selectively | Accessible primitives without a template-looking result. |
| Motion | Motion for React | Controlled declarative motion for React. |
| Content | Typed TypeScript data initially; MDX later if needed | No CMS/database overhead for a personal portfolio. |
| Validation | Zod and React Hook Form | Reliable form and content validation. |
| Hosting | Vercel | Straightforward Next.js deployment and preview workflow. |

## 7.2 Repository structure

Use a single Next.js repository. Keep content, domain types, components, and page composition separate:

src/app/ for routes and metadata; src/components/layout, ui, home, projects, research, and motion; src/content/ for project, research, experience, and site configuration data; src/lib/ for utilities, SEO, validation, and constants; src/types/ for shared domain models; public/images/ for optimized portraits, project screenshots, and social images.

## 7.3 Content model

| **Field** | **Project record requirement** |
| --- | --- |
| Identity | slug, title, short summary, status, dates, featured flag |
| Proof | repository URL, optional live URL, screenshots, architecture asset, result/metric references |
| Narrative | problem, constraints, solution, technical decisions, evidence, limitations, next steps |
| Taxonomy | tags, primary domain, stack, case-study visibility |
| Honesty controls | status values such as shipped, active development, research prototype, archived |

## 7.4 Security and privacy

- Never expose private API keys or personal credentials in browser code.
- Use environment variables only for approved public values; keep server secrets server-side.
- For the contact form, validate input on both client and server and add basic rate/spam protection.
- Do not publish phone number or precise home address unless there is a deliberate reason.
- Use a dedicated public contact email and link it via mailto as a fallback.

8 Build sequence and milestones

## 8.1 Phase plan

| **Phase** | **Deliverable** | **Definition of done** |
| --- | --- | --- |
| 0. Evidence preparation | Content inventory and asset folder | Three projects have verified facts, hero copy, resume PDF, profile photo, and placeholders for screenshots. |
| 1. Foundation | Next.js app, style tokens, layout, navigation | Responsive shell, fonts, light/dark theme, linting, formatting, route scaffold. |
| 2. Core public pages | Home, About, Resume, Contact | Real content, metadata, working links, accessible navigation. |
| 3. Project system | Projects index and dynamic detail route | Typed project data renders cards and three structured case studies. |
| 4. Research page | Focused long-term research narrative | Accurate VLM/MLLM direction; no unsupported novelty claims. |
| 5. Motion and polish | Intentional animation, image optimization | Motion contract applied; reduced-motion path checked. |
| 6. Quality and launch | Production deployment on Vercel | Audit complete; mobile, links, forms, metadata, and build verified. |
| 7. Maintenance | Monthly evidence update habit | Project status and resume remain current; screenshots replace placeholders. |

## 8.2 Suggested task order

- Write content before polishing visual effects.
- Build the home page and one project detail page first; use it to validate the content model.
- Create the remaining project pages from the validated template.
- Add screenshots and architecture diagrams only after pages work without them.
- Add animation after responsive layout, keyboard navigation, and content hierarchy are stable.
- Deploy previews early, but call the site “released” only after QA passes.

9 Quality assurance and release gate

## 9.1 Acceptance checklist

| **Area** | **Release requirement** |
| --- | --- |
| Content accuracy | Every featured claim is traceable to real work; incomplete projects are labeled honestly. |
| Responsive behavior | Test 360 px mobile, 768 px tablet, 1280 px laptop, and wide desktop. |
| Accessibility | Keyboard navigation, visible focus, semantic headings, alt text, color contrast, reduced-motion support. |
| Performance | Optimized local images; no unnecessary client components; no layout shift around hero images. |
| SEO and sharing | Per-page title/description, canonical URL, sitemap, robots, favicon, Open Graph image. |
| Reliability | No broken links, no console errors, form tested with valid/invalid inputs, graceful empty/error states. |
| Deployment | Production build succeeds; Vercel preview checked before promotion. |

## 9.2 Verification commands and tests

Run the project formatter, linter, type checker, production build, and any configured unit tests before deployment. Add Playwright or a similar browser test later for navigation, project route rendering, theme toggle, and contact form validation. Manually test on a real mobile device.

## 9.3 Target audit standard

Aim for high Lighthouse scores, but do not chase a number by removing necessary content. The practical target is a fast first load, stable layout, usable keyboard navigation, accurate metadata, and no serious accessibility findings. Document any trade-off that prevents a perfect score.

10 Long term maintenance

## 10.1 Monthly maintenance routine

| **When** | **Action** |
| --- | --- |
| After a meaningful project change | Update status, screenshots, metrics, limitations, and repository link. |
| After thesis/research progress | Refresh Research with verified milestones such as reproduction, benchmark work, or a supervisor-approved scope. |
| Before each application cycle | Update resume PDF, featured projects, positioning copy, and contact details. |
| Quarterly | Check links, dependency updates, deployed build, image sizes, accessibility, and outdated claims. |

## 10.2 Publishing policy

Add content only when it improves credibility. A small research note, benchmark replication, architecture explainer, or postmortem can be valuable. Thin posts created only to make the site look active are not valuable. Keep the portfolio selective and keep the strongest work at the top.

## 10.3 Growth path

- Add an “Experiments” section after several small but documented reproductions or prototypes exist.
- Add a writing section after at least three technical pieces are ready: one system design case study, one evaluation/reliability note, and one research-reading synthesis.
- Consider a custom domain only when the site content and deployment are stable. The Vercel URL is sufficient for the first release.
- Add analytics only to answer concrete questions, such as whether visitors reach project pages or resume downloads.

11 Decisions and launch checklist

## 11.1 Decisions already made

| **Decision** | **Direction** |
| --- | --- |
| Career direction | AI/ML engineering with a credible research trajectory in trustworthy VLM/MLLM systems. |
| Portfolio evidence | EvidenceOps/LiteBridge, Unified Markdown Converter, and SchoolBridge are the initial featured projects. |
| Visual approach | Professional theme, restrained motion, dynamic interactions where they improve usability. |
| Deployment | Vercel deployment; custom domain deferred. |
| Assets | Professional headshot available; project screenshots and diagrams will be added later. |
| Contact | mdzahedhossen7599@gmail.com, GitHub, and LinkedIn. |

## 11.2 Final pre-launch checklist

- Home page states a precise value proposition and has working Project and Resume CTAs.
- All three projects have honest status labels, repositories, and at least one substantive explanation.
- Headshot is optimized and correctly cropped; project screenshots have descriptive alt text.
- Resume download points to the current version, not a stale CV.
- Research page reflects ongoing work and avoids claims of completed research that does not yet exist.
- Mobile navigation, contact form, all external links, and theme preference work.
- Production build passes and the Vercel deployment is checked on desktop and phone.

## 11.3 Reference implementation resources

Use official documentation during implementation: [Next.js App Router](https://nextjs.org/docs/app) | [Next.js metadata and SEO](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) | [Motion for React](https://motion.dev/docs/react) | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | [Vercel Next.js deployment](https://vercel.com/docs/frameworks/nextjs)

Start with Phase 0. Do not begin with animation libraries or UI polish. Gather verified project facts and decide the first case-study content, then build the reusable project system around it.
