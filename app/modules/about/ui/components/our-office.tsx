import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const OurOffice = () => {
  return (
    <section className="relative -mt-32 lg:-mt-48 pb-24 lg:pb-32 overflow-visible">
      <div className="relative">
        {/* Layout Wrapper */}
        <div className="relative flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[600px]">
          {/* Black Content Block (Left 50% ish) */}
          <div className="w-full lg:w-[50%] bg-black p-8 lg:p-20 flex flex-col justify-end items-end relative z-20 transform lg:translate-y-20 self-start">
            <div className="max-w-md">
              <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                Our Office/
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-[1.1] mb-8">
                Visit our location<span className="text-orange-400">.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Contact us today for a consultation or visit our headquarters to
                discuss your logistics needs in person.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 border-b border-white/10 pb-12">
                <div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <p className="text-gray-400">info@hiyanaworld.com</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Phone</h4>
                  <p className="text-gray-400">+91 2836 233 414</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-white font-bold hover:text-orange-400 transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Visit now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image Side (Background/Right) */}
          <div className="w-full lg:w-[70%] lg:absolute lg:top-0 lg:right-0 h-[400px] lg:h-full z-10">
            <img
              src="/about/location.jpg"
              alt="Our office building"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
