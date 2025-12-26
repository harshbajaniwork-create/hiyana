import { HomeView } from "~/modules/home/ui/views/home-view";
import type { Route } from "./+types/home";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Hiyana World Logistics - International Freight Forwarding | Air, Sea & Road Transport",
    description:
      "Leading logistics company with 50+ years expertise. Specializing in international freight forwarding, FCL/LCL consolidation, air freight, and road transport across 26 branches in India. Competitive rates, 45-day free storage.",
    url: "https://hiyana.vercel.app",
    keywords: [
      "Hiyana World Logistics",
      "international freight forwarding",
      "air freight services",
      "sea freight FCL",
      "LCL consolidation",
      "road transport India",
      "logistics company India",
      "freight forwarding services",
    ],
  });
}

export default function Home() {
  return <HomeView />;
}
