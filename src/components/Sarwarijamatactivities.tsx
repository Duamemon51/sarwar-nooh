"use client";

import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Theme — site ke screenshot (dark teal + gold + cream) se liye gaye */
/* ------------------------------------------------------------------ */
const TEAL = "#0d2b2b";
const TEAL_SOFT = "#163f3f";
const GOLD = "#c9a961";
const GOLD_LIGHT = "#f3da8f";
const GOLD_DARK = "#8a6f2a";
const CREAM = "#f6efdf"; // page background, jaisa feature-icon strip mein hai
const CARD = "#fffdf6";

/* ------------------------------------------------------------------ */
/*  DATA — real, researched maakhiz se:                                */
/*  The Friday Times "Makhdoom Mystics of Hala" (2020) & "Sufis of     */
/*  16th-century Sindh" (2018), Wikipedia (Makhdoom Jamiluzaman,       */
/*  Makhdoom Talibul Moula, Sindhi Adabi Board), Dawn, UrduPoint,      */
/*  Business Recorder, Express Tribune                                 */
/* ------------------------------------------------------------------ */

const TITLE = "سرواري جماعت جون سرگرميون";
const SUBTITLE = "مخدوم نوح جو روحاني ورثو، اڄ به سنڌ ۾ زنده";
const INTRO =
  "سرواري جماعت، مخدوم سرور نوح جي قائم ڪيل سهروردي سلسلي جي هڪ شاخ آهي، جيڪا سورهين صديءَ کان وٺي اڄ تائين سنڌ ۾ روحاني، ادبي ۽ سماجي حوالي سان سرگرم آهي.";

const FACTS = [
  { label: "باني", value: "مخدوم سرور نوح" },
  { label: "سلسلو", value: "سهروردي (شاخ: سرواري)" },
  { label: "مرڪز", value: "درگاهه هالا، مٽيارِي" },
  { label: "موجوده سجاده نشين", value: "مخدوم جميل الزمان" },
];

/** arch-badge icon row — homepage ke feature-icon strip jaisa */
const HIGHLIGHTS = [
  { icon: "chain", title: "سرواري ٽور", text: "سڌو مخدوم نوح جا مريد" },
  { icon: "dome", title: "سهڻو سومر", text: "سالياني عرس مبارڪ" },
  { icon: "book", title: "ادبي خدمت", text: "طالب الموليٰ اڪيڊمي" },
  { icon: "hands", title: "سماجي ڪردار", text: "خدمتِ خلق ۽ اتحاد" },
] as const;

const CHAPTERS = [
  {
    id: "bunyad",
    heading: "بنياد ۽ پکيڙ",
    paragraphs: [
      "مخدوم سرور نوح سرواري جماعت جو باني ليکيو وڃي ٿو — سهروردي سلسلي جي هڪ ذيلي شاخ، جيڪا سورهين ۽ سترهين صدي عيسويءَ ۾ سنڌ ۾ تمام گهڻي اثرائتي ٿي. جيڪي مريد سڌو سنئون مخدوم نوح جي هٿان سرواري سلسلي ۾ داخل ٿيا، انهن کي ”سرواري ٽور“ سڏيو وڃي ٿو.",
      "مخدوم نوح جا خليفا ۽ مريد سنڌ سان گڏ پنجاب ۽ هندستاني ڪڇ تائين پکڙيل هئا. سندن وصال کان پوءِ به سلسلو رڪجي نه سگهيو، بلڪه نسل در نسل سندن اولاد جي سجاده نشينيءَ هيٺ اڄ تائين قائم آهي.",
    ],
  },
  {
    id: "urs",
    heading: "سالياني عرس — ”سهڻو سومر“",
    paragraphs: [
      "هر سال ذوالحج جي مهيني جي پهرين سومر تي درگاهه هالا ۾ مخدوم نوح سرور جو سالياني عرس ملهايو وڃي ٿو، جيڪو مقامي طور ”سهڻو سومر“ جي نالي سان مشهور آهي. هزارين عقيدتمند ملڪ جي ڪنڊ ڪڙڇ کان حاضري ڀرڻ لاءِ هالا پهچن ٿا.",
      "عرس جي شروعات کان اڳ صوفياڻي محفل سماع منعقد ٿئي ٿي. موجوده سجاده نشين مزار تي گل پُشي ۽ فاتحه خواني ڪري عرس جو باضابطه افتتاح ڪن ٿا، ۽ عقيدتمندن کي اتحاد ۽ پاڙيسري محبت جو پيغام ڏين ٿا.",
    ],
  },
  {
    id: "adab",
    heading: "ادبي ۽ ثقافتي خدمتون",
    paragraphs: [
      "سرواري خاندان جو ادب ۽ ثقافت سان تعلق مخدوم محمد زمان ”طالب الموليٰ“ (17هون سجاده نشين) کان تمام مضبوط رهيو آهي. کيس ننڍي هوندي کان سنڌي شاعري ۽ موسيقي سان گهرو لڳاءُ هو.",
      "کين هالا ۾ ”انجمن علم و ادب“ قائم ڪئي، ۽ الزمان پريس مان سنڌي هفتيوار اخبارون ”پاسبان“ ۽ ”الزمان“ جاري ڪيائون. سندن نالي پٺيان حيدرآباد ۾ ”بزمِ طالب الموليٰ اڪيڊمي“ قائم ٿي، جيڪا اڄ به سنڌي نثر ۽ شاعريءَ جي واڌاري ۾ اهم ڪردار ادا ڪري رهي آهي.",
      "خاندان جو ٻيو نمايان ادبي ادارو ”سنڌي ادبي بورڊ“ سان تعلق آهي — اڄ به ان بورڊ جي چيئرماني خاندان جي ڪنهن فرد وٽ رهي ٿي، جيڪو ڪتابي ميلا، مشاعرا ۽ سنڌي ٻوليءَ جي واڌاري لاءِ پروگرام منعقد ڪرائيندو رهي ٿو.",
    ],
  },
  {
    id: "khidmat",
    heading: "سماجي ۽ سياسي ڪردار",
    paragraphs: [
      "سرواري جماعت جي سجاده نشينن جو سنڌ جي سياست ۾ به تاريخي ڪردار رهيو آهي۔ پاڪستان پيپلز پارٽي جو بنياد 1967ع ۾ هالا ۾ مخدوم طالب الموليٰ جي گهر تي رکيو ويو، ۽ خاندان جا ڪيترائي فرد مسلسل قومي ۽ صوبائي اسيمبليءَ جا ميمبر ٿيندا رهيا آهن.",
      "موجوده سجاده نشين مخدوم جميل الزمان، درگاهه غوث الحق مخدوم سرور نوح جا 19هون سرپرست ليکيا وڃن ٿا. هو پنهنجي والد مخدوم امين فهيم جي وفات کان پوءِ سرواري جماعت جي روحاني اڳواڻيءَ تي فائز ٿيا، ۽ سياسي ميدان ۾ به مسلسل سرگرم رهيا آهن.",
    ],
  },
];

const SOURCES = [
  { title: "Makhdoom Mystics of Hala", by: "The Friday Times (2020)" },
  { title: "Sufis of 16th-century Sindh", by: "The Friday Times / PIDE (2018)" },
  { title: "Makhdoom Talib-ul-Maula", by: "The Friday Times (2026)" },
  { title: "Sindhi Adabi Board", by: "Wikipedia" },
  { title: "Makhdoom Jamiluzaman", by: "Wikipedia" },
  { title: "Annual Urs of Makhdoom Nooh Sarwar", by: "UrduPoint (2019)" },
];

/* ------------------------------------------------------------------ */
/*  Decorative building blocks — site ki ornate arch/gold language     */
/* ------------------------------------------------------------------ */

function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true">
      <g fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.55">
        <path d="M0 55 C55 55 55 0 55 0" />
        <path d="M0 30 C30 30 30 0 30 0" />
        <circle cx="55" cy="0" r="3" fill={GOLD} stroke="none" />
        <circle cx="0" cy="55" r="3" fill={GOLD} stroke="none" />
      </g>
    </svg>
  );
}

/** line-art icon set — gold stroke, feature-badge ke andar bharay */
type IconName = "chain" | "dome" | "book" | "hands";

function GlyphIcon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: GOLD_LIGHT,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "chain": // silsila / lineage
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <circle cx="12" cy="12" r="6" {...common} />
          <circle cx="20" cy="20" r="6" {...common} />
        </svg>
      );
    case "dome": // shrine / urs
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path d="M6 27 V17 C6 10 10 5 16 5 C22 5 26 10 26 17 V27" {...common} />
          <path d="M16 5 V2" {...common} />
          <circle cx="16" cy="2" r="1.3" fill={GOLD_LIGHT} stroke="none" />
          <path d="M4 27 H28" {...common} />
        </svg>
      );
    case "book": // literary work
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path d="M16 8 C13 6 9 6 5 7 V24 C9 23 13 23 16 25" {...common} />
          <path d="M16 8 C19 6 23 6 27 7 V24 C23 23 19 23 16 25" {...common} />
          <path d="M16 8 V25" {...common} />
        </svg>
      );
    case "hands": // social service / unity
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path d="M4 18 L11 14 L18 17 L26 12" {...common} />
          <path d="M18 17 L23 22 C24 23 24 25 22 25 C21 25 20.5 24.5 20 24" {...common} />
          <path d="M11 14 L15 20" {...common} />
        </svg>
      );
  }
}

/** pointed-arch (mehrab) badge — homepage ke feature icons jaisa */
function ArchBadge({ icon }: { icon: IconName }) {
  return (
    <div className="relative mx-auto h-20 w-20">
      <svg viewBox="0 0 100 110" className="h-full w-full" aria-hidden="true">
        <path
          d="M8 108 V48 C8 16 26 6 50 6 C74 6 92 16 92 48 V108 Z"
          fill={TEAL}
          stroke={GOLD}
          strokeWidth="2.5"
        />
        <path
          d="M18 108 V50 C18 24 32 16 50 16 C68 16 82 24 82 50 V108"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
      <div className="absolute inset-x-0 top-[26%] flex justify-center">
        <GlyphIcon name={icon} />
      </div>
    </div>
  );
}

/** pointed-arch image/illustration frame — chapters ke sath */
function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 220 260" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={TEAL_SOFT} />
            <stop offset="100%" stopColor={TEAL} />
          </linearGradient>
          <pattern id="tileDots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="13" cy="13" r="1.3" fill={GOLD} opacity="0.35" />
          </pattern>
        </defs>
        <path
          d="M10 256 V110 C10 40 55 12 110 12 C165 12 210 40 210 110 V256 Z"
          fill="url(#archFill)"
          stroke={GOLD}
          strokeWidth="3"
        />
        <path
          d="M10 256 V110 C10 40 55 12 110 12 C165 12 210 40 210 110 V256 Z"
          fill="url(#tileDots)"
        />
        <path
          d="M26 256 V112 C26 52 62 28 110 28 C158 28 194 52 194 112 V256"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="110" cy="70" r="6" fill={GOLD_LIGHT} opacity="0.9" />
      </svg>
    </div>
  );
}

function Diamond() {
  return (
    <span
      className="h-2.5 w-2.5 shrink-0 rotate-45"
      style={{ background: GOLD }}
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function SarwariJamatActivities() {
  return (
    <section
      dir="rtl"
      lang="sd"
      aria-labelledby="sarwari-title"
      className={`${amiri.className} relative w-full overflow-x-hidden py-10 sm:py-16`}
      style={{ background: CREAM, color: TEAL }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        {/* Intro banner — homepage hero jaisa dark teal card */}
        <header
          className="relative overflow-hidden rounded-2xl px-6 py-10 text-center sm:px-14 sm:py-14"
          style={{ background: TEAL, border: `1px solid ${GOLD}55` }}
        >
          <CornerFlourish className="pointer-events-none absolute right-2 top-2 h-16 w-16 -scale-x-100" />
          <CornerFlourish className="pointer-events-none absolute left-2 top-2 h-16 w-16" />

          <div
            className="mx-auto flex items-center justify-center gap-2"
            aria-hidden="true"
          >
            <span className="h-px w-10" style={{ background: GOLD }} />
            <span className="h-1.5 w-1.5 rotate-45" style={{ background: GOLD_LIGHT }} />
            <span className="h-px w-10" style={{ background: GOLD }} />
          </div>

          <h2
            id="sarwari-title"
            className="mt-4 text-3xl font-bold leading-snug text-white sm:text-5xl"
          >
            {TITLE}
          </h2>
          <p className="mt-2 text-xl sm:text-2xl" style={{ color: GOLD_LIGHT }}>
            {SUBTITLE}
          </p>
          <p
            className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed sm:text-[18px]"
            style={{ color: "#dbe4e2" }}
          >
            {INTRO}
          </p>

          <dl
            className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 pt-6 sm:grid-cols-4"
            style={{ borderTop: `1px solid ${GOLD}40` }}
          >
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="text-[13px]" style={{ color: GOLD_LIGHT }}>
                  {f.label}
                </dt>
                <dd className="mt-0.5 text-[16px] font-bold leading-snug text-white">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Highlights row — arch badges jaisa homepage feature strip */}
        <div className="relative mt-10 grid grid-cols-2 gap-6 sm:mt-14 sm:grid-cols-4 sm:gap-8">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="text-center">
              <ArchBadge icon={h.icon} />
              <h4 className="mt-3 text-lg font-bold sm:text-xl">{h.title}</h4>
              <p className="mt-1 text-[14px]" style={{ color: GOLD_DARK }}>
                {h.text}
              </p>
            </div>
          ))}
        </div>

        {/* Chapters — arch-frame illustration + text, alternating sides */}
        <div className="mt-14 space-y-10 sm:mt-20 sm:space-y-14">
          {CHAPTERS.map((c, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={c.id}
                id={c.id}
                className={`grid items-center gap-6 rounded-2xl p-5 sm:gap-10 sm:p-8 md:grid-cols-[180px_minmax(0,1fr)] ${
                  reversed ? "md:[direction:ltr]" : ""
                }`}
                style={{ background: CARD, border: `1px solid ${GOLD}33` }}
              >
                <div className={reversed ? "md:[direction:rtl]" : ""}>
                  <ArchFrame className="mx-auto h-40 w-32 sm:h-48 sm:w-40" />
                </div>
                <div className={reversed ? "md:[direction:rtl]" : ""}>
                  <h3 className="flex items-center gap-3 text-xl font-bold sm:text-2xl">
                    <Diamond />
                    {c.heading}
                  </h3>
                  <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                    {c.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-[16px] leading-[1.95] sm:text-[18px] sm:leading-[2.05]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sources */}
        <div
          className="mt-14 rounded-2xl p-5 sm:mt-20 sm:p-8"
          style={{ background: CARD, border: `1px solid ${GOLD}33` }}
        >
          <h3 className="flex items-center gap-3 text-xl font-bold sm:text-2xl">
            <Diamond />
            ماخذ
          </h3>
          <ul className="mt-4 divide-y" style={{ borderColor: `${GOLD}30` }}>
            {SOURCES.map((s) => (
              <li
                key={s.title}
                className="flex flex-wrap items-baseline justify-between gap-2 py-3"
                style={{ borderColor: `${GOLD}30` }}
              >
                <span className="text-[16px] font-bold">{s.title}</span>
                <span className="text-[13px]" style={{ color: GOLD_DARK }}>
                  {s.by}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
     
    </section>
  );
}