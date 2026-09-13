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
    "Undergraduate thesis planning on calibration and selective abstention in generative multimodal language models.",
};

export default function ResearchPage() {
  return (
    <div className="py-12 sm:py-20">
      <PageContainer>
        <div className="space-y-16 max-w-4xl">
          <SectionHeading
            eyebrow="Undergraduate thesis planning"
            title="A research direction, not a claimed result"
            description="Current work covers literature review, problem refinement, and benchmark planning for calibration, evidence fidelity, and selective abstention in multimodal systems."
            level="h1"
          />

          {/* Core Direction & Methodology Rules */}
          <ResearchDirectionSection />

          {/* Detailed Focus Areas */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Research questions in formation
              </h2>
              <p className="text-sm text-muted">
                Three areas guiding literature review and future benchmark design; none represent completed findings.
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
