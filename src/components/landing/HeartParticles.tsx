"use client";

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 12 + Math.random() * 20,
  duration: `${6 + Math.random() * 8}s`,
  delay: `${Math.random() * 6}s`,
  opacity: 0.2 + Math.random() * 0.4,
}));

export default function HeartParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 animate-float-up text-rose/30"
          style={{
            left: p.left,
            fontSize: p.size,
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
            opacity: p.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
