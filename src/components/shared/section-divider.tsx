import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("relative my-16 sm:my-20", className)}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-border" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-3 text-[10px] font-mono text-muted uppercase tracking-widest">
          &middot; &middot; &middot;
        </span>
      </div>
    </div>
  );
}
