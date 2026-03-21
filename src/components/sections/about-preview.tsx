import { timeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function AboutPreview() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeading
        eyebrow="About"
        title="Execution-focused frontend engineering grounded in real product work."
        description="My background combines responsive UI development, architecture cleanup, product thinking, and collaboration across engineering and business teams."
      />
      <div className="grid gap-4">
        {timeline.map((item) => (
          <Card key={item.year}>
            <CardContent className="grid gap-3 p-6 md:grid-cols-[110px_1fr]">
              <div>
                <p className="text-sm font-semibold text-accent">{item.year}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm font-medium text-foreground/80">{item.company}</p>
                <p className="text-sm leading-6">{item.summary}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
