import { ScrollReveal } from "@/components/effects/ScrollReveal";

interface ExperienceEntry {
  role: string;
  org: string;
  startDate: string;
  endDate: string;
  description: string;
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    org: "Acme Corp",
    startDate: "2023",
    endDate: "Present",
    description:
      "Building and maintaining core product features in a fast-moving full-stack team.",
  },
  {
    role: "Frontend Developer",
    org: "Startup Studio",
    startDate: "2021",
    endDate: "2023",
    description:
      "Shipped customer-facing web apps from prototype to production for early-stage startups.",
  },
  {
    role: "Junior Developer",
    org: "Freelance",
    startDate: "2020",
    endDate: "2021",
    description: "Built small business websites and internal tools for local clients.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
          04. Experience
        </h2>
        <span aria-hidden className="block w-16 h-1 bg-accent mt-3" />
      </ScrollReveal>

      <ol className="relative mt-12 space-y-10 border-l border-border pl-8">
        {EXPERIENCE.map((entry, i) => (
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
