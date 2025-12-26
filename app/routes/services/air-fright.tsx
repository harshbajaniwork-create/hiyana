import { AirFreightView } from "~/modules/services/ui/views/air-fright-view";
import type { Route } from "./+types/air-fright";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Air Freight Services - Fast Worldwide Delivery | Hiyana World Logistics",
    description:
      "Time-defined air freight services with preferred carriers worldwide. Door-to-door and airport-to-airport solutions with competitive rates. Flexible approach for urgent and complex shipments.",
    url: "https://hiyana.vercel.app/services/air-fright",
    keywords: [
      "air freight services",
      "air cargo shipping",
      "airport to airport freight",
      "door to door air freight",
      "international air freight",
      "urgent air shipping",
    ],
  });
}

export default function AirFreight() {
  return <AirFreightView />;
}
