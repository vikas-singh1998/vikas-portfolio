import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function ExperiencePreview() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Experience"
        title="Impact-focused roles with measurable outcomes."
        description="My work centers on frontend quality, scalable product development, secure integrations, and improving workflows that matter in production."
      />
      <div className="grid gap-4">
        {experiences.map((experience) => (
          <Card key={`${experience.company}-${experience.role}`}>
            <CardContent className="grid gap-5 p-6 lg:grid-cols-[260px_1fr]">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-accent">{experience.period}</p>
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-sm font-medium text-foreground/80">{experience.company}</p>
                <p className="text-sm">{experience.location}</p>
              </div>
              <div className="grid gap-3">
                {experience.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="rounded-[1.25rem] border border-border/60 bg-background/70 px-4 py-3 text-sm leading-6 text-muted-foreground"
                  >
                    {achievement}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
