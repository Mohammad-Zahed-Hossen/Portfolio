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
          Verification &amp; Evaluation
        </div>
        <h2 id="evidence-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Empirical Evidence &amp; System Contracts
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-3xl">
          Verifiable metrics, assertion contracts, and evaluation artifacts distinguishing measured outcomes from planned validation cycles.
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
          <p className="text-xs font-mono text-muted">
            Notice: Observed local benchmark context, not a general speed guarantee. Results vary with CPU frequency, file complexity, and page density.
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

              <p className="text-xs text-muted leading-relaxed">
                {item.context}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
