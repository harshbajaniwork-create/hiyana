import type { Route } from "./+types/reefer-container";
import { ReeferContainerView } from "~/modules/services/ui/views/reefer-container-view";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Reefer Container Services - Temperature-Controlled Pharma Shipping | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Specialized reefer containers for pharmaceutical products. Double genset fleets for insulin and medicines to Europe, Africa & CIS. Temperature-controlled air freight worldwide.",
    },
  ];
}

export default function ReeferContainer() {
  return <ReeferContainerView />;
}
