"use client";

import { motion } from "motion/react";
import type { Memory } from "@/types";

interface TimelineBarProps {
  memories: Memory[];
  activeId: string | null;
  onSelect: (memory: Memory) => void;
}

export default function TimelineBar({
  memories,
  activeId,
  onSelect,
}: TimelineBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 safe-bottom">
      <div className="bg-cream/90 backdrop-blur-md border-t border-rose-light/20 px-4 pt-3 pb-3">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {memories.map((memory) => {
            const isActive = memory.id === activeId;
            const isSpecial = memory.isSpecial;

            return (
              <button
                key={memory.id}
                onClick={() => onSelect(memory)}
                className="relative flex-shrink-0 flex flex-col items-center gap-1 px-2 group"
                aria-label={memory.title}
              >
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={`rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    isActive
                      ? isSpecial
                        ? "w-8 h-8 text-[11px] bg-gold text-white shadow-lg"
                        : "w-8 h-8 text-[11px] bg-rose text-white shadow-lg"
                      : "w-6 h-6 text-[10px] bg-white text-warm-brown border border-rose-light/40 hover:border-rose"
                  }`}
                >
                  {memory.order}
                </motion.div>
                <span
                  className={`text-[9px] font-body whitespace-nowrap transition-colors ${
                    isActive ? "text-rose font-semibold" : "text-warm-brown-light"
                  }`}
                >
                  {memory.emoji}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
