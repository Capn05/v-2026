"use client";

import { motion } from "motion/react";
import { letterReveal, letterLine } from "@/lib/animations";

const lines = [
  "To My Love,",
  "",
  "From the moment you walked into my life,",
  "everything became more beautiful.",
  "",
  "Every place we've been,",
  "every laugh we've shared,",
  "every quiet moment together —",
  "they're all pieces of the most beautiful story",
  "I've ever been part of.",
  "",
  "I made this for you.",
  "A map of us. A map of our love.",
  "",
  "Tap each heart to relive our memories.",
  "",
  "Happy Valentine's Day, baby.",
  "I love you more than words can say.",
  "",
  "— Forever Yours ♥",
];

export default function LetterReveal() {
  return (
    <motion.div
      variants={letterReveal}
      initial="hidden"
      animate="visible"
      className="paper-texture rounded-2xl p-8 md:p-12 max-w-lg mx-auto shadow-xl"
    >
      <div className="space-y-1">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            variants={letterLine}
            className={`font-body text-base md:text-lg leading-relaxed ${
              line === "" ? "h-3" : ""
            } ${
              i === 0
                ? "font-serif text-xl md:text-2xl text-rose font-bold mb-2"
                : i === lines.length - 1
                  ? "font-serif text-rose font-semibold mt-4"
                  : "text-warm-brown"
            }`}
          >
            {line || "\u00A0"}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
