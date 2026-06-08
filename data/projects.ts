export type ProjectCategory =
  | "Tools"
  | "Websites"
  | "Webapps"
  | "Games"
  | "Other";

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
    id: "japh-portfolio",
    name: "Personal Portfolio",
    description:
      "This very site — a cyberpunk-meets-neubrutalist developer portfolio built with Next.js.",
    category: "Websites",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/cjPoledo/japh-portfolio",
    liveUrl: "https://japhlab.com",
  },
  {
    id: "more-activity-tracker",
    name: "MORE Activity Tracker",
    description:
      "An internal tool for More Staffing's sales team to track deals, client engagement, and talent deployments, gated behind Google login.",
    category: "Webapps",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Vercel",
    ],
  },

  {
    id: "qao-website",
    name: "QAO Website",
    description:
      "Official website for the Quality Assurance Office at UP Mindanao, built and maintained as part of my work there.",
    category: "Websites",
    techStack: ["WordPress"],
    liveUrl: "https://qao.upmin.edu.ph",
  },
  {
    id: "qao-tools",
    name: "QAO Tools",
    description:
      "An internal office productivity platform for UP Mindanao's QAO — a swiss-army-knife of tools gated behind Google login, designed so new tools can be added without restructuring the app shell.",
    category: "Webapps",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Drizzle ORM",
      "Vercel",
    ],
    githubUrl: "https://github.com/cPoledoUP/qao-tools",
    liveUrl: "https://qao-tools.vercel.app",
  },

  {
    id: "dsb-website",
    name: "Davao School for the Blind Website",
    description:
      "A public-facing website built for the Davao School for the Blind to share information about the institution and its programs.",
    category: "Websites",
    techStack: ["WordPress"],
    liveUrl: "https://davaoschoolfortheblind.org",
  },
  {
    id: "iso-module-isip",
    name: "ISO Module for ISIP",
    description:
      "An Odoo 16 module for managing ISO-related documents and processes at UP Mindanao.",
    category: "Other",
    techStack: ["Odoo", "Python", "XML"],
    githubUrl: "https://github.com/cjPoledo/odoo/tree/16.0/dev/upmin_iso",
  },
  {
    id: "sdg-scraper",
    name: "SDG Scraper",
    description:
      "A desktop app that scrapes posts from WordPress and Facebook and automatically tags them with relevant Sustainable Development Goals.",
    category: "Tools",
    techStack: ["Electron", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/cjPoledo/SDG-Scraper-Electron",
  },
  {
    id: "click125-tracker",
    name: "Click125 Tracker",
    description:
      "A personal PWA for tracking maintenance schedules and history for my own motorcycle.",
    category: "Tools",
    techStack: ["Svelte", "PWA"],
    githubUrl: "https://github.com/cjPoledo/click125-tracker",
  },
  {
    id: "bitch",
    name: "BITCH",
    description:
      "Budgeting Interface for Tracking Charges at Home — a finance tracker three roommates built to keep tabs on shared purchases and debts.",
    category: "Webapps",
    techStack: ["React", "Vite", "Supabase", "Vercel"],
    githubUrl: "https://github.com/cjPoledo/BITCH",
  },
  {
    id: "faculty-loading-system",
    name: "Faculty Loading System",
    description:
      "A CMSC 128 client project that gives department chairs an easy view of faculty teaching schedules and flags issues like scheduling conflicts, with Excel import/export support.",
    category: "Tools",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/cPoledoUP/fac-loading-system",
  },
  {
    id: "iol",
    name: "IOL",
    description:
      "A custom programming language built from scratch for CMSC 129, covering lexing, parsing, and interpretation.",
    category: "Tools",
    techStack: ["Python"],
    githubUrl: "https://github.com/cPoledoUP/cs129-iol",
  },
  {
    id: "ivp-project",
    name: "Image and Video Processing Project",
    description:
      "A CMSC 162 project manipulating images at the byte level without external libraries — starting with PCX files and extending to JPG/PNG, with effects like salt-and-pepper noise, Gaussian blur, median filtering, and Huffman-encoded compression.",
    category: "Tools",
    techStack: ["Python", "Tkinter"],
    githubUrl: "https://github.com/cPoledoUP/cmsc-162-ivp-project",
  },
  {
    id: "fart-cow",
    name: "Fart Cow",
    description:
      "My first game — you play as a flatulent cow, eating food and warding off attacking birds with, well, farts.",
    category: "Games",
    techStack: ["Godot", "GDScript"],
    liveUrl:
      "https://drive.google.com/file/d/1-ZdWNp38qZwVQnr7JF3W_Cy5FGMceWlY/view?usp=sharing",
  },
  {
    id: "purple-planet-escape",
    name: "Purple Planet Escape",
    description: "My first published game — a platformer built with Godot.",
    category: "Games",
    techStack: ["Godot", "GDScript"],
    liveUrl: "https://ujnae.itch.io/purple-planet-escape",
  },
  {
    id: "catch-the-shapes",
    name: "Catch the Shapes",
    description:
      "A rhythm game built with Godot, where timing and shapes drive the gameplay.",
    category: "Games",
    techStack: ["Godot", "GDScript"],
    liveUrl: "https://ujnae.itch.io/catch-the-shapes",
  },
  {
    id: "willow",
    name: "Willow",
    description:
      "A fast-paced game about chasing down an escaped cat, built in just two days with Godot.",
    category: "Games",
    techStack: ["Godot", "GDScript"],
    githubUrl: "https://github.com/cjPoledo/game-willow",
    liveUrl: "https://ujnae.itch.io/willow",
  },
];
