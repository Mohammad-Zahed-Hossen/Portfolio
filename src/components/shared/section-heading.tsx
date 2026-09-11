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
    <div className={cn("space-y-2", className)}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center text-xs font-mono tracking-wider text-muted uppercase",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </div>
      )}
      <HeadingTag className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </HeadingTag>
      {description && (
        <p className="text-base text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
