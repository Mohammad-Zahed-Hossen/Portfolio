import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { ExternalLink } from "@/components/shared/external-link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background mt-auto py-10">
      <PageContainer>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Identity & positioning */}
          <div className="space-y-1.5 max-w-md">
            <div className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {siteConfig.positioningStatement}
            </p>
            <div className="text-xs font-mono text-muted">
              {siteConfig.location}
            </div>
          </div>

          {/* Direct links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <ExternalLink
              href={siteConfig.github}
              ariaLabel="Mohammad Zahed Hossen GitHub profile"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={siteConfig.linkedin}
              ariaLabel="Mohammad Zahed Hossen LinkedIn profile"
            >
              LinkedIn
            </ExternalLink>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-accent hover:underline focus-ring rounded-xs"
              aria-label={`Send email to ${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted">
          <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
          <span>Editorial Technical Portfolio &middot; Phase 1</span>
        </div>
      </PageContainer>
    </footer>
  );
}
