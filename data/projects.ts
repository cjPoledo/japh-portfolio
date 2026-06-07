export type ProjectCategory = "Tools" | "Websites" | "Webapps" | "Games" | "Other";

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "taskflow-cli",
    name: "TaskFlow CLI",
    description:
      "A lightweight command-line task runner with custom pipelines and live-reload watchers.",
    category: "Tools",
    techStack: ["Go", "Cobra", "YAML"],
    githubUrl: "https://github.com/yourname/taskflow-cli",
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    description:
      "This very site — a cyberpunk-meets-neubrutalist developer portfolio built with Next.js.",
    category: "Websites",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourname/japh-portfolio",
    liveUrl: "https://yourdomain.dev",
  },
  {
    id: "habitue",
    name: "Habitué",
    description:
      "A minimal habit-tracking web app with streak visualization and offline-first sync.",
    category: "Webapps",
    techStack: ["React", "TypeScript", "IndexedDB", "Vite"],
    githubUrl: "https://github.com/yourname/habitue",
    liveUrl: "https://habitue.example.com",
  },
  {
    id: "cellar-crawl",
    name: "Cellar Crawl",
    description:
      "A turn-based roguelike dungeon crawler with procedurally generated levels.",
    category: "Games",
    techStack: ["TypeScript", "Phaser 3", "Vite"],
    githubUrl: "https://github.com/yourname/cellar-crawl",
    liveUrl: "https://cellar-crawl.example.com",
  },
  {
    id: "sentinel-bot",
    name: "Sentinel Bot",
    description:
      "A moderation and analytics Discord bot serving 10k+ members across multiple servers.",
    category: "Other",
    techStack: ["Node.js", "discord.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourname/sentinel-bot",
  },
  {
    id: "scratchpad",
    name: "Scratchpad",
    description:
      "A fast, keyboard-driven markdown note-taking tool with local-first storage and full-text search.",
    category: "Webapps",
    techStack: ["TypeScript", "React", "SQLite WASM", "Tailwind CSS"],
    githubUrl: "https://github.com/yourname/scratchpad",
    liveUrl: "https://scratchpad.example.com",
  },
];
