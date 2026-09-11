import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";
import { StatusBadge } from "@/components/shared/status-badge";
import { GraduationCap, Code2, Users, FolderGit2, ArrowRight } from "lucide-react";

export function ResumeSummary() {
  const skillsGroups = [
    {
      category: "Programming Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "C / C++"],
    },
    {
      category: "AI / Machine Learning",
      items: [
        "PyTorch (Inference & Evaluation)",
        "Dense & Sparse Vector Retrieval",
        "Vision-Language Architectures",
        "Cross-Encoder Reranking",
        "NumPy",
      ],
    },
    {
      category: "AI Systems Engineering",
      items: [
        "Deterministic Evaluation (Pytest)",
        "Citation Validation Contracts",
        "Bounded Adaptive Retrieval Loops",
        "Confidence Calibration & Abstention",
        "CPU-Optimized Document Intelligence",
      ],
    },
    {
      category: "Web & Data Architecture",
      items: [
        "FastAPI",
        "Next.js (App Router)",
        "React",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "RESTful API Design",
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {/* Professional Summary */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight text-foreground">
          Professional Profile
        </h2>
        <p className="text-sm text-muted leading-relaxed">
          {siteConfig.role} at {siteConfig.institution} focusing on reliable AI engineering, retrieval evaluation workflows, and document processing systems. Experienced in architecting verifiable pipelines with deterministic test contracts, hybrid retrieval, and CPU-efficient extraction. Seeking AI/ML engineering roles and research opportunities.
        </p>
      </section>

      {/* Education Snapshot */}
      <section className="space-y-4 rounded-lg border border-border bg-surface p-6">
        <div className="flex items-center gap-2 text-accent">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">
              Bachelor of Science in Computer Science and Engineering
            </h3>
            <span className="text-xs font-mono text-muted">2022 &ndash; 2026 (Expected)</span>
          </div>

          <div className="text-sm font-medium text-accent">
            {siteConfig.institution} &middot; {siteConfig.location}
          </div>

          <div className="pt-2 text-xs font-mono text-foreground flex items-center gap-2">
            <span className="font-semibold text-accent">&bull; Award:</span>
            <span>{siteConfig.scholarship} (Continuous academic merit scholarship)</span>
          </div>

          <p className="pt-2 text-xs text-muted leading-relaxed">
            Key coursework: Artificial Intelligence, Machine Learning, Data Structures &amp; Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Discrete Mathematics.
          </p>
        </div>
      </section>

      {/* High-Level Grouped Skills */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-accent">
          <Code2 className="h-5 w-5" aria-hidden="true" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Grouped Technical Proficiencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-surface p-5 space-y-2.5"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xs border border-border/80 bg-muted-surface px-2 py-0.5 text-xs font-mono text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects Summary */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-accent">
          <FolderGit2 className="h-5 w-5" aria-hidden="true" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Featured Systems &amp; Engineering Work
          </h2>
        </div>

        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-lg border border-border bg-surface p-5 space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <StatusBadge status={project.status} size="sm" />
                  </div>
                  <span className="text-xs font-mono text-muted">{project.role}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {project.summary}
                </p>
                {project.benchmarkContext && (
                  <div className="text-xs font-mono text-accent">
                    {project.benchmarkContext}
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((s) => (
                    <span key={s} className="text-muted/80">
                      #{s}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-accent hover:underline inline-flex items-center gap-1 focus-ring rounded-xs"
                >
                  <span>Case study</span>
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching & Mentoring Experience */}
      <section className="space-y-4 rounded-lg border border-border bg-surface p-6">
        <div className="flex items-center gap-2 text-accent">
          <Users className="h-5 w-5" aria-hidden="true" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Academic Mentoring &amp; Teaching Experience
          </h2>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">
              Peer Tutor &amp; Academic Mentor &middot; Dept. of CSE
            </h3>
            <span className="text-xs font-mono text-muted">{siteConfig.institution}</span>
          </div>

          <p className="text-xs text-muted leading-relaxed">
            Provided structured problem-solving sessions, lab mentorship, and concept walkthroughs for junior undergraduate peers in Data Structures, Object-Oriented Programming (Python/C++), and Database Design. Focused on fostering systematic debugging practices and algorithmic rigor.
          </p>
        </div>
      </section>
    </div>
  );
}
