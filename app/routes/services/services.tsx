import type { Route } from "./+types/services";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Logistics Services | Hiyana World Logistics - Air, Sea & Road Freight",
    description:
      "Comprehensive international freight forwarding services including air freight, sea freight FCL/LCL, road transport, warehousing, ISO tanks, reefer containers, and project cargo. 50+ years expertise.",
    url: "https://hiyana.vercel.app/services",
    keywords: [
      "logistics services",
      "international freight forwarding",
      "air freight services",
      "sea freight FCL",
      "LCL consolidation",
      "road transport India",
      "warehousing services",
      "ISO tank carrier",
      "reefer container shipping",
      "project cargo",
      "customs clearance",
    ],
  });
}

export default function Services() {
  return (
    <div>
      <h1>services</h1>
    </div>
  );
}
