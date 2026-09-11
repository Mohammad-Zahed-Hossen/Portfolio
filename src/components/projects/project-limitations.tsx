import { AlertTriangle, Compass } from "lucide-react";

interface ProjectLimitationsProps {
  limitations: string[];
  nextSteps: string[];
}

export function ProjectLimitations({
  limitations,
  nextSteps,
}: ProjectLimitationsProps) {
  return (
    <section id="limitations" aria-labelledby="limitations-heading" className="space-y-8">
      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          Honest Assessment
        </div>
        <h2 id="limitations-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Known Limitations &amp; Development Roadmap
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-3xl">
          Transparent boundary conditions, operational edge cases, and targeted improvements prioritized for upcoming iterations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Known Limitations Block */}
        <div className="rounded-xl border border-border bg-surface p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            <h3 className="text-base font-bold text-foreground">
              Current Boundary Conditions
            </h3>
          </div>

          <ul className="space-y-2.5 text-xs text-muted">
            {limitations.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="font-mono text-amber-500 font-bold">&bull;</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Targeted Next Steps Block */}
        <div className="rounded-xl border border-border bg-surface p-6 space-y-4">
          <div className="flex items-center gap-2 text-accent">
            <Compass className="h-4 w-4" aria-hidden="true" />
            <h3 className="text-base font-bold text-foreground">
              Planned Next Steps
            </h3>
          </div>

          <ul className="space-y-2.5 text-xs text-muted">
            {nextSteps.map((step) => (
              <li key={step} className="flex items-start gap-2.5">
                <span className="font-mono text-accent font-bold">&rarr;</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
