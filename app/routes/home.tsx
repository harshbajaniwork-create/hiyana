import { HomeView } from "~/modules/home/ui/views/home-view";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Hiyana World Logistics - International Freight Forwarding | Air, Sea & Road Transport",
    },
    {
      name: "description",
      content:
        "Leading logistics company with 50+ years expertise. Specializing in international freight forwarding, FCL/LCL consolidation, air freight, and road transport across 26 branches in India. Competitive rates, 45-day free storage.",
    },
  ];
}

export default function Home() {
  return <HomeView />;
}
