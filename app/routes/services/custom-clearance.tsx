import { CustomClearanceView } from "~/modules/services/ui/views/custom-clearance-view";
import type { Route } from "./+types/custom-clearance";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Customs Clearance Services - Fast & Compliant | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Expert customs clearance at all major Indian ports. Complete documentation processing, duty calculation, and regulatory compliance for smooth import-export operations.",
    },
  ];
}

export default function CustomClearance() {
  return <CustomClearanceView />;
}
