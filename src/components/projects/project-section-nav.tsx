"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTION_ITEMS = [
  { id: "overview", label: "Overview" }, { id: "problem-constraints", label: "Problem & Constraints" },
  { id: "architecture", label: "Architecture" }, { id: "workflow", label: "Pipeline Workflow" },
  { id: "decisions", label: "Technical Decisions" }, { id: "evidence", label: "Evidence & Benchmarks" },
  { id: "limitations", label: "Limitations & Roadmap" },
];

export function ProjectSectionNav({ className }: { className?: string }) {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (!desktop.matches) return;
    const sections = SECTION_ITEMS.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: "-18% 0px -66% 0px", threshold: [0.08, 0.3, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <nav aria-label="Case study sections quick jump" className={cn("hidden lg:block sticky top-20 z-30 -my-4 border-b border-border bg-background/95 py-3 text-xs font-mono", className)}><div className="flex flex-wrap items-start gap-x-5 gap-y-2"><span className="shrink-0 pt-1.5 font-semibold uppercase tracking-wider text-muted">On this page</span><div className="flex flex-1 flex-wrap items-center gap-1">{SECTION_ITEMS.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined} className={cn("rounded-md px-2 py-1.5 transition-colors focus-ring", activeId === item.id ? "bg-accent/10 font-semibold text-accent" : "text-muted hover:bg-muted-surface hover:text-foreground")}>{item.label}</a>)}</div></div></nav>;
}
