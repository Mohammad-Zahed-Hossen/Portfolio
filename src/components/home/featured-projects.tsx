import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section aria-labelledby="featured-projects-heading" className="py-16 sm:py-24">
      <PageContainer>
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected Engineering Work"
              title="Projects with inspectable trade-offs"
              description="These case studies document the problem, engineering approach, evidence, and open limits behind each system."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-accent hover:underline focus-ring rounded-xs shrink-0 py-1"
            >
              <span>Browse all case studies</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
