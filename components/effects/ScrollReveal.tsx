"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function ScrollReveal({ children, delay = 0, y = 24, className }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
