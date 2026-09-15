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

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  );
}

const items: GalleryItem[] = [
  {
    title: "Calligraphic panel",
    caption:
      "A carved wooden panel with Islamic calligraphy at the entrance of the shrine.",
    render: () => (
      <Photo
        src="/gallery/dargah-01-calligraphic-panel.jpg"
        alt="A carved wooden calligraphy panel at the shrine entrance"
      />
    ),
  },
  {
    title: "Arched mihrab niche",
    caption:
      "A gilded arch niche inside the dargah, framed in cream and gold tilework.",
    render: () => (
      <Photo
        src="/gallery/dargah-02-mihrab-niche.jpg"
        alt="A gilded arched mihrab niche inside the dargah"
      />
    ),
  },
  {
    title: "The dargah complex",
    caption:
      "A wide view of the Dargah Sarwar-e-Nooh complex and its domes, seen above the trees of Hala.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-03-dargah-complex-wide.jpg"
        alt="Wide aerial view of the Dargah Sarwar-e-Nooh complex in Hala"
      />
    ),
  },
  {
    title: "Calligraphic inscription",
    caption:
      "A dark stone panel inscribed with calligraphy, set within the shrine's outer wall.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-04-calligraphic-inscription.jpg"
        alt="A dark stone calligraphic inscription panel on the shrine wall"
      />
    ),
  },
  {
    title: "Prayer hall interior",
    caption:
      "An empty hall inside the dargah, its tiled floor and arched windows catching the afternoon light.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-05-prayer-hall-interior.jpg"
        alt="An empty tiled prayer hall inside the dargah"
      />
    ),
  },
  {
    title: "The courtyard fountain",
    caption:
      "A tiled fountain at the centre of the dargah's courtyard, framed by trees.",
    render: () => (
      <Photo
        src="/gallery/dargah-06-courtyard-fountain.jpg"
        alt="A tiled fountain in the dargah's courtyard"
      />
    ),
  },
  {
    title: "At the mazar",
    caption:
      "Chadars laid over the graves within the dargah, seen through the carved wooden railing.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-07-mazar-chadars-railing.jpg"
        alt="Chadars over graves seen through a carved wooden railing"
      />
    ),
  },
  {
    title: "The tiled prayer hall",
    caption:
      "The mihrab wall of the shrine's prayer hall, its glazed Kashi tilework framing three arched niches.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-08-tiled-prayer-hall.jpg"
        alt="The tiled mihrab wall of the prayer hall with three arched niches"
      />
    ),
  },
  {
    title: "Inside the shrine hall",
    caption:
      "Another view of the prayer hall, its patterned floor tiles leading toward the mihrab.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-09-shrine-hall-floor.jpg"
        alt="Patterned floor tiles of the shrine hall leading toward the mihrab"
      />
    ),
  },
  {
    title: "Arched cloister",
    caption:
      "A row of arched doorways along the courtyard, part of the dargah's outer cloister.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-10-arched-cloister.jpg"
        alt="A row of arched doorways along the dargah's courtyard cloister"
      />
    ),
  },
  {
    title: "Graves in the courtyard",
    caption: "Marble graves resting in the open courtyard of the dargah.",
    render: () => (
      <Photo
        src="/gallery/dargah-11-graves-courtyard.jpg"
        alt="Marble graves in the open courtyard of the dargah"
      />
    ),
  },
  {
    title: "Courtyard steps",
    caption: "Stone steps leading up through the dargah's courtyard.",
    render: () => (
      <Photo
        src="/gallery/dargah-12-courtyard-steps.jpg"
        alt="Stone steps leading through the dargah's courtyard"
      />
    ),
  },
  {
    title: "The tiled hall",
    caption: "A softly lit corner of the shrine's tiled hall.",
    render: () => (
      <Photo
        src="/gallery/dargah-13-tiled-hall-corner.jpg"
        alt="A softly lit corner of the shrine's tiled hall"
      />
    ),
  },
  {
    title: "The tomb canopy",
    caption: "A dark wooden canopy shading a grave inside the shrine.",
    render: () => (
      <Photo
        src="/gallery/dargah-14-tomb-canopy.jpg"
        alt="A dark carved wooden canopy over a grave inside the shrine"
      />
    ),
  },
  {
    title: "Inside the shrine hall",
    caption:
      "Visitors pass through the dargah's long tiled hall beneath its arched windows.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-15-shrine-hall-visitors.jpg"
        alt="Visitors walking through the dargah's long tiled hall"
      />
    ),
  },
  {
    title: "The entrance at Hala Sharif",
    caption:
      "The gateway to the dargah complex, its twin towers framing the path inside.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-16-entrance-gate.jpg"
        alt="The twin-towered entrance gate of the dargah complex at Hala Sharif"
      />
    ),
  },
  {
    title: "Courtyard view",
    caption: "The open courtyard of the dargah beneath a clear sky.",
    render: () => (
      <Photo
        src="/gallery/dargah-17-courtyard-view-1.jpg"
        alt="The open courtyard of the dargah under a clear sky"
      />
    ),
  },
  {
    title: "Courtyard walkway",
    caption: "A quiet walkway through the dargah's courtyard.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-18-courtyard-walkway-1.jpg"
        alt="A quiet walkway through the dargah's courtyard"
      />
    ),
  },
  {
    title: "Domes of the shrine",
    caption: "The white domes of the dargah rising above its tiled walls.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-19-shrine-domes.jpg"
        alt="The white domes of the dargah rising above its tiled walls"
      />
    ),
  },
  {
    title: "The dargah at Hala",
    caption:
      "The courtyard facade of the Dargah Sarwar-e-Nooh — twin minarets and glazed Kashi tilework, photographed at the shrine in Hala, Sindh.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-20-dargah-hala-facade.jpg"
        alt="The tiled facade and twin minarets of the Dargah Sarwar-e-Nooh, Hala"
      />
    ),
  },
  {
    title: "Sunlit hall",
    caption: "Light falling across the tiled floor of the shrine's prayer hall.",
    render: () => (
      <Photo
        src="/gallery/dargah-21-sunlit-hall.jpg"
        alt="Sunlight falling across the tiled floor of the prayer hall"
      />
    ),
  },
  {
    title: "The courtyard",
    caption: "A wide courtyard view within the dargah complex.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-22-courtyard-wide-1.jpg"
        alt="A wide view of the courtyard within the dargah complex"
      />
    ),
  },
  {
    title: "Facade detail",
    caption: "A close view of the shrine's tiled facade and dome.",
    render: () => (
      <Photo
        src="/gallery/dargah-23-facade-detail-1.jpg"
        alt="A close view of the shrine's tiled facade and dome"
      />
    ),
  },
  {
    title: "Tilework detail",
    caption: "Detailed Kashi tilework along the shrine's outer wall.",
    render: () => (
      <Photo
        src="/gallery/dargah-24-tilework-detail.jpg"
        alt="Detailed glazed Kashi tilework along the shrine's outer wall"
      />
    ),
  },
  {
    title: "Dome and steps",
    caption: "One of the dargah's domed structures, reached by a flight of steps.",
    render: () => (
      <Photo
        src="/gallery/dargah-25-dome-and-steps.jpg"
        alt="A domed structure of the dargah reached by a flight of steps"
      />
    ),
  },
  {
    title: "Corner of the tomb",
    caption: "A corner view of the tomb building's tiled exterior.",
    render: () => (
      <Photo
        src="/gallery/dargah-26-tomb-corner.jpg"
        alt="A corner view of the tomb building's tiled exterior"
      />
    ),
  },
  {
    title: "The domed shrine",
    caption: "A white domed structure within the dargah complex.",
    render: () => (
      <Photo
        src="/gallery/dargah-27-domed-shrine.jpg"
        alt="A white domed structure within the dargah complex"
      />
    ),
  },
  {
    title: "Calligraphic wall panel",
    caption: "A blue calligraphic panel set into the shrine's interior wall.",
    render: () => (
      <Photo
        src="/gallery/dargah-28-calligraphic-wall-panel.jpg"
        alt="A blue calligraphic panel set into the shrine's interior wall"
      />
    ),
  },
  {
    title: "Path to the graves",
    caption: "A tiled pathway leading toward the graves within the complex.",
    render: () => (
      <Photo
        src="/gallery/dargah-29-path-to-graves.jpg"
        alt="A tiled pathway leading toward the graves within the complex"
      />
    ),
  },
  {
    title: "Doorway to the graves",
    caption: "An arched doorway opening onto a row of graves.",
    render: () => (
      <Photo
        src="/gallery/dargah-30-doorway-to-graves.jpg"
        alt="An arched doorway opening onto a row of graves"
      />
    ),
  },
  {
    title: "Chadars at the grave",
    caption:
      "Green and red chadars laid over a carved grave, part of the Urs offerings.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-31-chadars-at-grave.jpg"
        alt="Green and red chadars laid over a carved grave during the Urs"
      />
    ),
  },
  {
    title: "Graves along the path",
    caption: "A row of graves along a tiled pathway within the dargah.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-32-graves-along-path.jpg"
        alt="A row of graves along a tiled pathway within the dargah"
      />
    ),
  },
  {
    title: "Chadar-covered graves",
    caption: "Graves beneath a portico, covered with green chadars.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-33-chadar-covered-graves.jpg"
        alt="Graves beneath a portico, covered with green chadars"
      />
    ),
  },
  {
    title: "Tiled archway",
    caption: "An ornately tiled archway leading into a small chamber of graves.",
    render: () => (
      <Photo
        src="/gallery/dargah-34-tiled-archway.jpg"
        alt="An ornately tiled archway leading into a small chamber of graves"
      />
    ),
  },
  {
    title: "Courtyard walkway",
    caption: "Visitors walk through a tree-lined stretch of the dargah's courtyard.",
    render: () => (
      <Photo
        src="/gallery/dargah-35-courtyard-walkway-2.jpg"
        alt="Visitors walking through a tree-lined stretch of the courtyard"
      />
    ),
  },
  {
    title: "The courtyard",
    caption: "A wide-open stretch of the dargah's courtyard.",
    wide: true,
    render: () => (
      <Photo
        src="/gallery/dargah-36-courtyard-wide-2.jpg"
        alt="A wide-open stretch of the dargah's courtyard"
      />
    ),
  },
  {
    title: "Walkway by the tomb",
    caption: "A quiet walkway beside the tiled tomb building.",
    render: () => (
      <Photo
        src="/gallery/dargah-37-walkway-by-tomb.jpg"
        alt="A quiet walkway beside the tiled tomb building"
      />
    ),
  },
  {
    title: "The courtyard",
    caption: "Another view of the dargah's tiled courtyard.",
    render: () => (
      <Photo
        src="/gallery/dargah-38-courtyard-wide-3.jpg"
        alt="Another view of the dargah's tiled courtyard"
      />
    ),
  },
];

// 4 featured tiles shown in the compact preview grid; the lightbox lets
// visitors page through the full set above via next/prev.
const featuredIndexes = [19, 6, 15, 7];
const referenceGallery = featuredIndexes.map((i) => items[i]);

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
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef<{ down: boolean; startX: number; startScroll: number; moved: boolean }>(
    { down: false, startX: 0, startScroll: 0, moved: false }
  );

  // Convert vertical wheel/trackpad input into horizontal movement so the
  // carousel scrolls even on devices/testing setups without touch drag.
  const onScrollerWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  // Mouse-drag fallback (click-and-drag to scroll), useful when testing in a
  // desktop browser without a touchscreen or trackpad swipe.
  const onScrollerMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { down: true, startX: e.pageX, startScroll: el.scrollLeft, moved: false };
  };
  const onScrollerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !dragState.current.down) return;
    const dx = e.pageX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.moved = true;
    el.scrollLeft = dragState.current.startScroll - dx;
  };
  const endScrollerDrag = () => {
    dragState.current.down = false;
  };
  // Suppress the click-to-open when the pointer actually dragged the strip.
  const onScrollerClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragState.current.moved = false;
    }
  };

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
        <div className="flex flex-col gap-4 lg:grid lg:items-center lg:gap-6 lg:grid-cols-[0.62fr_2.38fr]">
          <div className="flex flex-col items-center text-center px-2 py-2 sm:items-start sm:px-4 sm:py-3 sm:text-right lg:pl-5">
            <h2
              className="max-w-[290px] font-[family-name:var(--font-display)] text-[20px] font-bold leading-[1.2] text-[#1f2e2f] sm:text-[clamp(1.8rem,2.3vw,2.8rem)] sm:leading-[1.1]"
            >
              عرس تي ملڻ جا لمحا
            </h2>

            <p
              className="mt-2 max-w-[390px] font-[family-name:var(--font-display)] text-[11px] leading-[1.7] text-[#2b2f34] sm:mt-8 sm:text-[12px] sm:leading-[1.9] md:text-[13px]"
            >
              هيءَ گيلري درگاهه جي خوبصورت منظرن ۽ عقيدتمند زائرين سان عرس جي
              مبارڪ موقعن جي حسين يادن تي مشتمل آهي.
            </p>

            <Link
              href="/gallery"
              className="mt-3 hidden items-center gap-2 rounded-full bg-[#0d3b36] px-7 py-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90 sm:mt-5 sm:inline-flex sm:text-[15px] md:mt-10"
            >
              <span>گيلري ڏسو</span>
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="relative -mx-3 sm:mx-0">
            {/* Mobile: horizontal scroll-snap carousel through every photo */}
            <div
              ref={scrollerRef}
              onWheel={onScrollerWheel}
              onMouseDown={onScrollerMouseDown}
              onMouseMove={onScrollerMouseMove}
              onMouseUp={endScrollerDrag}
              onMouseLeave={endScrollerDrag}
              onClickCapture={onScrollerClickCapture}
              style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x", overscrollBehaviorX: "contain" }}
              className="flex gap-2.5 overflow-x-auto px-3 pb-2 sm:hidden snap-x snap-mandatory scroll-px-3 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item, index) => (
                <button
                  key={item.title + index}
                  type="button"
                  onClick={() => openAt(index)}
                  className="group relative aspect-[3/4] w-[27%] flex-none snap-start overflow-hidden rounded-md bg-[#dfe3dd] ring-1 ring-[#16333d]/15"
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
                </button>
              ))}
            </div>

            {/* sm and up: original grid */}
            <div className="hidden sm:grid sm:grid-cols-4 sm:gap-3">
              {referenceGallery.map((item, index) => (
                <button
                  key={item.title + featuredIndexes[index]}
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