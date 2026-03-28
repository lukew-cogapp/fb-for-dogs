import { useMemo } from "react";

const STRAND_COUNT = 12;

const COLORS = [
  "var(--color-fur-medium)",
  "var(--color-fur-dark)",
  "var(--color-fur-light)",
  "var(--color-fur-brown)",
  "var(--color-fur-cream)",
];

export const FurStrands = () => {
  const strands = useMemo(
    () =>
      Array.from({ length: STRAND_COUNT }, (_, i) => ({
        id: i,
        left: `${(i / STRAND_COUNT) * 100 + Math.random() * 5}%`,
        height: `${20 + Math.random() * 30}px`,
        duration: `${12 + Math.random() * 18}s`,
        delay: `${Math.random() * 15}s`,
        opacity: 0.15 + Math.random() * 0.2,
        color: COLORS[i % COLORS.length],
      })),
    [],
  );

  return (
    <>
      {strands.map((s) => (
        <div
          key={s.id}
          className="fur-strand"
          style={{
            left: s.left,
            height: s.height,
            animationDuration: s.duration,
            animationDelay: s.delay,
            opacity: s.opacity,
            background: `linear-gradient(to bottom, transparent, ${s.color}, transparent)`,
          }}
        />
      ))}
    </>
  );
};
