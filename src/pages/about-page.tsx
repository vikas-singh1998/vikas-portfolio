import { AboutPreview } from "@/components/sections/about-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function AboutPage() {
  usePageMeta({
    title: "About",
    description:
      "Professional summary, skills, and timeline for Vikas Singh, a  Senior Frontend developer with 5+ years of experience.",
  });

  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="About Me"
        title="Senior Frontend developer with 5+ years of product-focused experience."
        description="I enjoy solving frontend problems that combine maintainable architecture, responsive UX, secure integrations, and practical collaboration across teams."
      />

      <Card>
        <CardContent className="grid gap-6 p-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-sm leading-7">
              Over the past 5+ years, I&apos;ve built dynamic, user-centric, and
              responsive web applications using React, TypeScript, and
              JavaScript. My work has focused on scalable frontend systems,
              maintainable code, secure integrations, and practical product
              delivery.
            </p>
            <p className="text-sm leading-7">
              I care about building interfaces that feel reliable for users
              while staying clean and sustainable for the teams maintaining
              them.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                What I&apos;m Known For
              </p>
              <p className="mt-3 text-sm leading-7">
                Building clean frontend workflows, handling product edge cases
                carefully, and improving code quality without losing momentum on
                delivery.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Current Interests
              </p>
              <p className="mt-3 text-sm leading-7">
                React architecture, TypeScript adoption, better enterprise UX,
                secure delivery practices, and frontend systems that stay
                maintainable over time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <AboutPreview />
      <SkillsPreview />
    </div>
  );
}
