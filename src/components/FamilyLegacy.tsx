import { DargahSkyline } from "@/components/Illustrations";

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
  return (
    <section
      id="family"
      className="scroll-mt-24 relative overflow-hidden bg-parchment-warm/70 border-y border-indigo/10"
    >
      {/* faint architectural watermark, echoes the hero banner */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <DargahSkyline className="w-[140%] sm:w-full h-full object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-[minmax(0,300px)_1fr] gap-8 md:gap-12 items-center">
          {/* left: intro + CTA */}
          <div>
            <span className="block text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold mb-2 sm:mb-3">
              The Makhdoom family
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[28px] sm:text-[32px] md:text-[34px] leading-[1.15] text-indigo mb-3 sm:mb-4">
              A Legacy of Spiritual Leadership
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-ink/75 max-w-[42ch] mb-6">
              For over five centuries, the Makhdoom family has carried
              forward the mission of Hazrat Makhdoom Sarwar Nooh,
              guiding seekers through faith, knowledge and service.
            </p>
            <a
              href="#legacy"
              className="inline-flex items-center gap-2 bg-indigo text-parchment text-[13.5px] sm:text-[14px] font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-indigo-deep transition-colors"
            >
              Explore Full Lineage
              <ArrowIcon />
            </a>
          </div>

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