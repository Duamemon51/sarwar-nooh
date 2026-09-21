"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Amiri } from "next/font/google";

// Crisp Arabic/Sindhi-friendly Naskh font (vector, never blurry)
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

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

const ROW_1 = [
  "ابوبڪر الصديق بن ابي قحافه",
  "عوام الصدري",
  "عثمان بن عفان",
  "عبدالله بن زبير بن ابي ابو ڪهم بن عثمان",
  "عبدالله بن قاسم",
  "معذ بن عبدالله",
  "آدم بن فاطمه",
];

const ROW_2 = [
  "القاسم بن ابوبڪر",
  "الخسن بن الخطاب",
  "عبدالله بن الخطاب",
  "مغين الدين بن يحييٰ مرداني",
  "معروف بن عمر خليفه",
  "غمير الدين المنين محمد",
  "قارلووق اغظم (القنتي)",
];

const CENTER = "مخدوم امام علي ولد فبله نجميلن الدين";

const ROW_3 = [
  "علي المرتضيٰ بن جمال اسماعيل الساعيل",
  "علي باشين بن غالب اسماعيل الساماغني",
  "غوث الدين بن غوث المرزي غنجه",
  "قتال الدين بن غوث اورزدي فيضي",
  "عبدالعزيز بن غوث منير",
  "غوث الدين سهروردي الفيروزي بنجيد",
  "عبدالجد بن اسماعيل الطيب الدين",
];

const ROW_4 = [
  "غياث الدين بن قنتم اسماعيل",
  "غوث الدين عالين عالم الدين الله مخدوم علي بن خطاب راني",
  "مقصوم الدين بن غياث القادري الخفاني",
  "مفعول الدين بن غياث القادري الاقفاني الخلفي",
];

const NASAB = [
  "خليفه اول حضرت سيدنا ابوبڪر الصديق بن ابي قحافه",
  "حضرت سيدنا ابوبڪر الصديق",
  "حضرت سيدنا القاسم بن محمد بن ابوبڪر صديق",
  "حضرت سيدنا عبدالرحٰمن بن قاسم",
  "حضرت سيدنا عبدالله بن عبدالرحٰمن",
  "حضرت سيدنا محمد بن عبدالله",
  "حضرت سيدنا القاسم بن محمد",
  "حضرت سيدنا النضر بن القاسم",
  "حضرت سيدنا القاسم بن النضر",
  "حضرت سيدنا الحسين بن القاسم",
  "حضرت سيدنا السعد بن الحسين",
  "حضرت سيدنا عبدالله عمويه بن السعد",
  "حضرت سيدنا محمد بن عبدالله عمويه",
  "حضرت سيدنا عبدالله بن محمد",
  "حضرت سيدنا محمد بن عبدالله",
  "حضرت سيدنا شيخ شهاب الدين عمر “سهروردي” بن محمد",
  "حضرت سيدنا عبدالله بن شيخ شهاب الدين عمر سهروردي",
  "حضرت سيدنا شمس الدين ابوبڪر “ڪتابي” بن عبدالله",
  "حضرت سيدنا فخر الدين “ڪبير” بن ابوبڪر ڪتابي",
  "حضرت سيدنا برهان الدين بن فخر الدين ڪبير",
  "حضرت سيدنا مخدوم اسماعيل عرف “مير پير” بن برهان الدين",
  "حضرت سيدنا عبدالوهاب بن مير پير",
  "حضرت سيدنا ظهير الدين بن عبدالوهاب",
  "حضرت سيدنا برهان الدين اسماعيل بن ظهير الدين",
  "حضرت سيدنا فخر الدين “صغير” (اول وارد هالا) بن برهان الدين اسماعيل",
  "حضرت سيدنا شهاب الدين “صغير” بن فخر الدين صغير",
  "حضرت سيدنا اسحاق بن شهاب الدين صغير",
  "حضرت سيدنا مخدوم نعمت الله بن اسحاق",
  "حضرت سيدنا غوث الحق مخدوم لطف الله الهامي نالو مخدوم “نوح” بن نعمت الله",
  "مخدوم امين محّمد",
  "مخدوم عبدالخالق دستار",
  "مخدوم محّمد زمان",
  "ميان مٺن",
  "مخدوم محّمد زمان",
  "مخدوم امين محّمد (ثاني) دستار",
  "مخدوم مير محّمد",
  "؟",
  "مخدوم امين محّمد",
  "؟",
  "مخدوم امين محّمد",
  "؟",
  "؟",
  "مخدوم ظهير الدين",
  "مخدوم غلام محّمد “گل سائين”",
  "مخدوم محّمد زمان “طالب المولىٰ”",
  "مخدوم محّمد امين “فهيم”",
  "مخدوم جميل الزمان دستار",
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
  const half = Math.ceil(NASAB.length / 2) - 1; // 23 right, 24 left
  const rightCol = NASAB.slice(0, half);
  const leftCol = NASAB.slice(half);

  return (
    <section
      dir="rtl"
      lang="sd"
      className={`${amiri.className} relative w-full overflow-hidden px-2 py-4 sm:px-6 sm:py-6`}
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
            <NasabList items={leftCol} start={half + 1} divider />
          </div>
        </div>
      </FitWidth>
    </section>
  );
}