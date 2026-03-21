import { blogPosts } from "@/data/portfolio";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPage() {
  usePageMeta({
    title: "Blog",
    description:
      "Mock blog section with frontend architecture, UX, and engineering quality writing samples.",
  });

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <span className="section-label">Blog</span>
        <h1 className="text-4xl font-semibold">Writing on frontend architecture, UX, and engineering quality.</h1>
        <p className="max-w-3xl text-base leading-7">
          This mock blog section shows how thought leadership and communication can sit alongside project depth in a portfolio experience.
        </p>
      </div>

      <div className="grid gap-4">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <CardContent className="space-y-4 p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span>{post.publishedAt}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm leading-7">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
