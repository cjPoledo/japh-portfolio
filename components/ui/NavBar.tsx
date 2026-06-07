"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { siteConfig, socialLinks } from "@/data/site";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const githubLink = socialLinks.find((link) => link.platform === "github");

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono font-bold text-accent cursor-pointer transition-colors duration-200 hover:text-foreground"
        >
          {siteConfig.brand}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm uppercase tracking-wide text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${githubLink.label} profile`}
              className="text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden text-foreground cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 border-b border-border bg-background/95",
          isOpen ? "max-h-64" : "max-h-0 border-b-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm uppercase tracking-wide text-muted hover:text-accent transition-colors duration-200 cursor-pointer py-2"
            >
              {link.label}
            </a>
          ))}
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${githubLink.label} profile`}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm uppercase tracking-wide text-muted hover:text-accent transition-colors duration-200 cursor-pointer py-2 inline-flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" /> {githubLink.label}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
