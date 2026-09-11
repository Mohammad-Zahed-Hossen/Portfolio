import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { researchAreas } from "@/content/research";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ResearchDirectionSection } from "@/components/research/research-direction-section";
import { ResearchAreaCard } from "@/components/research/research-area-card";

export const metadata: Metadata = {
  title: `Research Direction | ${siteConfig.name}`,
  description:
    "Undergraduate research trajectory in trustworthy generative MLLMs: evidence-grounded calibration and selective abstention by Mohammad Zahed Hossen.",
};

export default function ResearchPage() {
  return (
    <div className="py-12 sm:py-20">
      <PageContainer>
        <div className="space-y-16 max-w-4xl">
          <SectionHeading
            eyebrow="Academic &amp; Systems Exploration"
            title="Research Trajectory"
            description="Investigating calibration, evidence fidelity, and selective abstention in multimodal systems. This trajectory outlines undergraduate thesis planning and disciplined reproduction studies."
            level="h1"
          />

          {/* Core Direction & Methodology Rules */}
          <ResearchDirectionSection />

          {/* Detailed Focus Areas */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Active Investigation Topics
              </h2>
              <p className="text-sm text-muted">
                Three structured research areas prioritized for rigorous evaluation and benchmark design.
              </p>
            </div>

            <div className="space-y-6">
              {researchAreas.map((area) => (
                <ResearchAreaCard key={area.id} area={area} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
