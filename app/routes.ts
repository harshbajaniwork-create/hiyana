import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("we-export", "routes/we-export.tsx"),
  route("services", "routes/services/layout.tsx", [
    index("routes/services/services.tsx"),
    route("sea-fright-fcl", "routes/services/sea-fright-fcl.tsx"),
    route("air-fright", "routes/services/air-fright.tsx"),
    route("lcl-consolidation", "routes/services/lcl-consolidation.tsx"),
    route("iso-tanks", "routes/services/iso-tanks.tsx"),
    route("transportation", "routes/services/transportation.tsx"),
    route("project-cargo", "routes/services/project-cargo.tsx"),
    route("warehousing", "routes/services/warehousing.tsx"),
    route("reefer-container", "routes/services/reefer-container.tsx"),
    route("custom-clearance", "routes/services/custom-clearance.tsx"),
    route("break-bulk", "routes/services/break-bulk.tsx"),
  ]),
] satisfies RouteConfig;
