import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function BlogPreview() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Blog"
        title="Thoughts on frontend systems, leadership, and product quality."
        description="A small writing section to show communication clarity alongside implementation depth."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="group transition hover:-translate-y-1">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{post.publishedAt}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold leading-tight">{post.title}</h3>
              <p className="text-sm leading-6">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                Read insight
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
