export interface SiteConfig {
  name: string;
  brand: string;
  title: string;
  description: string;
  footerTagline: string;
  resumeUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "Japh",
  brand: "~/japh",
  title: "Japh — Developer",
  description:
    "I build things that work. Portfolio of tools, websites, webapps, games, and software.",
  footerTagline: "built with Next.js & a lot of coffee.",
  resumeUrl: "/PoledoCJ_CV.pdf",
};

export interface HeroContent {
  roles: string[];
  tagline: string;
  rolePrefix: string;
}

export const heroContent: HeroContent = {
  roles: ["developer", "builder", "tinkerer", "problem solver"],
  tagline: "I build things that work.",
  rolePrefix: "I'm a ",
};

export type SkillCategoryName =
  | "Languages"
  | "Frontend"
  | "Backend & Data"
  | "AI / ML"
  | "Game Dev"
  | "Tools & Infra";

export interface SkillGroup {
  category: SkillCategoryName;
  items: string[];
}

export interface AboutContent {
  bio: string[];
  skills: SkillGroup[];
}

export const aboutContent: AboutContent = {
  bio: [
    "I'm a developer who likes building things that solve real problems — from scrappy CLI tools to full web apps. I care about clean code, fast feedback loops, and shipping over perfecting.",
    "Most of my time goes into side projects: tools that scratch my own itch, small games, and the occasional bot. I learn best by building, breaking, and rebuilding.",
    "When I'm not at the keyboard, I'm probably reading about the next thing I want to build, or figuring out why the last thing broke in production.",
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "PHP",
        "GDScript",
        "C",
        "C++",
        "C#",
        "Java",
      ],
    },
    {
      category: "Frontend",
      items: ["HTML & CSS", "React", "Next.js", "Tailwind CSS", "WordPress"],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "Express.js",
        "Django",
        "REST API",
        "Prisma",
        "Supabase",
        "PostgreSQL",
        "MCP Server",
      ],
    },
    {
      category: "AI / ML",
      items: [
        "Deep Learning",
        "Computer Vision",
        "PyTorch",
        "TensorFlow",
        "YOLO",
        "CVAT",
        "Roboflow",
      ],
    },
    { category: "Game Dev", items: ["Godot", "Unity", "Aseprite"] },
    {
      category: "Tools & Infra",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "Docker",
        "Vercel",
        "AWS",
        "Linux Server",
        "Zsh / Bash",
      ],
    },
  ],
};

export interface ExperienceEntry {
  role: string;
  org: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Freelance Developer & IT Consultant",
    org: "Self-employed",
    startDate: "2026",
    endDate: "Present",
    description:
      "Build websites and custom systems for clients, and consult on IT and systems-related concerns.",
  },
  {
    role: "Junior ICT Assistant",
    org: "Quality Assurance Office, University of the Philippines Mindanao",
    startDate: "2024",
    endDate: "Present",
    description:
      "Built QA and office management systems and the office's website, while supporting university events as on-site tech and handling ad hoc requests from the director.",
  },
  {
    role: "Student Intern",
    org: "ASIMOV-HAWKS",
    startDate: "2023",
    endDate: "2023",
    description:
      "Annotated datasets and trained computer vision models, then read research papers and wrote technical reports on the findings.",
  },
];

export interface ContactContent {
  tagline: string;
  email: string;
}

export const contactContent: ContactContent = {
  tagline: "Got something interesting to build? Let's talk.",
  email: "cjpoledo26@gmail.com",
};

export type SocialPlatform = "github" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "github", label: "GitHub", url: "https://github.com/cjPoledo" },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/clent-japhet-poledo-95442618b/",
  },
];

export const sectionHeadings = {
  about: "02. About",
  projects: "03. Projects",
  experience: "04. Experience",
  contact: "05. Contact",
} as const;
