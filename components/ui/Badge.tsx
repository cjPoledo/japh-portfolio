import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "accent" | "outline";

export type BadgeProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  default: "bg-surface-2 text-muted border-border",
  accent: "bg-accent/10 text-accent border-accent/30",
  outline: "bg-transparent text-foreground border-border",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-sm border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
