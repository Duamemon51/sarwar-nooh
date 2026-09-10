type IllustrationProps = {
  className?: string;
};

/** A wide skyline of the shrine at Hala — bulbous dome, twin minarets,
 * set against a gradient dusk sky. The single large illustration on the
 * page, used once as the hero's visual anchor. */
export function DargahSkyline({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 800 260"
      className={className}
      role="img"
      aria-label="Illustration of a domed shrine at dusk, flanked by two minarets"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1930" />
          <stop offset="55%" stopColor="#1c2b4a" />
          <stop offset="100%" stopColor="#3a2c3d" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="45%">
          <stop offset="0%" stopColor="#d9a441" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d9a441" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="260" fill="url(#sky)" />
      <rect width="800" height="260" fill="url(#glow)" />

      {/* moon */}
      <circle cx="660" cy="55" r="22" fill="#f1e3bd" opacity="0.9" />

      {/* stars */}
      {[
        [80, 40], [140, 70], [200, 30], [320, 55], [420, 25], [500, 60],
        [590, 30], [730, 80], [40, 90], [250, 90],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#f3ead9" opacity="0.8" />
      ))}

      {/* ground */}
      <rect y="222" width="800" height="38" fill="#131d33" />

      {/* left minaret */}
      <g>
        <rect x="150" y="120" width="16" height="102" fill="#22345a" />
        <path d="M150 120 L158 96 L166 120 Z" fill="#c08a28" />
        <circle cx="158" cy="90" r="4" fill="#c08a28" />
        <rect x="147" y="150" width="22" height="6" fill="#0f1930" opacity="0.4" />
      </g>

      {/* right minaret */}
      <g>
        <rect x="634" y="120" width="16" height="102" fill="#22345a" />
        <path d="M634 120 L642 96 L650 120 Z" fill="#c08a28" />
        <circle cx="642" cy="90" r="4" fill="#c08a28" />
        <rect x="631" y="150" width="22" height="6" fill="#0f1930" opacity="0.4" />
      </g>

      {/* main dome building */}
      <g>
        <rect x="270" y="150" width="260" height="72" fill="#22345a" />
        {/* dome */}
        <path
          d="M300 150 C300 95 500 95 500 150 Z"
          fill="#1f5c57"
        />
        <path
          d="M300 150 C300 95 500 95 500 150"
          fill="none"
          stroke="#c08a28"
          strokeWidth="2.5"
        />
        <rect x="393" y="78" width="14" height="24" fill="#22345a" />
        <circle cx="400" cy="72" r="6" fill="#c08a28" />
        {/* arched doorway */}
        <path
          d="M375 222 L375 190 C375 172 425 172 425 190 L425 222 Z"
          fill="#0f1930"
        />
        {/* flanking arched windows */}
        <path
          d="M305 222 L305 198 C305 186 330 186 330 198 L330 222 Z"
          fill="#0f1930"
          opacity="0.85"
        />
        <path
          d="M470 222 L470 198 C470 186 495 186 495 198 L495 222 Z"
          fill="#0f1930"
          opacity="0.85"
        />
        {/* gold trim line */}
        <rect x="270" y="150" width="260" height="3" fill="#c08a28" opacity="0.7" />
      </g>
    </svg>
  );
}

/** A twelve-point geometric rosette — the family of star patterns used
 * across Islamic manuscript and tilework, representing the order's
 * continuity rather than any single teacher. */
export function Rosette({ className = "" }: IllustrationProps) {
  const points = (n: number, r: number, offset = 0) =>
    Array.from({ length: n })
      .map((_, i) => {
        const a = (Math.PI * 2 * i) / n - Math.PI / 2 + offset;
        return `${(56 + r * Math.cos(a)).toFixed(2)},${(
          56 +
          r * Math.sin(a)
        ).toFixed(2)}`;
      })
      .join(" ");

  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      <circle cx="56" cy="56" r="52" fill="none" stroke="#c08a28" strokeOpacity="0.35" />
      <polygon points={points(12, 40)} fill="none" stroke="#7c2a34" strokeWidth="1.4" strokeOpacity="0.8" />
      <polygon points={points(12, 40, Math.PI / 12)} fill="none" stroke="#1f5c57" strokeWidth="1.4" strokeOpacity="0.8" />
      <polygon points={points(12, 20)} fill="#c08a28" fillOpacity="0.85" />
      <circle cx="56" cy="56" r="6" fill="#1c2b4a" />
    </svg>
  );
}

/** A pointed mihrab-style arch holding a lamp — the khanqah, and the
 * lamp of learning kept lit there. */
export function ArchNiche({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      <path
        d="M20 100 V56 C20 24 92 24 92 56 V100 Z"
        fill="none"
        stroke="#1c2b4a"
        strokeWidth="2.5"
      />
      <path
        d="M32 100 V58 C32 34 80 34 80 58 V100 Z"
        fill="none"
        stroke="#c08a28"
        strokeWidth="1.6"
        strokeOpacity="0.8"
      />
      {/* hanging chain */}
      <line x1="56" y1="34" x2="56" y2="48" stroke="#7c2a34" strokeWidth="1.4" />
      {/* lamp */}
      <path
        d="M46 48 H66 L62 66 H50 Z"
        fill="#7c2a34"
        fillOpacity="0.85"
      />
      <ellipse cx="56" cy="48" rx="10" ry="3" fill="#c08a28" />
      <circle cx="56" cy="70" r="3" fill="#c08a28" />
      {/* glow */}
      <circle cx="56" cy="58" r="16" fill="#d9a441" fillOpacity="0.18" />
    </svg>
  );
}

/** An open manuscript with abstract flowing lines standing in for script
 * — deliberately non-textual, so no scripture or specific text is
 * rendered, only the impression of a page of translation. */
export function ManuscriptPage({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      <path
        d="M14 30 C30 22 46 22 56 30 C66 22 82 22 98 30 V88 C82 80 66 80 56 88 C46 80 30 80 14 88 Z"
        fill="#f3ead9"
        stroke="#1c2b4a"
        strokeWidth="2"
      />
      <line x1="56" y1="30" x2="56" y2="88" stroke="#1c2b4a" strokeWidth="1.4" opacity="0.5" />
      {[38, 48, 58, 68].map((y, i) => (
        <path
          key={"l" + i}
          d={`M20 ${y} C28 ${y - 4} 40 ${y + 4} 50 ${y}`}
          fill="none"
          stroke="#7c2a34"
          strokeWidth="1.6"
          opacity={0.75 - i * 0.08}
        />
      ))}
      {[38, 48, 58, 68].map((y, i) => (
        <path
          key={"r" + i}
          d={`M62 ${y} C70 ${y - 4} 82 ${y + 4} 92 ${y}`}
          fill="none"
          stroke="#1f5c57"
          strokeWidth="1.6"
          opacity={0.75 - i * 0.08}
        />
      ))}
    </svg>
  );
}

/** A branching genealogical motif of dots and connecting lines,
 * representing descent rather than a literal family tree. */
export function LineageMark({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      <circle cx="56" cy="20" r="5" fill="#1c2b4a" />
      <line x1="56" y1="25" x2="56" y2="46" stroke="#c08a28" strokeWidth="1.6" />
      <circle cx="56" cy="52" r="5" fill="#7c2a34" />
      <line x1="56" y1="57" x2="30" y2="78" stroke="#c08a28" strokeWidth="1.6" />
      <line x1="56" y1="57" x2="56" y2="82" stroke="#c08a28" strokeWidth="1.6" />
      <line x1="56" y1="57" x2="82" y2="78" stroke="#c08a28" strokeWidth="1.6" />
      <circle cx="30" cy="84" r="4.5" fill="#1f5c57" />
      <circle cx="56" cy="88" r="4.5" fill="#1f5c57" />
      <circle cx="82" cy="84" r="4.5" fill="#1f5c57" />
    </svg>
  );
}

/** A simple domed tomb silhouette for the shrine/burial section. */
export function TombDome({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      <path
        d="M28 78 C28 48 84 48 84 78 Z"
        fill="#1f5c57"
        stroke="#c08a28"
        strokeWidth="1.6"
      />
      <rect x="50" y="34" width="12" height="18" fill="#1c2b4a" />
      <circle cx="56" cy="30" r="5" fill="#c08a28" />
      <rect x="22" y="78" width="68" height="14" fill="#1c2b4a" />
      <path d="M48 92 V78 C48 70 64 70 64 78 V92 Z" fill="#0f1930" />
    </svg>
  );
}

/** Interlocking stars in a ring, for the closing legacy section. */
export function LegacyRing({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (Math.PI * 2 * i) / 8 - Math.PI / 2;
        const cx = 56 + 34 * Math.cos(a);
        const cy = 56 + 34 * Math.sin(a);
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4.2"
            fill={i % 2 === 0 ? "#c08a28" : "#7c2a34"}
          />
        );
      })}
      <circle cx="56" cy="56" r="34" fill="none" stroke="#1f5c57" strokeOpacity="0.5" strokeWidth="1.4" />
      <circle cx="56" cy="56" r="10" fill="none" stroke="#1c2b4a" strokeWidth="1.6" />
    </svg>
  );
}

/** A round wax-seal motif with an abstract flourish at its centre —
 * standing in for an honorific title, not a specific inscription. */
export function SealMark({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      <circle cx="56" cy="56" r="42" fill="#7c2a34" fillOpacity="0.12" />
      <circle
        cx="56"
        cy="56"
        r="34"
        fill="none"
        stroke="#7c2a34"
        strokeWidth="2.5"
      />
      <circle
        cx="56"
        cy="56"
        r="27"
        fill="none"
        stroke="#c08a28"
        strokeWidth="1.2"
        strokeDasharray="2 4"
      />
      <path
        d="M40 62 C46 46 66 46 72 62 C64 58 48 58 40 62 Z"
        fill="#c08a28"
      />
      <circle cx="56" cy="50" r="4" fill="#c08a28" />
    </svg>
  );
}

/** A medal disc on a short ribbon — used once, for a documented, named
 * civil honour, not a decorative flourish. */
export function Medal({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 112 112" className={className} role="presentation" aria-hidden="true">
      <path d="M42 12 L56 44 L36 44 Z" fill="#1f5c57" />
      <path d="M70 12 L76 44 L56 44 Z" fill="#7c2a34" />
      <circle cx="56" cy="66" r="26" fill="#c08a28" />
      <circle
        cx="56"
        cy="66"
        r="26"
        fill="none"
        stroke="#1c2b4a"
        strokeWidth="2"
      />
      <circle cx="56" cy="66" r="15" fill="none" stroke="#f3ead9" strokeWidth="2" />
      <path
        d="M56 58 L59 64 L66 65 L61 70 L62 77 L56 73.5 L50 77 L51 70 L46 65 L53 64 Z"
        fill="#f3ead9"
      />
    </svg>
  );
}