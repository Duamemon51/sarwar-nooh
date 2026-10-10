"use client";

import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const locationUrl =
  "https://www.google.com/maps/place/Shrine+of+Hazrat+Makhdoom+Sarwar+Nooh/@25.8150605,68.4172358,17z/data=!4m6!3m5!1s0x394b9793447d6f67:0x73304be1e0840710!8m2!3d25.8150605!4d68.4198161!16s%2Fg%2F11rschygz_?entry=tts&g_ep=EgoyMDI2MTAwNy4wIPu8ASoASAFQAw%3D%3D&skid=ac770382-fb5e-4ee2-9a35-46a776b97754";

/* ---------- Decorative assets ---------- */

// Faint eight-pointed star lattice for the section background.
const starLattice = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72' fill='none' stroke='#123A3A' stroke-width='1'>
    <path d='M36 6l8.5 12.5L58 14l-4.5 14.5L66 36l-12.5 7.5L58 58l-13.5-4.5L36 66l-7.5-12.5L14 58l4.5-14.5L6 36l12.5-7.5L14 14l14.5 4.5z'/>
    <circle cx='36' cy='36' r='5'/>
  </svg>`
);

// Tile-style border band (top and bottom of the section).
const tileBand = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='44' height='28' viewBox='0 0 44 28'>
    <rect width='44' height='28' fill='#123A3A'/>
    <path d='M0 3.5H44M0 24.5H44' stroke='#c9a961' stroke-width='1'/>
    <path d='M22 5l12 9-12 9-12-9z' fill='none' stroke='#c9a961' stroke-width='1.2'/>
    <path d='M22 9.5l6.5 4.5-6.5 4.5-6.5-4.5z' fill='#c9a961' fill-opacity='0.35' stroke='#e8c98a' stroke-width='0.8'/>
    <circle cx='22' cy='14' r='1.6' fill='#e8c98a'/>
    <circle cx='0' cy='14' r='2' fill='#c9a961'/>
    <circle cx='44' cy='14' r='2' fill='#c9a961'/>
  </svg>`
);

/* ---------- Small ornaments ---------- */

// Eight-pointed star (two overlapping squares).
function Star({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const fill = dark ? "#123A3A" : "#c9a961";
  const stroke = dark ? "#c9a961" : "#123A3A";
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect x="8" y="8" width="24" height="24" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect
        x="8"
        y="8"
        width="24"
        height="24"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        transform="rotate(45 20 20)"
      />
      <circle cx="20" cy="20" r="4" fill={stroke} />
    </svg>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-12 bg-[#a8812f]/70 sm:w-24" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[#a8812f]" />
      <Star className="h-7 w-7" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[#a8812f]" />
      <span className="h-px w-12 bg-[#a8812f]/70 sm:w-24" />
    </div>
  );
}

function ArchBadge() {
  return (
    <div className="relative h-[84px] w-[60px] drop-shadow-md">
      <svg viewBox="0 0 60 84" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <path
          d="M3 82V38C3 22 20 12 30 2c10 10 27 20 27 36v44z"
          fill="#123A3A"
          stroke="#c9a961"
          strokeWidth="2"
        />
        <path
          d="M9 82V39c0-13 13-22 21-30 8 8 21 17 21 30v43z"
          fill="none"
          stroke="#c9a961"
          strokeOpacity="0.7"
          strokeWidth="0.8"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-5 flex justify-center text-[#e8c98a]">
        <MapPin aria-hidden="true" className="h-6 w-6" />
      </div>
    </div>
  );
}

function TileBand({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-x-0 h-7 ${
        position === "top" ? "top-0 border-b-2" : "bottom-0 border-t-2"
      } border-[#c9a961]`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${tileBand}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
      }}
    />
  );
}

// Square "tile" with a star, placed on the frame corners.
function CornerTile({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 flex h-6 w-6 items-center justify-center border border-[#c9a961] bg-[#123A3A] sm:h-10 sm:w-10 sm:border-2 ${className}`}
    >
      <Star dark className="h-4 w-4 sm:h-6 sm:w-6" />
    </span>
  );
}

/* ---------- Info card (used on the map and below it) ---------- */

function InfoCard({ isEn, serif }: { isEn: boolean; serif: string }) {
  return (
    <div className="flex items-center gap-3 border-[3px] border-double border-[#c9a961] bg-[#123A3A] px-3 py-2.5 shadow-[0_14px_28px_-12px_rgba(0,0,0,0.55)] md:block md:border-[6px] md:px-6 md:py-7 md:text-center">
      <div className="min-w-0 flex-1">
        <h3
          className={`text-sm font-semibold leading-snug text-[#e8c98a] md:text-xl ${serif}`}
        >
          {isEn ? "Shrine of Hazrat Makhdoom Sarwar Nooh" : "درگاه حضرت مخدوم سرور نوحؒ"}
        </h3>

        <div
          className="my-3 hidden items-center justify-center gap-2 md:flex"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-[#c9a961]/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#c9a961]" />
          <span className="h-px w-10 bg-[#c9a961]/60" />
        </div>

        <p className="mt-0.5 text-[11px] leading-snug text-[#F3EAD9]/75 md:mt-0 md:text-sm md:text-[#F3EAD9]/80">
          {isEn ? "Hala New, Matiari District, Sindh" : "هالا نوان، ضلعو مٽياري، سنڌ"}
        </p>
      </div>

      <a
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isEn ? "Get directions" : "رستو ڏسو"}
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center gap-2 border border-[#c9a961] bg-[#c9a961] text-sm font-semibold text-[#123A3A] transition-colors hover:bg-[#e8c98a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c98a] md:mt-5 md:h-auto md:w-auto md:px-6 md:py-2.5"
      >
        <Navigation aria-hidden="true" className="h-4 w-4" />
        <span className="sr-only md:not-sr-only">{isEn ? "Get directions" : "رستو ڏسو"}</span>
        <ExternalLink aria-hidden="true" className="hidden h-4 w-4 md:block" />
      </a>
    </div>
  );
}

/* ---------- Component ---------- */

export default function LocationMap() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const serif = isEn ? "font-serif" : "";
  const sindhiFont = isEn
    ? undefined
    : { fontFamily: "'Amiri', 'Noto Naskh Arabic', 'Scheherazade New', serif" };

  return (
    <section
      aria-labelledby="location-map-title"
      className="relative overflow-hidden bg-[#F6EFDF] px-3 pb-28 pt-24 text-[#123A3A] sm:px-8 sm:pb-32 sm:pt-28"
      dir={isEn ? "ltr" : "rtl"}
      style={sindhiFont}
    >
      <TileBand position="top" />
      <TileBand position="bottom" />

      {/* Faint geometric pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `url("data:image/svg+xml,${starLattice}")` }}
      />

      <div className="relative mx-auto max-w-[88rem]">
        {/* Heading */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <ArchBadge />

          <h2
            id="location-map-title"
            className={`mt-6 text-3xl font-bold leading-tight sm:text-5xl ${serif} ${
              isEn ? "tracking-wide" : ""
            }`}
          >
            {isEn ? "Find Us" : "درگاه شريف جو مقام"}
          </h2>

          <div className="mt-5 w-full">
            <Ornament />
          </div>

          <p className={`mt-5 text-base leading-loose text-[#123A3A]/80 sm:text-lg ${serif}`}>
            {isEn
              ? "Visit the Shrine of Hazrat Makhdoom Sarwar Nooh in Hala, Sindh."
              : "هالا، سنڌ ۾ درگاه حضرت مخدوم سرور نوحؒ جي زيارت لاءِ اچو."}
          </p>
        </div>

        {/* Framed map */}
        <div className="relative mt-14">
          <CornerTile className="-start-2 -top-2 sm:-start-4 sm:-top-4" />
          <CornerTile className="-end-2 -top-2 sm:-end-4 sm:-top-4" />
          <CornerTile className="-bottom-2 -start-2 sm:-bottom-4 sm:-start-4" />
          <CornerTile className="-bottom-2 -end-2 sm:-bottom-4 sm:-end-4" />

          <div className="border-4 border-double border-[#c9a961] bg-[#123A3A] p-1.5 shadow-[0_20px_40px_-20px_rgba(18,58,58,0.6)] sm:border-[9px] sm:p-3">
            <div className="relative">
            <iframe
              title={
                isEn
                  ? "Map to the Shrine of Hazrat Makhdoom Sarwar Nooh"
                  : "درگاه حضرت مخدوم سرور نوح جو نقشو"
              }
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.6517577870086!2d68.41723579999999!3d25.815060499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394b9793447d6f67%3A0x73304be1e0840710!2sShrine%20of%20Hazrat%20Makhdoom%20Sarwar%20Nooh!5e0!3m2!1sen!2s!4v1791661472676!5m2!1sen!2s"
              className="block h-[440px] w-full border border-[#c9a961]/70 sm:h-[540px] lg:h-[600px]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            {/* Card on the map. On phones it is a slim bar across the top (covering Google's own place card,
                which repeats the same info); on larger screens it sits top-right so Google's card stays visible.
                Controls (bottom-right) and attribution (bottom) are never covered. */}
            <div className="pointer-events-none absolute inset-x-1.5 top-1.5 z-10 md:inset-x-auto md:right-5 md:top-5 md:w-80">
              <div className="pointer-events-auto">
                <InfoCard isEn={isEn} serif={serif} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}