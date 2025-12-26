import { ServiceContent } from "../components/services-content";
import { ServiceHero } from "../components/services-hero";
import { Container } from "lucide-react";

export const ReeferContainerView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/reefer-container.jpg"
        icon={<Container className="w-8 h-8 text-white" />}
        title="Reefer Container"
        description="Specialized temperature-controlled container services for pharmaceutical products. Regular door-to-door movements to Europe, Africa, and CIS destinations with advanced cooling technology."
      />
      <ServiceContent
        aboutDescription="We specialize in handling reefer containers for pharmaceutical products, including insulin and highly valuable medicines and pharma raw materials. Our regular door movements to Europe, Africa, and CIS destinations are supported by specialized fleets with double gensets to maintain cool and viable temperatures throughout transit."
        aboutBullets={[
          "Specialized handling of pharma products and insulin",
          "Regular door movements to Europe, Africa, and CIS countries",
          "Specialized fleets with double gensets for temperature control",
          "Dedicated team for reefer operations and shipment surveys",
        ]}
        whatsPartDescription="Our comprehensive reefer services ensure precise temperature control and monitoring for your temperature-sensitive cargo, with both sea and air freight options available worldwide."
        whatsPartItems={[
          "Temperature-controlled sea freight with double gensets",
          "Temperature-controlled air shipments door-to-door worldwide",
          "Continuous monitoring and survey of shipments",
          "Professional handling of high-value pharmaceutical cargo",
        ]}
        closingText="With our dedicated reefer operations team and specialized equipment, we ensure your pharmaceutical products and temperature-sensitive cargo maintain perfect conditions from origin to destination, protecting your valuable inventory every step of the way."
      />
    </div>
  );
};
