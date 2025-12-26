import { Ship } from "lucide-react";
import { ServiceHero } from "../components/services-hero";
import { ServiceContent } from "../components/services-content";

export const SeaFrightFCLView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/sea-fright.jpg"
        icon={<Ship className="w-8 h-8 text-white" />}
        title="Sea freight - FCL"
        description="Worldwide ocean freight services for full container loads. We offer non-stop solutions to and from any point worldwide with competitive rates and qualified shipping lines."
      />
      <ServiceContent
        aboutDescription="With experienced professional staff guiding you through the complexities of global shipping, we offer comprehensive ocean freight services for full container loads based on qualified shipping lines. We keep you informed of your shipment status at every step and everywhere, ensuring complete transparency and reliability."
        aboutBullets={[
          "Worldwide ocean freight services for full container loads",
          "Based on qualified and reliable shipping lines",
          "Competitive rates with transparent pricing",
          "Buyer consolidation and scheduled departures",
        ]}
        whatsPartDescription="Our FCL sea freight services provide complete door-to-door capability with professional handling and continuous monitoring throughout the shipping process."
        whatsPartItems={[
          "Door-to-door delivery capability worldwide",
          "Scheduled departures for planning efficiency",
          "Real-time shipment tracking and status updates",
          "Expert guidance through global shipping complexities",
        ]}
        closingText="With our global network and partnerships with qualified shipping lines, we ensure your full container loads reach any destination worldwide safely and on schedule, with complete visibility at every stage of the journey."
      />
    </div>
  );
};
