import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { getPublishedProjects } from "@/content/projects";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: `Selected Projects | ${siteConfig.name}`,
  description:
    "Evidence-led case studies in retrieval evaluation, CPU-oriented document conversion, and an in-progress school-management application.",
};

export default function ProjectsPage() {
  const publishedProjects = getPublishedProjects();

  return (
    <div className="py-12 sm:py-20">
      <PageContainer>
        <div className="space-y-12">
          {/* Introductory statement */}
          <SectionHeading
            eyebrow="Project case studies"
            title="Systems documented with their limits"
            description="Each project records its problem, approach, evidence, and current maturity. Full case studies provide technical decisions, system flow, and known limitations; status labels distinguish active work from completed evidence."
            level="h1"
          />

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} showHighlights={true} />
            ))}
          </div>

          {/* Transparent Scope Note */}
          <div className="rounded-lg border border-border bg-muted-surface/50 p-5 text-xs font-mono text-muted leading-relaxed">
            <span className="font-semibold text-foreground">Reading note: </span>
            These entries are documentation, not marketing claims. Evidence labels distinguish measured observations, implemented contracts, active development, and planned work.
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
