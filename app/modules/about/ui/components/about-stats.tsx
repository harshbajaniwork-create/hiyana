export const AboutStats = () => {
  const stats = [
    {
      number: "50",
      suffix: "+",
      label: "Years of excellence",
      description:
        "Built on over 5 decades of transport expertise through our parent company, we bring unparalleled reliability and industry knowledge to every shipment.",
    },
    {
      number: "26",
      suffix: "+",
      label: "Branches across India",
      description:
        "With 26 branches and 20 franchises covering 108 routes nationwide, we ensure seamless connectivity from anywhere to everywhere in India.",
    },
    {
      number: "100",
      suffix: "%",
      label: "Customer satisfaction",
      description:
        "Our pro-active approach, competitive rates, and commitment to safety and integrity have made us industry leaders in performance and trust.",
    },
  ];

  return (
    <section className="bg-white -mt-10 py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-7xl font-bold text-[#111827]">
                  {stat.number}
                </span>
                <span className="text-4xl lg:text-5xl font-bold text-orange-400">
                  {stat.suffix}
                </span>
              </div>

              <div className="w-full h-px bg-gray-100" />

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#111827]">
                  {stat.label}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
