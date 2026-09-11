import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import { GraduationCap, Award, MapPin } from "lucide-react";

export function AboutIntro() {
  return (
    <div className="space-y-8">
      {/* Bio and Portrait Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 space-y-4">
          <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
            I am a final-year Computer Science and Engineering student at{" "}
            <strong className="font-semibold text-accent">{siteConfig.institution}</strong> in {siteConfig.location}, recognized with the{" "}
            <strong className="font-semibold text-foreground">{siteConfig.scholarship}</strong>.
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            My engineering work is directed toward the reliability of machine learning applications. In modern software, AI models are frequently integrated as opaque components without sufficient verification, leading to silent failures, hallucinated sources, and fragile production deployments.
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            I focus on engineering the deterministic contracts surrounding AI models: evidence-grounded retrieval pipelines, citation verification harnesses, and CPU-efficient document intelligence engines. I believe a system that knows when to abstain from answering is fundamentally superior to one that generates plausible but unfounded output.
          </p>
        </div>

        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-lg overflow-hidden border border-border bg-surface shadow-xs">
            <Image
              src="/assets/images/zahed-portrait.png"
              alt="Mohammad Zahed Hossen, final-year CSE student at East Delta University"
              fill
              sizes="(max-width: 768px) 176px, 208px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Educational & Scholarship Context Strip */}
      <div className="rounded-lg border border-border bg-surface p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
        <div className="flex items-start gap-2.5">
          <GraduationCap className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <div className="text-foreground font-semibold">B.Sc. in CSE</div>
            <div className="text-muted">East Delta University (Graduating 2026)</div>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Award className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <div className="text-foreground font-semibold">Merit Scholarship</div>
            <div className="text-muted">{siteConfig.scholarship}</div>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <div className="text-foreground font-semibold">Location</div>
            <div className="text-muted">{siteConfig.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
