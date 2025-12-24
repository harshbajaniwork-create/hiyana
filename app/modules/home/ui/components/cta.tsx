import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const CTASection = () => {
  return (
    <section className="relative flex justify-start overflow-visible pb-24 lg:pb-32">
      {/* Centered card with overflow visible */}
      <div className="bg-black w-full sm:max-w-[85%] relative lg:-mt-2 z-20">
        {/* Geometric Hex/Grid Pattern Background */}
        <div className="absolute inset-0 pointer-events-none bg-[url('/home/pattern.svg')] object-cover" />

        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-white max-w-[540px]">
              <h2 className="text-3xl lg:text-6xl font-bold leading-[1.05] mb-8 tracking-tight">
                Ready to move your cargo? <br />
                Get a quote today<span className="text-white/40">.</span>
              </h2>
              <p className="text-white text-lg lg:text-xl mb-12 leading-relaxed opacity-90 font-medium">
                Experience seamless logistics with competitive rates, worldwide
                coverage, and dedicated support. Let's deliver excellence
                together.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to="/contact"
                  className="bg-orange-400 text-white px-10 py-5 rounded-full font-bold text-base hover:bg-black hover:text-orange-400 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  Get a quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-full font-bold text-base hover:bg-black hover:border-orange-400 transition-all duration-300 flex items-center justify-center uppercase tracking-widest"
                >
                  Our services
                </Link>
              </div>
            </div>

            {/* Image Side - Protruding from container on desktop */}
            <div className="relative h-full hidden lg:block">
              {/* Changed positioning to make it overflow to the right */}
              <div className="absolute top-44 -translate-y-1/2 -right-20 md:-right-24 lg:-right-28 xl:-right-[240px] w-[140%] xl:w-[150%] pointer-events-none">
                <img
                  src="https://assets-global.website-files.com/644fdfe30805352e528a6521/644fdfe3080535fa548a6638_shipping-container-cta-cargo-x-webflow-template.png"
                  alt="Shipping container"
                  className="w-full md:h-[500px] xl:h-[700px] object-contain"
                />
              </div>
            </div>
            {/* Mobile Image */}
            <div className="lg:hidden mt-8 -mr-6">
              <img
                src="https://assets-global.website-files.com/644fdfe30805352e528a6521/644fdfe3080535fa548a6638_shipping-container-cta-cargo-x-webflow-template.png"
                alt="Shipping container"
                className="w-full h-auto max-w-[450px] mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
