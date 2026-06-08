import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { aboutContent, sectionHeadings } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
          {sectionHeadings.about}
        </h2>
        <span aria-hidden className="block w-16 h-1 bg-accent mt-3" />
      </ScrollReveal>

      <div className="mt-8 space-y-4 max-w-2xl">
        {aboutContent.bio.map((paragraph, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <p className="text-muted leading-relaxed">{paragraph}</p>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {aboutContent.skills.map((skill, i) => (
          <ScrollReveal key={skill.category} delay={i * 0.08}>
            <Card className="h-full">
              <h3 className="font-mono uppercase text-xs text-accent tracking-wide">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {skill.items.map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
