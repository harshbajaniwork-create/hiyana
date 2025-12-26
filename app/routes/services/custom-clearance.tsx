import { CustomClearanceView } from "~/modules/services/ui/views/custom-clearance-view";
import type { Route } from "./+types/custom-clearance";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Customs Clearance Services - Fast & Compliant | Hiyana World Logistics",
    description:
      "Expert customs clearance at all major Indian ports. Complete documentation processing, duty calculation, and regulatory compliance for smooth import-export operations.",
    url: "https://hiyana.vercel.app/services/custom-clearance",
    keywords: [
      "customs clearance",
      "customs clearance services",
      "import export clearance",
      "customs documentation",
      "duty calculation",
      "port clearance services",
    ],
  });
}

export default function CustomClearance() {
  return <CustomClearanceView />;
}
