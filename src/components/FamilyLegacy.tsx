import { DargahSkyline } from "@/components/Illustrations";
import { useLanguage } from "@/components/LanguageProvider";

type LineageFigure = {
  initials: string;
  name: string;
  period: string;
  role: string;
};

const lineage: LineageFigure[] = [
  {
    initials: "SN",
    name: "Makhdoom Sarwar Nooh",
    period: "1506 – 1590",
    role: "The Founder",
  },
  {
    initials: "MZ",
    name: "Makhdoom Muhammad Zaman Talibul Moula",
    period: "1919 – 1993",
    role: "17th Sajjada Nasheen",
  },
  {
    initials: "AF",
    name: "Makhdoom Muhammad Amin Fahim",
    period: "1939 – 2015",
    role: "18th Sajjada Nasheen",
  },
  {
    initials: "JZ",
    name: "Makhdoom Jamiluz Zaman",
    period: "Present",
    role: "19th Sajjada Nasheen",
  },
  {
    initials: "MZ",
    name: "Makhdoom Mehboob-uz-Zaman",
    period: "Present",
    role: "MPA & Sindh Minister for Food",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FamilyLegacy() {
  const { language } = useLanguage();
  const isSindhi = language !== "en";

  return (
    <section
      id="family"
      dir={isSindhi ? "rtl" : "ltr"}
      className="scroll-mt-24 relative overflow-hidden border-y border-indigo/10 bg-parchment-warm/70"
    >
      {/* faint architectural watermark, echoes the hero banner */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <DargahSkyline className="w-[140%] sm:w-full h-full object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
        <div className="relative min-h-[320px] md:min-h-[420px]">
          <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-4 md:pr-10 lg:pr-14">
            <div className={`w-full max-w-[620px] ${isSindhi ? "ml-auto text-right" : "mr-auto text-left"}`}>
              <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-gold sm:mb-3 sm:text-[12px]">
                {isSindhi ? "مخدوم خاندان" : "The Makhdoom family"}
              </span>
              <h2 className="mb-3 text-[clamp(2rem,3vw,3rem)] font-[family-name:var(--font-display)] leading-[1.15] text-indigo sm:mb-4">
                {isSindhi ? "روحاني قيادت جو ورثو" : "A Legacy of Spiritual Leadership"}
              </h2>
              <p className="mb-6 max-w-[42ch] text-[14.5px] leading-[1.7] text-ink/75 sm:text-[15.5px]">
                {isSindhi
                  ? "پانجه صديءَ کان وٺي، مخدوم خاندان غوثُ الحق حضرت مخدوم سرور نوحؒ جي مشن کي آمن، علم ۽ خدمت جي رستي تي اڳتي وڌي رهيو آهي."
                  : "For over five centuries, the Makhdoom family has carried forward the mission of Hazrat Makhdoom Sarwar Nooh, guiding seekers through faith, knowledge and service."}
              </p>
              <a
                href="#legacy"
                className="inline-flex items-center gap-2 rounded-full bg-indigo px-4 py-2.5 text-[13.5px] font-medium text-parchment transition-colors hover:bg-indigo-deep sm:px-5 sm:py-3 sm:text-[14px]"
              >
                {isSindhi ? "سڀ شجره ڏسو" : "Explore Full Lineage"}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12">

          {/* right: succession chain */}
          <div className="min-w-0">
            {/* mobile / tablet: horizontal scroll strip */}
            <div className="md:hidden -mx-4 sm:-mx-6 px-4 sm:px-6 overflow-x-auto pb-2">
              <ol className="flex items-start gap-6 w-max snap-x snap-mandatory">
                {lineage.map((figure, i) => (
                  <li
                    key={figure.name}
                    className="relative flex flex-col items-center text-center w-[104px] shrink-0 snap-start"
                  >
                    {i > 0 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-7 right-full w-6 border-t border-dashed border-gold/50"
                      />
                    )}
                    <span className="w-14 h-14 rounded-full bg-indigo text-parchment ring-2 ring-gold/50 flex items-center justify-center font-[family-name:var(--font-display)] text-[16px] shrink-0">
                      {figure.initials}
                    </span>
                    <span className="mt-2.5 text-[12px] leading-tight text-indigo font-medium">
                      {figure.name}
                    </span>
                    <span className="mt-1 text-[10.5px] text-maroon/80">
                      {figure.period}
                    </span>
                    <span className="text-[10.5px] text-ink/55">{figure.role}</span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="md:hidden text-[11px] text-ink/40 mt-1">
              Swipe to see the full succession
            </p>

            {/* desktop: even horizontal chain */}
            <ol className="hidden md:flex items-start justify-between">
              {lineage.map((figure, i) => (
                <li
                  key={figure.name}
                  className="relative flex flex-col items-center text-center px-1"
                  style={{ flexBasis: `${100 / lineage.length}%` }}
                >
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-7 right-full w-[calc(100%-1.5rem)] border-t border-dashed border-gold/50"
                    />
                  )}
                  <span className="w-14 h-14 rounded-full bg-indigo text-parchment ring-2 ring-gold/50 flex items-center justify-center font-[family-name:var(--font-display)] text-[17px] shrink-0">
                    {figure.initials}
                  </span>
                  <span className="mt-2.5 text-[12.5px] leading-tight text-indigo font-medium max-w-[110px]">
                    {figure.name}
                  </span>
                  <span className="mt-1 text-[11px] text-maroon/80">
                    {figure.period}
                  </span>
                  <span className="text-[11px] text-ink/55 max-w-[110px]">
                    {figure.role}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}