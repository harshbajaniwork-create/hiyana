export const WhyUs = () => {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                Why Us/
              </div>
              <h2 className="text-3xl lg:text-5xl lg:text-[54px] font-bold text-[#111827] leading-[1.1] mb-8">
                Exceptional quality backed by decades of excellence
                <span className="text-orange-400">.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                With over 5 decades of transport expertise through our parent
                company, we deliver unmatched reliability across 26 branches and
                108 routes in India. Our commitment to safety, integrity, and
                customer satisfaction drives everything we do.
              </p>
            </div>

            <div className="overflow-hidden shadow-2xl">
              <img
                src="/home/why-us-2.jpg"
                alt="Logistics operations"
                className="w-full h-auto object-cover aspect-4/5"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 lg:pt-8">
            <div className="overflow-hidden shadow-2xl">
              <img
                src="/home/why-us-1.jpg"
                alt="Warehouse team"
                className="w-full h-auto object-cover aspect-4/5"
              />
            </div>

            <div>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                From bonded warehouses with extended free storage to specialized
                fleets for ISO tanks and reefers, we offer innovative solutions
                tailored to your needs. Our pro-active approach and competitive
                rates make us industry leaders in performance and customer
                trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
