import { ServiceContent } from "../components/services-content";
import { ServiceHero } from "../components/services-hero";
import { GiPoliceBadge } from "react-icons/gi";

export const CustomClearanceView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/custom-clearance.jpg"
        icon={<GiPoliceBadge className="w-8 h-8 text-white" />}
        title="Custom Clearance"
        description="Expert customs clearance services ensuring smooth and compliant movement of your cargo. We handle all documentation, regulatory requirements, and coordination with customs authorities for seamless import-export operations."
      />
      <ServiceContent
        aboutDescription="Our experienced customs clearance team manages all aspects of customs documentation and regulatory compliance. We work closely with customs authorities to expedite clearance processes and minimize delays, ensuring your cargo moves smoothly through all ports and borders."
        aboutBullets={[
          "Complete customs documentation processing",
          "Import and export clearance at all major Indian ports",
          "Tariff classification and duty calculation",
          "Coordination with customs authorities and regulatory bodies",
        ]}
        whatsPartDescription="We provide end-to-end customs clearance solutions with expert knowledge of regulations, tariffs, and compliance requirements across all trade lanes."
        whatsPartItems={[
          "Documentation preparation and submission",
          "Duty and tax assessment and payment",
          "Regulatory compliance and license management",
          "Fast-track clearance for time-sensitive shipments",
        ]}
        closingText="With our extensive experience across 26 branches and major ports in India, we ensure your cargo clears customs efficiently while maintaining full compliance with all regulations and requirements."
      />
    </div>
  );
};
