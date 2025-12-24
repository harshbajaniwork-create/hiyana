import React from "react";

export const StatsSection = () => {
  return (
    <section className="bg-black text-white max-w-full sm:max-w-[80%] py-28 px-4 sm:px-6 lg:px-8 -mt-44 relative z-10">
      {/* Container matches hero content width */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Title Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-5xl font-bold text-center sm:text-left">
              Our impact in numbers.
            </h2>
          </div>

          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold">
              100<span className="text-orange-400 text-2xl sm:text-3xl">%</span>
            </div>
            <p className="mt-2 text-sm sm:text-lg text-gray-300">
              Client satisfaction
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold">
              650<span className="text-orange-400 text-2xl sm:text-3xl">+</span>
            </div>
            <p className="mt-2 text-sm sm:text-lg text-gray-300">
              Clients worldwide
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold">
              30<span className="text-orange-400 text-2xl sm:text-3xl">+</span>
            </div>
            <p className="mt-2 text-sm sm:text-lg text-gray-300">
              Years of experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
