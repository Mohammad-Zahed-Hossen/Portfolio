import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { getPublishedProjects } from "@/content/projects";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: `Selected Projects | ${siteConfig.name}`,
  description:
    "Engineering case studies in evidence-grounded retrieval, CPU-first document intelligence, and role-based institutional management by Mohammad Zahed Hossen.",
};

export default function ProjectsPage() {
  const publishedProjects = getPublishedProjects();

  return (
    <div className="py-12 sm:py-20">
      <PageContainer>
        <div className="space-y-12">
          {/* Introductory statement */}
          <SectionHeading
            eyebrow="Evidence-Led Engineering Catalogue"
            title="Selected Projects &amp; Systems"
            description="This catalogue features verified engineering implementations designed around tangible operational constraints. Each project card leads to an in-depth architectural case study detailing concrete trade-offs, data-flow diagrams, and test contracts."
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
            <span className="font-semibold text-foreground">Catalogue Architecture Note: </span>
            This catalogue functions as an extensible registry for verified engineering work. Each entry links to a dedicated architectural case study covering system data flow, decision rationales, empirical evidence, and known limitations.
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
