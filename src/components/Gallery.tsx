"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";

type GalleryItem = {
  title: string;
  caption: string;
  wide?: boolean;
  render: (large?: boolean) => ReactNode;
};

const items: GalleryItem[] = [
  {
    title: "The dargah at Hala",
    caption:
      "The courtyard facade of the Dargah Sarwar-e-Nooh — twin minarets and glazed Kashi tilework, photographed at the shrine in Hala, Sindh.",
    wide: true,
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/dargah-hala.png"
        alt="The tiled facade and twin minarets of the Dargah Sarwar-e-Nooh, Hala"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "At the mazar",
    caption:
      "Chadars laid over the graves within the dargah, photographed as visitors gather at the carved wooden railing to offer prayers.",
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/dargah-tomb-chadars.jpg"
        alt="Green and red chadars covering graves inside the dargah, with visitors praying at the railing"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Rows for prayer",
    caption:
      "Rows of worshippers stand for congregational prayer beneath the shrine's arched windows.",
    wide: true,
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/congregation-prayer-line.jpg"
        alt="A long row of worshippers standing in congregational prayer inside the shrine hall"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "The entrance at Hala Sharif",
    caption:
      "The gateway to the dargah complex, its signboard naming Ghous-ul-Haq Makhdoom Nooh Sarwar, Hala Sharif.",
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/dargah-entrance-gate.jpg"
        alt="The signed entrance gate of the Dargah Makhdoom Nooh complex at Hala Sharif"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "A gathered congregation",
    caption:
      "Pilgrims seated in prayer inside the shrine hall, led from the front as the gathering fills the tiled interior.",
    wide: true,
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/congregation-prayer-hall.jpg"
        alt="A large seated congregation in prayer inside the shrine hall, led by a figure at the front"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "The tiled prayer hall",
    caption:
      "The mihrab wall of the shrine's prayer hall, its glazed Kashi tilework framing three arched niches.",
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/dargah-facade-tilework.jpg"
        alt="The tiled mihrab wall of the prayer hall with three arched niches, worshippers seated in rows facing it"
        className="w-full h-full object-cover"
      />
    ),
  },
];

// Now shows 4 cards, all the same portrait size — matches the reference layout.
const featuredIndexes = [0, 1, 3, 4];
const referenceGallery = [items[0], items[1], items[3], items[4]];

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
      <path
        d="M2 12c2.5-4.5 6.2-7 10-7s7.5 2.5 10 7c-2.5 4.5-6.2 7-10 7s-7.5-2.5-10-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ChevronIcon({ dir = "left" }: { dir?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" aria-hidden="true">
      <path
        d="M4 12h16M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const openAt = (idx: number) => setOpenIndex(idx);
  const next = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
  const prev = () =>
    setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));

  useEffect(() => {
    if (openIndex === null) {
      setEntered(false);
      return;
    }
    const raf = requestAnimationFrame(() => setEntered(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  const active = openIndex !== null ? items[openIndex] : null;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    touchStartX.current = null;
  };

  return (
    <section
      id="gallery"
      className="scroll-mt-24 w-full bg-[#f7f4ee] px-0 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[0.62fr_2.38fr]">
          <div className="flex flex-col items-start px-2 py-3 text-right sm:px-4 lg:pl-5">
            <h2
              className="max-w-[290px] font-[family-name:var(--font-display)] text-[clamp(1.8rem,2.3vw,2.8rem)] font-bold leading-[1.1] text-[#1f2e2f]"
            >
              عرس تي ملڻ جا لمحا
            </h2>

            <p
              className="mt-8 max-w-[390px] font-[family-name:var(--font-display)] text-[12px] leading-[1.9] text-[#2b2f34] sm:text-[13px]"
            >
              هيءَ گيلري درگاهه جي خوبصورت منظرن ۽ عقيدتمند زائرين سان عرس جي
              مبارڪ موقعن جي حسين يادن تي مشتمل آهي.
            </p>

            <Link
              href="/gallery"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0d3b36] px-7 py-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90 sm:text-[15px] md:mt-10"
            >
              <span>گيلري ڏسو</span>
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="relative -mx-3 sm:mx-0">
            {/* Mobile: horizontal snap-scroll carousel, one full-width image at a time */}
            <div
              className="
                flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-3
                px-3 pb-1
                sm:hidden
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
              "
            >
              {referenceGallery.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => openAt(featuredIndexes[index])}
                  className="group relative aspect-[3/4] w-full shrink-0 snap-center overflow-hidden rounded-md bg-[#dfe3dd] ring-1 ring-[#16333d]/15"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="h-full w-full">{item.render()}</div>
                  </div>

                  {/* image frame overlay */}
                  <img
                    src="/image-frame.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2a]/45 via-transparent to-transparent opacity-70" />
                  <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#f9f2e7]/20 text-[#f9f2e7] z-20">
                    <EyeIcon />
                  </span>
                </button>
              ))}
            </div>

            {/* dots indicator, mobile only */}
            <div className="mt-2 flex justify-center gap-1.5 sm:hidden">
              {referenceGallery.map((item) => (
                <span
                  key={item.title}
                  className="h-1.5 w-1.5 rounded-full bg-[#16333d]/25"
                />
              ))}
            </div>

            {/* sm and up: original grid */}
            <div className="hidden sm:grid sm:grid-cols-4 sm:gap-3">
              {referenceGallery.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => openAt(featuredIndexes[index])}
                  className="group relative aspect-[3/4] overflow-hidden rounded-md bg-[#dfe3dd] ring-1 ring-[#16333d]/15"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                      {item.render()}
                    </div>
                  </div>

                  {/* image frame overlay */}
                  <img
                    src="/image-frame.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2a]/45 via-transparent to-transparent opacity-70" />
                  <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#f9f2e7]/20 text-[#f9f2e7] opacity-0 transition-all duration-300 group-hover:opacity-100 z-20">
                    <EyeIcon />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* lightbox */}
      {active && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-8 transition-opacity duration-300 ${
            entered ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "rgba(12, 20, 40, 0.86)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* prev / next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="flex absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-parchment/10 hover:bg-gold/25 border border-parchment/15 hover:border-gold/50 text-parchment items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="flex absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-parchment/10 hover:bg-gold/25 border border-parchment/15 hover:border-gold/50 text-parchment items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronIcon dir="right" />
          </button>

          <div
            className={`relative max-w-2xl w-full max-h-[92vh] overflow-y-auto overflow-x-hidden bg-parchment rounded-2xl border border-gold/40 shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-all duration-300 ${
              entered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ajrak-inspired top strip, ties the modal back to the page's banding */}
            <div className="ajrak-band h-2.5 w-full sticky top-0 z-10" />

            <div className="p-4 sm:p-6 md:p-8">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center bg-[#131d33]/5 rounded-lg mb-4 overflow-hidden ring-1 ring-indigo/10">
                {active.render(true)}

                {/* image frame overlay */}
                <img
                  src="/image-frame.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] tracking-[0.14em] uppercase text-gold/90">
                  {String(openIndex! + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-indigo mt-0.5">
                  {active.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-ink/75 mt-1 max-w-[55ch]">
                  {active.caption}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-maroon text-parchment flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:brightness-110 transition"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}