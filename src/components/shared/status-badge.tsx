import { cn } from "@/lib/utils";

export type StatusVariant =
  | "active-development"
  | "research-prototype"
  | "in-progress"
  | "archived"
  | string;

interface StatusBadgeProps {
  status: StatusVariant;
  className?: string;
  size?: "sm" | "default";
}

export function StatusBadge({
  status,
  className,
  size = "default",
}: StatusBadgeProps) {
  const normalized = status.toLowerCase().replace(/_/g, "-");

  // Editorial status indicator colors
  let dotColor = "bg-muted";
  let label = status.replace(/-/g, " ");

  if (normalized.includes("active")) {
    dotColor = "bg-emerald-500";
    label = "Active Development";
  } else if (normalized.includes("progress")) {
    dotColor = "bg-amber-500";
    label = "In Progress";
  } else if (normalized.includes("research") || normalized.includes("prototype") || normalized.includes("review")) {
    dotColor = "bg-sky-500";
    label = status.includes("-") ? status.replace(/-/g, " ") : status;
  }

  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-[10px]"
      : "px-2.5 py-0.5 text-xs";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xs border border-border bg-muted-surface font-mono font-medium text-foreground uppercase tracking-wider",
        sizeClasses,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotColor)} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
