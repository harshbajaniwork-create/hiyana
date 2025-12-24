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
  return (
    <div className="min-h-screen">
      <h1>Home</h1>
      <div className="min-h-screen">
        <h1>Home</h1>
      </div>
      <div className="min-h-screen">
        <h1>Home</h1>
      </div>
    </div>
  );
}
