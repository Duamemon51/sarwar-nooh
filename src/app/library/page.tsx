"use client";

import { useEffect, useState } from "react";
import { BookOpen, Download, FileText } from "lucide-react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useLanguage } from "@/components/LanguageProvider";

const resources = [
  {
    id: "history-dargah-hala",
    category: "history",
    type: "PDF",
    title: { sd: "تاريخ درگاه شريف هالا", en: "History of Dargah Sharif Hala" },
    description: { sd: "درگاهه شريف هالا جي تاريخ، روحاني ورثي ۽ بزرگن سان لاڳاپيل اهم ڄاڻ.", en: "An account of Dargah Sharif Hala, its spiritual heritage and the history of its revered figures." },
    href: "/FINAL%20TAREEKH-E-DARGHAH%20SHARIF%20HALA%20--%2007-03-25.pdf",
  },
];

const categories = [
  { key: "all", sd: "سڀ مواد", en: "All resources" },
  { key: "history", sd: "تاريخ", en: "History" },
];

/* Eight-pointed star tile (khatam) - used as a quiet texture on covers and panels */
const starPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='%23c9a961' stroke-opacity='0.22' stroke-width='1'%3E%3Crect x='10' y='10' width='28' height='28'/%3E%3Crect x='10' y='10' width='28' height='28' transform='rotate(45 24 24)'/%3E%3C/g%3E%3C/svg%3E")`;

/* ---------- Book CSS (inline, no globals.css needed) ---------- */
const bookCss = `
.book-scene { perspective: 1800px; cursor: pointer; outline: none; }
.book-scene:focus-visible { outline: 2px solid #c9a961; outline-offset: 12px; border-radius: 8px; }

.book-float {
  position: relative;
  animation: bookRise 1s cubic-bezier(.2,.8,.2,1) both,
             bookFloat 6s ease-in-out 1s infinite;
}

.book {
  --t: 20px;                      /* thickness */
  --ease: cubic-bezier(.45,.05,.25,1);
  position: relative;
  aspect-ratio: 1049 / 1600;
  transform-style: preserve-3d;
  transform: rotateY(-22deg) rotateX(4deg);
  transition: transform 1s var(--ease);
}
/* open: spine moves to the middle (translateX = half of scaled width) so the whole spread sits centred in the panel */
.book[data-open="true"]  {
  transform: translateX(31%) rotateY(-4deg) rotateX(4deg) scale(.62);
}

/* ---------- back cover + page block ---------- */
.book-back {
  position: absolute; inset: 0;
  transform: translateZ(calc(var(--t) / -2));
  background: #0d2a28;
  border-radius: 3px 8px 8px 3px;
}
.book-edge {
  position: absolute; top: 3px; bottom: 3px; right: calc(var(--t) / -2);
  width: var(--t);
  transform: rotateY(90deg);
  background: repeating-linear-gradient(90deg, #fbf6e9 0 2px, #d8c9a3 2px 3px);
}
/* last page that stays on the right */
.book-pages {
  position: absolute; inset: 3px 5px 3px 0;
  transform: translateZ(calc(var(--t) / -2 + 2px));
  background:
    linear-gradient(90deg, #d2c29c, #f6efdc 10%, #fbf6e9);
  border-radius: 0 4px 4px 0;
}

/* ---------- flipping leaves ---------- */
.book-leaf {
  position: absolute; inset: 3px 5px 3px 0;
  transform-origin: left center;
  transform-style: preserve-3d;
  transform: translateZ(calc(var(--t) / 2 - 3px - var(--i) * 2px)) rotateY(0deg);
  transition: transform .9s var(--ease);
  transition-delay: calc((5 - var(--i)) * .06s);   /* closing: top leaf first */
}
.book[data-open="true"] .book-leaf  {
  transform:
    translateZ(calc(var(--t) / 2 - 3px - var(--i) * 2px))
    rotateY(calc(-1deg * (158 - var(--i) * 5)));
  transition-delay: calc(.35s + var(--i) * .16s);  /* opening: one after another */
}
.leaf-face {
  position: absolute; inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  background:
    linear-gradient(90deg, #d2c29c, #f6efdc 10%, #fbf6e9);
  border-radius: 0 4px 4px 0;
  box-shadow: inset -6px 0 10px -8px rgba(0,0,0,.25);
}
.leaf-back {
  transform: rotateY(180deg);
  background:
    linear-gradient(270deg, #d2c29c, #f1e8d0 10%, #f8f1de);
  border-radius: 4px 0 0 4px;
  box-shadow: inset 6px 0 10px -8px rgba(0,0,0,.25);
}

/* ---------- page content (text lines, title page) ---------- */
.pg {
  position: absolute; inset: 13% 11% 11% 13%;
  display: flex; flex-direction: column; gap: 5.5%;
  pointer-events: none;
}
.pg i {
  display: block; height: 2.2px; border-radius: 2px;
  background: rgba(60,45,20,.30);
  margin-left: auto;
}
.pg i.gap { margin-top: 3.5%; }
.pg b {
  display: block; height: 4px; border-radius: 2px;
  background: rgba(122,91,34,.55);
  width: 46%; margin: 0 auto 5%;
}
.pg-num {
  position: absolute; left: 0; right: 0; bottom: 4.5%;
  text-align: center; font-size: 8px; color: rgba(60,45,20,.5);
}
.title-page {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 9%; padding: 0 12%; text-align: center; color: #0d2a28;
  direction: rtl;
}
.title-page .bism { font-size: 11px; line-height: 1.8; color: #7a5b22; }
.title-page .orn { display: flex; align-items: center; gap: 4px; }
.title-page .orn span { width: 26px; height: 1px; background: #c9a961; }
.title-page .orn em { width: 5px; height: 5px; background: #c9a961; transform: rotate(45deg); }
.title-page .ttl { font-size: 15px; line-height: 1.6; font-weight: 700; }

/* ---------- front cover ---------- */
.book-cover {
  position: absolute; inset: 0;
  transform-origin: left center;
  transform-style: preserve-3d;
  transform: translateZ(calc(var(--t) / 2)) rotateY(0deg);
  transition: transform 1.1s var(--ease);
}
.book[data-open="true"] .book-cover  {
  transform: translateZ(calc(var(--t) / 2)) rotateY(-168deg);
}
.cover-face {
  position: absolute; inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 3px 8px 8px 3px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(0,0,0,.25);
}
.cover-face img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cover-inner {
  transform: rotateY(180deg);
  border-radius: 8px 3px 3px 8px;
  background: linear-gradient(270deg, #0a201e, #16403b 14%, #0d2a28);
  display: flex; align-items: center; justify-content: center;
}
.cover-inner::after {
  content: ""; width: 46%; aspect-ratio: 1;
  border: 1px solid rgba(201,169,97,.45);
  transform: rotate(45deg);
  box-shadow: 0 0 0 8px #0d2a28, 0 0 0 9px rgba(201,169,97,.3);
}
.book-spine {
  position: absolute; inset: 0 auto 0 0; width: 9%;
  background: linear-gradient(90deg, rgba(0,0,0,.45), rgba(255,255,255,.12) 40%, transparent);
}
.book-gloss {
  position: absolute; inset: 0;
  background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,.28) 50%, transparent 65%);
  transform: translateX(-120%);
  transition: transform 1.1s ease;
  pointer-events: none;
}

/* ---------- ground shadow ---------- */
.book-shadow {
  position: absolute; left: 8%; right: -4%; bottom: -22px; height: 22px;
  background: radial-gradient(ellipse at center, rgba(0,0,0,.45), transparent 70%);
  filter: blur(6px);
  transition: transform 1s var(--ease, ease), opacity 1s;
}

/* hover effects only on devices that really hover (on touch, tap toggles + auto-play handles it) */
@media (hover: hover) {
.book-scene:hover .book {
  transform: translateX(31%) rotateY(-4deg) rotateX(4deg) scale(.62);
}
.book-scene:hover .book-leaf {
  transform:
    translateZ(calc(var(--t) / 2 - 3px - var(--i) * 2px))
    rotateY(calc(-1deg * (158 - var(--i) * 5)));
  transition-delay: calc(.35s + var(--i) * .16s);  /* opening: one after another */
}
.book-scene:hover .book-cover {
  transform: translateZ(calc(var(--t) / 2)) rotateY(-168deg);
}
.book-scene:hover .book-gloss { transform: translateX(120%); }
.book-scene:hover .book-shadow { transform: scaleX(1.6); opacity: .75; }
}

@keyframes bookRise {
  from { opacity: 0; transform: translateY(40px) scale(.94); }
  to   { opacity: 1; transform: none; }
}
@keyframes bookFloat {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
@media (prefers-reduced-motion: reduce) {
  .book-float { animation: none; }
  .book, .book-cover, .book-leaf, .book-gloss, .book-shadow { transition: none; }
}
`;

const toSindhiDigits = (n: number) =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

/* A page full of "text" lines. seed makes every page look a little different. */
function PageText({ seed, num, heading }: { seed: number; num: number; heading?: boolean }) {
  const lines = Array.from({ length: 13 }, (_, k) => {
    const last = k === 12 || k === 5 || k === 9; // paragraph ends are shorter
    const w = last ? 38 + ((seed * 11 + k * 7) % 25) : 82 + ((seed * 7 + k * 13) % 18);
    return { w, gap: k === 6 || k === 10 };
  });
  return (
    <div className="pg" aria-hidden>
      {heading && <b />}
      {lines.map((l, k) => (
        <i key={k} className={l.gap ? "gap" : ""} style={{ width: `${l.w}%` }} />
      ))}
      <span className="pg-num">{toSindhiDigits(num)}</span>
    </div>
  );
}

/* ---------- 3D animated book: hover / tap -> cover opens, pages flip one by one ---------- */
const LEAVES = [0, 1, 2, 3, 4, 5];
const AUTO_CLOSED_MS = 3000; // how long the book stays closed
const AUTO_OPEN_MS = 3000;   // how long it stays open (pages flipping)

function Book({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  // Auto-play: closed for 3s -> opens & flips pages for 3s -> closes -> repeat.
  // Hover and tap still work on top of this (tap restarts the timer).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => setOpen((o) => !o), open ? AUTO_OPEN_MS : AUTO_CLOSED_MS);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div
      dir="ltr"
      className="book-scene"
      role="button"
      tabIndex={0}
      aria-pressed={open}
      aria-label={alt}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
    >
      <div className="book-float">
        <div className="book" data-open={open}>
          <div className="book-back" />
          <div className="book-edge" />
          <div className="book-pages">
            <div className="title-page">
              <span className="bism">بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</span>
              <span className="orn" aria-hidden><span /><em /><span /></span>
              <span className="ttl">{alt}</span>
            </div>
          </div>

          {LEAVES.map((i) => (
            <div key={i} className="book-leaf" style={{ ["--i" as string]: i }}>
              <div className="leaf-face">
                <PageText seed={i * 2} num={i * 2 + 3} heading={i % 2 === 0} />
              </div>
              <div className="leaf-face leaf-back">
                <PageText seed={i * 2 + 1} num={i * 2 + 2} heading={i % 3 === 0} />
              </div>
            </div>
          ))}

          <div className="book-cover">
            <div className="cover-face">
              <img src={src} alt={alt} />
              <span className="book-spine" />
              <span className="book-gloss" />
            </div>
            <div className="cover-face cover-inner" />
          </div>
        </div>
        <div className="book-shadow" />
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const isEnglish = language === "en";

  const displayFont = isEnglish ? "font-[family-name:var(--font-english-display)]" : "font-[family-name:var(--font-display)]";

  const countFor = (key: string) =>
    key === "all" ? resources.length : resources.filter((r) => r.category === key).length;

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);

  // One book -> featured full-width layout. Two or more -> 2-column grid.
  const single = filteredResources.length === 1;

  return (
    <div
      lang={isEnglish ? "en" : "sd"}
      dir={isEnglish ? "ltr" : "rtl"}
      className={`min-h-screen bg-[#f4eddf] text-[#182f2d] ${isEnglish ? "font-[family-name:var(--font-english-body)]" : "font-[family-name:var(--font-sindhi)]"}`}
    >
      <style dangerouslySetInnerHTML={{ __html: bookCss }} />
      <Nav />
      <main className="pt-[60px] sm:pt-[75px]">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-[#0d2a28] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/library--section.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20 sm:hidden" />
          <div dir="ltr" className="relative mx-0 grid min-h-[430px] max-w-none items-center gap-10 px-2 py-20 sm:min-h-[520px] sm:px-4 sm:py-28 lg:px-6">
            <div className={isEnglish ? "text-left" : "text-right"}>
              <h1 dir={isEnglish ? "ltr" : "rtl"} className={`${isEnglish ? "font-[family-name:var(--font-english-display)]" : "font-[family-name:var(--font-display)]"} max-w-3xl md:-translate-x-24 text-5xl leading-[0.95] text-[#f0d48b] sm:text-7xl`}>
                {isEnglish ? "The Library" : "لائبريري"}
              </h1>
              <p dir={isEnglish ? "ltr" : "rtl"} className="mt-6 max-w-2xl text-base leading-8 text-[#f1eadb]/80 sm:text-lg">
                {isEnglish
                  ? "A quiet place for books, manuscripts and the living memory of Dargah Makhdoom Sarwar Nooh."
                  : "درگاهه مخدوم سرور نوحؒ جي ڪتابن، قلمي نسخن ۽ جيئري روحاني ياد لاءِ هڪ پُرسڪون علمي جاءِ."}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- RESOURCES ---------- */}
        <section
          id="resources"
          className="relative"
          style={{ backgroundImage: "radial-gradient(ellipse at top, rgba(201,169,97,0.14), transparent 60%)" }}
        >
          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
            {/* Heading */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <h2 className={`${displayFont} mt-0 text-4xl leading-tight text-[#0d2a28] sm:text-5xl`}>
                  {isEnglish ? "Knowledge preserved" : "محفوظ علم"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#1c2b28]/65 sm:text-base">
                  {isEnglish
                    ? "Read and download books from the Dargah archive, free of charge."
                    : "درگاهه جي آرڪائيو مان ڪتاب مفت پڙهو ۽ ڊائون لوڊ ڪريو."}
                </p>
              </div>
            </div>

            {/* Category filters */}
            <div className="gallery-filter-scroll mt-8 flex gap-2 overflow-x-auto border-y border-[#193c37]/10 py-4">
              {categories.map((category) => {
                const active = activeCategory === category.key;
                return (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961] ${active ? "border-[#0d2a28] bg-[#0d2a28] text-[#f0d48b] shadow-md" : "border-[#0d2a28]/20 bg-white/50 text-[#0d2a28]/75 hover:border-[#9b7837] hover:bg-white"}`}
                  >
                    {isEnglish ? category.en : category.sd}
                    <span className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-white/15 text-white/90" : "bg-[#0d2a28]/8 text-[#0d2a28]/60"}`}>
                      {countFor(category.key)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Resource cards */}
            <div className={`mt-10 grid gap-6 ${single ? "" : "lg:grid-cols-2"}`}>
              {filteredResources.map((resource) => {
                const title = isEnglish ? resource.title.en : resource.title.sd;
                const categoryLabel = categories.find((c) => c.key === resource.category);
                return (
                  <article
                    key={resource.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#0d2a28]/10 bg-white/80 shadow-[0_10px_30px_-15px_rgba(13,42,40,0.35)] transition hover:border-[#c9a961] hover:shadow-[0_18px_40px_-16px_rgba(13,42,40,0.45)] sm:flex-row"
                  >
                    {/* 3D animated book cover */}
                    <div
                      className={`flex w-full shrink-0 items-center justify-center bg-gradient-to-br from-[#0d2a28] to-[#16403b] px-6 py-10 sm:px-10 sm:py-12 ${single ? "sm:w-80 lg:w-[26rem]" : "sm:w-72"}`}
                      style={{ backgroundImage: starPattern }}
                    >
                      <div className="w-full max-w-[190px] sm:max-w-[220px] lg:max-w-[260px]">
                        <Book src="/cover_page.jpeg" alt={title} />
                      </div>
                    </div>

                    {/* Details */}
                    <div className={`relative flex flex-1 flex-col justify-center overflow-hidden p-6 ${single ? "sm:p-10 lg:p-14" : "sm:p-7"}`}>
                      {/* faint star ornament that fades out, fills the empty side */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-20 -end-20 h-80 w-80"
                        style={{
                          backgroundImage: starPattern,
                          WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
                          maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
                        }}
                      />

                      <div className="relative z-10 flex flex-col gap-6">
                        {/* chips */}
                        <div className="flex flex-wrap items-center gap-2">
                          {categoryLabel && (
                            <span className="rounded-full bg-[#c9a961]/20 px-3 py-1 text-xs font-semibold text-[#7a5b22]">
                              {isEnglish ? categoryLabel.en : categoryLabel.sd}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 rounded-full border border-[#0d2a28]/15 px-3 py-1 text-xs text-[#0d2a28]/65">
                            <FileText className="h-3 w-3" />
                            {resource.type}
                          </span>
                        </div>

                        {/* title + ornament divider + description */}
                        <div>
                          <h3 className={`${displayFont} leading-tight text-[#0d2a28] ${single ? "text-[1.75rem] sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"}`}>{title}</h3>
                          <div className="mt-5 flex items-center gap-2" aria-hidden>
                            <span className="h-px w-16 bg-[#c9a961]" />
                            <span className="h-2 w-2 rotate-45 bg-[#c9a961]" />
                          </div>
                          <p className={`mt-5 max-w-2xl leading-8 text-[#1c2b28]/70 ${single ? "text-base" : "text-sm"}`}>
                            {isEnglish ? resource.description.en : resource.description.sd}
                          </p>
                        </div>

                        {/* quick facts */}
                        <dl className="grid max-w-xl grid-cols-2 overflow-hidden rounded-xl border border-[#0d2a28]/10 bg-[#f4eddf]/60 sm:grid-cols-3">
                          {[
                            { k: isEnglish ? "Format" : "فارميٽ", v: resource.type },
                            { k: isEnglish ? "Access" : "رسائي", v: isEnglish ? "Free" : "مفت" },
                            { k: isEnglish ? "Source" : "ماخذ", v: isEnglish ? "Dargah archive" : "درگاهه آرڪائيو" },
                          ].map((f, idx) => (
                            <div
                              key={f.k}
                              className={`border-[#0d2a28]/10 px-4 py-3 ${idx === 1 ? "border-s" : ""} ${idx === 2 ? "col-span-2 border-t sm:col-span-1 sm:border-s sm:border-t-0" : ""}`}
                            >
                              <dt className="text-[11px] uppercase tracking-wide text-[#0d2a28]/50">{f.k}</dt>
                              <dd className="mt-1 text-sm font-semibold text-[#0d2a28]">{f.v}</dd>
                            </div>
                          ))}
                        </dl>

                        {/* actions */}
                        {resource.href ? (
                          <div className="flex flex-wrap gap-3">
                            <a
                              href={resource.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0d2a28] px-6 py-3 sm:flex-none text-sm font-semibold text-[#f0d48b] shadow-sm transition hover:bg-[#9b7837] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961] focus-visible:ring-offset-2"
                            >
                              <BookOpen className="h-4 w-4" />
                              {isEnglish ? "Read PDF" : "PDF پڙهو"}
                            </a>
                            <a
                              href={resource.href}
                              download
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#0d2a28]/25 bg-white/60 px-6 py-3 sm:flex-none text-sm font-semibold text-[#0d2a28] transition hover:border-[#9b7837] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961] focus-visible:ring-offset-2"
                            >
                              <Download className="h-4 w-4" />
                              {isEnglish ? "Download" : "ڊائون لوڊ"}
                            </a>
                          </div>
                        ) : (
                          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-[#9b7837]/50 px-5 py-2.5 text-sm font-semibold text-[#9b7837]/80">
                            <Download className="h-4 w-4" />
                            {isEnglish ? "Coming soon" : "جلد ايندو"}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Growing archive note */}
            <div
              className="relative mt-14 overflow-hidden rounded-2xl border-s-4 border-[#c9a961] bg-[#0d2a28] px-6 py-8 text-white sm:px-10"
              style={{ backgroundImage: starPattern }}
            >
              <div className={`flex flex-col gap-5 sm:flex-row sm:items-center ${isEnglish ? "text-left" : "text-right"}`}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c9a961]/60 bg-[#0d2a28] text-[#f0d48b]">
                  <BookOpen className="h-6 w-6" />
                </span>
                <div>
                  <h2 className={`${displayFont} text-2xl text-[#f0d48b] sm:text-3xl`}>{isEnglish ? "A growing archive" : "وڌندڙ علمي ذخيرو"}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-white/75">
                    {isEnglish
                      ? "This collection is being prepared for readers and researchers. Digitised books and manuscripts will be added here as they are catalogued and cleared for public access."
                      : "هي ذخيرو پڙهندڙن ۽ محققن لاءِ تيار ڪيو پيو وڃي. ڊجيٽل ڪتاب ۽ مخطوطا ترتيب ڏيڻ ۽ عوامي رسائي لاءِ تيار ٿيڻ کان پوءِ هتي شامل ڪيا ويندا."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}