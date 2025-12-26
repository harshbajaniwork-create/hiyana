import { ContactView } from "~/modules/contact/ui/views/contact-view";
import type { Route } from "./+types/contact";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "Contact Us - Get a Quote | Hiyana World Logistics",
    description:
      "Get in touch with Hiyana World Logistics for competitive freight forwarding rates. 26 branches across India, 30-45 days free storage. Contact us for air, sea, and road transport solutions.",
    url: "https://hiyana.vercel.app/contact",
    keywords: [
      "contact Hiyana World Logistics",
      "freight forwarding quote",
      "logistics services contact",
      "get shipping rates",
      "freight forwarding India",
    ],
  });
}

export default function Contact() {
  return <ContactView />;
}
