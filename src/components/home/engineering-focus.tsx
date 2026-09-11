import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShieldCheck, FileSpreadsheet, Eye } from "lucide-react";

export function EngineeringFocus() {
  const focusAreas = [
    {
      icon: ShieldCheck,
      title: "Reliable AI Systems",
      eyebrow: "Systems & Retrieval",
      description:
        "Building local-first evaluation frameworks with deterministic test fixtures, citation validation contracts, and explicit abstention when retrieval evidence is weak or contradictory.",
    },
    {
      icon: FileSpreadsheet,
      title: "Document Intelligence",
      eyebrow: "Parsing & Conversion",
      description:
        "Engineering CPU-first parsers that convert multi-page documents into clean markdown while preserving tabular schemas and extracting figures without costly GPU dependencies.",
    },
    {
      icon: Eye,
      title: "Trustworthy Multimodal Research",
      eyebrow: "Vision-Language Reliability",
      description:
        "Investigating evidence-grounded calibration and selective abstention in open-weight generative MLLMs when visual inputs are ambiguous, missing, or degraded.",
    },
  ];

  return (
    <section aria-labelledby="engineering-focus-heading" className="border-t border-border py-16 sm:py-24 bg-muted-surface/20">
      <PageContainer>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Engineering Focus"
            description="Clear architectural specializations driven by constraints, deterministic evaluation, and verifiable outputs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-7 space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="rounded-md border border-border bg-muted-surface p-2 text-accent">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                        {area.eyebrow}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {area.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
