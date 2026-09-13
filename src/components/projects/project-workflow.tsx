import { WorkflowStep } from "@/types";

interface ProjectWorkflowProps {
  steps: WorkflowStep[];
}

export function ProjectWorkflow({ steps }: ProjectWorkflowProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section id="workflow" aria-labelledby="workflow-heading" className="space-y-6">
      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          System flow
        </div>
        <h2 id="workflow-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          What happens from input to output
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-3xl">
          The ordered stages from incoming input through processing, checks, and output assembly.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="rounded-lg border border-border bg-surface p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 transition-colors hover:border-accent/60"
          >
            {/* Step Badge */}
            <div className="flex items-center justify-center h-8 w-8 rounded-full border border-border bg-muted-surface text-accent font-mono font-bold text-xs shrink-0">
              {step.stepNumber}
            </div>

            {/* Step Body */}
            <div className="space-y-1.5 flex-1">
              <h3 className="text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
              {step.detail && (
                <div className="text-xs font-mono text-accent pt-1">
                  {step.detail}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
