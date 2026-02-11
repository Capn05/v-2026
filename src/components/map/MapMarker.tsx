"use client";

import { Marker } from "react-map-gl";
import { motion } from "motion/react";
import type { Memory } from "@/types";

interface MapMarkerProps {
  memory: Memory;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function MapMarker({
  memory,
  index,
  isActive,
  onClick,
}: MapMarkerProps) {
  const isSpecial = memory.isSpecial;

  return (
    <Marker
      longitude={memory.coordinates[0]}
      latitude={memory.coordinates[1]}
      anchor="center"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        onClick();
      }}
    >
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.5 + index * 0.15,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center cursor-pointer"
        aria-label={`View memory: ${memory.title}`}
      >
        {/* Pulse ring */}
        <span
          className={`absolute w-10 h-10 rounded-full animate-pulse-ring ${
            isSpecial
              ? "bg-gold"
              : isActive
                ? "bg-rose"
                : "bg-rose-light"
          }`}
          style={{ opacity: isActive ? 0.6 : 0.3 }}
        />

        {/* Heart SVG */}
        <svg
          width={isSpecial ? 40 : 32}
          height={isSpecial ? 40 : 32}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-lg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={isSpecial ? "#D4A574" : "#E85D75"}
            stroke="white"
            strokeWidth="1"
          />
          {/* Inner emoji */}
          <text
            x="12"
            y="13"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8"
          >
            {memory.emoji}
          </text>
        </svg>

        {/* Order number badge */}
        <span
          className={`absolute -top-1 -right-1 z-20 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white shadow-md ${
            isSpecial ? "bg-gold" : "bg-rose"
          }`}
        >
          {memory.order}
        </span>
      </motion.button>
    </Marker>
  );
}
