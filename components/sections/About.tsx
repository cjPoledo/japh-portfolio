import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

type SkillCategory = {
  category: "Languages" | "Frameworks" | "Tools" | "Infra";
  items: string[];
};

const SKILLS: SkillCategory[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman"] },
  { category: "Infra", items: ["Docker", "Vercel", "AWS", "GitHub Actions"] },
];

const BIO = [
  "I'm a developer who likes building things that solve real problems — from scrappy CLI tools to full web apps. I care about clean code, fast feedback loops, and shipping over perfecting.",
  "Most of my time goes into side projects: tools that scratch my own itch, small games, and the occasional bot. I learn best by building, breaking, and rebuilding.",
  "When I'm not at the keyboard, I'm probably reading about the next thing I want to build, or figuring out why the last thing broke in production.",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
          02. About
        </h2>
        <span aria-hidden className="block w-16 h-1 bg-accent mt-3" />
      </ScrollReveal>

      <div className="mt-8 space-y-4 max-w-2xl">
        {BIO.map((paragraph, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <p className="text-muted leading-relaxed">{paragraph}</p>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {SKILLS.map((skill, i) => (
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
