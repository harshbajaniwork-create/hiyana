import AboutView from "~/modules/about/ui/views/about-view";
import type { Route } from "./+types/about";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title:
      "About Us - 50+ Years of Logistics Excellence | Hiyana World Logistics",
    description:
      "Founded in 2016, backed by 5+ decades of transport expertise. Subsidiary of Mumbai Transport Company with 26 branches covering 108 routes across India. Your trusted partner for international freight forwarding by Land, Sea, and Air.",
    url: "https://hiyana.vercel.app/about",
    keywords: [
      "about Hiyana World Logistics",
      "logistics company history",
      "Mumbai Transport Company",
      "freight forwarding expertise",
      "50 years logistics experience",
      "transport company India",
    ],
  });
}

export default function About() {
  return <AboutView />;
}
