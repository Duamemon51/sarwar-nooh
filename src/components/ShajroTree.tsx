"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
/**
 * Design ki minimum width (px). Jis screen ki width is se kam ho,
 * poora design proportionally chhota (scale) ho jata hai — layout wahi rehta hai.
 * Zyada bara number = mobile par text aur chhota, kam number = text bara.
 */
const DESIGN_WIDTH = 900;

/* ------------------------------------------------------------------ */
/*  DATA  — yahan se text edit karein, UI khud update ho jayegi        */
/*  (names untouched — do not edit the array below)                   */
/* ------------------------------------------------------------------ */

const PREFIX = "حضرت سيدنا";

/**
 * Poora nasab (silsila) — Shujro.docx se liya gaya hai (46 names,
 * khalifa awwal Hazrat Abu Bakr Siddiq se le kar mojooda Sajjada Nashin tak).
 */
const NASAB = [
  "خليفه اول حضرت سيدنا ابو بڪر صديق ؓ",
 "حضرت سيدنا محمد بن ابو بڪر صديق ؓ",
  "حضرت سيدنا القاسم بن محمد بن ابو بڪر صديق ؓ",
  "حضرت سيدنا عبد الرحمٰن بن القاسم",
  "حضرت سيدنا عبدالله بن عبد الرحمٰن",
  "حضرت سيدنا محمد بن عبدالله",
  "حضرت سيدنا القاسم بن محمد",
  "حضرت سيدنا النضر بن القاسم",
  "حضرت سيدنا القاسم بن النضر",
  "حضرت سيدنا حسين بن القاسم",
  "حضرت سيدنا سعد بن حسين",
  "حضرت سيدنا عبدالله عمويه بن سعد",
  "حضرت سيدنا محمد بن عبد الله عمويه",
  "حضرت سيدنا عبدالله بن محمد",
  "حضرت سيدنا محمد بن عبد الله",
  "حضرت سيدنا شيخ شهاب الدين عمر سهر وردي بن محمد",
  "حضرت سيدنا عبدالله بن شهاب الدين عمر سهر وردي",
  "حضرت سيدنا محمد بن عبدالله",
  "حضرت سيدنا عبدالله بن محمد",
  "حضرت سيدنا اسماعيل مير پير بن عبد الله",
  "حضرت سيدنا ابو بڪرڪتابي وهو ابو الوهاب بن اسماعيل ميرپير",
  "حضرت سيدنا فخر الدين ڪبير بن ابو بڪرڪتابي",
  "حضرت سيدنا اسماعيل بن فخر الدين ڪبير",
  "حضرت سيدنا فخر الدين صغير (لول وارد هالڪندي) بن اسماعيل",
  "حضرت سيدنا شهاب الدين صغير بن فخر الدين صغير",
  "حضرت سيدنا اسحاق بن شهاب الدين صغير",
  "حضرت سيدنا مخدوم نعمت الله بن اسحاق",
  "حضرت سيدنا غوث الحق مخدوم لطف الله الهامي نالو مخدوم نوح بن نعمت الله",
  "حضرت سيدنا مخدوم امين محمداول بن حضرت مخدوم سرور نوح",
  "حضرت سيدنا مخدوم ابو محمد بن مخدوم امين محمد اول",
  "حضرت سيدنا مخدوم عبدالخالق بن مخدوم أبو محمد",
  "حضرت سيدنا مخدوم محمد زمان أول بن مخدوم عبد الخالق",
  "حضرت سيدنا مخدوم مير محمد بن ميان مٺن ڪلان",
  "حضرت سيدنا مخدوم محمد زمان ثاني بن مخدوم مير محمد",
  "حضرت سيدنا مخدوم مير محمد بن مخدوم محمد زمان ثاني",
  "حضرت سيدنا مخدوم الحاج حافظ محمد زمان بن مخدوم مير محمد",
  "حضرت سيدنا مخدوم ميرل معصوم بن مخدوم الحاج حافظ محمد زمان",
  "حضرت سيدنا مخدوم امين محمد ثاني بن ميان پنيلڌو ڪلان",
  "حضرت سيدنا مخدوم محمد زمان رابع بن مخدوم امين محمد ثاني",
  "حضرت سيدنا مخدوم امين محمد پکن ڌڻي بن مخدوم محمد زمان رابع",
  "حضرت سيدنا مخدوم محمد زمان سرڪار بن مخدوم امين محمد ثالث (پکن ڌڻي)",
  "حضرت سيدنا مخدوم ظهير الدين بن مخدوم امين محمد ثالث (پکن ڌڻي)",
  "حضرت سيدنا مخدوم غلام محمد عرف گل سائين بن مخدوم ظهير الدين اول",
  "حضرت سيدنا الحاج مخدوم محمد زمان طالب الموليٰ بن مخدوم غلام محمد (گل سائين)",
  "حضرت سيدنا مخدوم محمدامين فهيم رابع بن مخدوم محمد زمان طالب الموليٰ",
  "حضرت سيدنا مخدوم ظهير الدين جميل الزمان بن مخدوم امين فهيم رابع سجاده نشين درگاھ شريف هالادام حياته",
];

/* ------------------------------------------------------------------ */
/*  Scale-to-fit wrapper                                               */
/* ------------------------------------------------------------------ */

/**
 * Container ki width >= minWidth ho to normal (scale 1) dikhata hai.
 * Chhoti ho to andar ka content minWidth par layout hota hai aur
 * transform: scale se container mein fit kar diya jata hai.
 */
function FitWidth({
  minWidth,
  children,
}: {
  minWidth: number;
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [m, setM] = useState<{ width: number; scale: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      const available = outer.clientWidth;
      const width = Math.max(available, minWidth);
      const scale = available / width;
      setM({ width, scale, height: inner.offsetHeight * scale });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [minWidth]);

  return (
    <div
      ref={outerRef}
      className="mx-auto w-full max-w-6xl overflow-hidden"
      style={{ height: m?.height, visibility: m ? "visible" : "hidden" }}
    >
      <div
        ref={innerRef}
        style={{
          width: m?.width ?? minWidth,
          transform: `scale(${m?.scale ?? 1})`,
          transformOrigin: "top right", // RTL
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Palette                                                             */
/* ------------------------------------------------------------------ */

const GOLD = "#c9a227";
const GOLD_LIGHT = "#e6c55a";
const GOLD_SOFT = "#f0dfa0";
const DEEP_GREEN = "#0a3a2b";
const MID_GREEN = "#125541";
const INK = "#0a3a2b";

/* ------------------------------------------------------------------ */
/*  Ornamental building blocks                                         */
/* ------------------------------------------------------------------ */

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g fill="none" stroke={GOLD_LIGHT} strokeWidth="1.6">
        <rect x="9" y="9" width="22" height="22" />
        <rect x="9" y="9" width="22" height="22" transform="rotate(45 20 20)" />
      </g>
      <circle cx="20" cy="20" r="3.5" fill={GOLD_LIGHT} />
    </svg>
  );
}

/** Ornate flourish used at the four corners of the outer frame */
function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotation = { tl: 0, tr: 90, bl: -90, br: 180 }[position];
  const edge: Record<string, string> = {
    tl: "top-2 left-2",
    tr: "top-2 right-2",
    bl: "bottom-2 left-2",
    br: "bottom-2 right-2",
  };
  return (
    <svg
      viewBox="0 0 72 72"
      className={`pointer-events-none absolute h-12 w-12 sm:h-16 sm:w-16 ${edge[position]}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M4 4 H34 M4 4 V34"
        fill="none"
        stroke={GOLD}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M4 14 H20 M14 4 V20" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.6" />
      <path
        d="M4 4 Q28 4 28 28 Q28 4 4 4"
        fill="none"
        stroke={GOLD_LIGHT}
        strokeWidth="1.4"
      />
      <path
        d="M9 4 Q4 4 4 9"
        fill="none"
        stroke={GOLD_LIGHT}
        strokeWidth="1.2"
      />
      <circle cx="4" cy="4" r="3.6" fill={GOLD} />
      <circle cx="4" cy="4" r="1.4" fill="#fff" />
      <circle cx="21" cy="4" r="1.8" fill={GOLD_LIGHT} />
      <circle cx="4" cy="21" r="1.8" fill={GOLD_LIGHT} />
      <circle cx="34" cy="4" r="1" fill={GOLD} />
      <circle cx="4" cy="34" r="1" fill={GOLD} />
    </svg>
  );
}

/** Small rosette / medallion, used above the main banner and to close the frame */
function Medallion({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className="mx-auto"
      aria-hidden="true"
    >
      <g fill="none" stroke={GOLD} strokeWidth="1.4">
        <circle cx="20" cy="20" r="17" />
        <circle cx="20" cy="20" r="12.5" stroke={GOLD_LIGHT} strokeWidth="1" />
      </g>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <rect
            key={i}
            x="18.6"
            y="4"
            width="2.8"
            height="7"
            rx="1.4"
            fill={GOLD_LIGHT}
            transform={`rotate(${angle} 20 20)`}
          />
        );
      })}
      <circle cx="20" cy="20" r="5.5" fill={GOLD_SOFT} stroke={GOLD} strokeWidth="1.2" />
      <circle cx="20" cy="20" r="2" fill={GOLD} />
    </svg>
  );
}

/** Small decorative swirl divider placed between sections */
function Divider() {
  return (
    <div className="mx-auto flex w-full max-w-md items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
      <svg width="28" height="20" viewBox="0 0 28 20">
        <path
          d="M2 10 Q9 2 14 10 Q19 18 26 10"
          fill="none"
          stroke={GOLD}
          strokeWidth="1.6"
        />
        <circle cx="14" cy="10" r="2.4" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth="1" />
      </svg>
      <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
    </div>
  );
}

/** Faint repeating geometric motif used as a page backdrop */
function PatternBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="shajro-motif" width="42" height="42" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={DEEP_GREEN} strokeWidth="1">
            <rect x="9" y="9" width="24" height="24" />
            <rect x="9" y="9" width="24" height="24" transform="rotate(45 21 21)" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#shajro-motif)" />
    </svg>
  );
}

function Banner({
  children,
  size = "lg",
}: {
  children: ReactNode;
  size?: "lg" | "md";
}) {
  const isLg = size === "lg";
  return (
    <div className="relative mx-auto flex w-fit max-w-full flex-col items-center">
      <div
        className={`relative flex items-center justify-center gap-3 rounded-[26px] border-[3px] text-center ${
          isLg ? "px-16 py-3.5" : "px-10 py-1.5"
        }`}
        style={{
          borderColor: GOLD,
          background: `linear-gradient(180deg, ${MID_GREEN} 0%, ${DEEP_GREEN} 100%)`,
          boxShadow:
            "inset 0 0 0 2px rgba(230,197,90,.35), inset 0 2px 6px rgba(255,255,255,.08), 0 8px 20px rgba(0,0,0,.28)",
        }}
      >
        <Star className={isLg ? "h-8 w-8 shrink-0" : "h-5 w-5 shrink-0"} />
        <h2
          className={`font-bold tracking-wide text-white ${isLg ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}
          style={{ textShadow: "0 2px 6px rgba(0,0,0,.35)" }}
        >
          {children}
        </h2>
        <Star className={isLg ? "h-8 w-8 shrink-0" : "h-5 w-5 shrink-0"} />
      </div>
      {/* small hanging accent under the banner */}
      <svg width="46" height="16" viewBox="0 0 46 16" className="-mt-px" aria-hidden="true">
        <path d="M23 0 L23 9" stroke={GOLD} strokeWidth="2" />
        <circle cx="23" cy="12" r="3" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth="1" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Enumerated list section                                            */
/* ------------------------------------------------------------------ */

function NasabList({
  items,
  start,
  divider = false,
}: {
  items: string[];
  start: number;
  divider?: boolean;
}) {
  return (
    <ol
      className={`space-y-2 ${divider ? "border-r-2 pr-5 sm:pr-6" : "pl-3 sm:pl-6"}`}
      style={divider ? { borderColor: GOLD } : undefined}
    >
      {items.map((text, i) => {
        const n = start + i;
        const unknown = text === "؟";
        const alt = n % 2 === 0;
        const featured = n === 28 || n === 46;
        return (
          <li
            key={n}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15.5px] sm:text-[17px] leading-relaxed transition-shadow ${
              featured ? "relative scale-[1.04] sm:scale-[1.06]" : ""
            }`}
            style={{
              color: featured ? "#fff" : INK,
              background: featured
                ? `linear-gradient(135deg, ${MID_GREEN} 0%, ${DEEP_GREEN} 100%)`
                : alt
                ? "linear-gradient(90deg, rgba(201,162,39,.14), rgba(201,162,39,.04))"
                : "rgba(255,255,255,.5)",
              border: featured
                ? `2px solid ${GOLD_LIGHT}`
                : `1px solid ${alt ? "rgba(201,162,39,.4)" : "rgba(201,162,39,.18)"}`,
              boxShadow: featured
                ? "0 0 0 3px rgba(201,162,39,.25), 0 6px 18px rgba(10,58,43,.35)"
                : "0 1px 2px rgba(10,58,43,.06)",
              zIndex: featured ? 1 : undefined,
            }}
          >
            {featured && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 40 40"
                className="absolute -top-2 -right-2 drop-shadow"
                aria-hidden="true"
              >
                <path
                  d="M20 3 L23.5 15.5 L36 16.5 L26 24.5 L29.5 37 L20 29.5 L10.5 37 L14 24.5 L4 16.5 L16.5 15.5 Z"
                  fill={GOLD_LIGHT}
                  stroke={GOLD}
                  strokeWidth="1.2"
                />
              </svg>
            )}
            <span
              className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
              style={{
                background: featured
                  ? `linear-gradient(180deg, ${GOLD_LIGHT}, ${GOLD})`
                  : `linear-gradient(180deg, ${MID_GREEN}, ${DEEP_GREEN})`,
                border: `1.5px solid ${featured ? "#fff" : GOLD_LIGHT}`,
                boxShadow: "0 2px 5px rgba(10,58,43,.35)",
                color: featured ? DEEP_GREEN : "#fff",
              }}
            >
              {n}
            </span>
            <span className={unknown ? "text-[#8a6d10]/70" : "font-bold"} style={featured ? { textShadow: "0 1px 3px rgba(0,0,0,.4)" } : undefined}>
              {text}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ShajroTree() {
  const RIGHT_COLUMN_COUNT = 26;
  const rightCol = NASAB.slice(0, RIGHT_COLUMN_COUNT);
  const leftCol = NASAB.slice(RIGHT_COLUMN_COUNT);

  return (
    <section
      dir="rtl"
      lang="sd"
      className="font-[family-name:var(--font-sindhi)] relative w-full overflow-hidden px-2 py-6 sm:px-6 sm:py-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #fffaea 0%, #fbf6de 45%, #f1e8bd 100%)",
      }}
    >
      <PatternBackdrop />

      <FitWidth minWidth={DESIGN_WIDTH}>
        <div
          className="relative rounded-[28px] p-6 sm:p-10"
          style={{
            border: `4px double ${GOLD}`,
            background:
              "linear-gradient(160deg, rgba(255,255,255,.5) 0%, rgba(255,255,255,.2) 100%)",
            boxShadow:
              "inset 0 0 0 6px rgba(201,162,39,.16), inset 0 0 60px rgba(201,162,39,.08), 0 18px 48px rgba(10,58,43,.2)",
          }}
        >
          <CornerOrnament position="tl" />
          <CornerOrnament position="tr" />
          <CornerOrnament position="bl" />
          <CornerOrnament position="br" />

          <Medallion />

          <div className="mt-3">
            <Banner>شجرو حضرت غوث الحق مخدوم نوح</Banner>
          </div>

          <div className="mt-8 mb-3">
            <Divider />
          </div>

          <Banner size="md">مڪمل شجرو</Banner>

          <div
            className="mt-6 grid grid-cols-2 gap-2 rounded-2xl p-4 sm:gap-3 sm:p-8"
            style={{
              border: `2px solid ${GOLD}`,
              background:
                "linear-gradient(160deg, rgba(255,255,255,.55), rgba(255,250,230,.35))",
              boxShadow:
                "inset 0 0 40px rgba(201,162,39,.1), 0 6px 18px rgba(10,58,43,.08)",
            }}
          >
            <NasabList items={rightCol} start={1} />
            <NasabList items={leftCol} start={RIGHT_COLUMN_COUNT + 1} divider />
          </div>

          <div className="mt-8 flex justify-center">
            <Medallion size={34} />
          </div>
        </div>
      </FitWidth>
    </section>
  );
}