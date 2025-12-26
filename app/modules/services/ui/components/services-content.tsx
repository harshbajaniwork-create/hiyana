import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceContentProps {
  aboutTitle?: string;
  aboutDescription: string;
  aboutBullets: string[];
  whatsPartTitle?: string;
  whatsPartDescription: string;
  whatsPartItems: string[];
  closingText: string;
}

export function ServiceContent({
  aboutTitle = "About the service",
  aboutDescription,
  aboutBullets,
  whatsPartTitle = "What's part of the service",
  whatsPartDescription,
  whatsPartItems,
  closingText,
}: ServiceContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About the Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {aboutTitle}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              {aboutDescription}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 ml-0">
              {aboutBullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start text-gray-600"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 mr-3 shrink-0" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* What's Part of the Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {whatsPartTitle}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              {whatsPartDescription}
            </p>

            {/* Numbered List */}
            <ol className="space-y-3 ml-0 list-none">
              {whatsPartItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  className="flex items-start text-gray-600"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-400 text-white text-sm font-semibold mr-3 shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ol>

            {/* Closing Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + 0.1 * whatsPartItems.length,
              }}
              className="text-gray-600 leading-relaxed mt-6"
            >
              {closingText}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
