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

function CornerOrnament({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
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
        <CornerOrnament className="pointer-events-none absolute right-0 top-0 h-16 w-16 -scale-x-100 md:h-24 md:w-24" />
        <CornerOrnament className="pointer-events-none absolute left-0 top-0 h-16 w-16 rotate-180 -scale-x-100 md:h-24 md:w-24" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-8 md:grid-cols-[1fr_auto_1fr] md:py-12">
          {/* Rightmost: event card */}
          <div className="flex items-center gap-5 justify-self-center text-center md:justify-self-end md:text-right">
            <div>
              <p className="font-[Noto_Nastaliq_Urdu] text-lg leading-relaxed text-white md:text-xl">
                عرس مبارڪ
              </p>
              <div className="mt-3 flex items-center gap-4 rounded-xl border border-[#c9a961]/40 bg-[#0d2a28]/70 px-4 py-3 backdrop-blur-sm md:px-5 md:py-4">
                <div className="flex flex-col items-center border-s border-[#c9a961]/25 ps-3 text-center md:ps-4">
                  <Calendar className="mb-1 h-4 w-4 text-[#c9a961] md:h-5 md:w-5" />
                  <span className="text-xl font-semibold leading-none text-white md:text-2xl">۱۵</span>
                  <span className="mt-1 text-[10px] text-[#e9e4d8]/70 md:text-xs">اَرجب</span>
                </div>
                <p className="max-w-[160px] text-xs leading-relaxed text-[#e9e4d8]/75 md:max-w-[180px] md:text-sm">
                  عرس جي موقعي تي خصوصي روحاني تقريب جو انعقاد ٿيندو.
                </p>
              </div>
            </div>
          </div>

          {/* Center: quote */}
          <div className="flex flex-col items-center text-center">
            <p className="font-[Noto_Nastaliq_Urdu] text-xl leading-loose text-white sm:text-2xl md:text-3xl">
              &rdquo;درگاهہ حضرت مخدوم سرور نوحؒ&ldquo;
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[#e9e4d8]/75 sm:text-sm">
              جتي عقيدت مند دلين، زندہ دلي، نيڪ نيت ۽ برڪت جي اميد سان اچن ٿا.
            </p>
          </div>

          {/* Leftmost: lantern + heading + CTA */}
          <div className="flex flex-col items-center gap-3 text-center justify-self-center md:flex-row md:items-center md:gap-4 md:text-right md:justify-self-start">
            <LanternMark className="h-20 w-12 shrink-0 md:h-28 md:w-16" />
            <div className="max-w-xs">
              <h2 className="font-[Noto_Nastaliq_Urdu] text-xl leading-snug text-white sm:text-2xl md:text-3xl">
                عرس جا سالانہ گڏجاڻيون
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#e9e4d8]/75 sm:text-sm">
                درگاهہ جي روحاني ماحول ۾ ٿيندڙ گڏجاڻيون، دعائن ۽ برڪتن جو سلسلو آهي.
              </p>
              <Link
                href="/events"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#c9a961]/50 px-4 py-2 text-xs text-[#e9e4d8] transition-colors hover:border-[#c9a961] hover:text-[#c9a961] sm:px-5 sm:py-2.5 sm:text-sm"
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
        <CornerOrnament className="pointer-events-none absolute right-0 bottom-0 h-16 w-16 rotate-90 -scale-x-100 md:h-20 md:w-20" />
        <CornerOrnament className="pointer-events-none absolute left-0 bottom-0 h-16 w-16 -rotate-90 -scale-x-100 md:h-20 md:w-20" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          {/* Rightmost: nav + social */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-[#e9e4d8]/80 md:justify-start md:gap-5">
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
                
                 <a key={label}
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
              src="/logo.webp"
              alt="Sindhi Digital Archive emblem"
              width={44}
              height={44}
              className="h-12 w-12 object-contain md:h-15 md:w-15"
            />
            <div>
              <p className="font-serif text-base leading-tight text-white">Sindhi</p>
              <p className="font-serif text-base leading-tight text-[#c9a961]">Digital Archive</p>
            </div>
          </div>

          {/* Leftmost: brand */}
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:gap-4 md:text-right">
            <MosqueMark className="h-10 w-10 shrink-0 md:h-12 md:w-12" />
            <div className="text-center md:text-right">
             <p className="font-[family-name:var(--font-display)] text-base leading-tight text-white md:text-lg">
  درگاهه مخدوم سرور نوحؒ
</p>

<p className="mt-1 font-[family-name:var(--font-sindhi)] text-xs leading-relaxed text-[#e9e4d8]/70">
  درگاهه روڊ، هالا نوان
  <br />
  ضلعو مٽياري، سنڌ، پاڪستان
</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="relative">
       <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-4 text-center text-xs text-[#e9e4d8]/50 sm:flex-row sm:items-center sm:justify-between sm:text-right">
  <p>
    ڊيزائن ۽ ڊويلپمينٽ:{" "}
    <a
      href="https://udaar.pk/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-[#e9e4d8]"
    >
      اُڏار اڪيڊمي
    </a>
  </p>

  <p>©{new Date().getFullYear()} درگاهہ مخدوم سرور نوحؒ. سڀ حق محفوظ آهن.</p>
</div>
      </div>
    </footer>
  );
}