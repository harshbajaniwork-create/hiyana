import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const OurStory = () => {
  return (
    <section className="relative bg-white pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-visible">
      {/* Black Background Block - Fills 65% from the right */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[70%] lg:h-screen bg-black z-0" />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Side: Overlapping Image */}
          <div className="w-full relative z-20">
            <img
              src="/about/our-story.jpg"
              alt="Our team at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Content Block */}
          <div className="w-full lg:pl-20 text-white">
            <div className="max-w-xl">
              <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                Our Story/
              </div>
              <h2 className="text-3xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
                Built on legacy, <br />
                driven by innovation<span className="text-orange-400">.</span>
              </h2>
              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12 opacity-90">
                Founded in 2016, Hiyana World Logistics is a proud subsidiary of
                Mumbai Transport Company — India's finest road carrier with over
                50 years of excellence. From our roots in traditional transport
                to becoming leaders in international freight forwarding, we've
                evolved while staying true to our core values of safety,
                integrity, and respect for all.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-orange-400 hover:bg-white hover:text-black text-white font-bold px-10 py-5 rounded-full transition-all duration-300 uppercase tracking-widest text-base"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
