"use client";

import { footerContent } from "@/content";

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" aria-hidden="true">
      <path
        d="M15 5l-7 7 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LampIcon() {
  return (
    <svg viewBox="0 0 80 160" className="h-full w-auto" aria-hidden="true">
      <defs>
        <linearGradient id="lampGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d98a" />
          <stop offset="50%" stopColor="#caa04a" />
          <stop offset="100%" stopColor="#8a6a24" />
        </linearGradient>
      </defs>
      {/* hanging chains */}
      <path d="M20 0 L30 40 M60 0 L50 40" stroke="url(#lampGold)" strokeWidth="1.5" fill="none" />
      {/* cap */}
      <ellipse cx="40" cy="42" rx="16" ry="6" fill="url(#lampGold)" />
      {/* body */}
      <path
        d="M22 46 Q18 80 26 110 Q40 122 54 110 Q62 80 58 46 Z"
        fill="none"
        stroke="url(#lampGold)"
        strokeWidth="2.5"
      />
      <path d="M22 46 L58 46" stroke="url(#lampGold)" strokeWidth="2.5" />
      <path d="M26 62 L54 62 M24 78 L56 78 M26 94 L54 94" stroke="url(#lampGold)" strokeWidth="1.2" opacity="0.7" />
      {/* glow */}
      <ellipse cx="40" cy="82" rx="12" ry="26" fill="#ffdf8e" opacity="0.55" />
      {/* base */}
      <path d="M26 110 Q40 128 54 110 L48 140 Q40 148 32 140 Z" fill="url(#lampGold)" />
      <ellipse cx="40" cy="148" rx="10" ry="4" fill="url(#lampGold)" />
    </svg>
  );
}

export default function UrsBanner() {
  return (
    <section className="w-full bg-[#0a2426] px-3 py-8 sm:px-5 sm:py-10">
      <div className="relative mx-auto max-w-[1500px] border-t-[3px] border-b-[3px] border-[#ded3b3]">
        <img
          src="/nav-corner-left-190.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[190px] select-none object-contain"
        />
        <img
          src="/nav-corner-right-190.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[190px] select-none object-contain"
        />
 
        <div className="relative z-10 overflow-hidden bg-gradient-to-b from-[#0f3538] to-[#0a2426] px-6 py-10 sm:px-10 sm:py-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.15fr_0.5fr_1.15fr_0.85fr]">
            {/* heading + button (visual left) */}
            <div dir="rtl" className="text-right">
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,2.4vw,2.3rem)] leading-[1.25] text-[#f5efe0]">
                {footerContent.gatheringsTitle}
              </h2>
              <p className="mt-3 max-w-[340px] text-[13px] leading-[1.9] text-[#cdd8d3] sm:text-[14px]">
                {footerContent.gatheringsDescription}
              </p>
              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d4af6a]/50 bg-transparent px-5 py-2.5 text-[12px] font-medium text-[#f5efe0] transition-colors hover:bg-[#d4af6a]/10"
              >
                <ChevronLeftIcon />
                <span>{footerContent.eventsButton}</span>
              </button>
            </div>

            {/* lamp */}
            <div className="flex h-[150px] items-center justify-center sm:h-[190px]">
              <LampIcon />
            </div>

            {/* quote block */}
            <div dir="rtl" className="text-center">
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.15rem,1.9vw,1.7rem)] leading-[1.4] text-[#f5efe0]">
                &rdquo;{footerContent.quote}&ldquo;
              </h3>
              <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-[1.9] text-[#cdd8d3] sm:text-[14px]">
                {footerContent.quoteDescription}
              </p>
            </div>

            {/* urs mubarak card */}
            <div
              dir="rtl"
              className="flex items-center gap-4 rounded-lg border border-[#d4af6a]/40 bg-[#0a2426]/40 px-4 py-4 sm:px-5"
            >
              <div className="flex flex-col items-center justify-center rounded-md border border-[#d4af6a]/60 px-3 py-2 text-[#d4af6a]">
                <CalendarIcon />
                  <span className="mt-1 text-[18px] font-semibold leading-none">{footerContent.ursDate}</span>
                  <span className="mt-1 text-[11px] leading-none">{footerContent.ursMonth}</span>
              </div>
              <div className="text-right">
                <h4 className="font-[family-name:var(--font-display)] text-[17px] text-[#f5efe0] sm:text-[19px]">
                  {footerContent.ursTitle}
                </h4>
                <p className="mt-1 max-w-[190px] text-[11px] leading-[1.8] text-[#cdd8d3] sm:text-[12px]">
                  {footerContent.ursDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}