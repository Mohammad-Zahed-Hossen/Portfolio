import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AboutIntro } from "@/components/about/about-intro";
import { PrinciplesList } from "@/components/about/principles-list";
import { SkillsSummary } from "@/components/about/skills-summary";
import { SocialLinks } from "@/components/shared/social-links";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description:
    "Background, academic merit scholarship, engineering principles, and technical specializations of Mohammad Zahed Hossen, final-year CSE student.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <PageContainer>
        <div className="space-y-16 max-w-4xl">
          <SectionHeading
            eyebrow="Profile &amp; Engineering Ethos"
            title="About Mohammad Zahed Hossen"
            description="Final-year Computer Science and Engineering student at East Delta University building verifiable AI systems, deterministic evaluation workflows, and practical tools."
            level="h1"
          />

          <AboutIntro />

          <div className="border-t border-border pt-12">
            <PrinciplesList />
          </div>

          <div className="border-t border-border pt-12">
            <SkillsSummary />
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-muted">
              Direct verification channels:
            </span>
            <SocialLinks />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
