import { HomeView } from "~/modules/home/ui/views/home-view";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hiyana World Logistics Pvt Ltd" },
    {
      name: "description",
      content:
        "Hiyana World Logistics Pvt Ltd is the best total transportation and logistics solution. We specialize in the full spectrum of international freight forwarding and transportation service by Land, Sea, Air.",
    },
  ];
}

export default function Home() {
  return <HomeView />;
}
