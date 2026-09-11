import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowRight, BookOpen } from "lucide-react";

export function ResearchPreview() {
  return (
    <section aria-labelledby="research-preview-heading" className="border-t border-border py-16 sm:py-24">
      <PageContainer>
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-accent">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold">
              Undergraduate Thesis &amp; Research Trajectory
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
              An ongoing investigation into the vulnerabilities of multimodal LLMs when visual evidence is corrupted or insufficient. Focusing on reproducible evaluation with open-weight models and disciplined calibration metrics rather than unverified claims.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover focus-ring transition-colors shadow-xs"
            >
              <span>Explore research direction</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <span className="text-xs font-mono text-muted">
              Status: Topic Discovery &amp; Literature Review (2026)
            </span>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
