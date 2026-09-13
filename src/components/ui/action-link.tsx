import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
}

const variants = {
  primary: "rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 hover:-translate-y-px hover:bg-accent-hover active:translate-y-0",
  secondary: "rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground hover:-translate-y-px hover:border-accent hover:text-accent active:translate-y-0",
  text: "rounded-md px-1 py-1 text-xs font-mono font-semibold text-accent hover:text-accent-hover hover:underline",
};

/** Internal navigation only; external links and native buttons retain their own semantics. */
export function ActionLink({ href, children, variant = "primary", className }: ActionLinkProps) {
  return <Link href={href} className={cn("inline-flex items-center justify-center gap-2 transition-all duration-200 focus-ring", variants[variant], className)}>{children}</Link>;
}
