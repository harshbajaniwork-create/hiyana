import { motion } from "framer-motion";
import { Plane } from "lucide-react";

interface Props {
  imageSrc: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceHero({ imageSrc, icon, title, description }: Props) {
  return (
    <div className="relative h-[70vh] min-h-[750px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay - Darker on left for content readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                {icon || <Plane className="w-8 h-8 text-white" />}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {title}
              <span className="text-orange-400">.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
