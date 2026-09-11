import Link from "next/link";
import { Project } from "@/types";
import { StatusBadge } from "@/components/shared/status-badge";
import { TechnicalLabel } from "@/components/shared/technical-label";
import { ArrowRight, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  showHighlights?: boolean;
}

export function ProjectCard({
  project,
  className,
  showHighlights = true,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-7 transition-colors hover:border-accent/80 focus-within:border-accent",
        className
      )}
    >
      <div className="space-y-4">
        {/* Header line: Status & Domain */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <StatusBadge status={project.status} size="sm" />
          <span className="text-xs font-mono text-muted">
            {project.primaryDomain}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent focus-ring rounded-xs transition-colors"
          >
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed">
          {project.summary}
        </p>

        {/* Benchmark Callout if available */}
        {project.benchmarkContext && (
          <div className="rounded-md border border-border/80 bg-muted-surface p-3 text-xs font-mono text-foreground/90">
            <span className="font-semibold text-accent">Benchmark: </span>
            {project.benchmarkContext}
          </div>
        )}

        {/* Highlights */}
        {showHighlights && project.highlights && project.highlights.length > 0 && (
          <div className="space-y-1.5 pt-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold">
              Verified Focus
            </div>
            <ul className="space-y-1 text-xs text-muted">
              {project.highlights.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="font-mono text-accent font-semibold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Labels (2 to 4 labels) */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <TechnicalLabel key={tag} variant="default">
              {tag}
            </TechnicalLabel>
          ))}
        </div>
      </div>

      {/* Footer link actions */}
      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 font-medium text-accent hover:underline focus-ring rounded-xs"
        >
          <span>{project.caseStudyReady ? "Read Case Study" : "View Overview"}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>

        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground inline-flex items-center gap-1.5 focus-ring rounded-xs py-1"
            aria-label={`${project.title} source code repository`}
          >
            <GitBranch className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </article>
  );
}
