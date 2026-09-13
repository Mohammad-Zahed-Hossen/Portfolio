import { CheckCircle2 } from "lucide-react";

export function PrinciplesList() {
  const principles = [
    {
      title: "Evidence over claims",
      description:
        "I treat repositories, deterministic fixtures, benchmark commands, and architectural artifacts as stronger evidence than broad capability claims.",
    },
    {
      icon: CheckCircle2,
      title: "Reproducible, local-first work when practical",
      description:
        "When practical, I start with local execution under known hardware limits. Local evaluation also makes iteration easier to inspect and repeat.",
    },
    {
      icon: CheckCircle2,
      title: "Clear technical documentation",
      description:
        "I document data flow, boundaries, and trade-offs so another reader can understand the chosen path and its limits.",
    },
    {
      icon: CheckCircle2,
      title: "Honest handling of uncertainty and limitations",
      description:
        "I record incomplete validation, edge cases, and conditions where a system can fail or needs human review.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Working Principles
        </h2>
        <p className="text-sm text-muted">
          The working standards behind the projects and research direction on this site.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="rounded-lg border border-border bg-surface p-5 space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-foreground">
                {principle.title}
              </h3>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
