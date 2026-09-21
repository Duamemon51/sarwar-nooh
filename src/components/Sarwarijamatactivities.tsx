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
/*  Decorative building blocks — site ki ornate gold language           */
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

type HighlightIconName = "chain" | "dome" | "book" | "hands";

function HighlightIcon({ name }: { name: HighlightIconName }) {
  const common = {
    fill: "none",
    stroke: GOLD_DARK,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 32 32" className="mx-auto mb-2 h-8 w-8" aria-hidden="true">
      {name === "chain" && (
        <>
          <path d="M8 10h16M8 22h16M10 10v12M22 10v12" {...common} />
          <circle cx="8" cy="10" r="2.5" fill={CARD} stroke={GOLD_DARK} strokeWidth="1.8" />
          <circle cx="24" cy="10" r="2.5" fill={CARD} stroke={GOLD_DARK} strokeWidth="1.8" />
          <circle cx="8" cy="22" r="2.5" fill={CARD} stroke={GOLD_DARK} strokeWidth="1.8" />
          <circle cx="24" cy="22" r="2.5" fill={CARD} stroke={GOLD_DARK} strokeWidth="1.8" />
        </>
      )}
      {name === "dome" && (
        <>
          <path d="M6 27V17C6 10 10 5 16 5s10 5 10 12v10" {...common} />
          <path d="M16 5V2M4 27h24" {...common} />
          <circle cx="16" cy="2" r="1.3" fill={GOLD_DARK} stroke="none" />
        </>
      )}
      {name === "book" && (
        <>
          <path d="M16 8C13 6 9 6 5 7v17c4-1 8-1 11 1" {...common} />
          <path d="M16 8c3-2 7-2 11-1v17c-4-1-8-1-11 1M16 8v17" {...common} />
        </>
      )}
      {name === "hands" && (
        <>
          <circle cx="16" cy="9" r="3" {...common} />
          <circle cx="8" cy="14" r="2.5" {...common} />
          <circle cx="24" cy="14" r="2.5" {...common} />
          <path d="M10 25c.5-4 2.5-6 6-6s5.5 2 6 6M3 25c.3-3 1.8-4.5 5-4.5M29 25c-.3-3-1.8-4.5-5-4.5" {...common} />
        </>
      )}
    </svg>
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
      className={`${amiri.className} relative w-full overflow-x-hidden py-8 sm:py-16`}
      style={{ background: CREAM, color: TEAL }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        {/* Intro banner — homepage hero jaisa dark teal card */}
        <header
          className="relative overflow-hidden rounded-xl px-4 py-8 text-center sm:rounded-2xl sm:px-14 sm:py-14"
          style={{ background: TEAL, border: `1px solid ${GOLD}55` }}
        >
          <CornerFlourish className="pointer-events-none absolute right-1 top-1 h-10 w-10 -scale-x-100 sm:right-2 sm:top-2 sm:h-16 sm:w-16" />
          <CornerFlourish className="pointer-events-none absolute left-1 top-1 h-10 w-10 sm:left-2 sm:top-2 sm:h-16 sm:w-16" />

          <div
            className="mx-auto flex items-center justify-center gap-2"
            aria-hidden="true"
          >
            <span className="h-px w-7 sm:w-10" style={{ background: GOLD }} />
            <span className="h-1.5 w-1.5 rotate-45" style={{ background: GOLD_LIGHT }} />
            <span className="h-px w-7 sm:w-10" style={{ background: GOLD }} />
          </div>

          <h2
            id="sarwari-title"
            className="mt-3 text-2xl font-bold leading-snug text-white sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            {TITLE}
          </h2>
          <p className="mt-2 text-base sm:text-2xl" style={{ color: GOLD_LIGHT }}>
            {SUBTITLE}
          </p>
          <p
            className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed sm:mt-5 sm:text-[18px]"
            style={{ color: "#dbe4e2" }}
          >
            {INTRO}
          </p>

          <dl
            className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-4 pt-5 sm:mt-8 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-5 sm:pt-6"
            style={{ borderTop: `1px solid ${GOLD}40` }}
          >
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="text-[11.5px] sm:text-[13px]" style={{ color: GOLD_LIGHT }}>
                  {f.label}
                </dt>
                <dd className="mt-0.5 text-[14px] font-bold leading-snug text-white sm:text-[16px]">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Highlights row */}
        <div className="relative mt-8 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-8">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="rounded-xl px-2 py-4 text-center sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0"
              style={{ background: CARD, border: `1px solid ${GOLD}30` }}
            >
              <HighlightIcon name={h.icon} />
              <h4 className="text-[15px] font-bold sm:text-xl">{h.title}</h4>
              <p className="mt-1 text-[12.5px] sm:text-[14px]" style={{ color: GOLD_DARK }}>
                {h.text}
              </p>
            </div>
          ))}
        </div>

        {/* Chapters — text cards, alternating sides */}
        <div className="mt-10 space-y-6 sm:mt-20 sm:space-y-14">
          {CHAPTERS.map((c, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={c.id}
                id={c.id}
                className={`grid items-center gap-4 rounded-xl p-4 sm:gap-10 sm:rounded-2xl sm:p-8 md:grid-cols-[180px_minmax(0,1fr)] ${
                  reversed ? "md:[direction:ltr]" : ""
                }`}
                style={{ background: CARD, border: `1px solid ${GOLD}33` }}
              >
                <div className={`${reversed ? "md:[direction:rtl]" : ""} md:col-span-2`}>
                  <h3 className="text-lg font-bold sm:text-2xl">{c.heading}</h3>
                  <div className="mt-2.5 space-y-2.5 sm:mt-4 sm:space-y-4">
                    {c.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-[14.5px] leading-[1.85] sm:text-[18px] sm:leading-[2.05]"
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

   
      </div>

    </section>
  );
}