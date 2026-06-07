export interface SiteConfig {
  name: string;
  brand: string;
  title: string;
  description: string;
  footerTagline: string;
}

export const siteConfig: SiteConfig = {
  name: "Japh",
  brand: "~/japh",
  title: "Japh — Developer",
  description:
    "I build things that work. Portfolio of tools, websites, webapps, games, and software.",
  footerTagline: "built with Next.js & a lot of coffee.",
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

export type SkillCategoryName = "Languages" | "Frameworks" | "Tools" | "Infra";

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
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
    { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman"] },
    { category: "Infra", items: ["Docker", "Vercel", "AWS", "GitHub Actions"] },
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

export interface ContactContent {
  tagline: string;
  email: string;
}

export const contactContent: ContactContent = {
  tagline: "Got something interesting to build? Let's talk.",
  email: "you@example.com",
};

export type SocialPlatform = "github" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "github", label: "GitHub", url: "https://github.com/yourname" },
  { platform: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
];

export const sectionHeadings = {
  about: "02. About",
  projects: "03. Projects",
  experience: "04. Experience",
  contact: "05. Contact",
} as const;
