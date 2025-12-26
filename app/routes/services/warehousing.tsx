import type { Route } from "./+types/warehousing";
import { WarehousingView } from "~/modules/services/ui/views/warehousing-view";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Warehousing Services - 30-45 Days Free Storage | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Bonded warehouse facilities across 14+ locations in India. 30-45 days free storage at Mundra & Nhava Sheva ports. Professional consolidation and distribution services.",
    },
  ];
}

export default function Warehousing() {
  return <WarehousingView />;
}
