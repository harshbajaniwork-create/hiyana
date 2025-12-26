import { OurCustomers } from "../../../../constants";

export const CustomersSection = () => {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              Our partners/
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#111827] leading-[1.1]">
              Trusted by leading <br className="hidden sm:block" />
              brands worldwide<span className="text-orange-400">.</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-500 text-lg leading-relaxed">
              Delivering excellence to diverse industries across commercial,
              non-commercial, and industrial sectors with tailored logistics
              solutions.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-16" />

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center">
          {OurCustomers.map((logo, index) => (
            <div
              key={index}
              className="w-full max-w-[160px] h-20 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={logo}
                alt={`Customer logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
