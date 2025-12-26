import { Ship } from "lucide-react";
import { ServiceContent } from "../components/services-content";
import { ServiceHero } from "../components/services-hero";

export const LclConsolidationView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/sea-fright.jpg"
        icon={<Ship className="w-8 h-8 text-white" />}
        title="LCL Consolidation"
        description="Weekly import and export consolidation services connecting continents. We offer competitive rates with fast transit times through effective routings to and from all major countries worldwide."
      />
      <ServiceContent
        aboutDescription="LCL Consolidation connects continents by offering weekly import and export consolidation services to and from all major countries throughout the world. Our consolidation service provides weekly sailings to/from India via effective routings at most competitive rates, with sailing schedules issued every week for timely planning."
        aboutBullets={[
          "Weekly sailings to/from India with effective routings",
          "Buyers consolidation and groupage services",
          "Fast transit times with competitive pricing",
          "End-to-end solutions from origin to destination",
        ]}
        whatsPartDescription="Our LCL cargo consolidation services include comprehensive handling from pickup to delivery, ensuring your smaller shipments are consolidated efficiently and cost-effectively."
        whatsPartItems={[
          "Transportation of cargo to the stuffing point",
          "Professional stuffing of cargo in containers",
          "Custom processing of shipping documents",
          "Weekly sailing schedule updates for planning",
        ]}
        closingText="With our weekly consolidation services and extensive global network, we ensure your LCL shipments reach all major destinations on time without delay, offering the perfect balance of speed, cost, and reliability."
      />
    </div>
  );
};
