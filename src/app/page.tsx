import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { HeroSection } from "@/components/home/hero-section";
import { ProofStrip } from "@/components/home/proof-strip";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { EngineeringFocus } from "@/components/home/engineering-focus";
import { ResearchPreview } from "@/components/home/research-preview";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: `${siteConfig.name} | AI ML Engineering Portfolio`,
  description: siteConfig.positioningStatement,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProofStrip />
      <FeaturedProjects />
      <EngineeringFocus />
      <ResearchPreview />
      <FinalCta />
    </div>
  );
}
