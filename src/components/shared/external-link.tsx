import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
}

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-1 font-medium text-accent hover:underline focus-ring rounded-xs",
        className
      )}
    >
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight
          className="h-3.5 w-3.5 shrink-0 opacity-75"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
