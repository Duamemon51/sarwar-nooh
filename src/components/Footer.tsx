import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, Video, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

/**
 * Dargah-style Events Banner + Footer
 * Colors: deep teal-green background (#0d2a28 / #14332f), warm gold accent (#c9a961)
 * Fonts: a serif display face for headings (e.g. "Playfair Display"), a clean sans for body (e.g. "Inter")
 *
 * Usage in app/layout.jsx:
 *   import Footer from "@/components/Footer";
 *   ...
 *   <Footer />
 */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

const socialLinks = [
  { icon: Globe, href: "https://facebook.com", label: "Facebook" },
  { icon: Camera, href: "https://instagram.com", label: "Instagram" },
  { icon: Video, href: "https://youtube.com", label: "YouTube" },
  { icon: Mail, href: "mailto:info@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d2a28] text-[#e9e4d8]">
    
  {/* ---------- Upcoming Events Banner ---------- */}
      <div className="relative border-b border-[#c9a961]/20">
        {/* Background mosque image, faded */}
        <div className="absolute inset-0">
          <Image
            src="/dargah-hala.png"
            alt=""
            fill
            className="object-cover object-right opacity-25"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a28] via-[#0d2a28]/90 to-[#0d2a28]/40" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          {/* Left: heading + CTA */}
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-wide text-[#c9a961]">
              Upcoming Events
            </p>
            <h2 className="mt-2 font-serif text-2xl leading-snug text-white sm:text-3xl">
              Urs &amp; Annual Gatherings
            </h2>
            <p className="mt-2 text-sm text-[#e9e4d8]/70">
              Join us in the spirit of devotion, remembrance and unity.
            </p>
            <Link
              href="/events"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c9a961]/50 px-5 py-2.5 text-sm text-[#e9e4d8] transition-colors hover:border-[#c9a961] hover:text-[#c9a961]"
            >
              View All Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: event card */}
          <div className="flex items-center gap-5 rounded-xl border border-[#c9a961]/30 bg-[#0d2a28]/60 px-6 py-5 backdrop-blur-sm">
            <div className="flex flex-col items-center border-r border-[#c9a961]/20 pr-5 text-center">
              <Calendar className="mb-1 h-5 w-5 text-[#c9a961]" />
              <span className="text-2xl font-semibold leading-none text-white">15</span>
              <span className="text-xs text-[#e9e4d8]/70">Rajab</span>
              <span className="text-[10px] text-[#e9e4d8]/50">1447 AH</span>
            </div>
            <div>
              <p className="font-serif text-base text-white">Annual Urs Mubarak</p>
              <p className="mt-1 text-sm text-[#e9e4d8]/70">
                Dargah Hazrat Makhdoom Sarwar Noor,
                <br />
                Hala Naw
              </p>
              <Link
                href="/events/urs-mubarak"
                className="mt-2 inline-flex items-center gap-1 text-sm text-[#c9a961] hover:underline"
              >
                View Details
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- Main Footer ---------- */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Image
            src="/footer-logo.png"
            alt="Dargah Makhdoom Sarwar Noor emblem"
            width={60}
            height={60}
            className="h-12 w-12 object-contain bg-transparent mix-blend-screen md:h-[60px] md:w-[60px]"
          />
          <div>
            <p className="text-xs tracking-wide text-[#ffe299]">Dargah</p>
            <p className="font-serif text-lg leading-tight text-white">
              Makhdoom Sarwar Noor
            </p>
            <p className="text-xs tracking-wide text-[#ffe299]">Hala Naw</p>
          </div>
        </div>

        {/* Quote */}
        <div className="flex flex-col items-center text-center">
          <p className="font-serif text-sm italic text-[#e9e4d8]/80">
            &ldquo;The light of sincere hearts never fades,
            <br />
            it only finds new hands.&rdquo;
          </p>
          <span className="mt-2 h-px w-10 bg-[#c9a961]/50" />
        </div>

        {/* Nav + social */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-[#e9e4d8]/80 md:justify-end">
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
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="relative border-t border-[#c9a961]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-[#e9e4d8]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dargah Makhdoom Sarwar Noor. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[#c9a961]" />
            Hala Naw, District Matiari, Sindh
          </p>
        </div>
      </div>
    </footer>
  );
}