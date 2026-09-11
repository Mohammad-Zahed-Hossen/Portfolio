import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { ResumeDownload } from "@/components/resume/resume-download";
import { SocialLinks } from "@/components/shared/social-links";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description:
    "Curriculum vitae, academic merit scholarship, grouped technical skills, and engineering projects of Mohammad Zahed Hossen, final-year CSE student.",
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-20">
      <PageContainer>
        <div className="space-y-12 max-w-3xl">
          {/* Header & Download Handler */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Curriculum Vitae"
              title="Resume &amp; Qualifications"
              description="Comprehensive overview of academic standing, engineering competencies, verified software architectures, and teaching experience."
              level="h1"
            />

            <div className="shrink-0">
              <ResumeDownload />
            </div>
          </div>

          {/* Core Content */}
          <ResumeSummary />

          {/* Direct Verification Channels */}
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
