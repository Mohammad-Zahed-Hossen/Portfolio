import { ResearchArea } from "@/types";
import { StatusBadge } from "@/components/shared/status-badge";

interface ResearchAreaCardProps {
  area: ResearchArea;
}

export function ResearchAreaCard({ area }: ResearchAreaCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6 sm:p-7 space-y-5">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <StatusBadge status={area.status} size="sm" />
          <span className="text-xs font-mono text-muted">ID: {area.id}</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {area.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed">
          {area.summary}
        </p>
      </div>

      {/* Topics */}
      <div className="space-y-2.5 border-t border-border pt-4">
        <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold">
          Key Investigation Questions &amp; Topics
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted">
          {area.focusTopics.map((topic) => (
            <li key={topic} className="flex items-start gap-2">
              <span className="font-mono text-accent font-semibold">&bull;</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Methodology if available */}
      {area.methodology && area.methodology.length > 0 && (
        <div className="space-y-2 border-t border-border/80 pt-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold">
            Experimental Setup
          </div>
          <ul className="space-y-1 text-xs text-muted">
            {area.methodology.map((m) => (
              <li key={m} className="flex items-start gap-2">
                <span className="font-mono text-accent font-semibold">&rarr;</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Note */}
      <div className="rounded-md bg-muted-surface p-3.5 text-xs font-mono text-muted leading-relaxed border border-border/60">
        <span className="font-semibold text-foreground">Methodological Note: </span>
        {area.notes}
      </div>
    </article>
  );
}
