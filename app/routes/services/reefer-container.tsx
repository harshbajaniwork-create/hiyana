import type { Route } from "./+types/reefer-container";
import { ReeferContainerView } from "~/modules/services/ui/views/reefer-container-view";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Reefer Container Services - Temperature-Controlled Pharma Shipping | Hiyana World Logistics",
    description:
      "Specialized reefer containers for pharmaceutical products. Double genset fleets for insulin and medicines to Europe, Africa & CIS. Temperature-controlled air freight worldwide.",
    url: "https://hiyana.vercel.app/services/reefer-container",
    keywords: [
      "reefer container shipping",
      "temperature controlled shipping",
      "pharmaceutical shipping",
      "cold chain logistics",
      "refrigerated container",
      "pharma freight forwarding",
    ],
  });
}

export default function ReeferContainer() {
  return <ReeferContainerView />;
}
