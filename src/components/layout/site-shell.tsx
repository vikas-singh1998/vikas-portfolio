import { Outlet } from "react-router-dom";
import { CommandPalette } from "@/components/common/command-palette";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <SiteHeader />
      <main className="container py-10 md:py-14">
        <Outlet />
      </main>
      <SiteFooter />
      <CommandPalette />
    </div>
  );
}
