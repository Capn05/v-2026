"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

interface MemoryTextProps {
  description: string;
  isSpecial?: boolean;
}

export default function MemoryText({
  description,
  isSpecial,
}: MemoryTextProps) {
  return (
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
  );
}
