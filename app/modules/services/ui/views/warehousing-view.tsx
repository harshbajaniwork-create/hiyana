import { Warehouse } from "lucide-react";
import { ServiceHero } from "../components/services-hero";
import { ServiceContent } from "../components/services-content";

export const WarehousingView = () => {
  return (
    <div>
      <ServiceHero
        imageSrc="/services/warehouse.jpg"
        icon={<Warehouse className="w-8 h-8 text-white" />}
        title="Warehousing"
        description="Bonded warehouse solutions across major Indian ports with 30-45 days free storage time. Tailored warehouse services with safe storage, professional consolidation, and efficient distribution."
      />
      <ServiceContent
        aboutDescription="We offer tailored warehouse solutions with bonded facilities across major Indian ports. Our expert team consolidates your shipments into containers by PO, style, sequence, or vendors based on your SOP. Full containers are unstuffed at our bonded warehouses with safe storage by commodities, then distributed to your market accurately, timely, and with minimized risk."
        aboutBullets={[
          "30-45 days free storage time for LCL & FCL shipments",
          "Bonded warehouse facilities at major ports including Mundra and Nhava Sheva",
          "Strategic locations: Chennai, Mumbai, Delhi, Kolkata, Ahmedabad, and more",
          "Professional consolidation by PO, style, sequence, or vendor",
        ]}
        whatsPartDescription="Our comprehensive warehousing services include safe storage, professional handling, and efficient distribution across our network of facilities at key locations throughout India."
        whatsPartItems={[
          "Free storage offered at Mundra and Nhava Sheva ports for imports and exports",
          "Container stuffing and unstuffing services",
          "Commodity-based organized storage systems",
          "Warehouses at Tuticorin, Kandla, Gandhidham, Ludhiana, Vashi, Bhiwandi, and Andheri",
        ]}
        closingText="With our extensive warehouse network across 14+ strategic locations and free storage benefits at key ports, we provide cost-effective solutions that streamline your supply chain while ensuring safe, organized storage and timely distribution."
      />
    </div>
  );
};
