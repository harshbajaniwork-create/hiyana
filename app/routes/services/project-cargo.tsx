import { ProjectCargoView } from "~/modules/services/ui/views/project-cargo-view";
import type { Route } from "./+types/project-cargo";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Project Cargo Services - Heavy Equipment Shipping | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Specialized project cargo handling to Europe, Gulf, Middle East & Africa. Expert transportation of transformers, cranes, and heavy machinery with dedicated dock stuffing facilities.",
    },
  ];
}

export default function ProjectCargo() {
  return <ProjectCargoView />;
}
