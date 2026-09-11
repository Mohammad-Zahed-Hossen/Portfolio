import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Mail, ArrowRight, FileText } from "lucide-react";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="border-t border-border bg-muted-surface/30 py-16 sm:py-20">
      <PageContainer size="narrow">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-xs border border-border bg-surface px-3 py-1 text-xs font-mono text-muted uppercase tracking-wider">
            <span>Next Steps</span>
          </div>

          <div className="space-y-3">
            <h2
              id="final-cta-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
            >
              Interested in Reliable Systems &amp; Evidence-Led AI?
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              I am actively open to discussions regarding AI/ML engineering roles, research internships, and engineering collaborations.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover focus-ring transition-colors shadow-xs"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Send direct email: {siteConfig.email}</span>
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent focus-ring transition-colors"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>View resume</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground focus-ring rounded-xs px-2 py-1"
            >
              <span>Projects catalogue</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
