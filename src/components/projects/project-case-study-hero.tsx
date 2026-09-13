import Link from "next/link";
import { Project } from "@/types";
import { StatusBadge } from "@/components/shared/status-badge";
import { TechnicalLabel } from "@/components/shared/technical-label";
import { ExternalLink } from "@/components/shared/external-link";
import { ArrowLeft, GitBranch } from "lucide-react";
import { AmbientBackground } from "@/components/ui/ambient-background";

interface ProjectCaseStudyHeroProps {
  project: Project;
}

export function ProjectCaseStudyHero({ project }: ProjectCaseStudyHeroProps) {
  return (
    <header className="relative isolate overflow-hidden rounded-[1.5rem] border border-border bg-surface-raised p-6 space-y-6 shadow-sm sm:p-9">
      <AmbientBackground variant="project" />
      <div className="relative space-y-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent focus-ring rounded-xs transition-colors py-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Back to project case studies</span>
        </Link>
      </nav>

      {/* Status & Domain Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <StatusBadge status={project.status} />
        <span className="text-xs font-mono text-muted">
          Domain: <strong className="text-foreground font-semibold">{project.primaryDomain}</strong>
        </span>
      </div>

      {/* Main Title & Lead Summary */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed max-w-3xl">
          {project.summary}
        </p>
      </div>

      {/* Metadata Strip */}
      <div className="rounded-lg border border-border bg-surface p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <span className="text-muted">Engineering Role: </span>
            <span className="font-semibold text-foreground">{project.role}</span>
          </div>
          <div className="hidden sm:block text-border">&bull;</div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-muted">Stack: </span>
            {project.stack.map((item) => (
              <TechnicalLabel key={item} variant="default">
                {item}
              </TechnicalLabel>
            ))}
          </div>
        </div>

        {/* Repository Link */}
        {project.repositoryUrl && (
          <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border/60">
            <ExternalLink href={project.repositoryUrl} className="py-1">
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                <span>View GitHub profile</span>
              </span>
            </ExternalLink>
          </div>
        )}
      </div>
      </div>
    </header>
  );
}
