import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExternalLink } from "@/components/shared/external-link";
import { Mail, MapPin, GitBranch, Link2, Clock, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Direct contact channels, recruitment inquiries, and research collaboration paths for Mohammad Zahed Hossen.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <PageContainer>
        <div className="space-y-12 max-w-2xl">
          <SectionHeading
            eyebrow="Direct Communication"
            title="Get in Touch"
            description="Available for AI/ML engineering positions, undergraduate research collaborations, and discussions regarding reliable evaluation contracts."
            level="h1"
          />

          <div className="space-y-6">
            {/* Primary Email Card */}
            <div className="rounded-lg border border-border bg-surface p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <h2 className="text-base font-semibold text-foreground">
                  Direct Email Channel
                </h2>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Email is the fastest and most dependable channel for formal recruitment inquiries, research proposals, or technical discussions.
              </p>
              <div className="pt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover focus-ring transition-colors shadow-xs"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Send Email: {siteConfig.email}</span>
                </a>
              </div>
            </div>

            {/* Profile Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-surface p-5 space-y-2">
                <div className="flex items-center gap-2 text-muted">
                  <GitBranch className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                    GitHub
                  </span>
                </div>
                <p className="text-xs text-muted">
                  Source code repositories, test fixtures, and active contributions.
                </p>
                <div className="pt-1">
                  <ExternalLink href={siteConfig.github}>
                    Mohammad-Zahed-Hossen
                  </ExternalLink>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5 space-y-2">
                <div className="flex items-center gap-2 text-muted">
                  <Link2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                    LinkedIn
                  </span>
                </div>
                <p className="text-xs text-muted">
                  Professional network, verified academic updates, and messaging.
                </p>
                <div className="pt-1">
                  <ExternalLink href={siteConfig.linkedin}>
                    mohammad-zahed-hossen
                  </ExternalLink>
                </div>
              </div>
            </div>

            {/* Resume Navigation Card */}
            <div className="rounded-lg border border-border bg-surface p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-md border border-border bg-muted-surface p-2 text-accent">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Looking for Qualifications &amp; Skills?
                  </div>
                  <div className="text-xs text-muted">
                    Review full academic snapshot and technical competency groups.
                  </div>
                </div>
              </div>
              <Link
                href="/resume"
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-accent hover:underline focus-ring rounded-xs shrink-0 py-1"
              >
                <span>View Resume</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Location & Timezone info */}
            <div className="rounded-lg border border-border bg-muted-surface p-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Location: {siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Timezone: UTC+6 (Bangladesh Standard Time)</span>
              </div>
            </div>

            {/* Restrained Scope Note */}
            <div className="rounded-md border border-border/80 bg-surface/50 p-4 text-xs font-mono text-muted">
              <span className="font-semibold text-foreground">Direct Access Notice: </span>
              In keeping with a static, secure, and privacy-respecting portfolio, this site uses direct email contact rather than an opaque form with third-party tracking scripts.
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
