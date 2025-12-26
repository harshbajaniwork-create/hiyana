import { GiCargoShip } from "react-icons/gi";
import { ServiceContent } from "../components/services-content";
import { ServiceHero } from "../components/services-hero";

export const ProjectCargoView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/sea-fright.jpg"
        icon={<GiCargoShip className="w-8 h-8 text-white" />}
        title="Project Cargo"
        description="Specialized project cargo handling to Europe, Gulf, Middle East, and Africa. Expert transportation of transformers, cranes, heavy machineries, and oversized equipment to worldwide destinations."
      />
      <ServiceContent
        aboutDescription="Our dedicated team handles project cargo regularly to Europe, Gulf, Middle East, and Africa with extensive experience in moving transformers, cranes, heavy machineries, and complex equipment. With our own fleet, we deliver cost-effective ex-works pricing while ensuring smooth and safe delivery of your project cargo."
        aboutBullets={[
          "Regular shipments to Europe, Gulf, Middle East, and Africa",
          "Handling of transformers, cranes, and heavy machinery",
          "Own fleet for cost-effective ex-works pricing",
          "Specialized team for project and breakbulk operations",
        ]}
        whatsPartDescription="Our comprehensive project cargo services include specialized infrastructure and expertise to handle oversized and heavy equipment with professional care from origin to destination."
        whatsPartItems={[
          "Dedicated space for dock stuffing and cargo preparation",
          "Professional lashing, choking, and securing services",
          "Revenue optimization through efficient logistics planning",
          "Expert coordination for complex project movements",
        ]}
        closingText="With our dedicated division for project cargo and specialized expertise, we help you save costs at every step while ensuring safe delivery of your heavy equipment and machinery to destinations worldwide."
      />
    </div>
  );
};
