import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const AboutHero = () => {
  return (
    <section className="bg-white pt-24 lg:pt-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              About Us/
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-[#111827] leading-[1.05] tracking-tight">
              About Hiyana <br className="hidden sm:block" />
              Logistics<span className="text-orange-400">.</span>
            </h1>
          </div>

          <div className="lg:pt-10">
            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Built on 5+ decades of transport excellence, we deliver
              comprehensive logistics solutions across India and worldwide. From
              our 26 branches covering 108 routes to international freight
              forwarding, we're committed to safety, integrity, and your
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-base hover:bg-orange-400 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="#values"
                className="bg-transparent border-2 border-gray-200 text-[#111827] px-10 py-5 rounded-full font-bold text-base hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center justify-center uppercase tracking-widest"
              >
                Our Values
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Globe Image Row */}
        <div className="relative w-full flex justify-center">
          <div className="w-full max-w-[1400px] transform translate-y-12 lg:translate-y-24">
            <img
              src="/about/globe.png"
              alt="Global logistics network"
              className="w-full h-auto object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
