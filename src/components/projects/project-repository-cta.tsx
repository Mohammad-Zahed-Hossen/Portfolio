import { ExternalLink } from "@/components/shared/external-link";
import { GitBranch, Terminal } from "lucide-react";

interface ProjectRepositoryCtaProps {
  repositoryUrl?: string;
  projectTitle: string;
}

export function ProjectRepositoryCta({
  repositoryUrl,
  projectTitle,
}: ProjectRepositoryCtaProps) {
  if (!repositoryUrl) return null;

  return (
    <div className="rounded-xl border border-border bg-muted-surface/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="space-y-1.5 max-w-lg">
        <div className="flex items-center gap-2 text-foreground font-semibold text-base">
          <GitBranch className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>Inspect Source Code &amp; Test Contracts</span>
        </div>
        <p className="text-xs text-muted leading-relaxed">
          The code repository for <strong className="text-foreground">{projectTitle}</strong> contains test fixtures, evaluation scripts, and architectural modules.
        </p>
      </div>

      <div className="shrink-0">
        <ExternalLink
          href={repositoryUrl}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-xs font-mono font-medium text-white hover:bg-accent-hover focus-ring transition-colors shadow-xs"
        >
          <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Open Repository</span>
        </ExternalLink>
      </div>
    </div>
  );
}
