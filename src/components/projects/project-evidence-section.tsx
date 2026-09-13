import { ProjectEvidence } from "@/types";
import { EvidenceStatusBadge } from "@/components/shared/evidence-status";
import { FileText } from "lucide-react";

interface ProjectEvidenceSectionProps {
  evidence: ProjectEvidence[];
  benchmarkContext?: string;
}

export function ProjectEvidenceSection({
  evidence,
  benchmarkContext,
}: ProjectEvidenceSectionProps) {
  if (!evidence || evidence.length === 0) return null;

  return (
    <section id="evidence" aria-labelledby="evidence-heading" className="space-y-6">
      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          Evidence and evaluation
        </div>
        <h2 id="evidence-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          What is measured, implemented, or still planned
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-3xl">
          Status labels separate observed measurements and implemented contracts from active or planned validation work.
        </p>
      </div>

      {/* Prominent Benchmark Callout Banner (if present) */}
      {benchmarkContext && (
        <div className="rounded-xl border border-accent/40 bg-accent/5 p-5 sm:p-6 space-y-2">
          <div className="flex items-center gap-2 text-accent">
            <FileText className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Observed Local Benchmark Run
            </span>
          </div>
          <p className="text-base sm:text-lg font-mono font-bold text-foreground">
            {benchmarkContext}
          </p>
          <p className="text-sm leading-relaxed text-muted">
            One local observation, not a speed guarantee. Results vary with CPU, file complexity, and page density.
          </p>
        </div>
      )}

      {/* Structured Evidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {evidence.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border bg-surface p-5 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-muted uppercase tracking-wider font-semibold">
                  {item.label}
                </span>
                <EvidenceStatusBadge status={item.status} />
              </div>

              <div className="text-xl font-bold tracking-tight text-foreground">
                {item.value}
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {item.context}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
