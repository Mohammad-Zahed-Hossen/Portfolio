export function SkillsSummary() {
  const capabilities = [
    {
      group: "Python & AI/ML Foundations",
      summary:
        "Strong fundamentals in object-oriented and functional Python, NumPy, PyTorch model loading/inference, and scientific evaluation pipelines. Focus on inspectable code architectures over script-level experimentation.",
      coreAreas: ["Python 3.x", "PyTorch Inference", "NumPy", "Data Modeling", "Algorithmic Analysis"],
    },
    {
      group: "AI System Engineering & Retrieval Workflows",
      summary:
        "Architecting hybrid dense-sparse vector retrieval, cross-encoder reranking, citation validation contracts, deterministic test suites with Pytest, and abstention protocols for hallucination mitigation.",
      coreAreas: ["Hybrid Retrieval", "Vector Embeddings", "Reranking", "Pytest Test Fixtures", "Citation Validation"],
    },
    {
      group: "API & Full-Stack Application Development",
      summary:
        "Building production-ready backend APIs and modern web interfaces using FastAPI, Node.js, Next.js, and TypeScript. Experience designing role-based schemas, relational databases with PostgreSQL, and accessible UIs.",
      coreAreas: ["FastAPI", "TypeScript", "Next.js App Router", "PostgreSQL", "RESTful Architecture"],
    },
    {
      group: "Document Intelligence Tooling",
      summary:
        "Developing CPU-optimized document parsers, layout entropy analyzers, table structure recovery, and markdown transformation engines capable of processing complex multi-page inputs without GPU dependencies.",
      coreAreas: ["Layout Parsing", "PDF Structure Extraction", "Table Reconstruction", "Markdown Conversion"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Technical Capabilities
        </h2>
        <p className="text-sm text-muted">
          High-level competency areas demonstrated across verified software implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {capabilities.map((cap) => (
          <div
            key={cap.group}
            className="rounded-lg border border-border bg-surface p-5 space-y-3"
          >
            <div className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
              {cap.group}
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {cap.summary}
            </p>
            <div className="pt-1 flex flex-wrap gap-1.5">
              {cap.coreAreas.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xs bg-muted-surface px-2 py-0.5 text-[11px] font-mono text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
