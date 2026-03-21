import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function ProjectsPage() {
  usePageMeta({
    title: "Projects",
    description:
      "Explore real-world frontend case studies covering micro-frontends, dashboards, performance optimization, realtime apps, and enterprise forms.",
  });

  return <ProjectsShowcase />;
}
