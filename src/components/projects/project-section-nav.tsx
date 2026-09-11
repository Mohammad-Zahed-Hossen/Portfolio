import { cn } from "@/lib/utils";

interface SectionNavItem {
  id: string;
  label: string;
}

const SECTION_ITEMS: SectionNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem-constraints", label: "Problem & Constraints" },
  { id: "architecture", label: "Architecture" },
  { id: "workflow", label: "Pipeline Workflow" },
  { id: "decisions", label: "Technical Decisions" },
  { id: "evidence", label: "Evidence & Benchmarks" },
  { id: "limitations", label: "Limitations & Roadmap" },
];

interface ProjectSectionNavProps {
  className?: string;
}

export function ProjectSectionNav({ className }: ProjectSectionNavProps) {
  return (
    <nav
      aria-label="Case study sections quick jump"
      className={cn(
        "hidden lg:block sticky top-20 z-30 -my-4 py-3 bg-background/95 border-b border-border text-xs font-mono backdrop-blur-none",
        className
      )}
    >
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
        <span className="text-muted font-semibold uppercase tracking-wider shrink-0">
          Jump to:
        </span>
        <div className="flex items-center gap-4 flex-nowrap shrink-0">
          {SECTION_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-muted hover:text-accent focus-ring rounded-xs py-1 transition-colors hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
