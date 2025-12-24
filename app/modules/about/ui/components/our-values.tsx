import * as Icons from "lucide-react";
import { OurValues } from "../../../../constants";

export const OurValuesSection = () => {
  return (
    <section className="bg-gray-50 py-24 lg:py-44" id="values">
      <div className="container mx-auto px-4 max-w-7xl mb-44">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              Our Values/
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#111827] leading-[1.1]">
              The values that drive <br className="hidden sm:block" />
              everything we do<span className="text-orange-400">.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 text-lg leading-relaxed">
              Our core values shape our culture and guide every decision,
              ensuring we deliver excellence while maintaining the highest
              ethical standards.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OurValues.map((value, index) => {
            const IconComponent = (Icons as any)[value.icon];

            return (
              <div
                key={index}
                className="bg-white p-10 lg:p-12 shadow-sm border border-gray-100 flex flex-col items-start group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-8 text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all duration-300">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>

                <h3 className="text-2xl font-bold text-[#111827] mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
