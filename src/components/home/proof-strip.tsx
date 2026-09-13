import { PageContainer } from "@/components/layout/page-container";
import { GraduationCap, Award, Compass } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function ProofStrip() {
  const proofItems = [
    {
      icon: GraduationCap,
      label: "Academic Standing",
      detail: "Final-year B.Sc. in CSE, East Delta University",
      subtext: "Chattogram, Bangladesh &middot; Graduating 2026",
    },
    {
      icon: Award,
      label: "Merit Recognition",
      detail: "Chairman Distinguished Scholarship",
      subtext: "Continuous academic excellence award",
    },
    {
      icon: Compass,
      label: "Current Direction",
      detail: "AI systems, document workflows & MLLM reliability",
      subtext: "Evidence, evaluation, and explicit limits",
    },
  ];

  return (
    <section aria-labelledby="proof-heading" className="border-y border-border bg-muted-surface/35 py-7 sm:py-9">
      <h2 id="proof-heading" className="sr-only">
        Academic and Engineering Credentials
      </h2>
      <PageContainer>
        <Reveal className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {proofItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-3.5 px-2 py-4 md:px-6"
              >
                <div className="rounded-lg border border-accent/20 bg-surface-raised p-2 text-accent shrink-0">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground leading-snug">
                    {item.detail}
                  </div>
                  <div
                    className="text-xs text-muted leading-tight"
                    dangerouslySetInnerHTML={{ __html: item.subtext }}
                  />
                </div>
              </div>
            );
          })}
        </Reveal>
      </PageContainer>
    </section>
  );
}
