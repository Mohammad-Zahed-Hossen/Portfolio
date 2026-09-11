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
    { label: string; shape: string; dot: string; text: string; bg: string }
  > = {
    measured: {
      label: "Measured Evidence",
      shape: "rotate-45 rounded-[1px]", // Diamond
      dot: "bg-emerald-500",
      text: "text-emerald-700 dark:text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
    implemented: {
      label: "Verified Contract",
      shape: "rounded-[1px]", // Square
      dot: "bg-accent",
      text: "text-accent",
      bg: "bg-accent/10 border-accent/30",
    },
    "in-progress": {
      label: "In Active Progress",
      shape: "rounded-full", // Circle
      dot: "bg-amber-500",
      text: "text-amber-700 dark:text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30",
    },
    planned: {
      label: "Planned Next Step",
      shape: "rounded-full border border-muted bg-transparent", // Hollow ring
      dot: "bg-muted",
      text: "text-muted",
      bg: "bg-muted-surface border-border",
    },
  };

  const config = configs[status] || configs.planned;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xs border px-2 py-0.5 text-[11px] font-mono font-medium tracking-wide uppercase transition-colors duration-150",
        config.bg,
        config.text,
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 shrink-0 transition-transform",
          config.shape,
          status !== "planned" && config.dot
        )}
        aria-hidden="true"
      />
      <span>{config.label}</span>
    </span>
  );
}
