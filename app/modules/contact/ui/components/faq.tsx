import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { faqs } from "~/constants";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">
            FAQS/
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Frequently asked questions<span className="text-orange-400">.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Find answers to common questions about our services, coverage,
            rates, and specialized logistics solutions. Can't find what you're
            looking for? Contact our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                rounded-lg overflow-hidden transition-all duration-300
                ${
                  openIndex === index
                    ? "bg-white border-2 border-orange-400 shadow-lg"
                    : "bg-white border-2 border-transparent hover:border-gray-200"
                }
              `}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 sm:py-7 flex items-center justify-between text-left group"
              >
                <span
                  className={`
                    text-lg sm:text-xl lg:text-2xl font-bold pr-4 transition-colors
                    ${openIndex === index ? "text-orange-400" : "text-gray-900 group-hover:text-orange-400"}
                  `}
                >
                  {faq.question}
                </span>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400 transition-transform" />
                  ) : (
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-orange-400 transition-colors" />
                  )}
                </div>
              </button>

              {/* Answer - Expandable */}
              <div
                className={`
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-7">
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/50">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
