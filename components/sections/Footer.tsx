"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const handleBackToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Japh — built with Next.js &amp; a lot of coffee.
        </p>
        <Button variant="ghost" size="sm" onClick={handleBackToTop}>
          <ArrowUp className="w-4 h-4" />
          Back to top
        </Button>
      </div>
    </footer>
  );
}
