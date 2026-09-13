import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Mail, ArrowRight, FileText } from "lucide-react";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Reveal } from "@/components/ui/reveal";
import { ActionLink } from "@/components/ui/action-link";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative isolate overflow-hidden border-t border-border py-16 sm:py-24">
      <AmbientBackground variant="cta" />
      <PageContainer size="narrow">
        <Reveal className="relative rounded-[1.5rem] border border-border bg-surface-raised/80 p-8 text-center space-y-6 shadow-xl shadow-background/20 backdrop-blur-sm sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-xs border border-border bg-surface px-3 py-1 text-xs font-mono text-muted uppercase tracking-wider">
            <span>Contact</span>
          </div>

          <div className="space-y-3">
            <h2
              id="final-cta-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
            >
              Discuss an engineering or research opportunity
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              For AI/ML engineering roles, research internships, collaboration, or a project discussion, use the direct channels below.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover focus-ring transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 hover:shadow-sm shadow-xs"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Email {siteConfig.email}</span>
            </a>
            <ActionLink href="/resume" variant="secondary">
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>Review qualifications</span>
            </ActionLink>
            <ActionLink href="/projects" variant="text" className="text-muted hover:text-foreground">
              <span>Read case studies</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </ActionLink>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
