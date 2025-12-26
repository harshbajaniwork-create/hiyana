import { TransportationView } from "~/modules/services/ui/views/transportation-view";
import type { Route } from "./+types/transportation";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Road Transportation Services - 50+ Years Experience | Hiyana World Logistics",
    description:
      "India's finest road transport carrier with 50+ years experience. 26 branches covering 108 routes nationwide. Subsidiary of Mumbai Transport Company with pan-India connectivity.",
    url: "https://hiyana.vercel.app/services/transportation",
    keywords: [
      "road transport India",
      "road freight services",
      "trucking services",
      "ground transportation",
      "road logistics India",
      "pan-India transport",
    ],
  });
}

export default function Transportation() {
  return <TransportationView />;
}
