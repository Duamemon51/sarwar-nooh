"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
/**
 * Design ki minimum width (px). Jis screen ki width is se kam ho,
 * poora design proportionally chhota (scale) ho jata hai — layout wahi rehta hai.
 * Zyada bara number = mobile par text aur chhota, kam number = text bara.
 */
const DESIGN_WIDTH = 820;

/* ------------------------------------------------------------------ */
/*  DATA  — yahan se text edit karein, UI khud update ho jayegi        */
/* ------------------------------------------------------------------ */

const PREFIX = "حضرت سيدنا";

/**
 * Poora nasab (silsila) — Shujro.docx se liya gaya hai (46 names,
 * khalifa awwal Hazrat Abu Bakr Siddiq se le kar mojooda Sajjada Nashin tak).
 */
const NASAB = [
  "خليفه اول حضرت سيدنا ابو بڪر صديق",
  "حضرت سيدنا محمد بن ابو بڪر صديق",
  "حضرت سيدنا القاسم بن محمد بن ابو بڪر صديق",
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

const ROW_1 = NASAB.slice(0, 7);
const ROW_2 = NASAB.slice(7, 14);
const CENTER = NASAB[14] ?? "مخدوم امام علي ولد فبله نجميلن الدين";
const ROW_3 = NASAB.slice(15, 22);
const ROW_4 = NASAB.slice(22, 26);

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
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

const GOLD = "#c9a227";

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g fill="none" stroke="#e6c55a" strokeWidth="1.6">
        <rect x="9" y="9" width="22" height="22" />
        <rect x="9" y="9" width="22" height="22" transform="rotate(45 20 20)" />
      </g>
      <circle cx="20" cy="20" r="3.5" fill="#e6c55a" />
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
    <div
      className={`mx-auto flex w-fit max-w-full items-center justify-center gap-3 rounded-[26px] border-[3px] text-center ${
        isLg ? "px-14 py-3" : "px-10 py-1.5"
      }`}
      style={{
        borderColor: GOLD,
        background: "linear-gradient(180deg,#14614a 0%,#0a3a2b 100%)",
        boxShadow:
          "inset 0 0 0 2px rgba(230,197,90,.35), 0 6px 16px rgba(0,0,0,.25)",
      }}
    >
      <Star className={isLg ? "h-8 w-8" : "h-5 w-5"} />
      <h2 className={`font-bold text-white ${isLg ? "text-4xl" : "text-2xl"}`}>
        {children}
      </h2>
      <Star className={isLg ? "h-8 w-8" : "h-5 w-5"} />
    </div>
  );
}

function Node({ name }: { name: string }) {
  return (
    <div
      className="flex h-full min-h-[68px] flex-col items-center justify-center rounded-xl border-2 px-2 py-2 text-center"
      style={{
        borderColor: GOLD,
        background: "linear-gradient(180deg,#14614a 0%,#0a3a2b 100%)",
        boxShadow:
          "inset 0 0 0 1.5px rgba(230,197,90,.3), 0 3px 8px rgba(0,0,0,.25)",
      }}
    >
      <span className="text-[11px] leading-tight text-[#f1d77a]">{PREFIX}</span>
      <span className="mt-0.5 text-[14px] font-bold leading-snug text-white">
        {name}
      </span>
    </div>
  );
}

const Stem = () => (
  <div className="mx-auto h-5 w-[2px]" style={{ background: GOLD }} />
);

/** Ek row of boxes + upar wali horizontal line aur har box ka vertical stub */
function TreeRow({ names }: { names: string[] }) {
  const n = names.length;
  return (
    <div className="relative pt-5">
      <span
        className="absolute top-0 h-[2px]"
        style={{
          background: GOLD,
          left: `calc(100% / ${n * 2})`,
          right: `calc(100% / ${n * 2})`,
        }}
      />
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
      >
        {names.map((name, i) => (
          <div key={`${name}-${i}`} className="relative px-1">
            <span
              className="absolute -top-5 left-1/2 h-5 w-[2px] -translate-x-1/2"
              style={{ background: GOLD }}
            />
            <Node name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

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
      className={`space-y-1.5 ${divider ? "border-r-2 pr-6" : "pl-6"}`}
      style={divider ? { borderColor: GOLD } : undefined}
    >
      {items.map((text, i) => {
        const n = start + i;
        const unknown = text === "؟";
        return (
          <li
            key={n}
            className="flex items-baseline gap-2 text-[17px] leading-relaxed text-[#0a3a2b]"
          >
            <span className="w-8 shrink-0 text-left font-bold text-[#8a6d10]">
              {n}.
            </span>
            <span className={unknown ? "text-[#8a6d10]/70" : "font-bold"}>
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
  const RIGHT_COLUMN_COUNT = 27;
  const rightCol = NASAB.slice(0, RIGHT_COLUMN_COUNT);
  const leftCol = NASAB.slice(RIGHT_COLUMN_COUNT);

  return (
    <section
      dir="rtl"
      lang="sd"
      className="font-[family-name:var(--font-sindhi)] relative w-full overflow-hidden px-2 py-4 sm:px-6 sm:py-6"
      style={{ background: "linear-gradient(180deg,#fbf6de 0%,#f1e8bd 100%)" }}
    >
      <FitWidth minWidth={DESIGN_WIDTH}>
        <div
          className="relative rounded-2xl p-8"
          style={{
            border: `4px double ${GOLD}`,
            boxShadow: "inset 0 0 0 6px rgba(201,162,39,.12)",
          }}
        >
          <Banner>شجرو حضرت غوث الحق مخدوم نوح</Banner>

          <div className="mt-5">
            <Banner size="md">شجرو</Banner>
          </div>

          <div className="mt-2">
            <TreeRow names={ROW_1} />
            <Stem />
            <TreeRow names={ROW_2} />
            <Stem />
            <div className="mx-auto max-w-[460px] px-1">
              <Node name={CENTER} />
            </div>
            <Stem />
            <TreeRow names={ROW_3} />
            <Stem />
            <TreeRow names={ROW_4} />
          </div>

          <div className="mt-8">
            <Banner>شجرو نسب غالب الستورة</Banner>
          </div>

          <div
            className="mt-5 grid grid-cols-2 rounded-xl p-6"
            style={{
              border: `2px solid ${GOLD}`,
              background: "rgba(255,255,255,.35)",
            }}
          >
            <NasabList items={rightCol} start={1} />
            <NasabList items={leftCol} start={RIGHT_COLUMN_COUNT + 1} divider />
          </div>
        </div>
      </FitWidth>
    </section>
  );
}