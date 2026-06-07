"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

const FILTERS: Filter[] = ["All", "Tools", "Websites", "Webapps", "Games", "Other"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
          03. Projects
        </h2>
        <span aria-hidden className="block w-16 h-1 bg-accent mt-3" />
      </ScrollReveal>

      <div className="flex flex-wrap gap-2 mt-8">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={cn(
              "font-mono text-xs uppercase px-4 py-2 border rounded-sm transition-colors duration-200 cursor-pointer",
              activeFilter === filter
                ? "bg-accent text-accent-foreground border-accent"
                : "border-border text-muted hover:text-foreground hover:border-foreground/40"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.05}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
