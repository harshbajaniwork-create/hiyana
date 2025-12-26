import { SeaFrightFCLView } from "~/modules/services/ui/views/sea-fright-fcl-view";
import type { Route } from "./+types/sea-fright-fcl";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Sea Freight FCL Services - Full Container Load Shipping | Hiyana World Logistics",
    description:
      "Worldwide ocean freight for full container loads with qualified shipping lines. Competitive rates, door-to-door capability, and scheduled departures. Real-time tracking worldwide.",
    url: "https://hiyana.vercel.app/services/sea-fright-fcl",
    keywords: [
      "sea freight FCL",
      "full container load shipping",
      "ocean freight FCL",
      "container shipping services",
      "FCL freight forwarding",
      "ocean cargo shipping",
    ],
  });
}

export default function SeaFrightFCL() {
  return <SeaFrightFCLView />;
}
