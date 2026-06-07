"use client";

import { ChevronDown } from "lucide-react";
import { useReducedMotion, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TerminalText } from "@/components/effects/TerminalText";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { siteConfig, heroContent } from "@/data/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <ScrollReveal>
          <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground text-shadow-glow">
            {siteConfig.name}
          </h1>
          <p className="mt-4 font-mono text-lg md:text-xl text-muted">
            {heroContent.tagline}
          </p>
          <p className="mt-2 font-mono text-base md:text-lg">
            <span className="text-muted">{"> "}</span>
            <span className="text-foreground">{heroContent.rolePrefix}</span>
            <TerminalText words={heroContent.roles} />
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {shouldReduceMotion ? (
        <ChevronDown
          aria-hidden
          className="absolute bottom-10 w-6 h-6 text-muted"
        />
      ) : (
        <motion.div
          aria-hidden
          className="absolute bottom-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted" />
        </motion.div>
      )}
    </section>
  );
}
