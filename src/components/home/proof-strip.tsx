import { PageContainer } from "@/components/layout/page-container";
import { GraduationCap, Award, Compass } from "lucide-react";

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
      label: "Technical Direction",
      detail: "AI systems, evaluation & trustworthy MLLMs",
      subtext: "Reproducible protocols & bounded architecture",
    },
  ];

  return (
    <section aria-labelledby="proof-heading" className="border-y border-border bg-muted-surface/40 py-8">
      <h2 id="proof-heading" className="sr-only">
        Academic and Engineering Credentials
      </h2>
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-3.5 p-3 rounded-md bg-surface/50 border border-border/60"
              >
                <div className="rounded-md border border-border bg-surface p-2 text-accent shrink-0">
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
        </div>
      </PageContainer>
    </section>
  );
}
