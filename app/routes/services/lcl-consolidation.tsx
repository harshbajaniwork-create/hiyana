import type { Route } from "./+types/lcl-consolidation";
import { LclConsolidationView } from "~/modules/services/ui/views/lcl-consolidation-view";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "LCL Consolidation Services - Weekly Sailings Worldwide | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Weekly LCL consolidation services connecting continents. Buyers consolidation, fast transit times, and competitive pricing. End-to-end solutions to/from India and major countries worldwide.",
    },
  ];
}

export default function LCLConsolidation() {
  return <LclConsolidationView />;
}
