import AboutView from "~/modules/about/ui/views/about-view";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "About Us - 50+ Years of Logistics Excellence | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Founded in 2016, backed by 5+ decades of transport expertise. Subsidiary of Mumbai Transport Company with 26 branches covering 108 routes across India. Your trusted partner for international freight forwarding by Land, Sea, and Air.",
    },
  ];
}

export default function About() {
  return <AboutView />;
}
