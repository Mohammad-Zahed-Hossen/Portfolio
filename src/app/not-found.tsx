import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <PageContainer>
        <div className="max-w-xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-accent">
            404 &middot; Page Not Found
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The requested page does not exist.
          </h1>
          <p className="text-base text-muted leading-relaxed">
            The path you followed may have been updated, removed, or is not part of this portfolio release.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent focus-ring transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Return to home
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
