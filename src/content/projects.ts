import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "evidenceops-litebridge",
    title: "EvidenceOps & LiteBridge",
    summary:
      "Reliable AI systems framework focused on local-first evidence-grounded retrieval, evaluation workflows, citation validation, bounded adaptive retrieval, and calibrated abstention for insufficient evidence.",
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
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen",
    problemSummary:
      "LLM answering pipelines frequently hallucinate or fail silently when retrieval is shallow, source context is contradictory, or verification contracts are absent.",
    approachSummary:
      "Built a modular system combining hybrid dense-sparse retrieval, reranking, citation validation contracts, bounded adaptive retrieval loops, and deterministic fixture-based evaluation without paid proprietary judge APIs.",
    highlights: [
      "Local-first evaluation workflows with deterministic test fixtures",
      "Citation validation contracts verifying claim-to-source fidelity",
      "Bounded adaptive retrieval loops preventing runaway query expansion",
      "Calibrated abstention when evidence sufficiency is below threshold",
      "LiteBridge provider-neutral context adapter isolating model dependencies",
    ],
    caseStudy: {
      problem:
        "Standard retrieval-augmented generation (RAG) pipelines suffer from three core reliability failures: silent hallucination when retrieved chunks lack sufficient evidence, source-to-claim divergence where generated answers contradict provided citations, and infinite query expansion when an agentic planner cannot verify completion. Production systems frequently delegate quality checks to expensive cloud LLM judge APIs, which are neither deterministic nor local-first.",
      constraints: [
        "Local-first execution: Core verification contracts must execute on local hardware without paid third-party judge APIs.",
        "Bounded computational cost: Agent retrieval loops must have strict step budgets to prevent runaway latency and token spend.",
        "Provider neutrality: Context preparation must decouple retrieval artifacts from downstream model prompt templates.",
        "Deterministic testability: Verification logic must be assertable through reproducible test fixtures and contracts.",
      ],
      solutionSummary:
        "EvidenceOps establishes an evaluation-first retrieval architecture where every retrieved chunk is validated against strict sufficiency contracts before entering the generation context. Inside EvidenceOps, LiteBridge operates as an experimental, generator-independent context-preparation layer that standardizes evidence packages, normalizes citations, and prepares answer-ready prompts across different model backends.",
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
            "The system inspects query intent, extracts core entities, and assigns a strict iteration cap (maximum 2 search cycles) to prevent unconstrained agent loops.",
        },
        {
          stepNumber: 2,
          title: "Hybrid Dense-Sparse Candidate Generation",
          description:
            "Executes vector similarity search alongside BM25 sparse keyword retrieval across the local corpus, capturing both semantic nuance and exact lexical matches.",
        },
        {
          stepNumber: 3,
          title: "Reranking & Chunk Pruning",
          description:
            "Re-scores combined candidate lists through a reranker to elevate top-k passages and discard low-scoring noise before validation.",
        },
        {
          stepNumber: 4,
          title: "Citation & Contract Validation",
          description:
            "Applies deterministic schema contracts to verify source chunk IDs, span boundaries, and text integrity. Unverifiable citations are flagged immediately.",
        },
        {
          stepNumber: 5,
          title: "Sufficiency Assessment & Calibrated Abstention",
          description:
            "Evaluates whether the collected evidence directly supports the query predicates. If evidence is conflicting or insufficient and the search budget is exhausted, the pipeline explicitly abstains rather than prompting the model to guess.",
        },
        {
          stepNumber: 6,
          title: "LiteBridge Context Normalization",
          description:
            "LiteBridge formats verified citations, source spans, and context instructions into a vendor-neutral payload, allowing seamless handoff to any local or external model.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Hybrid Dense-Sparse Retrieval",
          rationale:
            "Dense vector embeddings capture semantic intent but frequently miss exact identifiers, version tags, and code tokens. Sparse retrieval balances lexical precision with semantic recall.",
          tradeoff:
            "Requires maintaining two index structures and tuning reciprocal rank fusion parameters, adding modest index overhead.",
        },
        {
          decision: "Bounded Planning Loop Over Open-Ended Agents",
          rationale:
            "Unconstrained agent loops in production cause non-deterministic response times, unpredictable API costs, and infinite search traps when data is missing.",
          tradeoff:
            "May occasionally fail on extremely difficult multi-hop queries that genuinely require more than two search iterations.",
        },
        {
          decision: "Contract-Based Citation Validation",
          rationale:
            "Verifying source chunk boundaries deterministically in code prevents downstream models from attributing claims to non-existent or fabricated sources.",
          tradeoff:
            "Requires rigorous source chunking metadata and schema compliance at ingestion time.",
        },
        {
          decision: "Calibrated Abstention Path",
          rationale:
            "In high-stakes technical environments, an explicit 'insufficient evidence to answer' response is far safer than a confident hallucination.",
          tradeoff:
            "Reduces raw response coverage percentage in favor of verifiable precision.",
        },
        {
          decision: "Provider-Neutral LiteBridge Adapter",
          rationale:
            "Decouples evidence preparation from proprietary model prompt syntax, preventing vendor lock-in and allowing easy model switching.",
          tradeoff:
            "Adds an intermediate normalization step before feeding context to the target generation model.",
        },
        {
          decision: "Local-First Fixtures Over Cloud Judge APIs",
          rationale:
            "Using deterministic Pytest fixtures allows continuous integration testing without cloud API costs, network latency, or non-deterministic judge drift.",
          tradeoff:
            "Requires investing engineering effort upfront to construct representative local test fixtures and edge-case datasets.",
        },
      ],
      evidence: [
        {
          label: "Citation Contracts",
          value: "Implemented",
          context: "Unit-tested assertion contracts verifying source ID preservation and text span integrity.",
          status: "implemented",
        },
        {
          label: "Bounded Loop Control",
          value: "Enforced",
          context: "Deterministic iteration cap preventing query explosion and infinite search cycles.",
          status: "implemented",
        },
        {
          label: "Local Test Fixtures",
          value: "Deterministic",
          context: "Pytest evaluation suite testing contradiction detection and abstention triggers.",
          status: "implemented",
        },
        {
          label: "Risk-Coverage Analysis",
          value: "Planned",
          context: "Detailed evaluation artifacts will be added after the current validation cycle is complete.",
          status: "planned",
        },
      ],
      limitations: [
        "Retrieval quality remains heavily dependent on initial document chunking granularity and corpus indexing coverage.",
        "Local model execution is bounded by available workstation compute resources (RAM and CPU/GPU memory).",
        "Current evaluation validates structural contracts and edge-case behavior, but does not yet claim benchmark superiority over large enterprise commercial retrieval stacks.",
        "Real-time external web search is intentionally constrained to preserve security, privacy, and dependency boundaries.",
      ],
      nextSteps: [
        "Construct a standardized multi-hop retrieval benchmark suite covering contradictory and deceptive queries.",
        "Expand LiteBridge adapter bindings to support structured JSON-schema and function-calling context formats.",
        "Measure latency profiles comparing hybrid reciprocal rank fusion against single-index vector search.",
      ],
    },
  },
  {
    slug: "unified-markdown-converter",
    title: "Unified Markdown Converter",
    summary:
      "CPU-first document intelligence engine featuring intelligent file routing, structured Markdown conversion, asset extraction, and configurable speed and quality modes.",
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
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen",
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
      "Clean asset extraction preserving figure and table images alongside text",
    ],
    caseStudy: {
      problem:
        "Extracting clean Markdown from enterprise documents is notoriously difficult. Digital PDFs, complex scanned reports, presentation slides, and spreadsheets each demand fundamentally different parsing strategies. Single-engine parsers either choke on scanned tables or apply heavy vision models to simple digital text, inflating processing costs and demanding dedicated GPU clusters for routine document tasks.",
      constraints: [
        "CPU-first execution: Entire conversion pipeline must run efficiently on consumer and server CPUs without requiring GPU acceleration.",
        "Structural preservation: Table schemas, mathematical formulas, and reading order must remain intact for downstream RAG ingestion.",
        "Asset separation: Embedded figures and complex tables must be saved as clean image assets with Markdown references.",
        "Configurable trade-offs: Users must be able to choose between throughput-oriented and layout-exhaustive extraction modes.",
      ],
      solutionSummary:
        "Unified Markdown Converter employs a tiered layout-routing architecture. Inbound documents are classified by MIME type, font metadata, and layout complexity. Digital PDFs are routed to high-speed text extractors, non-PDF office files to format-specific handlers, and visually complex or scanned pages to structural analysis engines—dynamically balancing speed, CPU constraints, and output fidelity.",
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
            "The incoming document is analyzed for digital font streams, embedded raster images, page count, and layout entropy to determine its processing profile.",
        },
        {
          stepNumber: 2,
          title: "Engine Selection by Mode",
          description:
            "Depending on the configured profile (Fast, Balanced, or Quality), the router dispatches the file: non-PDF office files route to MarkItDown, digital text PDFs to PyMuPDF4LLM, and complex multi-column or scanned pages to Docling.",
        },
        {
          stepNumber: 3,
          title: "Structural Table & Figure Extraction",
          description:
            "Tables are converted to standardized Markdown grid syntax. Embedded visual figures and complex graphical tables are isolated, cropped, and saved to a dedicated assets directory.",
        },
        {
          stepNumber: 4,
          title: "Balanced Fallback Verification",
          description:
            "When operating in Balanced mode, if the primary high-speed extractor detects garbled text, unparsed table blocks, or missing font maps, it seamlessly reroutes difficult pages to Docling.",
        },
        {
          stepNumber: 5,
          title: "Unified Markdown Serialization",
          description:
            "Final textual content, headings, lists, table markup, and relative image asset links are assembled into a single clean, UTF-8 encoded Markdown document.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Specialized Engine Routing Over Single Monolithic Parser",
          rationale:
            "No single parser excels at all formats. PyMuPDF4LLM is orders of magnitude faster for digital text, while Docling provides superior structural understanding for complex and scanned layouts.",
          tradeoff:
            "Requires maintaining multiple parser dependencies and routing logic in a unified interface.",
        },
        {
          decision: "CPU-First Constraint Over GPU Reliance",
          rationale:
            "Most real-world deployments and edge environments lack continuous GPU access. A CPU-optimized pipeline guarantees broad accessibility and deterministic deployment costs.",
          tradeoff:
            "Complex layout analysis on large scanned documents takes longer on CPU than on high-end GPUs.",
        },
        {
          decision: "Configurable Modes (Fast, Balanced, Quality)",
          rationale:
            "Different use cases demand different trade-offs: indexing thousands of clean digital manuals requires speed, whereas converting an executive legal filing requires maximum layout fidelity.",
          tradeoff:
            "Exposes configuration choices to the user rather than providing a single opaque black-box speed/quality trade-off.",
        },
        {
          decision: "Local Extracted Asset Generation",
          rationale:
            "Saving figures and table images locally with clean relative Markdown links ensures downstream RAG systems can inspect both text and visual evidence.",
          tradeoff:
            "Generates additional file artifacts that must be packaged and managed alongside the Markdown output.",
        },
        {
          decision: "In-Memory Intermediate File Handling",
          rationale:
            "Minimizes disk I/O bottlenecks and temporary file leakage during multi-step conversion and asset extraction.",
          tradeoff:
            "Peak memory consumption scales with document page count and embedded image resolutions.",
        },
      ],
      evidence: [
        {
          label: "113-Page Benchmark PDF",
          value: "208 Seconds",
          context: "Single observed local benchmark run on a dense 113-page technical document on CPU.",
          status: "measured",
        },
        {
          label: "Figure Extraction",
          value: "20 Figures",
          context: "Cleanly cropped and referenced in Markdown output with zero corruption.",
          status: "measured",
        },
        {
          label: "Table Extraction",
          value: "13 Table Images",
          context: "Complex multi-cell tables extracted and linked alongside grid representations.",
          status: "measured",
        },
        {
          label: "Parser Warnings",
          value: "0 Warnings",
          context: "Completed with zero fatal errors or uncaught conversion exceptions.",
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
        "Very complex, low-DPI scanned documents with heavy degradation can still be slow on CPU-only infrastructure.",
        "Output structural quality inherently reflects source document formatting: corrupted source PDFs may require manual post-inspection.",
        "CPU-first operation deliberately trades peak parallel GPU throughput for low operational cost and universal deployment.",
        "Mathematical formula extraction fidelity depends on font encoding quality in the source PDF.",
      ],
      nextSteps: [
        "Implement parallel multi-process page chunking for multi-hundred page PDF batches on multi-core CPUs.",
        "Add an automated layout entropy metric to predict Docling necessity prior to page dispatch.",
        "Package conversion workflows as a lightweight containerized microservice with health probes.",
      ],
    },
  },
  {
    slug: "schoolbridge",
    title: "SchoolBridge",
    summary:
      "School-management product platform designed for role-aware user workflows across administrators, teachers, students, and guardians, covering attendance, grades, and assignments.",
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
    repositoryUrl: "https://github.com/Mohammad-Zahed-Hossen",
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
    caseStudy: {
      problem:
        "Secondary schools and colleges frequently operate on fragmented communication channels: attendance is recorded on paper, grade records live in disconnected spreadsheets, and guardian notices are sent through unverified messaging groups. This fragmentation creates severe coordination friction, data loss, and administrative overhead for faculty.",
      constraints: [
        "Strict role separation: Students, guardians, teachers, and administrators require distinct authorization scopes and tailored views.",
        "Mobile-first accessibility: Teachers and guardians frequently access portal features from low-end smartphones with varying connectivity.",
        "Modular architecture: Core features (attendance, grades, assignments) must be independently deployable and testable.",
        "Honest stage of maturity: Application is actively under development; architecture represents verified design and active code, not a live production deployment.",
      ],
      solutionSummary:
        "SchoolBridge establishes a unified, role-aware management architecture. Built with a Node/Express backend and MongoDB data store alongside React and React Native client interfaces, the platform structures academic workflows into dedicated role modules—streamlining attendance tracking, grade recording, and school-wide communications.",
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
            "Users authenticate with verified credentials. The authorization layer issues a scoped token restricting subsequent data access to the actor's authorized domain.",
        },
        {
          stepNumber: 2,
          title: "Contextual Dashboard Rendering",
          description:
            "Teachers see pending attendance rosters and grade entry sheets; guardians see child attendance summaries and grade reports; administrators see institutional metrics.",
        },
        {
          stepNumber: 3,
          title: "Attendance & Assessment Entry",
          description:
            "Teachers record attendance with one-tap status toggles and submit term grades through structured input grids validated against academic evaluation rules.",
        },
        {
          stepNumber: 4,
          title: "Backend Validation & Persistence",
          description:
            "The Express backend validates payload types, enforces institutional academic policies, and updates documents in MongoDB.",
        },
        {
          stepNumber: 5,
          title: "Guardian & Student Notification",
          description:
            "Updated attendance alerts and published assignment notices become instantly accessible on student and guardian mobile portal feeds.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Role-Aware Domain Segmentation Over Generic Dashboards",
          rationale:
            "Educators, guardians, and administrators have vastly different cognitive loads. Segmenting views ensures intuitive navigation and eliminates inadvertent cross-role data leaks.",
          tradeoff:
            "Requires creating and maintaining distinct UI views and navigation workflows for each user category.",
        },
        {
          decision: "Backend & Data-Layer Design (Node/Express + MongoDB)",
          rationale:
            "Flexible document schemas accommodate evolving academic assessment rubrics, varied grading scales, and irregular historical institutional records.",
          tradeoff:
            "Requires disciplined application-level schema validation to maintain data consistency across school terms.",
        },
        {
          decision: "Mobile-First Accessibility (React & React Native)",
          rationale:
            "Guardians and teachers in regional educational institutions predominantly rely on mobile devices rather than desktop workstations.",
          tradeoff:
            "Demands careful touch-target sizing, bandwidth optimization, and offline-resilient UI state handling.",
        },
        {
          decision: "Modular Feature Staging",
          rationale:
            "Developing attendance, grading, and notice modules as discrete services allows progressive testing with educators before full institutional rollout.",
          tradeoff:
            "Requires maintaining clean internal API boundaries between modules early in the development lifecycle.",
        },
      ],
      evidence: [
        {
          label: "Workflow Architecture",
          value: "In Progress",
          context: "Active implementation of role-aware access control and dashboard views.",
          status: "in-progress",
        },
        {
          label: "Core Academic Modules",
          value: "In Progress",
          context: "Attendance logging, grade entry, and assignment posting modules under active code development.",
          status: "in-progress",
        },
        {
          label: "End-to-End Validation",
          value: "Planned",
          context: "Structured institutional pilot testing planned upon completion of core module integration.",
          status: "planned",
        },
        {
          label: "Production Deployment",
          value: "Not Claimed",
          context: "Project is in active development; no live production impact is currently claimed.",
          status: "in-progress",
        },
      ],
      limitations: [
        "The application is actively under development; feature completeness and integration testing are ongoing.",
        "User testing has been conducted in simulated environments; institutional pilot deployment remains pending.",
        "No live production throughput, scalability, or impact metrics are claimed at this stage of development.",
      ],
      nextSteps: [
        "Finalize backend validation middleware for weighted multi-component grade calculation.",
        "Complete React Native mobile screen adaptation for guardian attendance push alerts.",
        "Conduct structured user testing sessions with local educators to refine grading workflows.",
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
