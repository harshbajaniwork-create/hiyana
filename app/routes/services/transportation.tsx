import { TransportationView } from "~/modules/services/ui/views/transportation-view";
import type { Route } from "./+types/transportation";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Road Transportation Services - 50+ Years Experience | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "India's finest road transport carrier with 50+ years experience. 26 branches covering 108 routes nationwide. Subsidiary of Mumbai Transport Company with pan-India connectivity.",
    },
  ];
}

export default function Transportation() {
  return <TransportationView />;
}
