import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { experienceEntries, sectionHeadings } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
          {sectionHeadings.experience}
        </h2>
        <span aria-hidden className="block w-16 h-1 bg-accent mt-3" />
      </ScrollReveal>

      <ol className="relative mt-12 space-y-10 border-l border-border pl-8">
        {experienceEntries.map((entry, i) => (
          <ScrollReveal key={`${entry.org}-${entry.startDate}`} delay={i * 0.1}>
            <li className="relative">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background"
              />
              <h3 className="font-mono font-bold text-foreground">{entry.role}</h3>
              <p className="text-sm text-muted font-mono mt-1">
                {entry.org} · {entry.startDate} — {entry.endDate}
              </p>
              <p className="text-sm text-muted mt-2 leading-relaxed">{entry.description}</p>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </section>
  );
}
