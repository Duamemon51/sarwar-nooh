"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  DargahSkyline,
  Rosette,
  ArchNiche,
  ManuscriptPage,
  LineageMark,
  TombDome,
  LegacyRing,
  SealMark,
  Medal,
} from "@/components/Illustrations";

type Kind = "photograph" | "illustration";

type GalleryItem = {
  kind: Kind;
  title: string;
  caption: string;
  wide?: boolean;
  render: (large?: boolean) => ReactNode;
};

const items: GalleryItem[] = [
  {
    kind: "photograph",
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
    kind: "photograph",
    title: "At the mazar",
    caption:
      "Chadars laid over the graves within the dargah, photographed as visitors gather at the carved wooden railing to offer prayers.",
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/gallery/dargah-tomb-chadars.jpg"
        alt="Green and red chadars covering graves inside the dargah, with visitors praying at the railing"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    kind: "photograph",
    title: "Rows for prayer",
    caption:
      "Rows of worshippers stand for congregational prayer beneath the shrine's arched windows.",
    wide: true,
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/gallery/congregation-prayer-line.jpg"
        alt="A long row of worshippers standing in congregational prayer inside the shrine hall"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    kind: "photograph",
    title: "The entrance at Hala Sharif",
    caption:
      "The gateway to the dargah complex, its signboard naming Ghous-ul-Haq Makhdoom Nooh Sarwar, Hala Sharif.",
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/gallery/dargah-entrance-gate.jpg"
        alt="The signed entrance gate of the Dargah Makhdoom Nooh complex at Hala Sharif"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    kind: "photograph",
    title: "A gathered congregation",
    caption:
      "Pilgrims seated in prayer inside the shrine hall, led from the front as the gathering fills the tiled interior.",
    wide: true,
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/gallery/congregation-prayer-hall.jpg"
        alt="A large seated congregation in prayer inside the shrine hall, led by a figure at the front"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    kind: "photograph",
    title: "The tiled prayer hall",
    caption:
      "The mihrab wall of the shrine's prayer hall, its glazed Kashi tilework framing three arched niches.",
    render: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/gallery/dargah-facade-tilework.jpg"
        alt="The tiled mihrab wall of the prayer hall with three arched niches, worshippers seated in rows facing it"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    kind: "illustration",
    title: "Shrine at dusk",
    caption:
      "An illustrated impression of the dargah's dome and minarets — used as the page's opening banner.",
    wide: true,
    render: () => (
      <div className="w-full h-full bg-[#131d33] flex items-center">
        <DargahSkyline className="w-full h-auto" />
      </div>
    ),
  },
  {
    kind: "illustration",
    title: "Lineage",
    caption: "A branching mark for the Siddiqui family's descent into Hala.",
    render: () => <LineageMark className="w-full h-full" />,
  },
  {
    kind: "illustration",
    title: "The khanqah",
    caption: "A lamp within an arch, for the teaching hall at Halakandi.",
    render: () => <ArchNiche className="w-full h-full" />,
  },
  {
    kind: "illustration",
    title: "The Sarwari order",
    caption: "A twelve-point rosette marking the order Makhdoom Nooh founded.",
    render: () => <Rosette className="w-full h-full" />,
  },
  {
    kind: "illustration",
    title: "The Persian Qur'an",
    caption:
      "An open manuscript page, its lines left abstract rather than reproducing any scripture.",
    render: () => <ManuscriptPage className="w-full h-full" />,
  },
  {
    kind: "illustration",
    title: "Burial at Hala",
    caption: "A tomb dome marking Makhdoom Nooh's death in 1590.",
    render: () => <TombDome className="w-full h-full" />,
  },
  {
    kind: "illustration",
    title: "Ghous-ul-Haq",
    caption: "A seal motif standing in for the shrine's posthumous honorific.",
    render: () => <SealMark className="w-full h-full" />,
  },
  {
    kind: "illustration",
    title: "A civil honour",
    caption:
      "A medal, for the Tamgha-e-Pakistan and Hilal-e-Imtiaz awarded to a later Sajjada Nasheen.",
    render: () => <Medal className="w-full h-full" />,
  },
  {
    kind: "illustration",
    title: "The Sarwari Jamat",
    caption: "An interlocking star ring, for the order's continuity into the present.",
    render: () => <LegacyRing className="w-full h-full" />,
  },
];

const filters: { key: "all" | Kind; label: string }[] = [
  { key: "all", label: "All" },
  { key: "photograph", label: "Photographs" },
  { key: "illustration", label: "Illustrations" },
];

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

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | Kind>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const visible = useMemo(
    () => items.filter((it) => filter === "all" || it.kind === filter),
    [filter]
  );

  const openAt = (idx: number) => setOpenIndex(idx);
  const next = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % visible.length));
  const prev = () =>
    setOpenIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));

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
  }, [openIndex, visible.length]);

  const active = openIndex !== null ? visible[openIndex] : null;

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
    <section id="gallery" className="scroll-mt-24 mx-auto max-w-3xl px-4 sm:px-6 pt-12 sm:pt-14 pb-4">
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
        <div>
          <span className="block text-[12px] tracking-[0.18em] uppercase text-gold mb-1.5">
            The visual record
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[26px] sm:text-[30px] text-indigo leading-none">
            Gallery
          </h2>
        </div>

        <div className="flex gap-1 bg-indigo/[0.06] p-1 rounded-full border border-indigo/10">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`relative text-[12.5px] sm:text-[13px] px-3 sm:px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 ${
                filter === f.key
                  ? "bg-indigo text-parchment shadow-[0_2px_8px_rgba(28,43,74,0.35)]"
                  : "text-indigo/60 hover:text-indigo hover:bg-indigo/5"
              }`}
              aria-pressed={filter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px w-14 bg-gradient-to-r from-gold to-transparent mb-4" />

      <p className="text-[15px] sm:text-[17px] leading-[1.7] sm:leading-[1.75] text-ink/85 max-w-full sm:max-w-[62ch] mb-6">
        One photograph of the shrine as it stands today, alongside the
        illustrated motifs used throughout this page — each labelled so
        the two are never mistaken for one another.
      </p>

      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
        {visible.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => openAt(i)}
            className={`group relative text-left rounded-2xl overflow-hidden bg-parchment-warm/60 ring-1 ring-indigo/10 shadow-[0_1px_3px_rgba(28,43,74,0.08)] transition-all duration-300 ease-out hover:shadow-[0_14px_28px_-8px_rgba(28,43,74,0.28)] hover:-translate-y-0.5 hover:ring-gold/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-maroon ${
              item.wide ? "col-span-2 aspect-[16/7]" : "aspect-square"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.06]">
                {item.render()}
              </div>
            </div>

            {/* hairline frame, revealed on hover — echoes the illuminated-manuscript border motif */}
            <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-gold/0 group-hover:border-gold/40 transition-colors duration-300" />

            {/* gradient scrim + caption */}
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#131d33]/88 via-[#131d33]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-3 translate-y-1.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-[12.5px] sm:text-[13px] text-parchment font-medium block truncate">
                {item.title}
              </span>
            </div>

            {/* kind badge */}
            <span
              className={`absolute top-2 right-2 text-[9.5px] sm:text-[10px] font-medium tracking-wide px-2 py-[3px] rounded-full backdrop-blur-sm ${
                item.kind === "photograph"
                  ? "bg-teal/90 text-parchment"
                  : "bg-gold/90 text-[#2a1c05]"
              }`}
            >
              {item.kind === "photograph" ? "Photo" : "Illustration"}
            </span>

            {/* view affordance */}
            <span className="absolute top-2 left-2 w-7 h-7 rounded-full bg-parchment/0 group-hover:bg-parchment/95 text-indigo flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
              <EyeIcon />
            </span>
          </button>
        ))}
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
          {/* prev / next — desktop */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-parchment/10 hover:bg-gold/25 border border-parchment/15 hover:border-gold/50 text-parchment items-center justify-center transition-colors"
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
            className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-parchment/10 hover:bg-gold/25 border border-parchment/15 hover:border-gold/50 text-parchment items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronIcon dir="right" />
          </button>

          <div
            className={`relative max-w-2xl w-full bg-parchment rounded-2xl border border-gold/40 shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden ${
              entered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ajrak-inspired top strip, ties the modal back to the page's banding */}
            <div className="ajrak-band h-2.5 w-full" />

            <div className="p-5 sm:p-6 md:p-8">
              <div className="w-full aspect-[4/3] md:aspect-[16/10] flex items-center justify-center bg-[#131d33]/5 rounded-lg mb-4 overflow-hidden ring-1 ring-indigo/10">
                {active.render(true)}
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] tracking-[0.14em] uppercase text-gold/90">
                    {String(openIndex! + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-indigo mt-0.5">
                    {active.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-ink/75 mt-1 max-w-[55ch]">
                    {active.caption}
                  </p>
                </div>
                <span
                  className={`text-[10.5px] sm:text-[11px] font-medium tracking-wide px-2 py-1 rounded-full shrink-0 ${
                    active.kind === "photograph"
                      ? "bg-teal/15 text-teal"
                      : "bg-gold/15 text-[#8a611c]"
                  }`}
                >
                  {active.kind === "photograph" ? "Photo" : "Illustration"}
                </span>
              </div>

              {/* prev / next — mobile, inline under the image */}
              <div className="flex md:hidden items-center justify-between mt-5 pt-4 border-t border-indigo/10">
                <button
                  type="button"
                  onClick={prev}
                  className="flex items-center gap-1.5 text-[13px] text-indigo/70 hover:text-indigo transition-colors"
                  aria-label="Previous"
                >
                  <ChevronIcon dir="left" />
                  Prev
                </button>
                <span className="text-[12px] text-ink/40">Swipe to browse</span>
                <button
                  type="button"
                  onClick={next}
                  className="flex items-center gap-1.5 text-[13px] text-indigo/70 hover:text-indigo transition-colors"
                  aria-label="Next"
                >
                  Next
                  <ChevronIcon dir="right" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-maroon text-parchment flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:brightness-110 transition"
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