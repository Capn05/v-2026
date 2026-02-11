"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

interface MemoryTextProps {
  description: string;
  thinking: string;
  isSpecial?: boolean;
}

export default function MemoryText({
  description,
  thinking,
  isSpecial,
}: MemoryTextProps) {
  return (
    <div className="space-y-5">
      {/* Description */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className={`font-body text-lg leading-relaxed ${
          isSpecial ? "text-xl text-warm-brown font-medium" : "text-warm-brown"
        }`}
      >
        {description}
      </motion.p>

      {/* What I was thinking */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className={`relative pl-4 border-l-2 ${
          isSpecial ? "border-gold" : "border-rose-light"
        }`}
      >
        <p className="text-sm font-body text-warm-brown-light italic mb-1">
          What I was thinking...
        </p>
        <p
          className={`font-body text-base leading-relaxed ${
            isSpecial ? "text-warm-brown font-medium" : "text-warm-brown/80"
          }`}
        >
          &ldquo;{thinking}&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
