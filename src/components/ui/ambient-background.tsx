import { cn } from "@/lib/utils";

type AmbientVariant = "hero" | "cta" | "project";

interface AmbientBackgroundProps { variant: AmbientVariant; className?: string; }

export function AmbientBackground({ variant, className }: AmbientBackgroundProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", variant === "project" && "opacity-80", className)}>
      <div className="ambient-aurora absolute -inset-[18%]" />
      <div className="editorial-grid absolute inset-0 opacity-50" />
      {variant !== "project" && <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/50 to-transparent" />}
    </div>
  );
}
