export function SkillsSummary() {
  const capabilities = [
    {
      group: "Python and AI/ML foundations",
      summary:
        "Python, NumPy, PyTorch inference, data modeling, and evaluation workflows used across the projects documented here.",
      coreAreas: ["Python 3.x", "PyTorch Inference", "NumPy", "Data Modeling", "Algorithmic Analysis"],
    },
    {
      group: "AI systems and retrieval workflows",
      summary:
        "Hybrid retrieval, reranking, citation validation, Pytest fixtures, and abstention-oriented evaluation for evidence-grounded systems.",
      coreAreas: ["Hybrid Retrieval", "Vector Embeddings", "Reranking", "Pytest Test Fixtures", "Citation Validation"],
    },
    {
      group: "API and full-stack development",
      summary:
        "FastAPI, Node.js, Next.js, TypeScript, role-aware application design, PostgreSQL, and accessible web interfaces.",
      coreAreas: ["FastAPI", "TypeScript", "Next.js App Router", "PostgreSQL", "RESTful Architecture"],
    },
    {
      group: "Document intelligence tooling",
      summary:
        "CPU-oriented document conversion, layout routing, table recovery, and Markdown transformation for multi-page inputs.",
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
          Technical areas represented in the documented projects and current study.
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
