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
import AboutDargah from "@/components/AboutDargah";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div id="top" className="bg-white">
      <Nav />

     {/* HERO */}
<section className="relative overflow-hidden">
  {/* background photo */}
  <div className="absolute inset-0">
    <img
      src="/dargah-hala.png"
      alt="Dargah Hazrat Makhdoom Sarwar Nooh, Hala New"
      className="w-full h-full object-cover"
    />
    {/* light readability overlay — soft, not dark */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(247,242,231,0.55) 0%, rgba(247,242,231,0.32) 38%, rgba(247,242,231,0.08) 62%, rgba(247,242,231,0.02) 100%)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(247,242,231,0.1) 0%, rgba(247,242,231,0) 30%, rgba(10,43,35,0.05) 70%, rgba(10,43,35,0.25) 100%)",
      }}
    />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 min-h-[420px] sm:min-h-[520px] md:min-h-[620px] flex flex-col justify-end">
    <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 items-start md:items-end">
      <div>
        <p
          className="uppercase tracking-[0.15em] text-[12px] sm:text-[13px] font-medium mb-2 sm:mb-3 text-gold"
        >
          Spiritual Heritage • Eternal Light
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[44px] md:text-[64px] leading-[1.1] md:leading-[1.05] text-[#153832] break-words">
          Dargah Hazrat<br className="hidden sm:block" /> Makhdoom Sarwar Nooh
        </h1>
        <p className="mt-2 sm:mt-3 text-[15px] sm:text-[17px] tracking-[0.15em] uppercase text-indigo/80">
          Hala New
        </p>
        <p className="mt-4 sm:mt-5 italic text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[60ch] md:max-w-[48ch] text-ink/80">
          A timeless center of faith, peace and wisdom in the heart of
          Sindh.
        </p>
        <a
          href="#visit"
          className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-parchment"
          style={{ backgroundColor: "#0f3d33" }}
        >
          Plan Your Visit
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>

  <StarDivider tone="gold" className="relative z-10 block" />
</section>
<FeatureStrip />
<AboutDargah />
    
      <Gallery />

      <Footer />
    </div>
  );
}