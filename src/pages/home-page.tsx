import { AboutPreview } from "@/components/sections/about-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function HomePage() {
  usePageMeta({
    title: "Senior Frontend Developer",
    description:
      "Portfolio of Vikas Singh, a Senior Frontend developer with 5+ years of experience in React, TypeScript, and scalable product development.",
  });

  return (
    <div className="space-y-16 md:space-y-20">
      <HeroSection />
      <AboutPreview />
      <ProjectsShowcase preview />
      <ExperiencePreview />
      <SkillsPreview />
      <BlogPreview />
      <ContactCta />
    </div>
  );
}
