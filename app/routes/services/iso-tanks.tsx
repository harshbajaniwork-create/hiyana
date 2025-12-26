import type { Route } from "./+types/iso-tanks";
import { IsoTanksView } from "~/modules/services/ui/views/iso-tanks-view";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "ISO Tank Services - Leading Liquid Cargo Carrier | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Leading ISO tank carrier in India with USA & Europe principals. Specialized fleets, 30-45 days free storage at Mundra. Most competitive rates for liquid cargo transportation.",
    },
  ];
}

export default function IsoTanks() {
  return <IsoTanksView />;
}
