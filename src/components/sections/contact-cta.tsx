import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactCta() {
  return (
    <section>
      <Card className="overflow-hidden">
        <CardContent className="relative grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-cyan-400/10" />
          <div className="relative space-y-4">
            <span className="section-label">Contact</span>
            <h2 className="max-w-2xl text-3xl font-semibold">
              Looking for a senior frontend developer who can improve both the
              product experience and code quality?
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
            </div>
          </div>
          <div className="relative">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
