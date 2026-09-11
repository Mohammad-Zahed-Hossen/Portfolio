import { siteConfig } from "@/content/site-config";
import { ExternalLink } from "@/components/shared/external-link";
import { GitBranch, Link2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  showEmail?: boolean;
}

export function SocialLinks({ className, showEmail = true }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4 text-xs font-mono", className)}>
      <ExternalLink
        href={siteConfig.github}
        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground focus-ring py-1"
        ariaLabel="Mohammad Zahed Hossen GitHub profile"
      >
        <GitBranch className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        <span>GitHub</span>
      </ExternalLink>

      <ExternalLink
        href={siteConfig.linkedin}
        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground focus-ring py-1"
        ariaLabel="Mohammad Zahed Hossen LinkedIn profile"
      >
        <Link2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        <span>LinkedIn</span>
      </ExternalLink>

      {showEmail && (
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-1.5 text-muted hover:text-foreground focus-ring py-1"
          aria-label={`Send email to ${siteConfig.email}`}
        >
          <Mail className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <span>Email</span>
        </a>
      )}
    </div>
  );
}
