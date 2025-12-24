import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section className="relative bg-white pt-24 lg:pt-48 pb-20 lg:pb-24 overflow-hidden ">
      {/* Gray background on the left side, visible on desktop */}
      <div className="absolute left-0 bottom-0 top-[45%] w-[42%] bg-gray-50 z-0 hidden lg:block" />

      <div className="relative z-10">
        {/* Main Image Container - Right Aligned and touching the end of the screen */}
        <div className="flex justify-end">
          <div className="w-full lg:w-[72%]">
            <img
              src="/home/about-image.jpg"
              alt="We're the future of logistics technology"
              className="w-full h-auto object-cover shadow-2xl transition-all duration-700 hover:brightness-105"
            />
          </div>
        </div>

        {/* Content Card Positioned with Container for standard alignment */}
        <div className="container mx-auto px-4 relative">
          <div className="mt-[-80px] lg:mt-0 lg:absolute lg:bottom-0 lg:left-[22.5%] lg:w-[40%] z-20">
            <div className="bg-white p-8 lg:p-14 lg:pr-20 shadow-[30px_30px_80px_rgba(0,0,0,0.06)] border-t-[6px] border-orange-400 transition-transform duration-500 hover:translate-y-[-4px]">
              <div className="max-w-[480px]">
                <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-orange-400 inline-block"></span>
                  About us/
                </div>

                <h2 className="text-3xl lg:text-5xl lg:text-[54px] font-bold text-[#111827] leading-[1.1] mb-8">
                  We're the future of <br className="hidden lg:block" />
                  logistics technology<span className="text-orange-400">.</span>
                </h2>

                <div className="mb-12">
                  <p className="text-[#4b5563] text-lg lg:text-xl leading-relaxed font-medium opacity-90">
                    Your trusted partner for total transportation and logistics
                    solutions since 2016. Specializing in international freight
                    forwarding by Land, Sea, and Air.
                  </p>
                </div>

                <a
                  href="/about"
                  className="group inline-flex items-center gap-3 text-orange-400 font-medium text-lg tracking-wide hover:gap-6 transition-all duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
