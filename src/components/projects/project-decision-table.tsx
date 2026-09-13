import { TechnicalDecision } from "@/types";

interface ProjectDecisionTableProps {
  decisions: TechnicalDecision[];
}

export function ProjectDecisionTable({ decisions }: ProjectDecisionTableProps) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <section id="decisions" aria-labelledby="decisions-heading" className="space-y-6">
      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          Engineering choices
        </div>
        <h2 id="decisions-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Decisions and the costs they introduce
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-3xl">
          Each choice addresses a concrete constraint and introduces a cost or limit that remains visible here.
        </p>
      </div>

      {/* Desktop Structured Table View */}
      <div className="hidden md:block rounded-xl border border-border bg-surface overflow-hidden shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted-surface/60 text-[11px] font-mono uppercase tracking-wider text-muted">
              <th scope="col" className="py-3.5 px-5 font-semibold w-1/4">
                Decision
              </th>
              <th scope="col" className="py-3.5 px-5 font-semibold w-5/12">
                Engineering Rationale
              </th>
              <th scope="col" className="py-3.5 px-5 font-semibold w-1/3">
                Accepted Trade-off
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-xs leading-relaxed">
            {decisions.map((item) => (
              <tr key={item.decision} className="hover:bg-muted-surface/30 transition-colors">
                <td className="py-4 px-5 font-semibold text-foreground align-top">
                  {item.decision}
                </td>
                <td className="py-4 px-5 text-muted align-top">
                  {item.rationale}
                </td>
                <td className="py-4 px-5 text-foreground/80 font-mono align-top">
                  {item.tradeoff}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View (prevents horizontal table scrolling) */}
      <div className="md:hidden space-y-4">
        {decisions.map((item) => (
          <div
            key={item.decision}
            className="rounded-lg border border-border bg-surface p-5 space-y-3"
          >
            <div className="text-sm font-bold text-foreground">
              {item.decision}
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold">
                Rationale
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {item.rationale}
              </p>
            </div>

            <div className="space-y-1 pt-1 border-t border-border/60">
              <div className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold">
                Accepted Trade-off
              </div>
              <p className="text-xs font-mono text-foreground/90 leading-relaxed">
                {item.tradeoff}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
