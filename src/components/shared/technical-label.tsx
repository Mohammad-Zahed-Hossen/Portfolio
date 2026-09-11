import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechnicalLabelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

export function TechnicalLabel({
  children,
  className,
  variant = "default",
}: TechnicalLabelProps) {
  const variantStyles = {
    default: "border-border bg-muted-surface text-foreground/85",
    accent: "border-accent/40 bg-accent/5 text-accent font-semibold",
    muted: "border-border/60 bg-surface text-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border px-2 py-0.5 text-[11px] font-mono tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
