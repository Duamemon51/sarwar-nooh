"use client";

import { Amiri } from "next/font/google";

// Site ke font se milta-julta Naskh font. Apna font ho to `amiri.className`
// ki jagah apni class laga dein.
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* Theme (site ke screenshots se liye gaye rang) */
const TEAL = "#123a3a";
const GOLD = "#c5a964";
const GOLD_LIGHT = "#fddf96";
const GOLD_DARK = "#8a6f2a"; // chhote text ke liye (white par readable)

/* ------------------------------------------------------------------ */
/*  DATA  — yahan se text edit karein, UI khud update ho jayegi        */
/* ------------------------------------------------------------------ */

const TITLE = "درگاهه شريف مخدوم سرور نوح جو تاريخ";
const CAPTION = "غوث الحق حضرت مخدوم سرور نوح";

/**
 * Har chapter = ek rubric (heading) + paragraph + kinare (hashiya) ke notes.
 * Notes desktop par paragraph ke bagal mein, mobile par neeche aate hain.
 */
const CHAPTERS = [
  {
    heading: "نسب ۽ ولادت",
    text: "مخدوم سرور نوح، جن جو اصل نالو مخدوم لطف الله هو، سورهين صديءَ عيسوي ۾ سنڌ جا عظيم صوفي، عالم ۽ استاد ٿي گذريا. سندن ولادت تقريباً 1505ع ڌاري هالڪنڊي جي ويجهو ٽوري ڳوٺ ۾ ٿي. سندن والد مخدوم نعمت الله سهروردي سلسلي جو نامور بزرگ هو.",
    notes: [
      { label: "اصل نالو", value: "مخدوم لطف الله" },
      { label: "ولادت", value: "تقريباً 1505ع، ٽوري ڳوٺ" },
      { label: "والد", value: "مخدوم نعمت الله" },
    ],
  },
  {
    heading: "علم ۽ سلسلو",
    text: "ابتدائي ديني تعليم هالڪنڊي ۾ مخدوم عربي (شاهه ڏينو) کان حاصل ڪيائون. هو سهروردي-اويسي سلسلي سان تعلق رکندڙ هئا ۽ سنڌ ۾ ”سرواري“ سلسلي جو باني ليکيا وڃن ٿا. مخدوم صاحب سنڌ جو پهريون عالم ۽ صوفي هو جنهن قرآن ڪريم جو فارسي ٻولي ۾ ترجمو ڪيو. سندن خانقاهه ۾ ديني مجلسون ۽ وعظ ٿيندا هئا، جن ۾ ان دور جا بزرگ ۽ درويش شريڪ ٿيندا هئا، ۽ گهڻن ماڻهن سندن علم ۽ روحاني فيض کان متاثر ٿي مريد ٿيا.",
    notes: [
      { label: "استاد", value: "مخدوم عربي (شاهه ڏينو)" },
      { label: "سلسلو", value: "سهروردي-اويسي، سرواري" },
      { label: "علمي ڪم", value: "قرآن ڪريم جو فارسي ترجمو" },
    ],
  },
  {
    heading: "وصال ۽ درگاهه",
    text: "مخدوم صاحب جو وصال 1590ع ۾ ٿيو. سندن مزار مبارڪ هالا ۾ آهي. درگاهه جي سجاده نشيني سندن اولاد ۾ هلندي اچي ٿي ۽ هر روز وڏي تعداد ۾ زائرين هتي حاضري ڀرڻ لاءِ اچن ٿا.",
    notes: [
      { label: "وصال", value: "1590ع" },
      { label: "مزار", value: "هالا، سنڌ" },
      { label: "فاصلو", value: "حيدرآباد کان تقريباً 56 ڪلوميٽر" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Compact section heading                                            */
/* ------------------------------------------------------------------ */

function ArchHeading({ title, caption }: { title: string; caption: string }) {
  return (
    <div
      className="mx-auto flex max-w-5xl flex-col items-center rounded-xl px-5 py-7 text-center sm:rounded-2xl sm:px-10 sm:py-9"
      style={{ background: TEAL, border: `1px solid ${GOLD}66` }}
    >
      <h2 id="dargah-title" className="text-2xl font-bold leading-snug text-white sm:text-4xl">
        {title}
      </h2>
      <span className="mt-3 h-px w-24" style={{ background: GOLD }} aria-hidden="true" />
      <p className="mt-3 text-base sm:text-xl" style={{ color: GOLD_LIGHT }}>
        {caption}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function DargahHistory({
  ctaHref,
  ctaLabel = "وڌيڪ پڙهو",
}: {
  /** Optional: button tab dikhega jab link diya jaye */
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section
      dir="rtl"
      lang="sd"
      aria-labelledby="dargah-title"
      className={`${amiri.className} w-full overflow-x-hidden bg-white px-4 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-14 lg:px-16`}
      style={{ color: TEAL }}
    >
      <ArchHeading title={TITLE} caption={CAPTION} />

      <div className="mx-auto mt-8 max-w-7xl sm:mt-16">
        {CHAPTERS.map((c, i) => (
          <article
            key={c.heading}
            className="grid gap-5 py-7 sm:py-9 md:grid-cols-[minmax(0,1fr)_320px] md:gap-16"
            style={{
              borderTop: i === 0 ? "none" : `1px solid ${GOLD}66`,
            }}
          >
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold sm:text-2xl lg:text-3xl">
                <span
                  className="h-2.5 w-2.5 shrink-0 rotate-45"
                  style={{ background: GOLD }}
                  aria-hidden="true"
                />
                {c.heading}
              </h3>
              <p className="mt-3 text-[17px] leading-[2.05] sm:mt-4 sm:text-[19px] sm:leading-[2.15] lg:text-[20px]">
                {c.text}
              </p>
            </div>

            {/* hashiya: kinare ke notes */}
            <dl
              className="grid grid-cols-2 gap-x-4 gap-y-4 self-start rounded-xl bg-[#f7f4ee] p-4 pr-5 md:block md:space-y-4 md:rounded-none md:bg-transparent md:p-0 md:pr-6"
              style={{ borderRight: `3px solid ${GOLD}` }}
            >
              {c.notes.map((n) => (
                <div
                  key={n.label}
                  className="[&:last-child:nth-child(odd)]:col-span-2 md:[&:last-child:nth-child(odd)]:col-span-1"
                >
                  <dt
                    className="text-[14px] md:text-[15px]"
                    style={{ color: GOLD_DARK }}
                  >
                    {n.label}
                  </dt>
                  <dd className="mt-0.5 text-[16px] font-bold leading-snug md:text-[18px]">
                    {n.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}

        {ctaHref && (
          <div className="mt-6 text-center">
            <a
              href={ctaHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-8 py-3 sm:w-auto text-lg font-bold transition-colors hover:bg-[#123a3a] hover:text-[#fddf96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderColor: TEAL, color: TEAL, outlineColor: TEAL }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}