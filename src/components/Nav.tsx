"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "هوم" },
    { href: "/gallery", label: "گالري" },
    { href: "/contact", label: "سان رابطو" },
    { href: "/arabic-records", label: "عربي مدارڪ" },
    { href: "/pashto-bayan", label: "پشتفي بڃاڻ پ" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50" dir="rtl">
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

        <div className="relative flex items-center justify-between h-full px-4 sm:px-16 md:px-20">
          {/* Desktop Links - right side */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-semibold hover:text-yellow-300 transition text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button - right side */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#E8C98A] p-1"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo + Title - left side, forced LTR order */}
          <div className="flex items-center gap-1 sm:gap-3" dir="ltr">
            <img
              src="/logo.webp"
              alt="Dargah Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
            />
            <div className="text-left">
              <h1 className="text-white font-bold text-sm sm:text-lg leading-tight">
                درگاہ مخدوم سرور ٿوح
              </h1>
              <p className="mt-1 text-white/70 text-[10px] sm:mt-2 sm:text-xs">
                ھالا نو، ضلعي مٽياري، سنڌ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu - separate, outside the bar wrapper */}
      {menuOpen && (
        <div className="md:hidden bg-[#002830]/95 backdrop-blur-sm px-4 py-3 flex flex-col gap-3 border-b-[3px] border-[#ded3b3]">
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