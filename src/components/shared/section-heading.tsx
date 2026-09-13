import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
  eyebrowClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  level = "h2",
  className,
  eyebrowClassName,
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <div className={cn("max-w-3xl space-y-3", className)}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.12em] text-muted uppercase before:h-px before:w-5 before:bg-accent/60",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </div>
      )}
      <HeadingTag className={cn("font-bold tracking-tight text-foreground", level === "h1" ? "text-3xl leading-[1.08] sm:text-4xl" : "text-2xl leading-[1.15] sm:text-3xl")}>
        {title}
      </HeadingTag>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
