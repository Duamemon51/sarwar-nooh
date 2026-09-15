"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import StarDivider from "@/components/StarDivider";
import TimelineEntry from "@/components/TimelineEntry";
import Gallery from "@/components/Gallery";
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
import FeatureStrip from "@/components/FeatureStrip";
import LibrarySection from "@/components/LibrarySection";
import AboutDargah from "@/components/AboutDargah";
import Footer from "@/components/Footer";
import GaadiNasheenMessage from "@/components/GaadiNasheenMessage";
import UrsBanner from "@/components/UrsBanner";

const elders = [
  { name: "MAKHDOOM SARKAR ALI", image: "/sarkar-ali.png" },
  { name: "MAKHDOOM MEHBOOB ZAMAN", image: "/mahboob.png" },
  { name: "MAKHDOOM JAMEEL ZAMAN", image: "/jameel.png" },
  { name: "MAKHDOOM AMIN FAHEEM", image: "/amin.png" },
  { name: "MAKHDOOM TALIB UL MOLA", image: "/talib.png" },
  { name: "MAKHDOOM GHULAM HYDER", image: "/hyder.png" },
];

export default function Home() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let min = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const c = (child as HTMLElement).offsetLeft + (child as HTMLElement).offsetWidth / 2;
        const d = Math.abs(c - center);
        if (d < min) {
          min = d;
          closest = i;
        }
      });
      setActive(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.max(0, Math.min(elders.length - 1, i));
    const child = el.children[idx] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div id="top" className="bg-white">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden mt-[60px] sm:mt-[75px]" dir="rtl">
        <img
          src="/hero-bg.png"
          alt="Dargah Hazrat Makhdoom Sarwar Nooh, Hala New"
          className="relative w-full h-auto block hidden md:block"
        />

        <div className="absolute inset-0 hidden md:flex flex-col justify-center px-4 sm:px-8 md:px-12 items-end">
          <div className="w-[42%] max-w-[500px] flex flex-col items-end text-right">
            <div className="max-w-[340px] flex flex-col items-end gap-0 ml-[68px]">
              <h1 className="text-[clamp(2.8rem,4vw,3.8rem)] font-bold text-[#e8c98a] leading-[1.0] mb-0 whitespace-normal">
                درگاہِ حضرت
              </h1>
              <h2 className="text-[clamp(2.5rem,3.7vw,3.3rem)] font-bold text-[#e8c98a] leading-[1.0] whitespace-normal">
                مخدوم سرور نوح
              </h2>
            </div>

            <p className="text-white text-[clamp(1.35rem,2vw,1.75rem)] ml-[68px] mt-4 mb-3">
              ھالا نوں، ضلعي مٽياري، سنڌ
            </p>

            <p className="text-white/80 text-[clamp(1rem,1.5vw,1.3rem)] leading-8 mb-6 max-w-[390px] ml-[65px]">
              مخدوم سرور نوح سنڌ جو عظيم صوفي بزرگ هو، جنهن فارسي ۾ قرآن مجيد جو ترجمو ڪيو ۽ سروري سلسلو قائم ڪيو، جنهن جو مقبرو هالا ۾ اڄ به زيارت گاهه آهي.
            </p>

            <button className="flex items-center gap-2 w-fit border border-[#e8c98a] rounded-full px-8 py-2.5 text-white text-sm hover:bg-white/10 transition ml-[68px]">
              <span className="flex items-center justify-center text-[#e8c98a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="ml-2">وڈیو ڏسو</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e8c98a] text-[#002830]">
                ▶
              </span>
            </button>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 hidden md:flex">
          <div
            className="max-w-[600px] px-6 py-3
            text-[#e8c98a]
            text-[clamp(1.8rem,3vw,3rem)]
            font-bold
            [font-family:'Noto_Nastaliq_Urdu',serif]
            [text-shadow:3px_3px_4px_rgba(0,0,0,1),-3px_-2px_3px_rgba(0,0,0,0.9),2px_0_6px_rgba(0,0,0,1),-2px_0_6px_rgba(0,0,0,1),0_4px_10px_rgba(0,0,0,1)]"
          >
            درگاہِ حضرت مخدوم سرور نوح
          </div>
        </div>

        {/* MOBILE HERO - 2 column layout, bg image continuous across both columns */}
        <div className="relative flex md:hidden min-h-[420px] overflow-hidden" dir="rtl">
          <img
            src="/hero-bg.png"
            alt="Dargah Hazrat Makhdoom Sarwar Nooh, Hala New"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,25,0.15)_0%,rgba(7,27,25,0.55)_38%,rgba(7,27,25,0.88)_100%)]" />

          {/* Image column + decorative Nastaliq title */}
          <div className="relative w-[38%] shrink-0 flex items-end justify-center pb-5 px-2">
            <div
              className="text-[#e8c98a] font-bold text-center
              text-[clamp(1rem,4.5vw,1.5rem)]
              leading-[1.9]
              [font-family:'Noto_Nastaliq_Urdu',serif]
              [text-shadow:2px_2px_3px_rgba(0,0,0,1),-2px_-1px_2px_rgba(0,0,0,0.9),1px_0_5px_rgba(0,0,0,1),-1px_0_5px_rgba(0,0,0,1),0_3px_8px_rgba(0,0,0,1)]"
            >
              درگاہِ حضرت
              <br />
              مخدوم سرور نوح
            </div>
          </div>

          {/* Text column */}
          <div className="relative flex-1 px-4 py-6 flex flex-col justify-center items-end text-right">
            <div className="flex flex-col items-end gap-0">
              <h1 className="text-[clamp(1.5rem,6vw,2rem)] font-bold text-[#e8c98a] leading-[1.05] whitespace-normal">
                درگاہِ حضرت
              </h1>
              <h2 className="text-[clamp(1.4rem,5.5vw,1.8rem)] font-bold text-[#e8c98a] leading-[1.05] whitespace-normal">
                مخدوم سرور نوح
              </h2>
            </div>

            <p className="text-white text-[clamp(0.85rem,3.2vw,1rem)] mt-2 mb-2">
              ھالا نوں، ضلعي مٽياري، سنڌ
            </p>

            <p className="text-white/80 text-[clamp(0.75rem,2.6vw,0.85rem)] leading-6 mb-4">
              مخدوم سرور نوح سنڌ جو عظيم صوفي بزرگ هو، جنهن فارسي ۾ قرآن مجيد جو ترجمو ڪيو ۽ سروري سلسلو قائم ڪيو، جنهن جو مقبرو هالا ۾ اڄ به زيارت گاهه آهي.
            </p>

            <button className="flex items-center gap-1.5 w-fit border border-[#e8c98a] rounded-full px-4 py-1.5 text-white text-xs hover:bg-white/10 transition">
              <span className="flex items-center justify-center text-[#e8c98a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>

              <span className="ml-1">وڈیو ڏسو</span>

              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#e8c98a] text-[#002830]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-2.5 h-2.5 fill-current"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

    <section className="relative bg-[#f7f5f0] px-3 py-8 sm:px-4 sm:py-12">
  {/* top gradient bar */}
  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1e3a5f] via-[#8a6a5a] to-[#c97a3a]" />

  <div className="mx-auto max-w-[1400px]">
    {/* Mobile: carousel with dots only */}
    <div className="sm:hidden">
      <div
  ref={trackRef}
  className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-3 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
>
  {elders.map(({ name, image }) => (
    <div
      key={name}
      className="flex w-[32%] flex-shrink-0 snap-center flex-col items-center justify-start"
    >
      <div className="relative aspect-square w-full max-w-[105px] overflow-hidden rounded-full bg-[#03181a]">
        <Image src={image} alt={name} fill sizes="32vw" className="object-cover" />
      </div>
      <div className="mt-2 text-center text-[8px] font-semibold uppercase tracking-wide leading-snug text-[#0a1a1f]">
        {name.split(" ").slice(0, 1).join(" ")}
        <br />
        {name.split(" ").slice(1).join(" ")}
      </div>
    </div>
  ))}
</div>

      {/* dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {elders.map(({ name }, i) => (
          <button
            key={name}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-5 bg-[#123A3A]" : "w-1.5 bg-[#F3EAD9]"
            }`}
          />
        ))}
      </div>
    </div>

    {/* sm and up: original grid */}
    <div className="hidden sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 md:grid-cols-6 md:gap-x-8 md:gap-y-10">
      {elders.map(({ name, image }) => (
        <div key={name} className="flex flex-col items-center justify-start">
          <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-full bg-[#03181a]">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 1024px) 25vw, 220px"
              className="object-cover"
            />
          </div>
          <div className="mt-3 text-center text-[10px] font-semibold uppercase tracking-wide leading-snug text-[#0a1a1f] sm:mt-4 sm:text-[11px] md:text-[clamp(0.75rem,1vw,0.95rem)]">
            {name.split(" ").slice(0, 1).join(" ")}
            <br />
            {name.split(" ").slice(1).join(" ")}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <FeatureStrip />
      <LibrarySection />
      <GaadiNasheenMessage />
      <AboutDargah />

      <Gallery />

      <Footer />
    </div>
  );
}