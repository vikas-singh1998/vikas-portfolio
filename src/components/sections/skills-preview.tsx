import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsPreview() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Skills"
        title="Strong frontend depth backed by practical product and platform experience."
        description="My strongest areas are React-based application development, scalable UI work, and maintainable enterprise workflows, supported by solid tooling and delivery practices."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {skillCategories.map((group) => (
          <Card key={group.category}>
            <CardContent className="space-y-5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{group.category}</h3>
                  <p className="mt-1 text-sm">{group.level}% confidence</p>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
                  Production-ready
                </span>
              </div>
              <Progress value={group.level} />
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
