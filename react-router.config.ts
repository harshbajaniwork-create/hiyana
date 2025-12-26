import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return [
      "/",
      "/about",
      "/services",
      "/services/sea-freight-fcl",
      "/services/air-freight",
      "/services/lcl-consolidation",
      "/services/iso-tanks",
      "/services/transportation",
      "/services/project-cargo",
      "/services/warehousing",
      "/services/reefer-container",
      "/services/custom-clearance",
      "/services/break-bulk",
      "/we-export",
      "/contact",
    ];
  },
} satisfies Config;
