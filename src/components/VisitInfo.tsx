import type { JSX } from "react";
import { visitInfoContent, englishVisitInfoContent } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

const icons: Record<string, JSX.Element> = {
  clock: (<><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></>),
  map: (<><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>),
  book: (<><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M19 19v2H6" /></>),
  heart: (<path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11Z" />),
};

export default function VisitInfo() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const content = isEn ? englishVisitInfoContent : visitInfoContent;

  return (
    <section className="bg-[#f6f1e7] py-12 sm:py-16" dir={isEn ? "ltr" : "rtl"}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#123A3A]">
            {content.title}
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-[#123A3A]/70">{content.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[var(--color-gold)]" />
        </div>

        {/* Info cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-lg border border-amber-400/30 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#123A3A] transition-colors group-hover:bg-[var(--color-gold)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[var(--color-gold-bright)] group-hover:text-[#123A3A]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[card.icon]}
                </svg>
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold text-[#123A3A]">{card.title}</h3>
              <p className="whitespace-pre-line text-sm sm:text-base leading-[1.9] text-[#123A3A]/80">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}