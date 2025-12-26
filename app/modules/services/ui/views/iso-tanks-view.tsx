import { ServiceContent } from "../components/services-content";
import { ServiceHero } from "../components/services-hero";
import { GiScubaTanks } from "react-icons/gi";

export const IsoTanksView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/iso-tanks.jpg"
        icon={<GiScubaTanks className="w-8 h-8 text-white" />}
        title="ISO Tanks"
        description="Leading ISO tank carrier in India with agency partnerships from USA and Europe. Specialized fleets for liquid cargo with the most competitive rates in the Indian market."
      />
      <ServiceContent
        aboutDescription="We are agency holders for ISO principals from USA and Europe, offering specialized transportation for all types of liquid cargo. Our dedicated ISO division ensures smooth shipments with specialized fleets for empty repositioning across India at highly competitive rates."
        aboutBullets={[
          "Agency holder for ISO principals from USA and Europe",
          "Specialized fleets for empty repositioning pan India",
          "Own empty yard in Mundra with 30-45 days free time",
          "Most competitive rates in the entire Indian market",
        ]}
        whatsPartDescription="Our ISO tank services include comprehensive support from dedicated teams for monitoring, maintenance, and operations to ensure safe and efficient transport of liquid cargo."
        whatsPartItems={[
          "Dedicated team for ISO division monitoring",
          "Specialized maintenance, washing, and cleaning services",
          "Cost-effective empty repositioning nationwide",
          "Professional handling of all liquid cargo types",
        ]}
        closingText="As one of the most used ISO carriers in India, we help our principals maximize profits through cheaper repositioning rates and free storage at our Mundra yard, making us the preferred choice for liquid cargo transportation."
      />
    </div>
  );
};
