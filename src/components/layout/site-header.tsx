import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-xs text-muted-foreground">{siteConfig.title}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground",
                  isActive && "bg-secondary text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="outline">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            variant="outline"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen((previous) => !previous)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/60 bg-background/95 lg:hidden">
          <div className="container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground",
                    isActive && "bg-secondary text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
