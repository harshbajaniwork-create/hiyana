import type { Route } from "./+types/break-bulk";
import { BreakBulkView } from "~/modules/services/ui/views/break-bulk-view";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "Breakbulk Cargo Services - Worldwide Shipping | Hiyana World Logistics",
    description:
      "Specialized breakbulk cargo handling for silica sand, cement, wheat, rice, gypsum, and limestone. Worldwide port coverage with own fleet for cost-effective solutions.",
    url: "https://hiyana.vercel.app/services/break-bulk",
    keywords: [
      "breakbulk cargo",
      "break bulk shipping",
      "bulk cargo handling",
      "bulk commodity shipping",
      "breakbulk logistics",
      "bulk freight services",
    ],
  });
}

export default function BreakBulk() {
  return <BreakBulkView />;
}
