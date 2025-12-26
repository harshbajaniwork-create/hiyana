import type { Route } from "./+types/lcl-consolidation";
import { LclConsolidationView } from "~/modules/services/ui/views/lcl-consolidation-view";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "LCL Consolidation Services - Weekly Sailings Worldwide | Hiyana World Logistics",
    description:
      "Weekly LCL consolidation services connecting continents. Buyers consolidation, fast transit times, and competitive pricing. End-to-end solutions to/from India and major countries worldwide.",
    url: "https://hiyana.vercel.app/services/lcl-consolidation",
    keywords: [
      "LCL consolidation",
      "less than container load",
      "LCL shipping services",
      "buyers consolidation",
      "LCL freight forwarding",
      "consolidation services",
    ],
  });
}

export default function LCLConsolidation() {
  return <LclConsolidationView />;
}
