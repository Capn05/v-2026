"use client";

import { motion } from "motion/react";
import type { Memory } from "@/types";

interface TimelineSidebarProps {
  memories: Memory[];
  activeId: string | null;
  onSelect: (memory: Memory) => void;
}

export default function TimelineSidebar({
  memories,
  activeId,
  onSelect,
}: TimelineSidebarProps) {
  return (
    <div className="fixed left-0 top-0 bottom-0 z-30 w-64 bg-cream/90 backdrop-blur-md border-r border-rose-light/20 overflow-y-auto">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 border-b border-rose-light/20">
        <h2 className="font-serif text-lg font-bold text-warm-brown">
          Our Journey
        </h2>
        <p className="font-body text-xs text-warm-brown-light mt-1">
          Tap a memory to revisit it
        </p>
      </div>

      {/* Timeline items */}
      <div className="px-5 py-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-rose-light/30" />

          <div className="space-y-1">
            {memories.map((memory) => {
              const isActive = memory.id === activeId;
              const isSpecial = memory.isSpecial;

              return (
                <button
                  key={memory.id}
                  onClick={() => onSelect(memory)}
                  className={`relative w-full flex items-start gap-3 px-2 py-2.5 rounded-lg text-left transition-all duration-200 hover:bg-rose-light/10 ${
                    isActive ? "bg-rose-light/15" : ""
                  }`}
                >
                  {/* Dot */}
                  <motion.div
                    animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`relative z-10 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 ${
                      isActive
                        ? isSpecial
                          ? "bg-gold text-white shadow-md"
                          : "bg-rose text-white shadow-md"
                        : "bg-white text-warm-brown border border-rose-light/40"
                    }`}
                  >
                    {memory.order}
                  </motion.div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p
                      className={`font-serif text-sm font-semibold truncate ${
                        isActive
                          ? isSpecial
                            ? "text-gold"
                            : "text-rose"
                          : "text-warm-brown"
                      }`}
                    >
                      {memory.emoji} {memory.title}
                    </p>
                    <p className="font-body text-[11px] text-warm-brown-light">
                      {memory.date}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
