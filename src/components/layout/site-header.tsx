"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
    // Ensure focus is restored to the trigger button
    setTimeout(() => {
      hamburgerButtonRef.current?.focus();
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <PageContainer>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Identity */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex flex-col focus-ring rounded-xs py-1"
              aria-label={`${siteConfig.name} - Home`}
            >
              <span className="text-sm sm:text-base font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                {siteConfig.name}
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-muted">
                {siteConfig.role}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main site navigation"
            className="hidden md:flex items-center gap-1"
          >
            {siteConfig.navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium transition-colors focus-ring rounded-md",
                    isActive
                      ? "text-accent font-semibold bg-muted-surface"
                      : "text-muted hover:text-foreground hover:bg-muted-surface/60"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <button
              ref={hamburgerButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile menu"
              className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted hover:text-foreground focus-ring transition-colors duration-150"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </PageContainer>

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </header>
  );
}
