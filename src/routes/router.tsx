import { Suspense, lazy, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { SiteShell } from "@/components/layout/site-shell";

const HomePage = lazy(() => import("@/pages/home-page"));
const AboutPage = lazy(() => import("@/pages/about-page"));
const ProjectsPage = lazy(() => import("@/pages/projects-page"));
const ProjectDetailPage = lazy(() => import("@/pages/project-detail-page"));
const ExperiencePage = lazy(() => import("@/pages/experience-page"));
const BlogPage = lazy(() => import("@/pages/blog-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
        Loading page...
      </div>
    </div>
  );
}

function wrapPage(element: ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SiteShell />,
    children: [
      { index: true, element: wrapPage(<HomePage />) },
      { path: "about", element: wrapPage(<AboutPage />) },
      { path: "projects", element: wrapPage(<ProjectsPage />) },
      { path: "projects/:slug", element: wrapPage(<ProjectDetailPage />) },
      { path: "experience", element: wrapPage(<ExperiencePage />) },
      { path: "blog", element: wrapPage(<BlogPage />) },
      { path: "contact", element: wrapPage(<ContactPage />) },
      { path: "*", element: wrapPage(<NotFoundPage />) },
    ],
  },
]);
