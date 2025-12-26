import { Container } from "lucide-react";
import { ServiceContent } from "../components/services-content";
import { ServiceHero } from "../components/services-hero";

export const BreakBulkView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/iso-tanks.jpg"
        icon={<Container className="w-8 h-8 text-white" />}
        title="Break Bulk"
        description="Specialized breakbulk cargo handling to worldwide ports. We expertly manage oversized and heavy cargo including silica sand, cement, wheat, rice, gypsum, and limestone for import and export shipments."
      />
      <ServiceContent
        aboutDescription="Our dedicated division for project and breakbulk cargo ensures professional handling of non-containerized freight. With our own fleet and specialized expertise, we deliver cost-effective solutions while maximizing revenues through optimized logistics planning."
        aboutBullets={[
          "Handling of silica sand, cement, wheat, rice, gypsum, and limestone",
          "Worldwide port coverage for imports and exports",
          "Own fleet for cost-effective ex-works pricing",
          "Specialized team for breakbulk operations",
        ]}
        whatsPartDescription="We provide comprehensive breakbulk solutions with dedicated infrastructure and expertise to handle your cargo safely from origin to destination."
        whatsPartItems={[
          "Expert handling of bulk commodities and raw materials",
          "Competitive rates with own fleet advantages",
          "Professional cargo lashing and securing services",
          "Efficient coordination for worldwide shipments",
        ]}
        closingText="With our specialized division and experienced team, we help you save costs at every step while ensuring safe and efficient delivery of your breakbulk cargo to destinations across Europe, Gulf, Middle East, and Africa."
      />
    </div>
  );
};
