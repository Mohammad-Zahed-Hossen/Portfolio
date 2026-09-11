import {
  researchDirectionStatement,
  researchApproachPoints,
  researchCurrentStatus,
} from "@/content/research";
import { Compass, CheckSquare, Info } from "lucide-react";

export function ResearchDirectionSection() {
  return (
    <div className="space-y-8">
      {/* Primary Research Thesis / Direction Statement */}
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-accent">
          <Compass className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-mono uppercase tracking-wider font-semibold">
            Undergraduate Research Focus &middot; Final Year CSE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-snug">
          &ldquo;{researchDirectionStatement}&rdquo;
        </h2>

        <p className="text-sm sm:text-base text-muted leading-relaxed max-w-3xl">
          Vision-language models excel at describing canonical scenes but exhibit severe failure modes when visual inputs are ambiguous, partially corrupted, or contradictory to textual priors. This research trajectory investigates calibration and test-time verification methods that allow generative MLLMs to detect low-support tokens and selectively abstain from answering.
        </p>
      </div>

      {/* Methodological Approach Rules */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            Methodological Boundaries &amp; Approach
          </h3>
          <p className="text-xs sm:text-sm text-muted">
            Strict constraints applied to ensure reproducibility and rigor without reliance on opaque third-party verifiers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {researchApproachPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-lg border border-border bg-surface p-5 space-y-2"
            >
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckSquare className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                <span>{point.title}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed pl-6">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Honest Current Status Notice */}
      <div className="rounded-lg border border-border/90 bg-muted-surface p-5 space-y-2">
        <div className="flex items-center gap-2 text-foreground font-semibold text-xs font-mono uppercase tracking-wider">
          <Info className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>Current Status: {researchCurrentStatus.phase}</span>
        </div>
        <p className="text-xs text-muted leading-relaxed">
          {researchCurrentStatus.description}
        </p>
      </div>
    </div>
  );
}
