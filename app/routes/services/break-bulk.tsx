import type { Route } from "./+types/break-bulk";
import { BreakBulkView } from "~/modules/services/ui/views/break-bulk-view";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Breakbulk Cargo Services - Worldwide Shipping | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Specialized breakbulk cargo handling for silica sand, cement, wheat, rice, gypsum, and limestone. Worldwide port coverage with own fleet for cost-effective solutions.",
    },
  ];
}

export default function BreakBulk() {
  return <BreakBulkView />;
}
