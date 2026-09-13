import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowRight, BookOpen } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";

export function ResearchPreview() {
  return (
    <section aria-labelledby="research-preview-heading" className="border-t border-border py-16 sm:py-24">
      <PageContainer>
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-accent">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold">
              Undergraduate thesis planning
            </span>
          </div>

          <div className="space-y-3">
            <h2
              id="research-preview-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              {siteConfig.researchPositioning}
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-3xl">
              Current work is literature review, problem refinement, and benchmark planning—not a completed thesis result. The focus is on how open-weight models should signal uncertainty when visual support is weak.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <ActionLink href="/research">
              <span>Review research direction</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
            <span className="text-xs font-mono text-muted">
              Current stage: topic discovery &amp; literature review
            </span>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
