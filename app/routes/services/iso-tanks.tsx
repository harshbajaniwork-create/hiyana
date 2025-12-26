import type { Route } from "./+types/iso-tanks";
import { IsoTanksView } from "~/modules/services/ui/views/iso-tanks-view";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "ISO Tank Services - Leading Liquid Cargo Carrier | Hiyana World Logistics",
    description:
      "Leading ISO tank carrier in India with USA & Europe principals. Specialized fleets, 30-45 days free storage at Mundra. Most competitive rates for liquid cargo transportation.",
    url: "https://hiyana.vercel.app/services/iso-tanks",
    keywords: [
      "ISO tank carrier",
      "liquid cargo transportation",
      "ISO tank shipping",
      "chemical transportation",
      "liquid freight services",
      "ISO container shipping",
    ],
  });
}

export default function IsoTanks() {
  return <IsoTanksView />;
}
