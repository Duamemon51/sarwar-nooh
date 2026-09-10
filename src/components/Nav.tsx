"use client";

import { useState } from "react";

const links = [
  { href: "#lineage", label: "Lineage" },
  { href: "#life", label: "Early Life" },
  { href: "#order", label: "The Sarwari Order" },
  { href: "#scholarship", label: "Scholarship" },
  { href: "#shrine", label: "The Dargah" },
  { href: "#titles", label: "Titles" },
  { href: "#legacy", label: "Legacy" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
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

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ajrak-band sticky top-0 z-40 text-parchment">
      <nav
        className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4"
        aria-label="Section navigation"
      >
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-[16px] sm:text-[17px] tracking-wide shrink-0"
          style={{ color: "#e9c568" }}
          onClick={() => setOpen(false)}
        >
          Makhdoom Nooh
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#e7dcc3] hover:text-[#e9c568] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-9 h-9 -mr-1.5 flex items-center justify-center rounded-full text-[#e7dcc3] hover:text-[#e9c568] hover:bg-parchment/10 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* mobile panel */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t ${
          open ? "max-h-[420px] border-parchment/10" : "max-h-0 border-transparent"
        }`}
      >
        <ul className="px-4 sm:px-6 py-2 flex flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[15px] text-[#e7dcc3] hover:text-[#e9c568] transition-colors border-b border-parchment/5 last:border-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}