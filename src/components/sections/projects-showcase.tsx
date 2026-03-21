import { ArrowUpRight, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { Project } from "@/lib/types";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = ["All", "React", "TypeScript", "Shadcn/ui", "Ant Design", "Security", "Performance"];

type ProjectsShowcaseProps = {
  preview?: boolean;
};

export function ProjectsShowcase({ preview = false }: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    const source = preview ? projects.slice(0, 3) : projects;

    if (activeFilter === "All") {
      return source;
    }

    return source.filter((project) =>
      project.stack.some((tech) =>
        tech.toLowerCase().includes(activeFilter.toLowerCase())
      ) || project.category.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter, preview]);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Projects"
        title="Case studies built around real product problems, not toy demos."
        description="Each project highlights architecture choices, product thinking, engineering tradeoffs, and delivery outcomes based on real product experience."
      />

      <Tabs defaultValue="All" value={activeFilter} onValueChange={setActiveFilter}>
        <TabsList>
          {filters.map((filter) => (
            <TabsTrigger key={filter} value={filter}>
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-5 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden">
      <CardContent className="space-y-6 p-6">
        <div className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent} p-5`}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <Badge variant="secondary">{project.category}</Badge>
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6">{project.summary}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm leading-6">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric}
                className="rounded-[1rem] border border-border/70 bg-background/70 p-3 text-sm font-medium text-foreground"
              >
                {metric}
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <InfoBlock title="Key Contributions" items={project.contributions} />
            <InfoBlock title="Challenges & Solutions" items={project.challenges.map((challenge, index) => `${challenge} -> ${project.solutions[index]}`)} />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to={`/projects/${project.slug}`}>
              View Case Study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h4>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <p key={item} className="text-sm leading-6">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
