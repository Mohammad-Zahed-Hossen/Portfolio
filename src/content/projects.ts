import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "evidenceops-litebridge",
    title: "EvidenceOps & LiteBridge",
    summary:
      "A local-first retrieval and evaluation system that checks evidence before it reaches a generator, using hybrid retrieval, citation validation, bounded retries, and abstention.",
    status: "active-development",
    visibility: "published",
    featured: true,
    caseStudyReady: true,
    role: "System Architect & Lead Developer",
    primaryDomain: "Reliable AI Systems",
    tags: [
      "Evidence-Grounded Retrieval",
      "Citation Validation",
      "Evaluation Workflows",
      "Calibrated Abstention",
      "Context Preparation",
    ],
    stack: ["Python", "FastAPI", "Hybrid Retrieval", "Pytest", "Vector Search"],
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen/EvidenceOps",
    problemSummary:
      "Retrieval systems can answer from shallow, conflicting, or unverified context without showing that the evidence is insufficient.",
    approachSummary:
      "Combines hybrid retrieval, reranking, citation validation, bounded retrieval loops, and deterministic fixtures without paid proprietary judge APIs.",
    highlights: [
      "Deterministic local evaluation fixtures",
      "Citation contracts that preserve source-to-claim links",
      "Bounded retrieval loops that cap query expansion",
      "Abstention when evidence does not meet the sufficiency threshold",
      "LiteBridge context preparation independent of the target generator",
    ],
    caseStudy: {
      problem:
        "A retrieval pipeline can still produce an answer when its context is shallow or contradictory. It can also lose the link between a claim and its source, or keep expanding a search when it cannot establish completion. EvidenceOps addresses those failure modes without relying on paid cloud judge APIs.",
      constraints: [
        "Local execution: verification contracts run on local hardware without paid third-party judge APIs.",
        "Bounded cost: retrieval loops use strict step budgets to avoid runaway latency and token use.",
        "Provider neutrality: context preparation stays separate from downstream prompt templates.",
        "Deterministic testing: verification logic is exercised through reproducible fixtures and contracts.",
      ],
      solutionSummary:
        "EvidenceOps validates retrieved chunks for source integrity, citation bounds, and sufficiency before they enter generation context. LiteBridge is its experimental, generator-independent layer for preparing normalized evidence packages and answer-ready prompts for different model backends.",
      architecture: {
        title: "EvidenceOps & LiteBridge Verification Pipeline",
        summary:
          "Conceptual data flow from user query through retrieval planning, hybrid search, reranking, validation contracts, sufficiency checks, and LiteBridge context adaptation.",
        statusNote: "Verified conceptual workflow implemented in local evaluation environment.",
        nodes: [
          {
            id: "user-query",
            label: "User Query",
            description: "Incoming natural language inquiry with domain constraints",
            category: "input",
          },
          {
            id: "retrieval-planning",
            label: "Retrieval Planning",
            description: "Decomposes complex requests and sets bounded search budget",
            category: "process",
          },
          {
            id: "hybrid-retrieval",
            label: "Hybrid Retrieval",
            description: "Dense semantic embeddings combined with sparse keyword matching",
            category: "process",
          },
          {
            id: "reranking",
            label: "Reranking",
            description: "Re-scores candidate chunks for precise topical relevance",
            category: "process",
          },
          {
            id: "evidence-validation",
            label: "Evidence Validation",
            description: "Checks chunk integrity, source metadata, and citation bounds",
            category: "validation",
          },
          {
            id: "sufficiency-check",
            label: "Sufficiency & Conflict",
            description: "Detects contradictory evidence and assesses information completeness",
            category: "validation",
          },
          {
            id: "bounded-decision",
            label: "Bounded Retry / Abstention",
            description: "Triggers targeted re-query if budget permits; otherwise abstains",
            category: "validation",
          },
          {
            id: "litebridge-adapter",
            label: "LiteBridge Context Adapter",
            description: "Normalizes evidence schema into provider-neutral prompt payload",
            category: "adapter",
          },
          {
            id: "answer-output",
            label: "Answer-Ready Output",
            description: "Validated context package ready for downstream generation",
            category: "output",
          },
        ],
        edges: [
          { from: "user-query", to: "retrieval-planning", label: "Query text" },
          { from: "retrieval-planning", to: "hybrid-retrieval", label: "Search plan" },
          { from: "hybrid-retrieval", to: "reranking", label: "Candidates" },
          { from: "reranking", to: "evidence-validation", label: "Ranked chunks" },
          { from: "evidence-validation", to: "sufficiency-check", label: "Verified text" },
          { from: "sufficiency-check", to: "bounded-decision", label: "Sufficiency score" },
          { from: "bounded-decision", to: "litebridge-adapter", label: "Sufficient context" },
          { from: "litebridge-adapter", to: "answer-output", label: "Normalized package" },
        ],
      },
      workflowSteps: [
        {
          stepNumber: 1,
          title: "Query Analysis & Budget Allocation",
          description:
            "The system identifies query intent and core entities, then sets a maximum of two search cycles to keep retrieval bounded.",
        },
        {
          stepNumber: 2,
          title: "Hybrid Dense-Sparse Candidate Generation",
          description:
            "The local corpus is searched with vector similarity and BM25 keyword retrieval to cover semantic matches and exact terms.",
        },
        {
          stepNumber: 3,
          title: "Reranking & Chunk Pruning",
          description:
            "A reranker re-scores the combined candidates so the most relevant passages move forward for validation.",
        },
        {
          stepNumber: 4,
          title: "Citation & Contract Validation",
          description:
            "Deterministic contracts check source chunk IDs, span boundaries, and text integrity. Citations that cannot be verified are flagged.",
        },
        {
          stepNumber: 5,
          title: "Sufficiency Assessment & Calibrated Abstention",
          description:
            "The system checks whether the collected evidence supports the query. If evidence conflicts or remains insufficient after the search budget is used, it abstains instead of prompting a guess.",
        },
        {
          stepNumber: 6,
          title: "LiteBridge Context Normalization",
          description:
            "LiteBridge packages verified citations, source spans, and context instructions into a vendor-neutral payload for a downstream model.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Hybrid Dense-Sparse Retrieval",
          rationale:
            "Dense retrieval captures semantic similarity but can miss exact identifiers, version tags, and code tokens. Sparse retrieval supplies that lexical precision.",
          tradeoff:
            "Maintains two index structures and requires reciprocal-rank-fusion tuning.",
        },
        {
          decision: "Bounded Planning Loop Over Open-Ended Agents",
          rationale:
            "An open-ended retrieval loop can keep searching when information is missing, making latency and API cost unpredictable.",
          tradeoff:
            "Some difficult multi-hop queries may need more than the allowed two search iterations.",
        },
        {
          decision: "Contract-Based Citation Validation",
          rationale:
            "Checking source chunk boundaries in code helps prevent a downstream model from attaching a claim to a missing or fabricated source.",
          tradeoff:
            "Depends on disciplined chunk metadata and schema compliance during ingestion.",
        },
        {
          decision: "Calibrated Abstention Path",
          rationale:
            "When evidence is insufficient, an explicit abstention is safer than a confident unsupported answer.",
          tradeoff:
            "Trades response coverage for answers that have support the system can inspect.",
        },
        {
          decision: "Provider-Neutral LiteBridge Adapter",
          rationale:
            "Keeps evidence preparation separate from a model's prompt syntax, so the prepared context is not tied to one generator.",
          tradeoff:
            "Adds a normalization step before context reaches the target model.",
        },
        {
          decision: "Local-First Fixtures Over Cloud Judge APIs",
          rationale:
            "Deterministic Pytest fixtures make verification repeatable without cloud API costs, network latency, or judge drift.",
          tradeoff:
            "Requires up-front work to build representative local fixtures and edge cases.",
        },
      ],
      evidence: [
        {
          label: "Citation Contracts",
          value: "Implemented",
          context: "Unit-tested contracts check source ID preservation and text-span integrity.",
          status: "implemented",
        },
        {
          label: "Bounded Loop Control",
          value: "Enforced",
          context: "A deterministic iteration cap prevents unbounded query expansion.",
          status: "implemented",
        },
        {
          label: "Local Test Fixtures",
          value: "Deterministic",
          context: "A Pytest suite exercises contradiction detection and abstention triggers.",
          status: "implemented",
        },
        {
          label: "Risk-Coverage Analysis",
          value: "Planned",
          context: "Detailed evaluation artifacts remain planned for a later validation cycle.",
          status: "planned",
        },
      ],
      limitations: [
        "Retrieval quality still depends on document chunking choices and corpus coverage.",
        "Local execution is limited by available workstation memory and compute resources.",
        "Current evaluation checks structural contracts and edge cases; it does not claim benchmark superiority over commercial retrieval stacks.",
        "Real-time external web search remains intentionally constrained for security, privacy, and dependency reasons.",
      ],
      nextSteps: [
        "Build a standardized multi-hop benchmark with contradictory and deceptive queries.",
        "Extend LiteBridge bindings for JSON-schema and function-calling context formats.",
        "Measure latency for hybrid reciprocal-rank fusion against single-index vector search.",
      ],
    },
  },
  {
    slug: "unified-markdown-converter",
    title: "Unified Markdown Converter",
    summary:
      "A CPU-oriented document-to-Markdown workflow that routes files to MarkItDown, PyMuPDF4LLM, or Docling to balance speed and layout fidelity.",
    status: "active-development",
    visibility: "published",
    featured: true,
    caseStudyReady: true,
    role: "Core Developer",
    primaryDomain: "Document Intelligence",
    tags: [
      "Document Intelligence",
      "CPU-First Processing",
      "Markdown Extraction",
      "Layout Routing",
      "Asset Preservation",
    ],
    stack: ["Python", "Document AI", "Parser Architecture", "Benchmarking", "FastAPI"],
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen/Docling",
    problemSummary:
      "Mixed document collections can lose table structure and figures when one parser is applied to every file type.",
    approachSummary:
      "Routes files by type and layout to CPU-friendly extraction paths while preserving Markdown structure and linked visual assets.",
    benchmarkContext:
      "113-page benchmark: completed in 208s, extracted 20 figures and 13 table images with 0 warnings.",
    highlights: [
      "CPU-oriented workflow without GPU requirements",
      "File and layout routing across specialized extractors",
      "Observed 113-page local run: 208s, 20 figures, 13 table images, 0 warnings",
      "Fast, Balanced, and Quality modes for different document needs",
      "Markdown output with linked figure and table-image assets",
    ],
    caseStudy: {
      problem:
        "PDFs, scans, presentations, and spreadsheets do not need the same extraction path. A single parser can miss scanned tables or apply expensive analysis to simple digital text. This workflow routes each file toward an appropriate CPU-oriented extractor while keeping Markdown and assets together.",
      constraints: [
        "CPU-oriented execution: the conversion pipeline runs on consumer and server CPUs without GPU acceleration.",
        "Structural preservation: table schemas, mathematical formulas, and reading order are retained for downstream RAG ingestion.",
        "Asset separation: embedded figures and complex tables are saved as image assets with Markdown references.",
        "Configurable trade-offs: users can choose throughput-oriented or layout-exhaustive extraction modes.",
      ],
      solutionSummary:
        "Unified Markdown Converter classifies documents by MIME type, font metadata, and layout complexity. It routes digital PDFs to high-speed text extraction, non-PDF office files to format-specific handlers, and complex or scanned pages to structural analysis, balancing CPU limits with output fidelity.",
      architecture: {
        title: "Tiered Document Routing & Extraction Flow",
        summary:
          "Inbound documents are classified and dispatched to specialized extraction engines based on file type and layout complexity, producing unified Markdown and linked asset folders.",
        statusNote: "Verified multi-engine routing pipeline implemented in local environment.",
        nodes: [
          {
            id: "upload-file",
            label: "Uploaded File",
            description: "PDF, Word, spreadsheet, slide, or image file",
            category: "input",
          },
          {
            id: "file-classifier",
            label: "File Classifier",
            description: "Inspects MIME type, digital font presence, and metadata",
            category: "process",
          },
          {
            id: "routing-decision",
            label: "Routing Decision",
            description: "Selects optimal engine based on file type and user mode",
            category: "process",
          },
          {
            id: "markitdown-engine",
            label: "MarkItDown (Office/General)",
            description: "Handles DOCX, XLSX, PPTX, and standard non-PDF text formats",
            category: "process",
          },
          {
            id: "pymupdf-engine",
            label: "PyMuPDF4LLM (Digital PDF)",
            description: "High-speed text and layout extraction for clean digital PDFs",
            category: "process",
          },
          {
            id: "docling-engine",
            label: "Docling (Scanned / Complex)",
            description: "Deep table parsing, layout analysis, and OCR for challenging pages",
            category: "process",
          },
          {
            id: "fallback-check",
            label: "Quality & Fallback Handler",
            description: "Monitors extraction confidence; falls back to Docling in Balanced mode",
            category: "validation",
          },
          {
            id: "output-assembly",
            label: "Markdown & Asset Packager",
            description: "Assembles clean Markdown text and links extracted image assets",
            category: "output",
          },
        ],
        edges: [
          { from: "upload-file", to: "file-classifier", label: "File stream" },
          { from: "file-classifier", to: "routing-decision", label: "File profile" },
          { from: "routing-decision", to: "markitdown-engine", label: "Non-PDF" },
          { from: "routing-decision", to: "pymupdf-engine", label: "Digital PDF" },
          { from: "routing-decision", to: "docling-engine", label: "Scanned/Complex" },
          { from: "pymupdf-engine", to: "fallback-check", label: "Initial output" },
          { from: "fallback-check", to: "docling-engine", label: "Low confidence fallback" },
          { from: "markitdown-engine", to: "output-assembly", label: "Converted text" },
          { from: "fallback-check", to: "output-assembly", label: "Verified text" },
          { from: "docling-engine", to: "output-assembly", label: "Structured text" },
        ],
      },
      workflowSteps: [
        {
          stepNumber: 1,
          title: "File Ingestion & Complexity Profiling",
          description:
            "The incoming file is checked for digital fonts, embedded raster images, page count, and layout entropy to establish its processing profile.",
        },
        {
          stepNumber: 2,
          title: "Engine Selection by Mode",
          description:
            "The selected Fast, Balanced, or Quality mode guides routing: non-PDF office files go to MarkItDown, digital text PDFs to PyMuPDF4LLM, and complex multi-column or scanned pages to Docling.",
        },
        {
          stepNumber: 3,
          title: "Structural Table & Figure Extraction",
          description:
            "Tables are converted to Markdown grid syntax. Figures and complex graphical tables are separated and saved in a dedicated assets directory.",
        },
        {
          stepNumber: 4,
          title: "Balanced Fallback Verification",
          description:
            "In Balanced mode, pages with garbled text, unparsed table blocks, or missing font maps are rerouted from the primary extractor to Docling.",
        },
        {
          stepNumber: 5,
          title: "Unified Markdown Serialization",
          description:
            "Text, headings, lists, table markup, and relative image-asset links are assembled into one UTF-8 Markdown document.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Specialized Engine Routing Over Single Monolithic Parser",
          rationale:
            "No single parser fits every format. PyMuPDF4LLM handles clean digital text quickly, while Docling handles more complex and scanned layouts.",
          tradeoff:
            "Requires maintaining several parser dependencies and their routing logic in one interface.",
        },
        {
          decision: "CPU-First Constraint Over GPU Reliance",
          rationale:
            "Many deployments do not have continuous GPU access. A CPU-oriented pipeline keeps the workflow usable without that requirement.",
          tradeoff:
            "Complex layout analysis on large scanned documents can take longer on CPU than on high-end GPUs.",
        },
        {
          decision: "Configurable Modes (Fast, Balanced, Quality)",
          rationale:
            "Different documents need different trade-offs: a clean digital manual may favor speed, while a complex filing may favor layout fidelity.",
          tradeoff:
            "Exposes mode choices instead of hiding the speed-versus-fidelity trade-off.",
        },
        {
          decision: "Local Extracted Asset Generation",
          rationale:
            "Saving figures and table images locally with relative Markdown links keeps text and visual evidence together for downstream inspection.",
          tradeoff:
            "Creates additional artifacts that must travel with the Markdown output.",
        },
        {
          decision: "In-Memory Intermediate File Handling",
          rationale:
            "Reduces disk I/O and temporary-file leakage during multi-step conversion and asset extraction.",
          tradeoff:
            "Peak memory use grows with page count and embedded-image resolution.",
        },
      ],
      evidence: [
        {
          label: "113-Page Benchmark PDF",
          value: "208 Seconds",
          context: "One observed local CPU run on a dense 113-page technical document.",
          status: "measured",
        },
        {
          label: "Figure Extraction",
          value: "20 Figures",
          context: "Twenty figure assets were cropped and referenced in the Markdown output.",
          status: "measured",
        },
        {
          label: "Table Extraction",
          value: "13 Table Images",
          context: "Thirteen table-image assets were extracted and linked alongside grid representations.",
          status: "measured",
        },
        {
          label: "Parser Warnings",
          value: "0 Warnings",
          context: "The observed run completed with no warnings.",
          status: "measured",
        },
        {
          label: "Benchmark Scope Note",
          value: "Local Observation",
          context: "Observed local benchmark context, not a general speed guarantee.",
          status: "measured",
        },
      ],
      limitations: [
        "Heavily degraded, low-DPI scans can still be slow on CPU-only infrastructure.",
        "Output structure reflects the source document; corrupted PDFs may need manual inspection.",
        "CPU-oriented operation trades peak parallel GPU throughput for lower infrastructure requirements.",
        "Formula extraction fidelity depends on the source PDF's font encoding.",
      ],
      nextSteps: [
        "Add parallel page chunking for multi-hundred-page PDF batches on multi-core CPUs.",
        "Add a layout-entropy metric to predict when Docling is needed before dispatch.",
        "Package the conversion workflow as a lightweight containerized service with health probes.",
      ],
    },
  },
  {
    slug: "schoolbridge",
    title: "SchoolBridge",
    summary:
      "An in-progress school-management application for role-aware attendance, grades, assignments, and notices across administrators, teachers, students, and guardians.",
    status: "in-progress",
    visibility: "published",
    featured: true,
    caseStudyReady: true,
    role: "Full-Stack Engineer",
    primaryDomain: "Full-Stack Product Engineering",
    tags: [
      "Full-Stack Web",
      "Role-Based Access",
      "Workflow Automation",
      "Institutional Platform",
      "Mobile Architecture",
    ],
    stack: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen/SchoolBridge-App",
    problemSummary:
      "Schools often manage attendance, grades, and guardian communication across disconnected paper records, spreadsheets, and messaging channels.",
    approachSummary:
      "Under active development: role-aware dashboards, consolidated attendance and grade workflows, and mobile-oriented portal interfaces.",
    highlights: [
      "Role-aware workflows for administrators, teachers, students, and guardians",
      "Attendance, gradebook, assignment, and notice modules in active development",
      "Responsive web frontend for desktop and mobile use",
      "Institutional validation remains planned, not completed",
    ],
    caseStudy: {
      problem:
        "Attendance, grade records, assignments, and guardian notices can live in separate paper, spreadsheet, and messaging workflows. SchoolBridge is being developed to organize those workflows by role without claiming a completed institutional deployment.",
      constraints: [
        "Role separation: students, guardians, teachers, and administrators need distinct authorization scopes and views.",
        "Mobile accessibility: teachers and guardians may access portal features from low-end smartphones with varying connectivity.",
        "Modular architecture: attendance, grades, and assignments need independent deployment and testing paths.",
        "Current maturity: the application is under development; the architecture reflects verified design and active code, not live production deployment.",
      ],
      solutionSummary:
        "SchoolBridge is being built as a role-aware management application with a Node/Express API, MongoDB data layer, and React and React Native interfaces. Its modules organize attendance, grade recording, assignments, and notices by the actions each role is allowed to take.",
      architecture: {
        title: "Role-Aware Institutional Application Architecture",
        summary:
          "User roles authenticate into scope-constrained dashboard environments backed by a modular Node/Express API and document data layer.",
        statusNote:
          "In-progress application architecture. Modules reflect the current planned and active development scope.",
        nodes: [
          {
            id: "user-roles",
            label: "User Roles (Admin, Teacher, Student, Guardian)",
            description: "Different actor profiles with distinct access requirements",
            category: "input",
          },
          {
            id: "auth-gateway",
            label: "Authenticated Access & Scope Guard",
            description: "Token-based authentication and role authorization checks",
            category: "process",
          },
          {
            id: "role-dashboards",
            label: "Role-Aware Dashboards",
            description: "Tailored UI interfaces rendering only permitted actions",
            category: "process",
          },
          {
            id: "attendance-module",
            label: "Attendance Tracking Module",
            description: "Daily and period-by-period student presence recording",
            category: "process",
          },
          {
            id: "gradebook-module",
            label: "Gradebook & Evaluation Module",
            description: "Exam score entry, weighted grading, and progress reporting",
            category: "process",
          },
          {
            id: "assignment-module",
            label: "Assignments & Notices Module",
            description: "Homework publishing, submissions, and institutional alerts",
            category: "process",
          },
          {
            id: "backend-api",
            label: "Backend & Data-Layer Design",
            description: "Node.js / Express API with role-aware validation middleware",
            category: "process",
          },
          {
            id: "mongodb-store",
            label: "Document Data Store (MongoDB)",
            description: "Role-aware data modelling for academic records and accounts",
            category: "storage",
          },
        ],
        edges: [
          { from: "user-roles", to: "auth-gateway", label: "Credentials" },
          { from: "auth-gateway", to: "role-dashboards", label: "Scoped session" },
          { from: "role-dashboards", to: "attendance-module", label: "Log presence" },
          { from: "role-dashboards", to: "gradebook-module", label: "Enter grades" },
          { from: "role-dashboards", to: "assignment-module", label: "Post notices" },
          { from: "attendance-module", to: "backend-api", label: "Attendance data" },
          { from: "gradebook-module", to: "backend-api", label: "Grading data" },
          { from: "assignment-module", to: "backend-api", label: "Notice data" },
          { from: "backend-api", to: "mongodb-store", label: "Persist records" },
        ],
      },
      workflowSteps: [
        {
          stepNumber: 1,
          title: "Role Authentication & Scope Binding",
          description:
            "Users authenticate, and the authorization layer issues a scoped token that limits later access to that role's permitted data.",
        },
        {
          stepNumber: 2,
          title: "Contextual Dashboard Rendering",
          description:
            "Teachers see attendance rosters and grade-entry work; guardians see child attendance summaries and grade reports; administrators see institutional metrics.",
        },
        {
          stepNumber: 3,
          title: "Attendance & Assessment Entry",
          description:
            "Teachers record attendance and submit term grades through structured inputs validated against academic evaluation rules.",
        },
        {
          stepNumber: 4,
          title: "Backend Validation & Persistence",
          description:
            "The Express backend validates payload types, applies academic-policy rules, and updates MongoDB documents.",
        },
        {
          stepNumber: 5,
          title: "Guardian & Student Notification",
          description:
            "Updated attendance alerts and published assignment notices are made available through student and guardian portal feeds.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Role-Aware Domain Segmentation Over Generic Dashboards",
          rationale:
            "Educators, guardians, and administrators need different actions and information. Separate views reduce irrelevant navigation and help enforce role boundaries.",
          tradeoff:
            "Requires separate UI views and navigation flows for each role.",
        },
        {
          decision: "Backend & Data-Layer Design (Node/Express + MongoDB)",
          rationale:
            "Flexible document schemas can accommodate changing assessment rubrics, grading scales, and historical records.",
          tradeoff:
            "Requires disciplined application-level validation to keep records consistent across school terms.",
        },
        {
          decision: "Mobile-First Accessibility (React & React Native)",
          rationale:
            "Teachers and guardians may rely on mobile devices rather than desktop workstations.",
          tradeoff:
            "Requires careful touch targets, bandwidth use, and offline-resilient UI state handling.",
        },
        {
          decision: "Modular Feature Staging",
          rationale:
            "Keeping attendance, grading, and notice modules distinct supports progressive testing before any institutional rollout.",
          tradeoff:
            "Requires clean internal API boundaries early in development.",
        },
      ],
      evidence: [
        {
          label: "Workflow Architecture",
          value: "In Progress",
          context: "Role-aware access control and dashboard views are under active implementation.",
          status: "in-progress",
        },
        {
          label: "Core Academic Modules",
          value: "In Progress",
          context: "Attendance logging, grade entry, and assignment posting remain under active code development.",
          status: "in-progress",
        },
        {
          label: "End-to-End Validation",
          value: "Planned",
          context: "Institutional pilot testing is planned after core-module integration.",
          status: "planned",
        },
        {
          label: "Production Deployment",
          value: "Not Claimed",
          context: "The project remains in active development; no live production impact is claimed.",
          status: "in-progress",
        },
      ],
      limitations: [
        "The application is under development; feature completeness and integration testing remain ongoing.",
        "Testing so far is simulated; an institutional pilot remains pending.",
        "No live production throughput, scalability, or impact metrics are claimed.",
      ],
      nextSteps: [
        "Finalize validation middleware for weighted, multi-component grade calculation.",
        "Complete React Native screen adaptation for guardian attendance alerts.",
        "Conduct structured user-testing sessions with local educators to refine grading workflows.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.visibility === "published");
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.visibility === "published");
}

export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const published = getPublishedProjects();
  const currentIndex = published.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? published[currentIndex - 1] : undefined,
    next: currentIndex < published.length - 1 ? published[currentIndex + 1] : undefined,
  };
}
