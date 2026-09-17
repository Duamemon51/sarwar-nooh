"use client";

import {
  englishGalleryContent,
  englishHeroContent,
  galleryContent,
  heroContent as sindhiHeroContent,
} from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function HeroSection({ compact = false, gallery = false }: { compact?: boolean; gallery?: boolean }) {
  const { language } = useLanguage();
  const content = gallery
    ? language === "en"
      ? englishGalleryContent
      : galleryContent
    : language === "en"
      ? englishHeroContent
      : sindhiHeroContent;
  const imageAlt = "imageAlt" in content ? content.imageAlt : content.title;
  const name = "name" in content ? content.name : "";
  const location = "location" in content ? content.location : "";
  const videoLabel = "videoLabel" in content ? content.videoLabel : "";
  const displayFont = language === "en"
    ? "font-[family-name:var(--font-english-display)]"
    : "font-[family-name:var(--font-display)]";

  return (
    <section
      className={`relative mt-[60px] overflow-hidden sm:mt-[75px] ${compact ? "md:h-[520px]" : ""}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <img
        src="/hero-bg.webp"
        alt={imageAlt}
        className={`relative hidden h-auto w-full md:block ${compact ? "h-[520px] object-cover object-top" : ""}`}
      />

      <div className="absolute inset-0 hidden flex-col justify-center px-4 sm:px-8 md:flex md:px-12 items-start">
        <div className={`flex flex-col ${gallery || language !== "en" ? "w-[42%] max-w-[500px] items-start text-left" : "w-[56%] max-w-[680px] items-start text-left"}`}>
          <div className={`flex flex-col gap-0 ${gallery ? "ms-[70px] max-w-[520px] items-start" : language === "en" ? "ms-[24px] max-w-[520px] items-start" : "ms-[12px] max-w-[340px] items-start"}`}>
            <h1 className="text-[clamp(2.8rem,4vw,3.8rem)] font-bold leading-none text-[#e8c98a]">
              {content.title}
            </h1>
            {!gallery && (
              <h2 className="text-[clamp(2.5rem,3.7vw,3.3rem)] font-bold leading-none text-[#e8c98a]">
                {name}
              </h2>
            )}
          </div>
          {!gallery && <p className={`mt-4 mb-3 text-[clamp(1.35rem,2vw,1.75rem)] text-white ${language === "en" ? "ms-[24px]" : "ms-[12px]"}`}>
            {location}
          </p>}
          <p
            className={`mb-6 max-w-[390px] text-[clamp(1rem,1.5vw,1.3rem)] leading-8 text-white/80 ${gallery ? "mt-4 ms-[24px]" : language === "en" ? "ms-[24px]" : "me-[12px]"}`}
            style={language === "en" ? undefined : { direction: "rtl", textAlign: "right" }}
          >
            {content.description}
          </p>
          {!gallery && <button className={`flex w-fit items-center gap-2 rounded-full border border-[#e8c98a] px-8 py-2.5 text-sm text-white transition hover:bg-white/10 ${language === "en" ? "ms-[24px]" : "ms-[12px]"}`}>
            <span className="text-[#e8c98a]">&#8594;</span>
            <span>{videoLabel}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8c98a] text-[#002830]">&#9654;</span>
          </button>}
        </div>
      </div>

      <div className={`relative flex overflow-hidden md:hidden ${compact ? "h-[330px] min-h-[330px]" : "min-h-[420px]"}`}>
        <img src="/hero-bg.webp" alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,25,0.15)_0%,rgba(7,27,25,0.55)_38%,rgba(7,27,25,0.88)_100%)]" />
        <div className="relative flex flex-1 flex-col items-start justify-center px-4 py-6 text-left">
          <h1 className="text-[clamp(1.5rem,6vw,2rem)] font-bold leading-tight text-[#e8c98a]">{content.title}</h1>
          {!gallery && <h2 className="text-[clamp(1.4rem,5.5vw,1.8rem)] font-bold leading-tight text-[#e8c98a]">{name}</h2>}
          {!gallery && <p className="mt-2 mb-2 text-[clamp(0.85rem,3.2vw,1rem)] text-white">{location}</p>}
          <p
            className={`mb-4 max-w-[270px] text-[clamp(0.75rem,2.6vw,0.85rem)] leading-6 text-white/80 ${gallery ? "mt-3" : ""}`}
            style={language === "en" ? undefined : { direction: "rtl", textAlign: "right" }}
          >
            {content.description}
          </p>
          {!gallery && <button className="flex w-fit items-center gap-1.5 rounded-full border border-[#e8c98a] px-4 py-1.5 text-xs text-white">
            <span className="text-[#e8c98a]">&#8594;</span>
            <span>{videoLabel}</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e8c98a] text-[#002830]">&#9654;</span>
          </button>}
        </div>
      </div>
    </section>
  );
}
