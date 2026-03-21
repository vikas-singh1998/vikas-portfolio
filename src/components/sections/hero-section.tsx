import { motion } from "framer-motion";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, techHighlights } from "@/data/portfolio";
import { formatDuration } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/70 px-6 py-12 shadow-glow backdrop-blur md:px-10 md:py-16">
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-30" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            <span className="section-label">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Available for frontend opportunities
            </span>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Building <span className="text-gradient">scalable frontend experiences</span> with clean code and product focus.
              </h1>
              <p className="max-w-2xl text-lg leading-8">
                {siteConfig.summary}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link to="/contact">
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" download>
                Download Resume
                <FileDown className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-wrap gap-2"
          >
            {techHighlights.map((tech) => (
              <Badge key={tech} variant="outline" className="rounded-full px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid gap-4"
        >
          <Card className="glass-panel">
            <CardContent className="grid gap-4 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  Frontend Snapshot
                </p>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Shipping now
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <MetricCard label="Experience" value={formatDuration(siteConfig.experienceYears)} />
                <MetricCard label="Core Focus" value="React, TypeScript, responsive UI, and scalable frontend architecture" />
                <MetricCard label="Team Impact" value="Cross-team collaboration, interviews, onboarding, and product ownership" />
                <MetricCard label="Location" value={siteConfig.location} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-border/70 bg-background/75 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-3 text-sm font-medium leading-6 text-foreground">{value}</p>
    </div>
  );
}
