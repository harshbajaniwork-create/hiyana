import { Truck } from "lucide-react";
import { ServiceHero } from "../components/services-hero";
import { ServiceContent } from "../components/services-content";

export const TransportationView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/iso-tanks.jpg"
        icon={<Truck className="w-8 h-8 text-white" />}
        title="Transportation"
        description="India's finest road transport carrier with over 5 decades of experience. Comprehensive nationwide coverage with 26 branches and 108 routes across India for reliable door-to-door delivery."
      />
      <ServiceContent
        aboutDescription="Hiyana World Logistics is a subsidiary of the renowned Mumbai Transport Company, India's finest road transport carrier with more than 5 decades of experience. Our parent company operates 26 branches across India with 20 franchises, covering 108 routes to ensure seamless connectivity nationwide."
        aboutBullets={[
          "Over 50 years of road transport excellence",
          "26 branches with 20 franchises across India",
          "Comprehensive coverage of 108 routes nationwide",
          "Subsidiary of Mumbai Transport Company, Nisarg Road Carriers, and Shree Bombay Transport",
        ]}
        whatsPartDescription="Our extensive transportation network ensures reliable and timely delivery across India, backed by decades of expertise and a proven track record in the logistics industry."
        whatsPartItems={[
          "Pan-India connectivity with nationwide reach",
          "Experienced fleet management and operations",
          "Door-to-door delivery services",
          "Integrated transport solutions with our logistics services",
        ]}
        closingText="With our extensive network, decades of experience, and commitment to excellence, we provide reliable road transportation services that connect every corner of India, ensuring your cargo reaches its destination safely and on time."
      />
    </div>
  );
};
