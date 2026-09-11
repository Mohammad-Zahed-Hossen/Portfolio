import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getPublishedProjects,
  getAdjacentProjects,
} from "@/content/projects";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectCaseStudyHero } from "@/components/projects/project-case-study-hero";
import { ProjectSectionNav } from "@/components/projects/project-section-nav";
import { ProjectOverviewGrid } from "@/components/projects/project-overview-grid";
import { ProjectArchitectureDiagram } from "@/components/projects/project-architecture-diagram";
import { ProjectWorkflow } from "@/components/projects/project-workflow";
import { ProjectDecisionTable } from "@/components/projects/project-decision-table";
import { ProjectEvidenceSection } from "@/components/projects/project-evidence-section";
import { ProjectLimitations } from "@/components/projects/project-limitations";
import { ProjectRepositoryCta } from "@/components/projects/project-repository-cta";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { SectionDivider } from "@/components/shared/section-divider";
import { AlertCircle, Sliders } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const publishedProjects = getPublishedProjects();
  return publishedProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} &middot; Case Study | ${siteConfig.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} &middot; Architectural Case Study`,
      description: project.summary,
      url: `https://mohammad-zahed-hossen.vercel.app/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.visibility === "archived") {
    notFound();
  }

  const adjacent = getAdjacentProjects(slug);
  const caseStudy = project.caseStudy;

  return (
    <div className="py-10 sm:py-16">
      <PageContainer size="wide">
        <div className="space-y-12 sm:space-y-16">
          {/* 1. Project Hero & Metadata Strip */}
          <ProjectCaseStudyHero project={project} />

          {/* 2. Desktop Quick Section Navigation */}
          {project.caseStudyReady && caseStudy && (
            <ProjectSectionNav />
          )}

          {/* 3. Overview Grid (Snapshot of constraints & outcomes) */}
          {caseStudy && <ProjectOverviewGrid project={project} />}

          {/* Full Case Study Sections (when caseStudyReady is true) */}
          {project.caseStudyReady && caseStudy ? (
            <div className="space-y-16 sm:space-y-24">
              {/* 4. Problem Space & Constraints */}
              <section
                id="problem-constraints"
                aria-labelledby="problem-heading"
                className="space-y-8"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                    Core Problem Definition
                  </div>
                  <h2
                    id="problem-heading"
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                  >
                    The Engineering Challenge
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Problem Narrative Prose (Narrower reading column) */}
                  <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
                    <p>{caseStudy.problem}</p>
                    <p className="text-foreground font-medium">
                      {project.problemSummary}
                    </p>
                  </div>

                  {/* Operational Constraints Card List */}
                  <div className="lg:col-span-5 rounded-xl border border-border bg-surface p-5 sm:p-6 space-y-4 shadow-xs">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-xs font-mono uppercase tracking-wider">
                      <Sliders className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>Operational Constraints</span>
                    </div>

                    <ul className="space-y-3 text-xs text-muted">
                      {caseStudy.constraints.map((constraint) => (
                        <li key={constraint} className="flex items-start gap-2.5">
                          <span className="font-mono text-accent font-bold">&bull;</span>
                          <span className="leading-relaxed">{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. Solution Strategy Summary */}
              <section aria-labelledby="solution-heading" className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                    Architectural Response
                  </div>
                  <h2
                    id="solution-heading"
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                  >
                    Architectural Strategy &amp; Core Approach
                  </h2>
                </div>
                <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 space-y-4">
                  <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
                    {caseStudy.solutionSummary}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.approachSummary}
                  </p>
                </div>
              </section>

              <SectionDivider />

              {/* 6. Architecture Diagram */}
              <ProjectArchitectureDiagram
                slug={project.slug}
                architecture={caseStudy.architecture}
              />

              <SectionDivider />

              {/* 7. Workflow Walkthrough */}
              <ProjectWorkflow steps={caseStudy.workflowSteps} />

              <SectionDivider />

              {/* 8. Technical Decisions & Trade-offs */}
              <ProjectDecisionTable decisions={caseStudy.technicalDecisions} />

              <SectionDivider />

              {/* 9. Evidence & Evaluation */}
              <ProjectEvidenceSection
                evidence={caseStudy.evidence}
                benchmarkContext={project.benchmarkContext}
              />

              <SectionDivider />

              {/* 10. Limitations & Roadmap */}
              <ProjectLimitations
                limitations={caseStudy.limitations}
                nextSteps={caseStudy.nextSteps}
              />

              {/* 11. Repository CTA */}
              <ProjectRepositoryCta
                repositoryUrl={project.repositoryUrl}
                projectTitle={project.title}
              />
            </div>
          ) : (
            /* Fallback scaffold when caseStudyReady is false */
            <div className="rounded-xl border border-border bg-muted-surface p-8 space-y-4 text-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                <AlertCircle className="h-4 w-4" aria-hidden="true" />
                <span>Project Summary Overview</span>
              </div>
              <p className="text-sm text-muted max-w-xl mx-auto leading-relaxed">
                A full architectural case study for this project is being documented. In the interim, you can inspect the verified repository code directly.
              </p>
              {project.repositoryUrl && (
                <div className="pt-2">
                  <ProjectRepositoryCta
                    repositoryUrl={project.repositoryUrl}
                    projectTitle={project.title}
                  />
                </div>
              )}
            </div>
          )}

          {/* 12. Previous & Next Project Navigation */}
          <ProjectNavigation prev={adjacent.prev} next={adjacent.next} />
        </div>
      </PageContainer>
    </div>
  );
}
