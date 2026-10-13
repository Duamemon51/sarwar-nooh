import { englishLibraryContent, libraryContent } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

export default function LibrarySection() {
  const { language } = useLanguage();
  const content = language === "en" ? englishLibraryContent : libraryContent;

  return (
    <section
      className="library--section relative overflow-hidden text-white"
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/library--section.webp')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#071b19]/90 via-[#071b19]/65 to-transparent md:hidden"
      />

      {/* MOBILE: keep the content in the left text panel for both directions */}
      <div dir="ltr" className={`relative z-10 flex min-h-[300px] w-full flex-col items-start justify-start px-5 pt-4 pb-8 md:hidden ${language === "en" ? "" : "text-right"}`}>
        <div className="mb-3 flex w-full -translate-y-2 items-center gap-2 self-start">
          <img
            src="/library-logo.webp"
            alt={content.logoAlt}
            className="h-11 w-11 flex-shrink-0 object-contain"
          />
          <div dir={language === "en" ? "ltr" : "rtl"} className={`w-fit min-w-0 max-w-[calc(100%-3.25rem)] ${language === "en" ? "text-left" : "text-right"}`}>
            <h2 className={`${language === "en" ? "home-section-heading-en" : "text-lg font-bold leading-tight"} text-[#E8C98A] ${language === "en" ? "text-left" : "text-right"}`}>
              {content.title}
            </h2>
            <h3 className={`${language === "en" ? "home-section-subtitle-en library-mobile-subtitle-en whitespace-normal break-words" : "mt-1 whitespace-nowrap text-[11px] font-semibold leading-tight"} mt-1 text-white ${language === "en" ? "text-left" : "text-right"}`}>
              {content.subtitle}
            </h3>
          </div>
        </div>

        <p dir={language === "en" ? "ltr" : "rtl"} className={`${language === "en" ? "home-copy-en" : "text-[15px] leading-[1.3]"} mb-4 w-[55%] max-w-[340px] text-white ${language === "en" ? "self-start text-left" : "self-start text-right"}`}>
          {content.mobileDescription}
        </p>

        <Link href="/library" dir={language === "en" ? "ltr" : "rtl"} className="mt-4 flex w-fit self-start items-center gap-0.5 rounded-full border border-[#FDDF96] px-1.5 py-0.5 text-[#FDDF96] transition-colors hover:bg-amber-400/10">
          <svg
            className={`h-3 w-3 ${language === "en" ? "order-3" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
          <span className={`text-[11px] font-medium text-[#FDDF96] ${language === "en" ? "order-2" : ""}`}>{content.button}</span>
          <img
            src="/library-button.webp"
            alt=""
            className={`h-5 w-5 object-contain ${language === "en" ? "order-1" : ""}`}
          />
        </Link>
      </div>

      {/* DESKTOP: original absolute layout */}
      <div className="hidden md:block py-20 px-4 min-h-[500px]">
        <div className={`absolute top-1/2 left-24 -translate-y-1/2 z-10 max-w-md ${language === "en" ? "text-left" : "text-right"}`}>
          <div className="mb-6 flex items-center gap-4" dir="ltr">
            <img
              src="/library-logo.webp"
              alt={content.logoAlt}
              className="h-20 w-20 lg:w-32 lg:h-32 flex-shrink-0 object-contain"
            />

            <div className={`${language === "en" ? "text-left" : "text-right"} min-w-0`}>
              <h2 className={`${language === "en" ? "home-section-heading-en" : "text-6xl font-bold"} whitespace-nowrap text-[#E8C98A]`}>
                {content.title}
              </h2>
              <h3 className={`${language === "en" ? "home-section-subtitle-en" : "mt-6 text-4xl font-semibold sm:mt-4"} whitespace-nowrap text-white`}>
                {content.subtitle}
              </h3>
            </div>
          </div>

          <p className={`${language === "en" ? "home-copy-en" : "mb-8 text-2xl leading-relaxed"} mb-8 text-gray-200 ${language === "en" ? "text-left ml-[20px]" : "text-right ml-[20] mr-[-50px]"}`}>
            {content.description}
          </p>

          <Link href="/library" className="flex w-fit items-center gap-2 rounded-full border border-[#FDDF96] px-6 py-1.5 text-[#FDDF96] transition-colors hover:bg-amber-400/10">
            <svg
              className={`h-4 w-4 ${language === "en" ? "order-3" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className={`font-medium text-[#FDDF96] ${language === "en" ? "order-2" : ""}`}>{content.button}</span>
            <img
              src="/library-button.webp"
              alt=""
              className={`h-10 w-10 object-contain ${language === "en" ? "order-1" : ""}`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}