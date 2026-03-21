import { ArrowUpRight, Github, MoveLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  usePageMeta({
    title: project.title,
    description: project.summary,
  });

  return (
    <div className="space-y-8">
      <Button asChild variant="ghost">
        <Link to="/projects">
          <MoveLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <section className={`rounded-[2.25rem] border border-border/60 bg-gradient-to-br ${project.accent} p-8 shadow-glow`}>
        <div className="max-w-3xl space-y-5">
          <Badge variant="secondary">{project.category}</Badge>
          <h1 className="text-4xl font-semibold">{project.title}</h1>
          <p className="text-base leading-7 text-foreground/80">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-background/70">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <DetailCard title="Key Contributions" items={project.contributions} />
        <DetailCard title="Challenges" items={project.challenges} />
        <DetailCard title="Solutions" items={project.solutions} />
        <DetailCard title="Impact Metrics" items={project.metrics} />
      </div>
    </div>
  );
}

function DetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="grid gap-3">
          {items.map((item) => (
            <div key={item} className="rounded-[1rem] border border-border/60 bg-background/70 p-4 text-sm leading-6">
              {item}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
