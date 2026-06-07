"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TerminalTextProps = {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
};

type Phase = "typing" | "pausing" | "deleting";

export function TerminalText({
  words,
  typingSpeedMs = 90,
  deletingSpeedMs = 50,
  pauseMs = 1500,
  className,
}: TerminalTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (shouldReduceMotion) return;

    const currentWord = words[wordIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeedMs);
      } else {
        timeoutId = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timeoutId = setTimeout(() => setPhase("deleting"), pauseMs);
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deletingSpeedMs);
      } else {
        setWordIndex((index) => (index + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeoutId);
  }, [
    displayText,
    phase,
    wordIndex,
    words,
    typingSpeedMs,
    deletingSpeedMs,
    pauseMs,
    shouldReduceMotion,
  ]);

  if (shouldReduceMotion) {
    return (
      <span className={cn("font-mono text-accent", className)}>
        {words[0]}
        <span aria-hidden className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 opacity-50" />
        <span className="sr-only">{words.join(", ")}</span>
      </span>
    );
  }

  return (
    <span className={cn("font-mono text-accent", className)}>
      <span aria-live="off">{displayText}</span>
      <span
        aria-hidden
        className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 animate-blink"
      />
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
