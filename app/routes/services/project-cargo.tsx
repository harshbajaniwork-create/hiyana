import { ProjectCargoView } from "~/modules/services/ui/views/project-cargo-view";
import type { Route } from "./+types/project-cargo";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Project Cargo Services - Heavy Equipment Shipping | Hiyana World Logistics",
    description:
      "Specialized project cargo handling to Europe, Gulf, Middle East & Africa. Expert transportation of transformers, cranes, and heavy machinery with dedicated dock stuffing facilities.",
    url: "https://hiyana.vercel.app/services/project-cargo",
    keywords: [
      "project cargo services",
      "heavy equipment shipping",
      "heavy machinery transport",
      "project cargo logistics",
      "oversized cargo shipping",
      "industrial equipment transport",
    ],
  });
}

export default function ProjectCargo() {
  return <ProjectCargoView />;
}
