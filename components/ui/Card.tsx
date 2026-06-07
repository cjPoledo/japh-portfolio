import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  as?: ElementType;
};

export function Card({ children, className, glow = false, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface border border-border rounded-sm p-6 transition-all duration-200",
        glow && "hover:border-accent hover:shadow-glow hover:-translate-y-1 cursor-pointer",
        className
      )}
    >
      {children}
    </Tag>
  );
}
