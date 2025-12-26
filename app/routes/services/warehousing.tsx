import type { Route } from "./+types/warehousing";
import { WarehousingView } from "~/modules/services/ui/views/warehousing-view";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Warehousing Services - 30-45 Days Free Storage | Hiyana World Logistics",
    description:
      "Bonded warehouse facilities across 14+ locations in India. 30-45 days free storage at Mundra & Nhava Sheva ports. Professional consolidation and distribution services.",
    url: "https://hiyana.vercel.app/services/warehousing",
    keywords: [
      "warehousing services",
      "bonded warehouse",
      "storage facilities India",
      "warehouse consolidation",
      "distribution services",
      "freight storage",
    ],
  });
}

export default function Warehousing() {
  return <WarehousingView />;
}
