import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
