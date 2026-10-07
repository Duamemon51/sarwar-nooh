"use client";

import { englishGaadiMessage, gaadiMessage } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";

export default function GaadiNasheenMessage() {
  const { language } = useLanguage();
  const content = language === "en" ? englishGaadiMessage : gaadiMessage;
  const [expandedLanguage, setExpandedLanguage] = useState<"en" | "sd" | null>(
    null,
  );
  const expanded = expandedLanguage === language;
  const visibleGuidelines = expanded
    ? content.guidelines
    : content.guidelines.slice(0, 2);

  return (
    <section
      lang={language === "en" ? "en" : "sd"}
      className="sindhi-content bg-white px-3 py-3 sm:px-4 sm:py-6"
    >
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-[#123a3a]">
        <div
          dir="ltr"
          className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] md:items-stretch"
        >
          {/* Text content: decides the card height */}
          <div className="w-full px-4 pt-4 sm:px-8 sm:pt-6 md:px-12 md:pt-8">
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className={`mb-3 text-lg font-bold leading-tight text-white sm:mb-4 sm:text-2xl md:text-4xl ${
                language === "en" ? "text-left" : "text-right"
              }`}
            >
              {content.title}
            </h2>

            <div
              dir={language === "en" ? "ltr" : "rtl"}
              style={{ fontFamily: language === "en" ? "var(--font-english-body)" : "var(--font-sindhi)" }}
              className={`pb-5 text-base leading-7 text-gray-200 md:pb-8 ${
                language === "en" ? "text-left" : "text-right"
              }`}
            >
              <p
                style={{
                  fontFamily:
                    language === "en"
                      ? "var(--font-english-body)"
                      : '"MB Sindhi Sahat", "Noto Sans Arabic", serif',
                }}
                className="mb-4 text-base md:text-2xl"
              >
                {content.intro}
              </p>
              <ol
                className="list-decimal space-y-3 ps-5 text-base marker:font-bold marker:text-[#e8c98a] sm:space-y-4 md:text-lg"
              >
                {visibleGuidelines.map((guideline) => (
                  <li key={guideline.title} className="ps-1">
                    <strong className="font-bold text-[#e8c98a]">
                      {guideline.title}:
                    </strong>{" "}
                    {guideline.text}
                  </li>
                ))}
              </ol>
              {expanded && (
                <p
                  style={{
                    fontFamily:
                      language === "en"
                        ? "var(--font-english-body)"
                        : '"MB Sindhi Sahat", "Noto Sans Arabic", serif',
                  }}
                  className="mt-4 text-base md:text-lg"
                >
                  {content.closing}
                </p>
              )}
              {content.guidelines.length > 2 && (
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() =>
                    setExpandedLanguage(expanded ? null : language)
                  }
                  style={{ fontFamily: language === "en" ? "var(--font-english-body)" : "var(--font-sindhi)" }}
                  className="mt-4 rounded-full border border-[#e8c98a]/70 px-4 py-2 font-semibold text-[#e8c98a] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c98a]"
                >
                  {expanded
                    ? language === "en"
                      ? "Read less"
                      : "گهٽ پڙهو"
                    : language === "en"
                      ? "Read more"
                      : "وڌيڪ پڙهو"}
                </button>
              )}
            </div>
          </div>

          {/* Image: fills the column height, never sets it */}
          <div className="relative aspect-square w-full md:aspect-auto">
            <img
              src="/SAin-jameel.png"
              alt={content.imageAlt}
              className="absolute inset-0 block h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}