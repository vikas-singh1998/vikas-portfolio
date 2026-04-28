import type {
  BlogPost,
  ExperienceItem,
  NavItem,
  Project,
  SkillCategory,
  TimelineItem,
} from "@/lib/types";

export const siteConfig = {
  name: "Vikas Singh",
  title: "Senior Frontend Developer",
  email: "vikassingh1415@gmail.com",
  summary:
    " Senior Frontend developer with 5+ years of experience building dynamic, responsive, and user-centric web applications using React, TypeScript, and modern frontend tooling.",
  location: " UP and india",
  experienceYears: 5,
  socialLinks: {
    github: "https://github.com/vikas-singh1998",
    linkedin: "https://www.linkedin.com/in/vikas-singh-2b8b26241/",
    twitter: "https://twitter.com/vikassingh1415",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const techHighlights = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn/ui",
  "Redux",
  "Zod",
  "React Query",
  "Zustand",
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    level: 94,
    items: [
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    category: "Libraries & Frameworks",
    level: 91,
    items: [
      "Redux",
      "Ant Design",
      "Shadcn/ui",
      "Zod",
      "React Query",
      "Zustand",
      "MSW",
    ],
  },
  {
    category: "Tools & Platforms",
    level: 84,
    items: [
      "Git/GitHub",
      "Jira",
      "Jenkins",
      "K8 Lens",
      "SonarQube",
      "SBOM",
      "Defect Dojo",
    ],
  },
  {
    category: "Architecture & Delivery",
    level: 82,
    items: [
      "Microservices Architecture",
      "RESTful APIs",
      "System Scalability",
      "Cross-browser Compatibility",
      "CI/CD",
      "Agile Methodology",
    ],
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2021",
    title: "Software Engineer",
    company: "HCL Tech",
    summary:
      "Worked on frontend bug fixing, legacy refactors, and form improvements that directly improved product stability and user experience.",
  },
  {
    year: "2022",
    title: " Frontend Developer",
    company: "Zenatix by Schneider Electric",
    summary:
      "Started building scalable product experiences around the Partner Portal, integrations, and dashboard workflows.",
  },
  {
    year: "2025",
    title: " Senior Frontend Developer",
    company: "Zenatix by Schneider Electric",
    summary:
      "Started building scalable product experiences around the Partner Portal, integrations, and dashboard workflows.",
  },
  {
    year: "2026",
    title: " Senior Frontend Developer",
    company: "Zenatix by Schneider Electric",
    summary:
      "Expanded ownership across TypeScript, Shadcn, Zod, security tooling, onboarding support, and frontend interview participation.",
  },
];

export const projects: Project[] = [
  {
    slug: "partner-portal-dashboard",
    title: "Partner Portal Dashboard",
    summary:
      "A scalable dashboard for managing deployments, peripheral mappings, and partner-specific configurations.",
    description:
      "Built for Zenatix by Schneider Electric, the Partner Portal supports structured workflows around deployments and customer configurations using React, Vite, TypeScript, Zustand, Shadcn UI, and Tailwind CSS.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Zustand",
      "Shadcn/ui",
      "Tailwind CSS",
    ],
    contributions: [
      "Contributed to redesigning the Partner Portal to simplify integrations and improve frontend structure.",
      "Worked on dynamic forms and hierarchical flows for deployment and configuration use cases.",
      "Provided feedback on edge cases from the older portal to support a more stable long-term roadmap.",
    ],
    challenges: [
      "The previous experience had edge cases that made migration and cleanup difficult.",
      "Device-specific flows needed to scale without repeatedly increasing frontend effort.",
    ],
    solutions: [
      "Improved architecture and workflow clarity to support cleaner long-term maintenance.",
      "Helped structure product flows so new partner and device scenarios were easier to support.",
    ],
    metrics: [
      "Enterprise production usage",
      "Reduced configuration friction",
      "Improved long-term maintainability",
    ],
    category: "Dashboard",
    liveUrl: "https://example.com/partner-portal-dashboard",
    githubUrl: "https://github.com/vikas-singh1998",
    accent: "from-orange-500/25 via-amber-400/10 to-transparent",
  },
  {
    slug: "experience-kit",
    title: "Experience Kit",
    summary:
      "A lightweight, mobile-friendly application built to simplify gateway commissioning workflows.",
    description:
      "The Experience Kit focused on quick setup, smooth field usability, and a simplified commissioning experience that made deployment workflows easier to complete.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Product Workflows",
    ],
    contributions: [
      "Developed and launched core dashboard and gateway commissioning features.",
      "Supported device-related workflows across Smartlink, LoRaWAN, Modbus TCP, and BACnetIP scenarios.",
      "Helped shape a faster and more usable mobile-friendly setup experience.",
    ],
    challenges: [
      "Commissioning needed to stay clear and usable for fast-moving operational contexts.",
      "Different protocols and device behaviors increased implementation complexity.",
    ],
    solutions: [
      "Built focused UI flows around simplified setup and deployment tasks.",
      "Handled diverse protocol cases through more flexible frontend behavior.",
    ],
    metrics: [
      "Mobile-friendly commissioning",
      "Broader device compatibility",
      "Faster deployment workflows",
    ],
    category: "Enterprise",
    liveUrl: "https://example.com/experience-kit",
    githubUrl: "https://github.com/vikas-singh1998",
    accent: "from-cyan-500/25 via-sky-400/10 to-transparent",
  },
  {
    slug: "integration-template-manager",
    title: "Integration Template Manager",
    summary:
      "A structured integration screen for creating new device templates across multiple protocols.",
    description:
      "Built using Ant Design tables, this workflow simplified multi-protocol template management and reduced the repeated frontend effort required for configuring new device types.",
    stack: ["React", "TypeScript", "Ant Design", "Tables", "Enterprise UI"],
    contributions: [
      "Developed the integration screen using Ant Design table components.",
      "Enabled creation of new device templates for multiple protocols.",
      "Reduced manual configuration effort through more reusable frontend patterns.",
    ],
    challenges: [
      "Protocol-level differences created complexity in UI behavior and data handling.",
      "Operational users needed dense workflows to remain understandable and efficient.",
    ],
    solutions: [
      "Used a structured table-driven interface to keep complex actions manageable.",
      "Improved maintainability by building reusable flows around template creation.",
    ],
    metrics: [
      "Multi-protocol support",
      "Lower repeat frontend effort",
      "Cleaner operational workflows",
    ],
    category: "Architecture",
    liveUrl: "https://example.com/integration-template-manager",
    githubUrl: "https://github.com/vikas-singh1998",
    accent: "from-emerald-500/25 via-lime-400/10 to-transparent",
  },
  {
    slug: "secure-authorization-layer",
    title: "Secure Authorization Layer",
    summary:
      "A token-based authorization implementation aligned with microservices and feature-level access control.",
    description:
      "This work focused on integrating secure authorization across product areas by leveraging user tokens and collaborating with backend services to keep feature access accurate and dependable.",
    stack: [
      "React",
      "TypeScript",
      "REST APIs",
      "Authorization",
      "Microservices",
    ],
    contributions: [
      "Integrated token-driven authorization behavior across different site features.",
      "Collaborated with backend and microservice teams to keep access control aligned.",
      "Supported secure product behavior without disrupting day-to-day workflows.",
    ],
    challenges: [
      "Permissions had to remain accurate across multiple backend dependencies.",
      "Secure access controls needed to preserve a smooth product experience.",
    ],
    solutions: [
      "Aligned frontend behavior closely with token-based backend authorization logic.",
      "Balanced security with usability so protected features remained predictable for users.",
    ],
    metrics: [
      "Secure feature access",
      "Better service alignment",
      "Enterprise-ready authorization",
    ],
    category: "Security",
    liveUrl: "https://example.com/secure-authorization-layer",
    githubUrl: "https://github.com/vikas-singh1998",
    accent: "from-fuchsia-500/20 via-rose-400/10 to-transparent",
  },
  {
    slug: "security-code-quality-pipeline",
    title: "Security & Code Quality Pipeline",
    summary:
      "A frontend quality initiative integrating SBOM, Defect Dojo, and SonarQube into the delivery workflow.",
    description:
      "This initiative strengthened application security and release confidence by making security and code-quality checks part of everyday frontend delivery instead of a late-stage exercise.",
    stack: ["TypeScript", "SonarQube", "SBOM", "Defect Dojo", "CI/CD"],
    contributions: [
      "Implemented security-focused tooling to improve vulnerability visibility.",
      "Supported stronger code quality practices inside the frontend workflow.",
      "Helped create a more dependable path to release by surfacing issues earlier.",
    ],
    challenges: [
      "Security and code-quality tools had to fit existing engineering workflows.",
      "Tooling output needed to be actionable instead of adding noise.",
    ],
    solutions: [
      "Integrated automated checks in ways that supported continuous quality.",
      "Turned quality signals into part of the regular delivery process.",
    ],
    metrics: [
      "Improved vulnerability visibility",
      "Better code quality discipline",
      "Stronger release confidence",
    ],
    category: "Performance",
    liveUrl: "https://example.com/security-code-quality-pipeline",
    githubUrl: "https://github.com/vikas-singh1998",
    accent: "from-violet-500/20 via-indigo-400/10 to-transparent",
  },
  {
    slug: "checkout-stability-refactor",
    title: "Checkout Stability & Legacy Refactor",
    summary:
      "A production improvement effort focused on checkout reliability, form UX, and legacy code cleanup.",
    description:
      "At HCL Tech, this work combined bug fixing and refactoring in high-impact customer flows where usability and stability directly affected business outcomes.",
    stack: [
      "JavaScript",
      "React",
      "Forms",
      "Legacy Refactor",
      "UX Improvements",
    ],
    contributions: [
      "Resolved a critical checkout issue that helped prevent potential lost sales.",
      "Worked with teammates to refactor legacy code and reduce bug occurrence.",
      "Improved form fields to strengthen usability and data processing efficiency.",
    ],
    challenges: [
      "Legacy code increased the risk and complexity of product changes.",
      "Checkout and form issues had a direct effect on user trust and completion.",
    ],
    solutions: [
      "Refactored targeted frontend areas collaboratively to reduce recurring issues.",
      "Focused on practical UX improvements in the most important product flows.",
    ],
    metrics: [
      "30% fewer bugs in refactored areas",
      "Improved checkout stability",
      "Better form experience",
    ],
    category: "Performance",
    liveUrl: "https://example.com/checkout-stability-refactor",
    githubUrl: "https://github.com/vikas-singh1998",
    accent: "from-yellow-500/25 via-orange-400/10 to-transparent",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Zenatix by Schneider Electric",
    period: "Aug 2022 - Present",
    location: "Gurgaon, India",
    achievements: [
      "Redesigned parts of the Partner Portal with React and Redux to simplify integrations and improve frontend structure.",
      "Built an Integration screen with Ant Design tables for multi-protocol device template creation.",
      "Worked with TypeScript, Shadcn, Zod, authorization flows, dashboard features, and gateway commissioning experiences.",
    ],
  },
  {
    role: "Software Engineer",
    company: "HCL Tech",
    period: "Jan 2021 - Jul 2022",
    location: "Lucknow, India",
    achievements: [
      "Resolved a critical checkout issue that reduced business risk and improved user experience.",
      "Refactored legacy code with the team, reducing bug occurrence by 30% in targeted areas.",
      "Enhanced form fields to improve usability and data processing efficiency.",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-maintainable-frontends",
    title: "Building Maintainable Frontends in Fast-Moving Teams",
    excerpt:
      "Thoughts on keeping React applications scalable through clean code, reusable patterns, and better collaboration.",
    publishedAt: "Jan 18, 2026",
    readTime: "6 min read",
    tags: ["Architecture", "React", "Frontend"],
  },
  {
    slug: "secure-frontend-delivery",
    title: "What Secure Frontend Delivery Looks Like in Practice",
    excerpt:
      "A practical perspective on using security tooling and code-quality checks without slowing down teams.",
    publishedAt: "Dec 02, 2025",
    readTime: "5 min read",
    tags: ["Security", "Code Quality", "CI/CD"],
  },
  {
    slug: "improving-complex-forms",
    title: "Improving Complex Forms Without Overcomplicating the UX",
    excerpt:
      "Patterns that help enterprise workflows stay usable while still supporting accurate and structured data entry.",
    publishedAt: "Oct 11, 2025",
    readTime: "7 min read",
    tags: ["UX", "Forms", "Zod"],
  },
];
