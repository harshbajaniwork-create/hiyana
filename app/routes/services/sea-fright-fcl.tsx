import { SeaFrightFCLView } from "~/modules/services/ui/views/sea-fright-fcl-view";
import type { Route } from "./+types/sea-fright-fcl";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Sea Freight FCL Services - Full Container Load Shipping | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Worldwide ocean freight for full container loads with qualified shipping lines. Competitive rates, door-to-door capability, and scheduled departures. Real-time tracking worldwide.",
    },
  ];
}

export default function SeaFrightFCL() {
  return <SeaFrightFCLView />;
}
