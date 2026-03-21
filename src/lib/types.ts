export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  category: string;
  level: number;
  items: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  company: string;
  summary: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  contributions: string[];
  challenges: string[];
  solutions: string[];
  metrics: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  accent: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
};
