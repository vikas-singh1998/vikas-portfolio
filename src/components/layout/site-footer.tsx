import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, siteConfig } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="font-display text-2xl font-semibold">
            {siteConfig.name}
          </p>
          <p className="max-w-xl text-sm leading-6">
            frontend engineer shipping premium digital products with strong
            architecture, accessibility, and product sense.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
