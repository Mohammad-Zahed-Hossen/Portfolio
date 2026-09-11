import { Project } from "@/types";
import { ShieldCheck, Cpu, CheckCircle2, AlertCircle } from "lucide-react";

interface ProjectOverviewGridProps {
  project: Project;
}

export function ProjectOverviewGrid({ project }: ProjectOverviewGridProps) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;

  return (
    <section id="overview" aria-labelledby="overview-heading" className="space-y-4">
      <h2 id="overview-heading" className="sr-only">
        Project Architectural Snapshot
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Core Problem */}
        <div className="rounded-lg border border-border bg-surface p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-muted">
            <AlertCircle className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
              Primary Challenge
            </span>
          </div>
          <p className="text-xs text-muted leading-relaxed line-clamp-3">
            {project.problemSummary}
          </p>
        </div>

        {/* Card 2: Core Constraint */}
        <div className="rounded-lg border border-border bg-surface p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-muted">
            <Cpu className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
              Primary Constraint
            </span>
          </div>
          <p className="text-xs text-muted leading-relaxed line-clamp-3">
            {caseStudy.constraints[0] || "Local-first operational boundary."}
          </p>
        </div>

        {/* Card 3: Solution Architecture */}
        <div className="rounded-lg border border-border bg-surface p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-muted">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
              Architecture Focus
            </span>
          </div>
          <p className="text-xs text-muted leading-relaxed line-clamp-3">
            {project.highlights[0] || project.approachSummary}
          </p>
        </div>

        {/* Card 4: Verification Status */}
        <div className="rounded-lg border border-border bg-surface p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-muted">
            <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
              Current Evidence
            </span>
          </div>
          <p className="text-xs text-muted leading-relaxed line-clamp-3">
            {project.benchmarkContext || caseStudy.evidence[0]?.context || "Verified implementation."}
          </p>
        </div>
      </div>
    </section>
  );
}
