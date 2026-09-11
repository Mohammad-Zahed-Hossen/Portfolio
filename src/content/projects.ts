import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "evidenceops-litebridge",
    title: "EvidenceOps & LiteBridge",
    summary:
      "Reliable AI systems framework focused on local-first evidence-grounded retrieval, evaluation workflows, citation validation, bounded adaptive retrieval, and calibrated abstention for insufficient evidence.",
    status: "active-development",
    role: "System Architect & Lead Developer",
    primaryDomain: "Reliable AI Systems",
    tags: [
      "Evidence-Grounded Retrieval",
      "Citation Validation",
      "Evaluation Workflows",
      "Calibrated Abstention",
    ],
    stack: ["Python", "FastAPI", "Hybrid Retrieval", "Pytest", "Vector Search"],
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen",
    featured: true,
    problemSummary:
      "LLM answering pipelines frequently hallucinate or fail silently when retrieval is shallow, source context is contradictory, or verification contracts are absent.",
    approachSummary:
      "Built a modular system combining hybrid dense-sparse retrieval, citation validation contracts, bounded adaptive retrieval loops, and deterministic fixture-based evaluation without paid proprietary judge APIs.",
    highlights: [
      "Local-first evaluation workflows with deterministic test fixtures",
      "Citation validation contracts verifying claim-to-source fidelity",
      "Bounded adaptive retrieval loops preventing runaway query expansion",
      "Calibrated abstention when evidence sufficiency is below threshold",
    ],
  },
  {
    slug: "unified-markdown-converter",
    title: "Unified Markdown Converter",
    summary:
      "CPU-first document intelligence engine featuring intelligent file routing, structured Markdown conversion, asset extraction, and configurable speed and quality modes.",
    status: "active-development",
    role: "Core Developer",
    primaryDomain: "Document Intelligence",
    tags: [
      "Document Intelligence",
      "CPU-First Processing",
      "Markdown Extraction",
      "Layout Routing",
    ],
    stack: ["Python", "Document AI", "Parser Architecture", "Benchmarking"],
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen",
    featured: true,
    problemSummary:
      "Converting heterogeneous multi-page documents (PDFs, scans, reports) often breaks tabular structures, loses embedded figures, and incurs high GPU overhead.",
    approachSummary:
      "Engineered layout-aware routing that dispatches optimal CPU-friendly extraction pipelines, preserving table schemas, separating figures, and maintaining exact reading order.",
    benchmarkContext:
      "113-page benchmark: completed in 208s, extracted 20 figures and 13 table images with 0 warnings.",
    highlights: [
      "CPU-first architecture eliminating dependency on heavy GPU infrastructure",
      "Multi-tier layout routing balancing execution speed and extraction fidelity",
      "Verified 113-page benchmark: 208s, 20 figures, 13 table images, 0 warnings",
      "Configurable quality and speed modes for heterogeneous document formats",
    ],
  },
  {
    slug: "schoolbridge",
    title: "SchoolBridge",
    summary:
      "School-management product platform designed for role-aware user workflows across administrators, teachers, students, and guardians, covering attendance, grades, and assignments.",
    status: "in-progress",
    role: "Full-Stack Engineer",
    primaryDomain: "Full-Stack Product Engineering",
    tags: [
      "Full-Stack Web",
      "Role-Based Access",
      "Workflow Automation",
      "Institutional Platform",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen",
    featured: true,
    problemSummary:
      "Educational institutions struggle with disjointed administrative tools, scattered spreadsheets, and fragmented parent-teacher communications.",
    approachSummary:
      "Developing structured role-specific dashboards, consolidated grade and attendance tracking, and unified mobile-first portal interfaces under active development.",
    highlights: [
      "Role-aware workflows tailored for administration, faculty, and guardians",
      "Consolidated modules for attendance logging, gradebook management, and notices",
      "Responsive, accessible web frontend designed for desktop and mobile devices",
      "Active iterative development with planned institutional validation",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
