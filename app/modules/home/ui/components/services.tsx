import {
  ArrowRight,
  Plane,
  Ship,
  Truck,
  TrainFront,
  Warehouse,
  Globe,
} from "lucide-react";
import { HomeServices } from "../../../../constants";
import { Link } from "react-router";

const IconMap: Record<string, any> = {
  Plane,
  Ship,
  Truck,
  TrainFront,
  Warehouse,
  Globe,
};

export const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-24 lg:py-44">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-orange-400 inline-block"></span>
              Our services/
            </div>
            <h2 className="text-3xl lg:text-5xl lg:text-[54px] font-bold text-[#111827] leading-[1.1]">
              A comprehensive set of services
              <span className="text-orange-400">.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors duration-300 flex items-center gap-2"
            >
              Get a quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              Browse all services
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-start">
          {HomeServices.map((service: any, index: number) => {
            const Icon = IconMap[service.icon] || Globe;
            // Visual staggered effect using translate to keep layout box sizes identical
            const staggerClass =
              index % 3 === 0
                ? "lg:translate-y-24"
                : index % 3 === 1
                  ? "lg:translate-y-12"
                  : "lg:translate-y-0";

            return (
              <Link
                key={index}
                to={service.href}
                className={`group bg-white p-10 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:bg-black hover:shadow-2xl border-t-4 border-transparent hover:border-orange-400 ${staggerClass}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <Icon className="w-12 h-12 text-orange-400 transition-colors duration-500 group-hover:text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-4 group-hover:text-orange-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-orange-400/80 transition-colors duration-500 font-medium">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-orange-400 group-hover:bg-orange-400 group-hover:text-black transition-all duration-500">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
