import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShieldCheck, FileSpreadsheet, Eye } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function EngineeringFocus() {
  const focusAreas = [
    {
      icon: ShieldCheck,
      title: "Reliable AI Systems",
      eyebrow: "Systems & Retrieval",
      description:
        "Designing retrieval evaluation around deterministic fixtures, citation checks, and explicit abstention when available evidence is weak or contradictory.",
    },
    {
      icon: FileSpreadsheet,
      title: "Document Intelligence",
      eyebrow: "Parsing & Conversion",
      description:
        "Building CPU-oriented document workflows that route files appropriately, preserve usable Markdown structure, and keep visual assets linked to the output.",
    },
    {
      icon: Eye,
      title: "Trustworthy Multimodal Research",
      eyebrow: "Vision-Language Reliability",
      description:
        "Planning undergraduate research on calibration and selective abstention when multimodal visual evidence is ambiguous, missing, or degraded.",
    },
  ];

  return (
    <section aria-labelledby="engineering-focus-heading" className="border-t border-border py-16 sm:py-24 bg-muted-surface/20">
      <PageContainer>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="How I approach the work"
            title="Three connected areas of practice"
            description="The projects connect evaluation, document processing, and careful research planning rather than treating them as disconnected keywords."
          />

          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="group flex flex-col justify-between rounded-[1.25rem] border border-border bg-surface-raised p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 sm:p-7 space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="rounded-lg border border-accent/20 bg-accent/5 p-2 text-accent transition-transform duration-200 group-hover:rotate-3">
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
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
