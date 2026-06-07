import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card glow as="article" className="flex flex-col h-full">
      <h3 className="font-mono text-lg font-bold text-foreground">{project.name}</h3>
      <p className="text-sm text-muted mt-2 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="cursor-pointer text-muted hover:text-accent transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="cursor-pointer text-muted hover:text-accent transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
