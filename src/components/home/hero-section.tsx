import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { SocialLinks } from "@/components/shared/social-links";
import { ArrowRight, FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="py-12 sm:py-20">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="md:col-span-8 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-xs border border-border bg-muted-surface px-3 py-1 text-xs font-mono text-muted uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>AI/ML Engineering Portfolio</span>
            </div>

            {/* Heading & Subtitle */}
            <div className="space-y-2">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]"
              >
                {siteConfig.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-accent">
                {siteConfig.role} &middot; {siteConfig.institution}
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-foreground/90 font-medium leading-relaxed max-w-2xl">
              {siteConfig.positioningStatement}
            </p>

            {/* Supporting Paragraph with required keywords */}
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
              Focused on engineering verifiable systems across{" "}
              <strong className="text-foreground font-semibold">evidence-grounded retrieval</strong>,{" "}
              <strong className="text-foreground font-semibold">document intelligence</strong>, and{" "}
              <strong className="text-foreground font-semibold">trustworthy VLM/MLLM research</strong>. Dedicated to reproducible evaluation contracts rather than ungrounded claims.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover focus-ring transition-colors shadow-xs"
              >
                <span>View selected projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent focus-ring transition-colors"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>View resume</span>
              </Link>
            </div>

            {/* Profile links */}
            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>

          {/* Hero Headshot */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden border border-border bg-surface shadow-xs">
              <Image
                src="/assets/images/zahed-portrait.png"
                alt="Mohammad Zahed Hossen, final-year CSE student and AI/ML engineer"
                fill
                priority
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
