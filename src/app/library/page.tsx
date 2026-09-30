"use client";

import { useState } from "react";
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
      <Nav />
      <main className="pt-[60px] sm:pt-[75px]">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-[#0d2a28] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/library--section.webp')" }}
          />
          <div className="absolute inset-0 bg-black/15 sm:hidden" />
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

        {/* ---------- RESOURCES (redesigned) ---------- */}
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
                    {/* Book cover */}
                    <div
                      className={`relative flex shrink-0 items-center justify-center bg-[#0d2a28] p-6 ${single ? "sm:w-64 sm:p-10 lg:w-80" : "sm:w-48"}`}
                      style={{ backgroundImage: starPattern }}
                    >
                      <div className="flex aspect-[3/4] w-32 flex-col items-center justify-between rounded-md border border-[#c9a961]/70 bg-[#0d2a28]/90 p-2 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-[#c9a961]/30 sm:w-full">
                        <div className="flex h-full w-full flex-col items-center justify-between rounded-sm border border-[#c9a961]/40 px-2 py-4 text-center">
                          <BookOpen className="h-5 w-5 text-[#c9a961]" />
                          <span className={`${displayFont} text-sm leading-snug text-[#f0d48b]`}>{title}</span>
                          <span className="h-px w-8 bg-[#c9a961]/70" />
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className={`flex flex-1 flex-col justify-between gap-6 p-6 ${single ? "sm:p-10 lg:p-14" : "sm:p-7"} ${isEnglish ? "text-left" : "text-right"}`}>
                      <div>
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
                        <h3 className={`${displayFont} mt-4 leading-tight text-[#0d2a28] ${single ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"}`}>{title}</h3>
                        <p className={`mt-4 max-w-2xl leading-8 text-[#1c2b28]/70 ${single ? "text-base" : "text-sm"}`}>
                          {isEnglish ? resource.description.en : resource.description.sd}
                        </p>
                      </div>

                      {resource.href ? (
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full bg-[#0d2a28] px-5 py-2.5 text-sm font-semibold text-[#f0d48b] shadow-sm transition hover:bg-[#9b7837] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961] focus-visible:ring-offset-2 ${isEnglish ? "self-start" : "self-end"}`}
                        >
                          <Download className="h-4 w-4" />
                          {isEnglish ? "Read PDF" : "PDF پڙهو"}
                        </a>
                      ) : (
                        <span className={`inline-flex items-center gap-2 rounded-full border border-dashed border-[#9b7837]/50 px-5 py-2.5 text-sm font-semibold text-[#9b7837]/80 ${isEnglish ? "self-start" : "self-end"}`}>
                          <Download className="h-4 w-4" />
                          {isEnglish ? "Coming soon" : "جلد ايندو"}
                        </span>
                      )}
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