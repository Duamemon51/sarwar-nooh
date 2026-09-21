"use client";

/* Theme (site ke screenshots se liye gaye rang) */
const TEAL = "#123a3a";
const GOLD = "#c5a964";
const GOLD_LIGHT = "#fddf96";
const GOLD_DARK = "#8a6f2a"; // chhote text ke liye (white par readable)
const CARD_TEXT = "#e5e7eb";
const PARCHMENT = "#f7f4ee";

/* ------------------------------------------------------------------ */
/*  DATA  — yahan se text edit karein, UI khud update ho jayegi        */
/*  Maakhiz: The Friday Times "Makhdoom Mystics of Hala" (2020),       */
/*  Wikipedia (Makhdoom Lutufullah)                                    */
/* ------------------------------------------------------------------ */

const TITLE = "سوانح حضرت مخدوم سرور نوح";
const SUBTITLE = "رحمة الله عليه";

/** هيرو ڪارڊ ۾ مختصر معلومات */
const FACTS = [
  { label: "اصل نالو", value: "مخدوم لطف الله" },
  { label: "ولادت", value: "تقريباً 1505ع" },
  { label: "وصال", value: "1589ع / 1590ع" },
  { label: "مزار", value: "هالا، سنڌ" },
];

/** باب: هر باب ۾ heading، پيراگراف، ۽ (اختياري) وضاحتي note */
const CHAPTERS = [
  {
    id: "khandan",
    heading: "خاندان ۽ ولادت",
    paragraphs: [
      "مخدوم سرور نوح، جن جو اصل نالو مخدوم لطف الله هو، سورهين صديءَ عيسوي ۾ سنڌ جا عظيم صوفي، عالم، استاد ۽ روحاني رهبر هئا. سندن خاندان صديقي سڏجي ٿو.",
      "سندن ابن ڏاڏن مان مخدوم فخرالدين ڪبير ڪوٽ ڪروڙ (پنجاب) کان لڏي اچي بوبڪ (سيوهڻ) ۾ رهائش اختيار ڪئي. ان جو پڙپوٽو مخدوم فخرالدين صغير بوبڪ کان لڏي هالا ۾ اچي رهڻ لڳو، ۽ مخدوم نوح، فخرالدين صغير جا پڙپوٽا هئا.",
      "سندن ولادت هالڪنڊي جي ويجهو ٽوري ڳوٺ ۾ ٿي. سندن والد مخدوم نعمت الله سهروردي سلسلي جو نامور صوفي هو.",
    ],
    note: "ولادت جو سال ذريعن ۾ 1500ع کان 1506ع تائين مليل آهي؛ هتي تقريباً 1505ع ڏنو ويو آهي.",
  },
  {
    id: "taleem",
    heading: "تعليم",
    paragraphs: [
      "ابتدائي ديني تعليم هالڪنڊي ۾ مخدوم عربي (شاهه ڏينو) کان حاصل ڪيائون، جيڪو عربي ٻوليءَ جو ڄاتل سڃاتل عالم هو. مخدوم عربي جو وصال 1572ع ۾ ٿيو ۽ سندس مقبرو پراڻي هالا ۾ آهي.",
    ],
  },
  {
    id: "maqam",
    heading: "روحاني مقام ۽ سرواري سلسلو",
    paragraphs: [
      "دلچسپ ڳالهه هيءَ آهي ته مخدوم نوح ان دور جي ڪنهن نامور صوفي کان بيعت نه ٿيا؛ سندن ابن ڏاڏا سهروردي سلسلي سان وابسته هئا. هو سهروردي-اويسي صوفي هئا ۽ سنڌ ۾ ”سرواري“ سلسلي جا باني ليکيا وڃن ٿا.",
      "هو سنڌ جو پهريون ديني عالم ۽ صوفي هو جنهن قرآن ڪريم جو فارسي ٻولي ۾ ترجمو ڪيو، جيڪو سندن عربي ۽ فارسي تي ڪمانڊ ڏيکاري ٿو. هو ان دور جي سڀني ظاهري ۽ باطني علمن ۾ ماهر هئا.",
    ],
  },
  {
    id: "khanqah",
    heading: "خانقاهه، مريد ۽ خليفا",
    paragraphs: [
      "هالڪنڊي ۾ سندن خانقاهه تي ديني مجلسون ۽ وعظ ٿيندا هئا، جن ۾ ان دور جا بزرگ ۽ درويش شريڪ ٿيندا هئا. ڪيترائي ماڻهو سندن روحاني علم کان متاثر ٿي مريد ٿيا. جيڪي سڌو سنئون مخدوم نوح کان سرواري سلسلي ۾ داخل ٿيا، انهن کي ”سرواري ٽور“ سڏيو وڃي ٿو.",
      "سندن گھڻا خليفا ۽ مريد سنڌ سان گڏ پنجاب ۽ هندستاني ڪڇ تائين به سندن تعليمات پکيڙيندا رهيا. پنجاب ۾ سندن چار خليفا خاص طور ڄاتل سڃاتل آهن. انهن مان حاجي ديوان نعمت الله (وفات 1603ع) ڏوگر قبيلي مان هو، جنهن خرقو ملڻ کان پوءِ خانقاهه ڏوگران قائم ڪئي، جيڪا هاڻي ضلعي شيخوپوره جي تحصيل صفدرآباد ۾ آهي.",
      "ذريعن ۾ سندن مريدن ۽ خليفن ۾ سيد علي شيراز ثاني، درويش قاسم، مخدوم ابو مصطفيٰ ٺٽوي، ميان مٺو فقير، سجن سوائي ۽ بهاؤالدين ڊلقپوش جا نالا ملن ٿا.",
    ],
  },
  {
    id: "wisal",
    heading: "وصال ۽ مزار جو سفر",
    paragraphs: [
      "مخدوم نوح جو وصال 1589ع ۾ ٿيو (ڪن ذريعن ۾ 1590ع)، ۽ کين ٽوري ڳوٺ ۾ دفن ڪيو ويو. سنڌو درياءَ جي ٻوڏ سبب 1601ع (1010هه) ۾ سندن جسد مبارڪ ويجهي ڳوٺ ملا سنواڻي ۾ منتقل ڪيو ويو.",
      "پوءِ 1777ع (1191هه) ۾ جڏهن درياءَ ملا سنواڻي ۽ هالڪنڊي جي ٻين ڳوٺن کي ٻوڙي ڇڏيو، تڏهن جسد مبارڪ نئين هالا ۾ آندو ويو. ڪتبي مطابق سندن مقبرو مخدوم پير محمد زمان 1205هه (1790ع) ۾ تعمير ڪرايو. اڄ نئين هالا جي درگاهه ۾ مخدوم نوح ۽ سندن اولاد جون قبرون آهن.",
      "مخدوم نوح جي مقبري جي ڏکڻ ۾ مخدوم مير محمد جي تربت آهي، جيڪا ڪتبي مطابق مير فتح علي خان ٽالپر 1210هه (1795ع) ۾ تعمير ڪرائي. اتر ۾ ٽن گنبذن واري مسجد آهي، جيڪا ڪتبي موجب مير ڪرم علي خان ٽالپر 1222هه (1807ع) ۾ ٺهرائي وئي ليکجي ٿي.",
    ],
    note: "وصال جو سال هڪ ذريعي ۾ 1589ع ۽ ٻين ۾ 1590ع ڏنل آهي.",
  },
];

/** اهم تاريخون (جيڪي ذريعن ۾ ڏنل آهن) */
const TIMELINE = [
  {
    year: "تقريباً 1505ع",
    title: "ولادت",
    text: "هالڪنڊي جي ويجهو ٽوري ڳوٺ ۾.",
  },
  {
    year: "1589ع / 1590ع",
    title: "وصال",
    text: "ٽوري ڳوٺ ۾ دفن ٿيا.",
  },
  {
    year: "1601ع (1010هه)",
    title: "ملا سنواڻي ڏانهن منتقلي",
    text: "درياءَ جي ٻوڏ سبب جسد مبارڪ ويجهي ڳوٺ ۾ منتقل ٿيو.",
  },
  {
    year: "1777ع (1191هه)",
    title: "نئين هالا ڏانهن منتقلي",
    text: "ملا سنواڻي ۽ ٻين ڳوٺن ۾ ٻوڏ اچڻ تي نئين هالا ۾ آندو ويو.",
  },
  {
    year: "1790ع (1205هه)",
    title: "مقبري جي تعمير",
    text: "ڪتبي مطابق مخدوم پير محمد زمان مقبرو تعمير ڪرايو.",
  },
  {
    year: "1795ع (1210هه)",
    title: "مخدوم مير محمد جي تربت",
    text: "ڪتبي مطابق مير فتح علي خان ٽالپر تعمير ڪرائي.",
  },
  {
    year: "1807ع (1222هه)",
    title: "جامع مسجد",
    text: "ڪتبي موجب مير ڪرم علي خان ٽالپر ٺهرائي.",
  },
];

/** سوانح لاءِ ماخذ ڪتاب */
const SOURCES = [
  {
    title: "رساله فتحيه",
    by: "مخدوم فتح محمد صديقي قريشي (1610ع)",
    text: "مخدوم نوح جو پوٽو؛ سنڌ جي تصوف جي تاريخ تي پهريون جامع رسالو.",
  },
  {
    title: "رساله بهاؤالدين ڊلقپوش",
    by: "مريد بهاؤالدين ڊلقپوش",
    text: "مخدوم نوح جي سوانح ۽ ملفوظات.",
  },
  {
    title: "دليل الذاڪرين",
    by: "حاجي پنهور (1695ع)",
    text: "مخدوم نوح جي احوال تي قديم ماخذ.",
  },
  {
    title: "حديقة الاولياء",
    by: "عبدالقادر ٺٽوي",
    text: "سنڌ جي بزرگن جو تذڪرو.",
  },
  {
    title: "مختصر سوانح عمري مخدوم نوح",
    by: "مولوي عبدالحي قادري",
    text: "مخدوم نوح جي زندگيءَ تي مختصر ڪتاب.",
  },
  {
    title: "مخدوم نوح سرور جا سهوڳي",
    by: "پروفيسر محبوب علي چنا",
    text: "مخدوم نوح جي سوانح تي ڪتاب.",
  },
];

/** فهرست (چپ / سائيڊ لنڪ) */
const INDEX = [
  ...CHAPTERS.map((c) => ({ id: c.id, label: c.heading })),
  { id: "tarikhon", label: "اهم تاريخون" },
  { id: "maakhiz", label: "ماخذ" },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

/** Khatam (aath-konay ka sitara) — hero ki sajawat */
function KhatamStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke={GOLD} strokeWidth="1.6">
        <rect x="40" y="40" width="120" height="120" />
        <rect x="40" y="40" width="120" height="120" transform="rotate(45 100 100)" />
        <circle cx="100" cy="100" r="44" />
        <rect x="70" y="70" width="60" height="60" transform="rotate(22.5 100 100)" />
        <rect x="70" y="70" width="60" height="60" transform="rotate(67.5 100 100)" />
      </g>
      <circle cx="100" cy="100" r="5" fill={GOLD_LIGHT} />
    </svg>
  );
}

function Diamond({ size = "h-2.5 w-2.5" }: { size?: string }) {
  return (
    <span
      className={`${size} shrink-0 rotate-45`}
      style={{ background: GOLD }}
      aria-hidden="true"
    />
  );
}

function Note({ children }: { children: string }) {
  return (
    <p
      className="mt-2 rounded-lg px-4 py-3 text-[15px] leading-relaxed sm:text-base"
      style={{
        background: PARCHMENT,
        borderRight: `3px solid ${GOLD}`,
        color: GOLD_DARK,
      }}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function SawanehMakhdoomNooh() {
  return (
    <section
      dir="rtl"
      lang="sd"
      aria-labelledby="sawaneh-title"
      className="font-[family-name:var(--font-sindhi)] w-full overflow-x-hidden bg-white px-4 py-10 sm:px-10 sm:py-16 lg:px-16"
      style={{ color: TEAL }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Hero card */}
        <header
          className="relative overflow-hidden rounded-[20px] px-6 py-9 sm:px-12 sm:py-14"
          style={{ background: TEAL }}
        >
          <KhatamStar className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 opacity-25 sm:-left-8 sm:top-1/2 sm:h-72 sm:w-72 sm:-translate-y-1/2 sm:opacity-40 lg:left-6 lg:h-80 lg:w-80" />

          <div className="relative max-w-2xl">
            <h2
              id="sawaneh-title"
              className="text-3xl font-bold leading-snug text-white sm:text-5xl"
            >
              {TITLE}
            </h2>
            <p
              className="mt-2 text-xl sm:text-2xl"
              style={{ color: GOLD_LIGHT }}
            >
              {SUBTITLE}
            </p>

            <dl
              className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 pt-6 sm:mt-9 sm:grid-cols-4"
              style={{ borderTop: "1px solid rgba(253,223,150,.25)" }}
            >
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="text-[14px]" style={{ color: GOLD_LIGHT }}>
                    {f.label}
                  </dt>
                  <dd
                    className="mt-0.5 text-[17px] font-bold leading-snug sm:text-lg"
                    style={{ color: CARD_TEXT }}
                  >
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {/* Index + content */}
        <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
          {/* Fehrist: mobile par chips, desktop par sidebar */}
          <nav aria-label="فهرست" className="lg:sticky lg:top-6 lg:self-start">
            <p
              className="hidden text-lg font-bold lg:mb-3 lg:block"
              style={{ color: TEAL }}
            >
              فهرست
            </p>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-10 sm:px-10 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {INDEX.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-[15px] transition-colors hover:bg-[#f7f4ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:rounded-none lg:border-0 lg:border-r-2 lg:px-4 lg:py-2.5 lg:text-[17px]"
                  style={{ borderColor: GOLD, outlineColor: TEAL }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="max-w-3xl">
            {/* Chapters */}
            {CHAPTERS.map((c, i) => (
              <article
                key={c.id}
                id={c.id}
                className="scroll-mt-6 py-7 first:pt-0 sm:py-9 sm:first:pt-0"
                style={{
                  borderTop: i === 0 ? "none" : `1px solid ${GOLD}66`,
                }}
              >
                <h3 className="flex items-center gap-3 text-xl font-bold sm:text-2xl lg:text-3xl">
                  <Diamond />
                  {c.heading}
                </h3>
                <div className="mt-3 space-y-4 sm:mt-4">
                  {c.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-[17px] leading-[2.05] sm:text-[19px] sm:leading-[2.15] lg:text-[20px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {c.note && <Note>{c.note}</Note>}
              </article>
            ))}

            {/* Timeline */}
            <article
              id="tarikhon"
              className="scroll-mt-6 py-7 sm:py-9"
              style={{ borderTop: `1px solid ${GOLD}66` }}
            >
              <h3 className="flex items-center gap-3 text-xl font-bold sm:text-2xl lg:text-3xl">
                <Diamond />
                اهم تاريخون
              </h3>
              <ol
                className="mt-6 border-r-2 pr-6 sm:pr-8"
                style={{ borderColor: GOLD }}
              >
                {TIMELINE.map((t) => (
                  <li key={t.year} className="relative pb-7 last:pb-0">
                    <span
                      className="absolute top-2 -right-[32px] h-3.5 w-3.5 rounded-full border-2 sm:-right-[40px]"
                      style={{ borderColor: GOLD, background: TEAL }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-[15px] font-bold"
                      style={{ color: GOLD_DARK }}
                    >
                      {t.year}
                    </p>
                    <h4 className="text-lg font-bold sm:text-xl">{t.title}</h4>
                    <p className="mt-1 text-[16px] leading-relaxed sm:text-[18px]">
                      {t.text}
                    </p>
                  </li>
                ))}
              </ol>
            </article>

            {/* Sources */}
            <article
              id="maakhiz"
              className="scroll-mt-6 py-7 sm:py-9"
              style={{ borderTop: `1px solid ${GOLD}66` }}
            >
              <h3 className="flex items-center gap-3 text-xl font-bold sm:text-2xl lg:text-3xl">
                <Diamond />
                ماخذ
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed sm:text-[18px]">
                مخدوم نوح جي سوانح تي هيٺين ڪتابن مان معلومات ملي ٿي:
              </p>
              <ul
                className="mt-4 divide-y divide-[#c5a964]/40 rounded-2xl px-5 sm:px-6"
                style={{ background: PARCHMENT }}
              >
                {SOURCES.map((s) => (
                  <li key={s.title} className="py-4">
                    <p className="text-[18px] font-bold sm:text-xl">
                      {s.title}
                    </p>
                    <p
                      className="mt-0.5 text-[15px]"
                      style={{ color: GOLD_DARK }}
                    >
                      {s.by}
                    </p>
                    <p className="mt-1 text-[16px] leading-relaxed sm:text-[17px]">
                      {s.text}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}