import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <span className="section-label">404</span>
      <h1 className="text-5xl font-semibold">Page not found</h1>
      <p className="max-w-lg text-base leading-7">
        The route you requested doesn&apos;t exist in this portfolio build. Head back to the homepage and keep exploring.
      </p>
      <Button asChild>
        <Link to="/">
          <MoveLeft className="h-4 w-4" />
          Return Home
        </Link>
      </Button>
    </div>
  );
}
