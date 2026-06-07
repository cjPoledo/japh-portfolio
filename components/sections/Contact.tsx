import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import {
  contactContent,
  socialLinks,
  sectionHeadings,
  type SocialPlatform,
} from "@/data/site";
import type { ComponentType, SVGProps } from "react";

const SOCIAL_ICONS: Record<SocialPlatform, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
          {sectionHeadings.contact}
        </h2>
        <span aria-hidden className="block w-16 h-1 bg-accent mt-3 mx-auto" />
        <p className="text-muted mt-6">{contactContent.tagline}</p>

        <div className="mt-8 flex flex-col items-center gap-8">
          <Button href={`mailto:${contactContent.email}`} variant="primary" size="lg">
            <Mail className="w-5 h-5" />
            {contactContent.email}
          </Button>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = SOCIAL_ICONS[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} profile`}
                  className="cursor-pointer text-muted hover:text-accent transition-colors duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
