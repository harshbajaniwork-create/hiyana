import { Plane } from "lucide-react";
import { ServiceHero } from "../components/services-hero";
import { ServiceContent } from "../components/services-content";

export function AirFreightView() {
  return (
    <div>
      {/* Hero Section */}
      <ServiceHero
        imageSrc="/services/air-freight.jpg"
        icon={<Plane className="w-8 h-8 text-white" />}
        title="Air freight"
        description="Worldwide air freight services with time-defined deliveries and guaranteed service. Our excellent global network, supported by preferred carriers, ensures your cargo reaches any destination with speed and reliability."
      />

      {/* Content Section */}
      <ServiceContent
        aboutDescription="We provide an excellent worldwide network service for all of your air freight needs, with time-defined and guaranteed services supported by preferred carriers. We offer competitive rates for all time and cost requirements, with the flexibility to move single or complex shipments at any time and to any destination."
        aboutBullets={[
          "Door-to-door and airport-to-airport services worldwide",
          "Partnerships with qualified airlines and preferred carriers",
          "Competitive rates with worldwide coverage",
          "Flexible approach with personalized service to all customers",
        ]}
        whatsPartDescription="Our air freight service is built on strong partnerships with leading airlines and a commitment to delivering your cargo safely and on time. Whether you need urgent delivery or cost-effective solutions, we tailor our services to meet your specific requirements."
        whatsPartItems={[
          "Time-defined and guaranteed delivery services",
          "Comprehensive tracking and shipment monitoring",
          "Expert handling of urgent and high-value cargo",
          "Customized solutions for single or complex shipments",
        ]}
        closingText="With our global reach and preferred carrier partnerships, we ensure your air freight is handled with the highest level of care and professionalism. Our team provides real-time updates and dedicated support throughout the shipping process, making international air freight simple and stress-free."
      />
    </div>
  );
}
