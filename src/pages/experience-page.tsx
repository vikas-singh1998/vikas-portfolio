import { ExperienceChart } from "@/components/sections/experience-chart";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function ExperiencePage() {
  usePageMeta({
    title: "Experience",
    description:
      "Impact-focused frontend work history covering architecture leadership, performance improvements, and mentoring outcomes.",
  });

  return (
    <div className="space-y-12">
      <ExperiencePreview />
      <ExperienceChart />
    </div>
  );
}
