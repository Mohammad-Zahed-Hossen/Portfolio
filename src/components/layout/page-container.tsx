import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function PageContainer({
  children,
  className,
  size = "default",
}: PageContainerProps) {
  const maxWidthClass =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
      ? "max-w-6xl"
      : "max-w-5xl";

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthClass,
        className
      )}
    >
      {children}
    </div>
  );
}
