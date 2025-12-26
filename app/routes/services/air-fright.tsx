import { AirFreightView } from "~/modules/services/ui/views/air-fright-view";
import type { Route } from "./+types/air-fright";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Air Freight Services - Fast Worldwide Delivery | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Time-defined air freight services with preferred carriers worldwide. Door-to-door and airport-to-airport solutions with competitive rates. Flexible approach for urgent and complex shipments.",
    },
  ];
}

export default function AirFreight() {
  return <AirFreightView />;
}
