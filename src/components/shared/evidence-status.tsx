import { EvidenceStatus } from "@/types";
import { cn } from "@/lib/utils";

interface EvidenceStatusBadgeProps {
  status: EvidenceStatus;
  className?: string;
}

export function EvidenceStatusBadge({
  status,
  className,
}: EvidenceStatusBadgeProps) {
  const configs: Record<
    EvidenceStatus,
    { label: string; dot: string; text: string }
  > = {
    measured: {
      label: "Measured Evidence",
      dot: "bg-emerald-500",
      text: "text-emerald-700 dark:text-emerald-400",
    },
    implemented: {
      label: "Verified Contract",
      dot: "bg-accent",
      text: "text-accent",
    },
    "in-progress": {
      label: "In Active Progress",
      dot: "bg-amber-500",
      text: "text-amber-700 dark:text-amber-400",
    },
    planned: {
      label: "Planned Next Step",
      dot: "bg-muted",
      text: "text-muted",
    },
  };

  const config = configs[status] || configs.planned;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xs border border-border bg-muted-surface px-2 py-0.5 text-[11px] font-mono font-medium tracking-wide uppercase",
        config.text,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", config.dot)} aria-hidden="true" />
      <span>{config.label}</span>
    </span>
  );
}
