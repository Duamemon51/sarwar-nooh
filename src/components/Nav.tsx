"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DuaHandsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
      <path
        d="M6 12c-1.5 0-3 1-3 3.5S4.5 19 6 19M18 12c1.5 0 3 1 3 3.5S19.5 19 18 19M8 10c0-2 1-4 4-4s4 2 4 4M8 10v5a4 4 0 0 0 8 0v-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur border-b border-[#e7dcc3]/60 shadow-sm"
      style={{ backgroundColor: "#FAF9F7" }}
    >
      <nav
        className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-10 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4"
        aria-label="Section navigation"
      >
        {/* logo */}
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2 sm:gap-2.5 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Makhdoom Nooh Logo"
            width={48}
            height={48}
            priority
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 shrink-0 rounded-full object-cover"
          />
          <span className="min-w-0 leading-tight">
            <span className="block text-[8px] sm:text-[10px] tracking-[0.15em] text-[#8a7a4a] uppercase">
              Dargah
            </span>
            <span className="block font-[family-name:var(--font-display)] text-[10px] sm:text-[14px] lg:text-[15px] tracking-wide text-[#0f3d33] uppercase whitespace-nowrap">
              Makhdoom Sarwar Nooh
            </span>
            <span className="block text-[7px] sm:text-[9px] tracking-[0.2em] text-[#8a7a4a] uppercase">
              Hala New
            </span>
          </span>
        </a>
        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-8 text-[14px] font-medium text-[#3a3a34]">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname === link.href;

            return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative pb-1 transition-colors hover:text-[#0f3d33] ${
                  isActive
                    ? "text-[#0f3d33] after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[2px] after:bg-[#0f3d33]"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
            );
          })}
        </ul>

        {/* right side: action button + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="/dua-ziyarat"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-2 text-[12px] lg:text-[13px] font-medium text-[#FAF9F7] transition-colors hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#0f3d33" }}
          >
            <DuaHandsIcon />
            Dua &amp; Ziyarat
          </a>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#0f3d33] hover:bg-[#f0ece1] transition-colors shrink-0"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* mobile panel */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t ${
          open ? "max-h-[460px] border-[#e7dcc3]/60" : "max-h-0 border-transparent"
        }`}
        style={{ backgroundColor: "#FAF9F7" }}
      >
        <ul className="px-4 sm:px-6 py-2 flex flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[15px] text-[#3a3a34] hover:text-[#0f3d33] transition-colors border-b border-[#e7dcc3]/40 last:border-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 sm:px-6 pb-4 flex gap-3">
          <a
            href="/dua-ziyarat"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-[#FAF9F7]"
            style={{ backgroundColor: "#0f3d33" }}
          >
            <DuaHandsIcon />
            Dua &amp; Ziyarat
          </a>
        </div>
      </div>
    </header>
  );
}