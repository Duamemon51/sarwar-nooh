type StarDividerProps = {
  tone?: "gold" | "teal";
  className?: string;
};

/**
 * A repeating eight-point star motif, the geometric unit most associated
 * with Islamic manuscript illumination and the ajrak block-prints of Sindh.
 * Used only at genuine transitions between the stages of Makhdoom Nooh's
 * life, so it marks structure rather than decorating for its own sake.
 */
export default function StarDivider({
  tone = "gold",
  className = "",
}: StarDividerProps) {
  const color = tone === "gold" ? "#c08a28" : "#1f5c57";
  const unit = 40;
  const repeats = 12;
  const width = unit * repeats;

  const star = (cx: number, cy: number) => {
    const outer = 9;
    const inner = 3.7;
    const points: string[] = [];
    for (let i = 0; i < 16; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const angle = (Math.PI / 8) * i - Math.PI / 2;
      points.push(
        `${(cx + r * Math.cos(angle)).toFixed(2)},${(
          cy +
          r * Math.sin(angle)
        ).toFixed(2)}`
      );
    }
    return points.join(" ");
  };

  return (
    <svg
      viewBox={`0 0 ${width} 40`}
      preserveAspectRatio="none"
      className={`w-full h-6 ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="20"
        x2={width}
        y2="20"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {Array.from({ length: repeats }).map((_, i) => (
        <polygon
          key={i}
          points={star(unit * i + unit / 2, 20)}
          fill={color}
          fillOpacity={i % 2 === 0 ? 0.9 : 0.45}
        />
      ))}
    </svg>
  );
}
