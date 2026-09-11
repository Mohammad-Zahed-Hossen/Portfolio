"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Toggle theme"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted opacity-70",
          className
        )}
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to switch theme`}
      title={`Current: ${theme} (Click to switch)`}
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-xs font-mono text-muted transition-colors hover:border-accent hover:text-foreground focus-ring",
        className
      )}
    >
      {theme === "system" ? (
        <Laptop className="h-3.5 w-3.5" aria-hidden="true" />
      ) : isDark ? (
        <Moon className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Sun className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span className="capitalize">{theme}</span>
    </button>
  );
}
