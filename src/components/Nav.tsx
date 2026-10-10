"use client";

import { useState } from "react";
import { englishHeroContent, englishNavLinks, heroContent, navLinks } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = language === "en" ? englishNavLinks : navLinks;

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top bar - corners contained ONLY here */}
      <div className="relative h-[60px] sm:h-[75px] bg-[#002830]/90 backdrop-blur-sm border-t-[3px] border-b-[3px] border-[#ded3b3]">
        {/* Corner artwork - hidden on mobile so the bar stays clean/plain like the screenshot */}
        <img
          src="/nav-corner-left.webp"
          alt=""
          className="hidden sm:block absolute left-0 top-0 h-full w-auto pointer-events-none select-none"
        />

        <img
          src="/nav-corner-right.webp"
          alt=""
          className="hidden sm:block absolute right-0 top-0 h-full w-auto pointer-events-none select-none"
        />

        {/* Desktop language toggle */}
        <button
          type="button"
          onClick={() => setLanguage(language === "en" ? "sd" : "en")}
          className="absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 rounded-full border border-[#E8C98A] px-3 py-1 text-xs font-semibold text-[#E8C98A] transition hover:bg-[#E8C98A]/10 md:block"
          aria-label={language === "en" ? "Switch to Sindhi" : "Switch to English"}
        >
          {language === "en" ? "سنڌي" : "English"}
        </button>

        {/* Outer row forced LTR so logo stays left, links stay right, regardless of language */}
        <div className="relative flex h-full items-center justify-between gap-2 px-3 sm:px-16 md:px-20" dir="ltr">
          {/* Logo + Title - always left */}
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden sm:gap-3">
            <img
              src="/logo.webp"
              alt="درگاه جو لوگو"
              className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
            />

            <div className="min-w-0 text-left" dir={language === "en" ? "ltr" : "rtl"}>
              <h1 className="truncate text-white font-bold text-sm sm:text-lg leading-tight">
                {language === "en" ? englishHeroContent.name : heroContent.name}
              </h1>

              <p className="truncate mt-1 text-white/70 text-[10px] sm:mt-2 sm:text-xs">
                {language === "en" ? englishHeroContent.location : heroContent.location}
              </p>
            </div>
          </div>

          {/* Desktop Links - always right, leaves room for toggle via padding */}
          <div
            className="hidden md:flex items-center gap-8 pr-24"
            dir={language === "en" ? "ltr" : "rtl"}
          >
            {links.map((link) => (
              
              <a  key={link.href}
                href={link.href}
                className="text-white font-semibold hover:text-yellow-300 transition text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "sd" : "en")}
              className="rounded-full border border-[#E8C98A] px-2.5 py-1 text-xs font-semibold text-[#E8C98A] transition hover:bg-[#E8C98A]/10"
              aria-label={language === "en" ? "Switch to Sindhi" : "Switch to English"}
            >
              {language === "en" ? "سنڌي" : "English"}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="shrink-0 p-1 text-[#E8C98A]"
              aria-label={language === "en" ? "Open menu" : "مينيو کوليو"}
              aria-expanded={menuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu - separate, outside the bar wrapper */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#002830]/95 backdrop-blur-sm px-4 py-3 flex flex-col gap-3 border-b-[3px] border-[#ded3b3]"
          dir={language === "en" ? "ltr" : "rtl"}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold hover:text-yellow-300 transition text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}