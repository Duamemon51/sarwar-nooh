import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Camera,
  Play,
  Send,
  Calendar,
  ArrowLeft,
} from "lucide-react";

/**
 * Dargah Makhdoom Sarwar Noor — Sindhi (RTL) Events Banner + Footer
 *
 * Colors: deep teal-green background (#0d2a28), warm gold accent (#c9a961 / #e8c874)
 * Fonts (load in app/layout.jsx via next/font/google):
 *   - Headings (Sindhi/Arabic script): "Noto Nastaliq Urdu"
 *   - Body (Sindhi/Arabic script):     "Noto Sans Arabic"
 *   - Latin bits ("Sindhi Digital Archive"): "Inter" / "Playfair Display"
 *
 * The whole footer runs dir="rtl" — flex children are placed in the JSX in the
 * order they should appear from the right edge of the screen inward.
 *
 * Usage in app/layout.jsx:
 *   import Footer from "@/components/Footer";
 *   ...
 *   <Footer />
 */

const navLinks = [
  { label: "هوم", href: "/" },
  { label: "پنھنجي باري ۾", href: "/about" },
  { label: "عرس مبارڪ", href: "/urs-mubarak" },
  { label: "گيلري", href: "/gallery" },
  { label: "سان رابطو", href: "/contact" },
];

const socialLinks = [
  { icon: Globe, href: "https://facebook.com", label: "Facebook" },
  { icon: Camera, href: "https://instagram.com", label: "Instagram" },
  { icon: Play, href: "https://youtube.com", label: "YouTube" },
  { icon: Send, href: "https://twitter.com", label: "Twitter / X" },
];

/** Quarter-circle arabesque corner ornament, gold on transparent. Rotate per corner. */
function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke="#c9a961" strokeWidth="1.4" opacity="0.75">
        <path d="M2 118 C2 60 60 2 118 2" />
        <path d="M2 100 C2 55 55 2 100 2" strokeOpacity="0.6" />
        <circle cx="10" cy="110" r="4" fill="#c9a961" stroke="none" />
        <circle cx="110" cy="10" r="4" fill="#c9a961" stroke="none" />
        <path d="M14 90 Q 30 90 30 74" />
        <path d="M90 14 Q 90 30 74 30" />
        <path d="M2 2 L 30 2 M 2 2 L 2 30" strokeWidth="2" opacity="0.9" />
      </g>
    </svg>
  );
}

/** Simple gold mosque-dome silhouette used as the brand mark. */
function MosqueMark({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g fill="#e8c874">
        <path d="M32 4 c6 5 6 12 0 16 c-6 -4 -6 -11 0 -16z" />
        <rect x="30" y="18" width="4" height="6" />
        <path d="M32 24 c9 0 15 7 15 15 v3 H17 v-3 c0 -8 6 -15 15 -15z" />
        <path d="M6 44 c4 -3 4 -8 0 -11 c-4 3 -4 8 0 11z" />
        <path d="M58 44 c4 -3 4 -8 0 -11 c-4 3 -4 8 0 11z" />
        <rect x="4" y="44" width="6" height="16" />
        <rect x="54" y="44" width="6" height="16" />
        <rect x="14" y="42" width="36" height="18" />
        <path d="M14 42 h36 l-4 -8 h-28 z" opacity="0.85" />
      </g>
    </svg>
  );
}

/** Hanging lantern illustration for the events heading. */
function LanternMark({ className = "" }) {
  return (
    <svg viewBox="0 0 80 140" className={className} aria-hidden="true">
      <g fill="none" stroke="#e8c874" strokeWidth="2">
        <line x1="40" y1="0" x2="40" y2="18" />
        <path d="M28 18 h24 v8 h-24z" fill="#e8c874" stroke="none" />
        <path d="M20 26 q20 -10 40 0 v10 q-20 -8 -40 0 z" fill="#c9a961" stroke="none" opacity="0.9" />
        <rect x="18" y="36" width="44" height="52" rx="10" fill="#f3d98b" stroke="#c9a961" opacity="0.95" />
        <line x1="40" y1="36" x2="40" y2="88" strokeOpacity="0.5" />
        <path d="M22 96 q18 10 36 0 v8 q-18 8 -36 0 z" fill="#c9a961" stroke="none" opacity="0.9" />
        <path d="M32 104 h16 l-8 14 z" fill="#e8c874" stroke="none" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer dir="rtl" className="relative overflow-hidden bg-[#0d2a28] text-[#e9e4d8] font-[Noto_Sans_Arabic]">
      {/* ---------- Upcoming Events Banner ---------- */}
      <div className="relative border-b border-[#c9a961]/20 bg-[#0f2e2b]">
        <CornerOrnament className="pointer-events-none absolute right-0 top-0 h-24 w-24 -scale-x-100" />
        <CornerOrnament className="pointer-events-none absolute left-0 top-0 h-24 w-24 rotate-180 -scale-x-100" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-[1fr_auto_1fr] md:py-12">
          {/* Rightmost: event card */}
          <div className="flex items-center gap-5 justify-self-start md:justify-self-end">
            <div>
              <p className="font-[Noto_Nastaliq_Urdu] text-xl leading-relaxed text-white">
                عرس مبارڪ
              </p>
              <div className="mt-3 flex items-center gap-4 rounded-xl border border-[#c9a961]/40 bg-[#0d2a28]/70 px-5 py-4 backdrop-blur-sm">
                <div className="flex flex-col items-center border-s border-[#c9a961]/25 ps-4 text-center">
                  <Calendar className="mb-1 h-5 w-5 text-[#c9a961]" />
                  <span className="text-2xl font-semibold leading-none text-white">۱۵</span>
                  <span className="mt-1 text-xs text-[#e9e4d8]/70">اَرجب</span>
                </div>
                <p className="max-w-[180px] text-sm leading-relaxed text-[#e9e4d8]/75">
                  عرس جي موقعي تي خصوصي روحاني تقريب جو انعقاد ٿيندو.
                </p>
              </div>
            </div>
          </div>

          {/* Center: quote */}
          <div className="flex flex-col items-center text-center">
            <p className="font-[Noto_Nastaliq_Urdu] text-2xl leading-loose text-white sm:text-3xl">
              &rdquo;درگاهہ حضرت مخدوم سرور نوحؒ&ldquo;
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#e9e4d8]/75">
              جتي عقيدت مند دلين، زندہ دلي، نيڪ نيت ۽ برڪت جي اميد سان اچن ٿا.
            </p>
          </div>

          {/* Leftmost: lantern + heading + CTA */}
          <div className="flex items-center gap-4 justify-self-start">
            <LanternMark className="h-28 w-16 shrink-0" />
            <div className="max-w-xs">
              <h2 className="font-[Noto_Nastaliq_Urdu] text-2xl leading-snug text-white sm:text-3xl">
                عرس جا سالانہ گڏجاڻيون
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#e9e4d8]/75">
                درگاهہ جي روحاني ماحول ۾ ٿيندڙ گڏجاڻيون، دعائن ۽ برڪتن جو سلسلو آهي.
              </p>
              <Link
                href="/events"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#c9a961]/50 px-5 py-2.5 text-sm text-[#e9e4d8] transition-colors hover:border-[#c9a961] hover:text-[#c9a961]"
              >
                <ArrowLeft className="h-4 w-4" />
                سڀ واقعات ڏسو
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Main Footer ---------- */}
      <div className="relative border-b border-[#c9a961]/10">
        <CornerOrnament className="pointer-events-none absolute right-0 bottom-0 h-20 w-20 rotate-90 -scale-x-100" />
        <CornerOrnament className="pointer-events-none absolute left-0 bottom-0 h-20 w-20 -rotate-90 -scale-x-100" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          {/* Rightmost: nav + social */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <nav className="flex flex-wrap justify-center gap-5 text-sm text-[#e9e4d8]/80 md:justify-start">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[#c9a961]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a961]/30 text-[#e9e4d8]/80 transition-colors hover:border-[#c9a961] hover:text-[#c9a961]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Sindhi Digital Archive mark (Latin, kept LTR) */}
          <div dir="ltr" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Sindhi Digital Archive emblem"
              width={44}
              height={44}
              className="h-15 w-15 object-contain"
            />
            <div>
              <p className="font-serif text-base leading-tight text-white">Sindhi</p>
              <p className="font-serif text-base leading-tight text-[#c9a961]">Digital Archive</p>
            </div>
          </div>

          {/* Leftmost: brand */}
          <div className="flex items-center gap-4">
            <MosqueMark className="h-12 w-12 shrink-0" />
            <div className="text-center md:text-right">
              <p className="font-[Noto_Nastaliq_Urdu] text-lg leading-tight text-white">
                درگاهہ مخدوم سرور نوحؒ
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#e9e4d8]/70">
                ڏنري، ڀرزوع، هالا نوان
                <br />
                ضلعي مٺياري، سنڌ، پاڪستان
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="relative">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-[#e9e4d8]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>ڊيزائن ۽ ڊويلپمينٽ: دعا مبين</p>
          <p>©{new Date().getFullYear()} درگاهہ مخدوم سرور نوحؒ. سڀ حق محفوظ آهن.</p>
        </div>
      </div>
    </footer>
  );
}