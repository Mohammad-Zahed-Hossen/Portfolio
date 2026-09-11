import { CheckCircle2 } from "lucide-react";

export function PrinciplesList() {
  const principles = [
    {
      title: "Evidence over claims",
      description:
        "Technical assertions must be backed by verifiable repositories, deterministic test fixtures, reproducible benchmark commands, or tangible architectural artifacts. Avoid marketing slogans and ungrounded capability claims.",
    },
    {
      icon: CheckCircle2,
      title: "Reproducible and local-first thinking when practical",
      description:
        "Design systems that run locally under predictable hardware constraints before delegating to external cloud services. A local evaluation suite prevents provider lock-in and enables rapid deterministic iteration.",
    },
    {
      icon: CheckCircle2,
      title: "Clear technical documentation",
      description:
        "Code is incomplete without lucid documentation of its architectural boundaries, data flow, and trade-offs. Explaining why an alternative approach was rejected is as vital as documenting the chosen implementation.",
    },
    {
      icon: CheckCircle2,
      title: "Honest handling of uncertainty and limitations",
      description:
        "No engineering solution is without trade-offs. Candidly identifying where a system fails, where edge cases degrade, and where human intervention remains necessary builds authentic engineering trust.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Working Principles
        </h2>
        <p className="text-sm text-muted">
          The core engineering tenets that guide my system architectures and research workflows.
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
