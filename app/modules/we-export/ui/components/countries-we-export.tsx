"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// GeoJSON URL for world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface MarkerData {
  name: string;
  coordinates: [number, number];
  color: string;
}

const markers: MarkerData[] = [
  { name: "Europe", coordinates: [10.4515, 51.1657], color: "#fb923c" }, // orange-400
  { name: "USA", coordinates: [-95.7129, 37.0902], color: "#fb923c" },
  { name: "Gulf", coordinates: [50.5577, 25.3548], color: "#fb923c" },
  { name: "Middle East", coordinates: [47.5769, 29.3117], color: "#fb923c" },
  { name: "Africa", coordinates: [20.0, -5.0], color: "#fb923c" },
  { name: "CIS Countries", coordinates: [65.0, 48.0], color: "#fb923c" },
  { name: "China", coordinates: [104.1954, 35.8617], color: "#fb923c" },
  { name: "Worldwide", coordinates: [0, 0], color: "#f97316" }, // orange-500 for emphasis
];

export const CountriesWeExport = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

    // Dynamically import GSAP only on client-side
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("@gsap/react"),
    ]).then(([{ gsap }, { ScrollTrigger }, { useGSAP }]) => {
      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger);

      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Map animation
      if (mapRef.current) {
        gsap.from(mapRef.current, {
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
          },
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      // Legend animation
      if (legendRef.current) {
        const items = legendRef.current.querySelectorAll(".legend-item");
        gsap.from(items, {
          scrollTrigger: {
            trigger: legendRef.current,
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">
            OUR REACH/
          </p>
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold">
            Countries We Export<span className="text-orange-400">.</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Delivering excellence to worldwide destinations with specialized
            solutions for project cargo, breakbulk, and temperature-controlled
            shipments
          </p>
        </div>

        {/* Map Container */}
        <div
          ref={mapRef}
          className="relative bg-linear-to-br from-black via-gray-900 to-black rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* World Map */}
          <div className="relative w-full aspect-video">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 140,
                center: [0, 20],
              }}
              className="w-full h-full"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1f2937"
                      stroke="#fb923c"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#374151", outline: "none" },
                        pressed: { fill: "#1f2937", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Markers */}
              {markers.map(({ name, coordinates, color }) => (
                <Marker key={name} coordinates={coordinates}>
                  <g
                    onMouseEnter={() => setHoveredMarker(name)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulsing circle */}
                    <circle
                      r={name === "Worldwide" ? 12 : 8}
                      fill={color}
                      opacity={0.2}
                      className="animate-ping"
                    />

                    {/* Pin marker */}
                    <path
                      d="M0,-15 C-4,-15 -7,-12 -7,-8 C-7,-4 0,0 0,0 C0,0 7,-4 7,-8 C7,-12 4,-15 0,-15 Z"
                      fill={color}
                      stroke="white"
                      strokeWidth={1.5}
                      style={{
                        transform:
                          hoveredMarker === name ? "scale(1.2)" : "scale(1)",
                        transformOrigin: "center",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <circle r={2} cy={-8} fill="white" />

                    {/* Tooltip */}
                    {hoveredMarker === name && (
                      <g>
                        <rect
                          x={-50}
                          y={-35}
                          width={100}
                          height={24}
                          rx={4}
                          fill="white"
                          stroke={color}
                          strokeWidth={2}
                        />
                        <text
                          textAnchor="middle"
                          y={-19}
                          fill="#000000"
                          fontSize={12}
                          fontWeight="600"
                        >
                          {name}
                        </text>
                      </g>
                    )}
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          {/* Legend */}
          <div
            ref={legendRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 md:mt-8"
          >
            {markers.map((marker) => (
              <div
                key={marker.name}
                className="legend-item flex items-center gap-2 group cursor-pointer"
                onMouseEnter={() => setHoveredMarker(marker.name)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <MapPin
                  className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                    hoveredMarker === marker.name ? "scale-125" : ""
                  }`}
                  style={{ color: marker.color }}
                  fill="currentColor"
                />
                <span
                  className={`text-white text-sm font-medium transition-colors duration-300 ${
                    hoveredMarker === marker.name ? "text-orange-400" : ""
                  }`}
                >
                  {marker.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">8+</div>
            <div className="text-gray-600 font-medium">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Shipments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
