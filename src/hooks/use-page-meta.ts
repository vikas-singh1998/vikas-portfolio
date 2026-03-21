import { useEffect } from "react";
import { siteConfig } from "@/data/portfolio";

type PageMeta = {
  title: string;
  description: string;
};

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;

    const descriptionTag =
      document.querySelector('meta[name="description"]') ??
      document.createElement("meta");

    descriptionTag.setAttribute("name", "description");
    descriptionTag.setAttribute("content", description);

    if (!descriptionTag.parentNode) {
      document.head.appendChild(descriptionTag);
    }
  }, [description, title]);
}
