import Link from "next/link";
import { Project } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  prev?: Project;
  next?: Project;
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Previous and next case studies"
      className="border-t border-border pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {/* Previous Case Study */}
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group rounded-lg border border-border bg-surface p-4 sm:p-5 flex flex-col justify-between hover:border-accent/80 hover:shadow-xs focus-ring transition-all duration-200 ease-out"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted mb-1">
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform duration-200 ease-out" aria-hidden="true" />
            <span>Previous Case Study</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors duration-150 line-clamp-1">
            {prev.title}
          </div>
          <div className="text-xs text-muted line-clamp-1 mt-1">
            {prev.primaryDomain}
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Case Study */}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-lg border border-border bg-surface p-4 sm:p-5 flex flex-col justify-between items-start sm:items-end text-left sm:text-right hover:border-accent/80 hover:shadow-xs focus-ring transition-all duration-200 ease-out"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted mb-1">
            <span>Next Case Study</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200 ease-out" aria-hidden="true" />
          </div>
          <div className="text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors duration-150 line-clamp-1">
            {next.title}
          </div>
          <div className="text-xs text-muted line-clamp-1 mt-1">
            {next.primaryDomain}
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
    </nav>
  );
}
