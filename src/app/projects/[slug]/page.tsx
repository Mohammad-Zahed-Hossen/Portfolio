import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { StatusBadge } from "@/components/shared/status-badge";
import { ExternalLink } from "@/components/shared/external-link";
import { ArrowLeft, GitBranch, CheckCircle2 } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
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
    title: `${project.title} | ${siteConfig.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20">
      <PageContainer size="narrow">
        <div className="space-y-10">
          {/* Breadcrumb / Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent focus-ring rounded-xs transition-colors py-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to Projects Catalogue
          </Link>

          {/* Header */}
          <div className="space-y-4 border-b border-border pb-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <StatusBadge status={project.status} />
              <span className="text-xs font-mono text-muted">
                Domain: {project.primaryDomain}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {project.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              {project.repositoryUrl && (
                <ExternalLink href={project.repositoryUrl}>
                  <span className="inline-flex items-center gap-1">
                    <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                    Source Repository
                  </span>
                </ExternalLink>
              )}
              <span className="text-muted">Role: {project.role}</span>
            </div>
          </div>

          {/* Technical Context */}
          <div className="space-y-8">
            {/* Benchmark Callout if present */}
            {project.benchmarkContext && (
              <div className="rounded-lg border border-accent/40 bg-accent/5 p-4 space-y-1">
                <div className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">
                  Verified Benchmark Context
                </div>
                <p className="text-sm font-mono text-foreground">
                  {project.benchmarkContext}
                </p>
              </div>
            )}

            {/* Problem statement */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold tracking-tight text-foreground">
                Engineering Challenge &amp; Problem Statement
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {project.problemSummary}
              </p>
            </section>

            {/* Architectural Approach */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold tracking-tight text-foreground">
                Architectural Strategy
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {project.approachSummary}
              </p>
            </section>

            {/* Key Verified Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-lg font-bold tracking-tight text-foreground">
                  Core Implementation Highlights
                </h2>
                <div className="grid grid-cols-1 gap-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 rounded-md border border-border bg-surface p-3 text-xs text-muted"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground/90 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Target Technology Stack */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold tracking-tight text-foreground">
                Target Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-surface px-3 py-1 text-xs font-mono text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Phase 2 Scope & Phase 3 Roadmap Notice */}
            <div className="rounded-lg border border-border bg-muted-surface p-5 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Case Study Scope Notice
              </div>
              <p className="text-xs text-muted leading-relaxed">
                This overview summarizes the architecture and current verification status. Detailed technical case studies featuring end-to-end data-flow figures, test fixture logs, and trade-off analyses are scheduled for release in Phase 3.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
