import { WeExportView } from "~/modules/we-export/ui/views/we-export-view";
import type { Route } from "./+types/we-export";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Export Services - Worldwide Shipping Solutions | Hiyana World Logistics",
    description:
      "Professional export freight services to worldwide destinations. FCL/LCL consolidation, air freight, project cargo, and breakbulk solutions. Competitive rates with 30-45 days free storage at major Indian ports.",
    url: "https://hiyana.vercel.app/we-export",
    keywords: [
      "export services India",
      "worldwide shipping solutions",
      "export freight forwarding",
      "international export services",
      "export logistics India",
    ],
  });
}

export default function WeExport() {
  return <WeExportView />;
}
