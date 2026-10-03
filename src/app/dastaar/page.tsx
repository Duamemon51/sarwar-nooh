"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useLanguage } from "@/components/LanguageProvider";
import DastarTimeline from "@/components/DastarTimeline";

export default function DastaarPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <div
      lang={isEnglish ? "en" : "sd"}
      dir={isEnglish ? "ltr" : "rtl"}
      className={`min-h-screen bg-[#f4eddf] text-[#182f2d] ${isEnglish ? "lang-en" : ""}`}
    >
      <Nav />
      <main>
        <section
          dir={isEnglish ? "ltr" : "rtl"}
          className="relative mt-[60px] overflow-hidden border-b border-[#0d2a28]/10 sm:mt-[75px]"
        >
          <img
            src="/shajro-bg.webp"
            alt={isEnglish ? "Dastaar of Hazrat Makhdoom Sarwar Nooh" : "حضرت مخدوم سرور نوحؒ جو دستار"}
            className="hidden h-[520px] w-screen object-cover md:block"
          />
          <img
            src="/shajro-bg.webp"
            alt={isEnglish ? "Dastaar of Hazrat Makhdoom Sarwar Nooh" : "حضرت مخدوم سرور نوحؒ جو دستار"}
            className="block h-[340px] w-full object-cover md:hidden"
          />

          <div className="absolute inset-0 hidden items-center justify-end px-4 sm:px-8 md:flex md:px-12 lg:px-20">
            <div className="w-full max-w-[560px] text-right">
              <h1 className={`${isEnglish ? "font-[family-name:var(--font-english-display)]" : "font-[family-name:var(--font-display)]"} text-[clamp(2.3rem,3vw,4rem)] font-bold leading-[1.06] text-[#e8c98a]`}>
                {isEnglish ? "Dastaar" : "دستار"}
              </h1>
              <h2 className={`${isEnglish ? "font-[family-name:var(--font-english-display)]" : "font-[family-name:var(--font-display)]"} mt-3 text-[clamp(1.4rem,2vw,2.1rem)] font-semibold leading-[1.3] text-[#f9f1d8]`}>
                {isEnglish ? "A sign of dignity, trust and service" : "عزت، امانت ۽ خدمت جي علامت"}
              </h2>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent md:hidden" />

          <div className="absolute inset-0 flex items-end justify-center px-4 pb-6 pt-8 md:hidden">
            <div className="w-full max-w-[520px] text-right">
              <h1 className={`${isEnglish ? "font-[family-name:var(--font-english-display)]" : "font-[family-name:var(--font-display)]"} text-[clamp(1.9rem,8vw,2.8rem)] font-bold leading-[1.08] text-[#e8c98a]`}>
                {isEnglish ? "Dastaar" : "دستار"}
              </h1>
              <h2 className={`${isEnglish ? "font-[family-name:var(--font-english-display)]" : "font-[family-name:var(--font-display)]"} mt-2 text-[clamp(1.1rem,5vw,1.7rem)] font-semibold leading-[1.3] text-[#f9f1d8]`}>
                {isEnglish ? "A sign of dignity, trust and service" : "عزت، امانت ۽ خدمت جي علامت"}
              </h2>
            </div>
          </div>
        </section>

       <DastarTimeline />
      </main>
      <Footer />
    </div>
  );
}