import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const EMAIL = "you@example.com";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
          05. Contact
        </h2>
        <span aria-hidden className="block w-16 h-1 bg-accent mt-3 mx-auto" />
        <p className="text-muted mt-6">
          Got something interesting to build? Let&apos;s talk.
        </p>

        <div className="mt-8 flex flex-col items-center gap-8">
          <Button href={`mailto:${EMAIL}`} variant="primary" size="lg">
            <Mail className="w-5 h-5" />
            {EMAIL}
          </Button>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="cursor-pointer text-muted hover:text-accent transition-colors duration-200"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="cursor-pointer text-muted hover:text-accent transition-colors duration-200"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
