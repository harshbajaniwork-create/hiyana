import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonials } from "../../../../constants";

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % Testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + Testimonials.length) % Testimonials.length
    );
  };

  const current = Testimonials[activeIndex];

  return (
    <section className="bg-gray-50 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="text-orange-400 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-orange-400 inline-block"></span>
            Testimonials/
          </div>
          <h2 className="text-3xl lg:text-5xl lg:text-[54px] font-bold text-[#111827] leading-[1.1]">
            What our clients say <br className="hidden sm:block" />
            about our work<span className="text-orange-400">.</span>
          </h2>
        </div>

        {/* Content Card with Edge-to-Edge Image on Right */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-stretch bg-white min-h-[500px] lg:min-h-[600px] relative z-10 lg:mr-[calc(-50vw+50%)]">
            {/* Left Side: Content (White BG) */}
            <div className="flex-[1.2] p-8 lg:p-20 flex flex-col justify-center bg-white relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col h-full"
                >
                  <div className="relative mb-8">
                    <h3 className="text-2xl lg:text-4xl font-bold text-[#111827] leading-tight relative z-10">
                      <span className="text-orange-400">“</span>{" "}
                      {current.heading}{" "}
                      <span className="text-orange-400">”</span>
                    </h3>
                  </div>

                  <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl">
                    {current.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mt-auto">
                    <div>
                      <h4 className="text-xl font-bold text-[#111827]">
                        {current.name}
                      </h4>
                      <p className="text-orange-400 font-semibold">
                        {current.location}
                      </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                      <button
                        onClick={prevTestimonial}
                        className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <ArrowLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-orange-400 transition-all duration-300"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Image (Edge-to-Edge) */}
            <div className="flex-1 min-h-[350px] lg:min-h-full overflow-hidden relative bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={current.image}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
