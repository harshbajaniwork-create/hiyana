import React from "react";

export const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/644fdfe30805352e528a6521/644fdfe30805351b408a664f_we%27re-global-logistic-providers-cargo-x-webflow-template.jpg"
          alt="We're Global Logistic Providers"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Centered */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            We’re global logistic providers
            <span className="text-orange-400">.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl">
            Hiyana World Logistics Pvt Ltd is the best total transportation and
            logistics solution. We specialize in the full spectrum of
            international freight forwarding and transportation service by Land,
            Sea, Air.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Primary Button: Black bg, orange-400 text */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-orange-400 font-medium rounded-md shadow hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto"
            >
              Get a quote
              <span className="ml-2">→</span>
            </a>

            {/* Secondary Button */}
            <a
              href="#our-services"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto"
            >
              Our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
