"use client";

import { useId, useState } from "react";

/* ------------------------------------------------------------------ */
/*  DATA — yahan se text edit karein, UI khud update ho jayegi         */
/* ------------------------------------------------------------------ */

type Row = [label: string, value: string];

type Dastar = {
  n: number;
  name: string;
  father?: string;
  years: string;
  rows: Row[];
  note?: string;
  current?: boolean;
};

const BIRTH = "ولادت";
const DEATH = "وصال";
const AGE = "عمر مبارڪ";
const NOT_SAJJADA = "مدت غير سجاده نشيني";
const SAJJADA = "مدت سجاده نشيني";
const YADGAR = "مدت يادگار";

const DASTARS: Dastar[] = [
  {
    n: 1,
    name: "حضرت سيدنا غوث الحق مخدوم لطف الله الهامي (مخدوم نوح)",
    father: "بن نعمت الله",
    years: "1505ع – 1590ع",
    rows: [
      [BIRTH, "27 رمضان المبارڪ 911 هه (مطابق 1505ع) جمعة الوداع جي رات"],
      [DEATH, "998 هه (مطابق 1590ع)"],
      [AGE, "87 سال"],
    ],
    note: "سندن والد صاحب کين ”نعمت الله“ نالو ڏنو.",
  },
  {
    n: 2,
    name: "حضرت سيدنا مخدوم امين محمد اول",
    father: "بن حضرت مخدوم سرور نوح",
    years: "952 – 1015 هه",
    rows: [
      [BIRTH, "5 ربيع الثاني 952 هه"],
      [DEATH, "7 شوال المڪرم 1015 هه (جمعي جي ڏينهن، عصر جي وقت)"],
      [YADGAR, "16 سال، 8 مهينا ۽ 10 ڏينهن"],
      [NOT_SAJJADA, "46 سال، 7 مهينا ۽ 10 ڏينهن"],
    ],
    note: "پاڻ پهرين سجاده نشين ٿيا. سندن رتبو اعليٰ هو، علم ۽ ڪرامت جا ڪامل مالڪ هئا.",
  },
  {
    n: 3,
    name: "حضرت سيدنا مخدوم ابو محمد (ابو الخير)",
    father: "بن مخدوم امين محمد اول",
    years: "1572ع – 1641ع",
    rows: [
      [BIRTH, "9 صفر المظفر 980 هه"],
      [DEATH, "8 ذي القعده 1050 هه"],
      [AGE, "70 سال، 9 مهينا ۽ 20 ڏينهن"],
      [YADGAR, "35 سال، 3 مهينا ۽ 1 ڏينهن"],
      [NOT_SAJJADA, "35 سال، 6 مهينا ۽ 28 ڏينهن"],
    ],
  },
  {
    n: 4,
    name: "حضرت سيدنا مخدوم عبدالخالق",
    father: "بن مخدوم ابو محمد",
    years: "1620ع – 1670ع",
    rows: [
      [BIRTH, "19 رجب المرجب 1030 هه"],
      [DEATH, "19 صفر المظفر 1081 هه"],
      [AGE, "51 سال، 4 مهينا ۽ 4 ڏينهن"],
      [NOT_SAJJADA, "20 سال، 2 مهينا ۽ 19 ڏينهن"],
      [YADGAR, "31 سال، 1 مهينو ۽ 15 ڏينهن"],
    ],
    note: "هي بزرگ مخدوم ابو الخير (دستار نمبر 3) جي وصال بعد سجاده نشين ٿيا.",
  },
  {
    n: 5,
    name: "حضرت سيدنا مخدوم محمد زمان اول",
    father: "بن مخدوم عبدالخالق",
    years: "1645ع – 1706ع",
    rows: [
      [BIRTH, "21 جمادي الثاني 1055 هه"],
      [DEATH, "26 ذي القعده 1117 هه"],
      [AGE, "62 سال، 5 مهينا ۽ 5 ڏينهن"],
      [NOT_SAJJADA, "25 سال، 11 مهينا ۽ 17 ڏينهن"],
      [YADGAR, "36 سال، 5 مهينا ۽ 18 ڏينهن"],
    ],
    note: "هي بزرگ حضرت مخدوم ابو الخير (دستار نمبر 3) جي اولاد مان هئا.",
  },
  {
    n: 6,
    name: "حضرت سيدنا مخدوم مير محمد",
    father: "بن ميان مٺن کلان",
    years: "1687ع – 1737ع",
    rows: [
      [BIRTH, "18 محرم الحرام 1099 هه"],
      [DEATH, "19 ذوالحج 1149 هه"],
      [AGE, "50 سال، 11 مهينا ۽ 1 ڏينهن"],
      [NOT_SAJJADA, "18 سال، 10 مهينا ۽ 8 ڏينهن"],
      [SAJJADA, "32 سال، 1 مهينو ۽ 23 ڏينهن"],
    ],
  },
  {
    n: 7,
    name: "حضرت سيدنا مخدوم محمد زمان ثاني",
    father: "بن مخدوم مير محمد",
    years: "1707ع – 1770ع",
    rows: [
      [BIRTH, "5 ربيع الثاني 1119 هه"],
      [DEATH, "7 ربيع الثاني 1184 هه"],
      [AGE, "65 سال"],
      [NOT_SAJJADA, "30 سال، 8 مهينا ۽ 14 ڏينهن"],
      [YADGAR, "34 سال، 3 مهينا ۽ 22 ڏينهن"],
    ],
    note: "پاڻ پنهنجي وقت جا وڏا عالم هئا.",
  },
  {
    n: 8,
    name: "حضرت سيدنا مخدوم مير محمد",
    father: "بن مخدوم محمد زمان ثاني",
    years: "1737ع – 1787ع",
    rows: [
      [BIRTH, "21 صفر المظفر 1151 هه"],
      [DEATH, "2 ربيع الاول 1202 هه"],
      [AGE, "51 سال"],
      [NOT_SAJJADA, "33 سال، 3 مهينا ۽ 11 ڏينهن"],
      [SAJJADA, "17 سال، 8 مهينا ۽ 19 ڏينهن"],
    ],
    note: "درگاهه شريف جي مالي انتظامن جي شروعات هن بزرگ جي دور کان ٿي.",
  },
  {
    n: 9,
    name: "حضرت سيدنا مخدوم الحاج حافظ محمد زمان",
    father: "بن مخدوم مير محمد",
    years: "1768ع – 1807ع",
    rows: [
      [BIRTH, "21 محرم الحرام 1182 هه"],
      [DEATH, "16 رمضان المبارڪ 1221 هه"],
      [AGE, "39 سال، 7 مهينا ۽ 25 ڏينهن"],
      [NOT_SAJJADA, "19 سال، 7 مهينا ۽ 11 ڏينهن"],
      [SAJJADA, "19 سال، 11 مهينا ۽ 24 ڏينهن"],
    ],
  },
  {
    n: 10,
    name: "حضرت سيدنا مخدوم ميرل معصوم",
    father: "بن مخدوم الحاج حافظ محمد زمان",
    years: "1211 – 1221 هه",
    rows: [
      [BIRTH, "26 صفر المظفر 1211 هه"],
      [DEATH, "10 ذوالحج 1221 هه"],
      [AGE, "10 سال، 9 مهينا ۽ 14 ڏينهن"],
      ["دستار جو مدو", "5 مهينا"],
    ],
    note: "هي صاحب ننڍپڻ ۾ ئي وصال ڪري ويا.",
  },
  {
    n: 11,
    name: "حضرت سيدنا مخدوم امين محمد ثاني",
    father: "بن ميان پنيلڌو کلان",
    years: "1790ع – 1836ع",
    rows: [
      [BIRTH, "11 صفر المظفر 1205 هه"],
      [DEATH, "16 رمضان المبارڪ 1252 هه"],
      [AGE, "47 سال، 7 مهينا ۽ 5 ڏينهن"],
      [NOT_SAJJADA, "31 سال، 10 مهينا ۽ 29 ڏينهن"],
      [SAJJADA, "15 سال، 8 مهينا ۽ 6 ڏينهن"],
    ],
    note: "هي بزرگ غير دستار جي اولاد مان هئا.",
  },
  {
    n: 12,
    name: "حضرت سيدنا مخدوم محمد زمان رابع",
    father: "بن مخدوم امين محمد ثاني",
    years: "1807ع – 1856ع",
    rows: [
      [BIRTH, "19 رجب المرجب 1222 هه"],
      [DEATH, "19 صفر المظفر 1273 هه"],
      [AGE, "50 سال ۽ 7 مهينا"],
      [NOT_SAJJADA, "30 سال ۽ 27 ڏينهن"],
      [YADGAR, "20 سال، 6 مهينا ۽ 3 ڏينهن"],
    ],
    note: "هي 11هين سجاده نشين جي اولاد مان هئا.",
  },
  {
    n: 13,
    name: "حضرت سيدنا مخدوم امين محمد ثالث (پکن ڌڻي)",
    father: "بن مخدوم محمد زمان رابع",
    years: "1836ع – 1886ع",
    rows: [
      [BIRTH, "7 شعبان المعظم 1254 هه"],
      [DEATH, "26 رمضان المبارڪ 1303 هه"],
      [AGE, "49 سال، 1 مهينو ۽ 19 ڏينهن"],
    ],
    note: "کين ڪي ٻيا نالا پڻ هئا.",
  },
  {
    n: 14,
    name: "حضرت سيدنا مخدوم محمد زمان سرڪار",
    father: "بن مخدوم امين محمد ثالث (پکن ڌڻي)",
    years: "1861ع – 1913ع",
    rows: [
      [BIRTH, "1 جمادي الأول 1278 هه"],
      [DEATH, "28 رمضان المبارڪ 1331 هه"],
      [AGE, "53 سال، 3 مهينا ۽ 27 ڏينهن"],
      [NOT_SAJJADA, "25 سال، 8 مهينا ۽ 25 ڏينهن"],
      [SAJJADA, "27 سال، 7 مهينا ۽ 2 ڏينهن"],
    ],
  },
  {
    n: 15,
    name: "حضرت سيدنا مخدوم ظهير الدين",
    father: "بن مخدوم امين محمد ثالث (پکن ڌڻي)",
    years: "1863ع – 1927ع",
    rows: [
      [BIRTH, "10 جمادي الأول 1280 هه"],
      [DEATH, "6 رجب المرجب 1345 هه (بروز آچر)"],
      [AGE, "65 سال"],
    ],
  },
  {
    n: 16,
    name: "حضرت سيدنا مخدوم غلام محمد عرف گل سائين",
    father: "بن مخدوم ظهير الدين اول",
    years: "1886ع – 1944ع",
    rows: [
      [BIRTH, "8 جمادي الأول 1303 هه"],
      [DEATH, "26 رمضان المبارڪ 1363 هه (بروز جمعو)"],
      [AGE, "60 سال"],
      [NOT_SAJJADA, "42 سال"],
      [SAJJADA, "18 سال"],
    ],
  },
  {
    n: 17,
    name: "حضرت سيدنا الحاج مخدوم محمد زمان طالب المولىٰ",
    father: "بن مخدوم غلام محمد (گل سائين)",
    years: "1919ع – 1993ع",
    rows: [
      [BIRTH, "14 محرم الحرام 1338 هه (مطابق 4 آڪٽوبر 1919ع)"],
      [DEATH, "17 رجب المرجب 1413 هه (مطابق 11 جنوري 1993ع)"],
      [AGE, "75 سال، 6 مهينا ۽ 17 ڏينهن"],
      [NOT_SAJJADA, "25 سال"],
      [SAJJADA, "50 سال، 6 مهينا ۽ 17 ڏينهن"],
    ],
    note: "پاڻ 16هين سجاده نشين جا اڪيلا فرزند هئا.",
  },
  {
    n: 18,
    name: "حضرت سيدنا مخدوم محمد امين ”فهيم“ رابع",
    father: "بن مخدوم محمد زمان ”طالب المولىٰ“",
    years: "1939ع – 2015ع",
    rows: [
      [BIRTH, "17 جمادي الثاني 1358 هه (مطابق 4 آگسٽ 1939ع)"],
      [DEATH, "8 صفر المظفر 1437 هه (مطابق 21 نومبر 2015ع)"],
    ],
    note: "سندن ادبي تخلص ”فهيم“ هو.",
  },
  {
    n: 19,
    name: "حضرت قبل مخدوم جميل الزمان سائين عرف مخدوم ظهيرالدين (بروحام سائين) ثاني (دوئم)",
    years: "1961ع کان",
    rows: [[BIRTH, "13 صفر 1381 هه (مطابق 27 جولاء 1961ع)"]],
    current: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Palette                                                             */
/* ------------------------------------------------------------------ */

const GOLD = "#c9a227";
const GOLD_LIGHT = "#e6c55a";
const GOLD_SOFT = "#f0dfa0";
const DEEP_GREEN = "#0a3a2b";
const MID_GREEN = "#125541";
const CREAM = "#fbf6de";
const INK = "#0a3a2b";

/* ------------------------------------------------------------------ */
/*  Small pieces                                                        */
/* ------------------------------------------------------------------ */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke={MID_GREEN}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Crescent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M26 5a15 15 0 1 0 9 22A12 12 0 0 1 26 5Z"
        fill={GOLD_LIGHT}
        stroke={GOLD}
        strokeWidth="1.2"
      />
      <path
        d="M31 9l1.2 3.1 3.3.2-2.6 2 .9 3.2-2.8-1.8-2.8 1.8.9-3.2-2.6-2 3.3-.2Z"
        fill={GOLD_SOFT}
      />
    </svg>
  );
}

function DastarCard({
  d,
  open,
  onToggle,
}: {
  d: Dastar;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `dastar-panel-${d.n}`;
  return (
    <li className="relative flex items-start gap-2.5 sm:gap-5">
      {/* number node */}
      <div
        className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-12 sm:w-12 sm:text-lg"
        style={{
          background: d.current
            ? `linear-gradient(180deg, ${GOLD_LIGHT}, ${GOLD})`
            : CREAM,
          color: DEEP_GREEN,
          border: `3px solid ${d.current ? "#fff" : GOLD}`,
          boxShadow: d.current
            ? `0 0 0 4px rgba(230,197,90,.35)`
            : "0 2px 6px rgba(0,0,0,.35)",
        }}
      >
        {d.n}
      </div>

      {/* card */}
      <div
        className="min-w-0 flex-1 overflow-hidden rounded-2xl"
        style={{
          background: CREAM,
          border: `${d.current ? 2 : 1}px solid ${d.current ? GOLD_LIGHT : "rgba(201,162,39,.55)"}`,
          boxShadow: d.current
            ? "0 0 0 3px rgba(230,197,90,.25), 0 10px 24px rgba(0,0,0,.3)"
            : "0 4px 14px rgba(0,0,0,.22)",
        }}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start gap-2 px-3.5 py-3.5 text-right active:bg-[#c9a227]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#c9a227] sm:px-5 sm:py-4"
        >
          <div className="min-w-0 flex-1">
            {d.current && (
              <span
                className="mb-1.5 inline-block rounded-full px-3 py-0.5 text-xs font-bold sm:text-sm"
                style={{ background: DEEP_GREEN, color: GOLD_SOFT }}
              >
                موجوده سجاده نشين
              </span>
            )}
            <h3
              className="break-words text-base font-bold leading-relaxed sm:text-xl"
              style={{ color: INK }}
            >
              {d.name}
            </h3>
            {d.father && (
              <p className="mt-0.5 text-sm leading-relaxed sm:text-base" style={{ color: "#5b6f66" }}>
                {d.father}
              </p>
            )}
            <p
              className="mt-2 inline-block rounded-md px-2.5 py-0.5 text-sm font-semibold sm:text-base"
              style={{ background: "rgba(201,162,39,.2)", color: "#7a5f0a" }}
              dir="rtl"
            >
              {d.years}
            </p>
          </div>
          <span className="mt-1">
            <Chevron open={open} />
          </span>
        </button>

        {/* collapsible details */}
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="px-3.5 pb-4 pt-3 sm:px-5 sm:pb-5"
              style={{ borderTop: "1px dashed rgba(201,162,39,.6)" }}
            >
              <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {d.rows.map(([label, value]) => (
                  <div key={label} className="min-w-0">
                    <dt className="text-[13px] font-bold sm:text-sm" style={{ color: "#8a6d10" }}>
                      {label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold leading-relaxed sm:text-base" style={{ color: INK }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              {d.note && (
                <p
                  className="mt-4 pr-3 text-sm leading-loose sm:text-base"
                  style={{ borderRight: `3px solid ${GOLD}`, color: INK }}
                >
                  {d.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                      */
/* ------------------------------------------------------------------ */

/** Gold corner flourish for the outer frame */
function Corner({ className, rotate }: { className: string; rotate: number }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`absolute h-8 w-8 sm:h-14 sm:w-14 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M2 2 H32 M2 2 V32" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M2 12 H20 M12 2 V20" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.2" opacity=".7" />
      <rect
        x="9"
        y="9"
        width="10"
        height="10"
        transform="rotate(45 14 14)"
        fill={GOLD_LIGHT}
        stroke={GOLD}
        strokeWidth="1"
      />
      <circle cx="14" cy="14" r="2" fill={DEEP_GREEN} />
      <circle cx="2" cy="2" r="3" fill={GOLD} />
    </svg>
  );
}

/**
 * Traditional backdrop: Islamic geometric star tiling, arcade (mehrab) bands
 * at top and bottom, soft golden glow, and a double gold frame with corners.
 */
function BackgroundDecor() {
  const uid = useId().replace(/:/g, "");
  const starId = `dastar-star-${uid}`;
  const archId = `dastar-arch-${uid}`;
  const fade = "radial-gradient(ellipse at center, rgba(0,0,0,.35) 0%, #000 100%)";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* geometric star pattern, lighter in the middle so text stays calm */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ WebkitMaskImage: fade, maskImage: fade }}
      >
        <defs>
          <pattern id={starId} width="64" height="64" patternUnits="userSpaceOnUse">
            <g fill="none" stroke={GOLD} strokeWidth="1" opacity=".3">
              <rect x="14" y="14" width="36" height="36" />
              <rect x="14" y="14" width="36" height="36" transform="rotate(45 32 32)" />
              <circle cx="32" cy="32" r="8" />
            </g>
            <path
              d="M0 32 H14 M50 32 H64 M32 0 V14 M32 50 V64"
              stroke={GOLD}
              strokeWidth="1"
              opacity=".22"
            />
            <g fill={GOLD_LIGHT} opacity=".28">
              <circle cx="0" cy="0" r="2.5" />
              <circle cx="64" cy="0" r="2.5" />
              <circle cx="0" cy="64" r="2.5" />
              <circle cx="64" cy="64" r="2.5" />
            </g>
          </pattern>
          <pattern id={archId} width="44" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M4 30 V16 Q4 6 22 2 Q40 6 40 16 V30"
              fill="rgba(201,162,39,.07)"
              stroke={GOLD}
              strokeWidth="1.2"
              opacity=".7"
            />
            <path d="M12 30 V19 Q12 12 22 9 Q32 12 32 19 V30" fill="none" stroke={GOLD_LIGHT} strokeWidth=".8" opacity=".45" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${starId})`} />
      </svg>

      {/* golden glow behind the header + darker bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 38% at 50% 14%, rgba(230,197,90,.22), transparent 70%), linear-gradient(180deg, transparent 72%, rgba(0,0,0,.35) 100%)",
        }}
      />

      {/* arcade bands */}
      <svg className="absolute left-0 right-0 top-0 h-[30px] w-full">
        <rect width="100%" height="100%" fill={`url(#${archId})`} />
      </svg>
      <svg className="absolute bottom-0 left-0 right-0 h-[30px] w-full rotate-180">
        <rect width="100%" height="100%" fill={`url(#${archId})`} />
      </svg>

      {/* double gold frame + corners */}
      <div
        className="absolute inset-x-2 bottom-9 top-9 sm:inset-x-4"
        style={{ border: "2px solid rgba(201,162,39,.6)" }}
      >
        <div className="absolute inset-1.5" style={{ border: "1px solid rgba(230,197,90,.35)" }} />
        <Corner className="-left-0.5 -top-0.5" rotate={0} />
        <Corner className="-right-0.5 -top-0.5" rotate={90} />
        <Corner className="-bottom-0.5 -right-0.5" rotate={180} />
        <Corner className="-bottom-0.5 -left-0.5" rotate={270} />
      </div>
    </div>
  );
}

export default function DastarTimeline() {
  const [openSet, setOpenSet] = useState<Set<number>>(
    () => new Set([DASTARS[DASTARS.length - 1].n])
  );

  const allOpen = openSet.size === DASTARS.length;

  const toggle = (n: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });

  const toggleAll = () =>
    setOpenSet(allOpen ? new Set() : new Set(DASTARS.map((d) => d.n)));

  return (
    <section
      dir="rtl"
      lang="sd"
      className="font-[family-name:var(--font-sindhi)] relative w-full overflow-hidden px-5 py-16 sm:px-10 sm:py-24"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, ${MID_GREEN} 0%, ${DEEP_GREEN} 60%, #062619 100%)`,
      }}
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* header */}
        <header className="text-center">
          <Crescent className="mx-auto h-12 w-12 sm:h-14 sm:w-14" />
          <h2
            className="mt-3 text-3xl font-bold leading-snug sm:text-5xl"
            style={{ color: GOLD_SOFT }}
          >
            دستارن جو سلسلو
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-loose text-white/80 sm:text-xl">
            درگاهه شريف جي سجاده نشينن جو ترتيب وار احوال، حضرت مخدوم نوح کان اڄ تائين
          </p>

          <div className="mx-auto mt-6 flex max-w-md items-stretch justify-center divide-x divide-x-reverse divide-[#c9a227]/40">
            <div className="flex-1 px-3">
              <div className="text-3xl font-bold sm:text-4xl" style={{ color: GOLD_LIGHT }}>
                {DASTARS.length}
              </div>
              <div className="text-sm text-white/75 sm:text-base">دستار</div>
            </div>
            <div className="flex-1 px-3">
              <div className="text-3xl font-bold sm:text-4xl" style={{ color: GOLD_LIGHT }}>
                1505ع
              </div>
              <div className="text-sm text-white/75 sm:text-base">پهرين دستار</div>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleAll}
            className="mt-7 min-h-[44px] rounded-full px-6 py-2.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6c55a] sm:text-base"
            style={{
              border: `1.5px solid ${GOLD}`,
              color: GOLD_SOFT,
              background: "rgba(255,255,255,.05)",
            }}
          >
            {allOpen ? "سڀ بند ڪريو" : "سڀ کوليو"}
          </button>
        </header>

        {/* timeline */}
        <ol className="relative mt-10 space-y-4 sm:mt-12 sm:space-y-5">
          {/* vertical line, centered under number nodes */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-[17px] top-4 w-0.5 sm:right-[23px]"
            style={{
              background: `linear-gradient(180deg, ${GOLD_LIGHT}, ${GOLD} 60%, rgba(201,162,39,.2))`,
            }}
          />
          {DASTARS.map((d) => (
            <DastarCard
              key={d.n}
              d={d}
              open={openSet.has(d.n)}
              onToggle={() => toggle(d.n)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}