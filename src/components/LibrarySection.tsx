import { englishLibraryContent, libraryContent } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

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

      {/* MOBILE: right-aligned layout */}
      <div className={`relative z-10 flex flex-col px-5 pt-4 pb-8 md:hidden w-full ${language === "en" ? "items-start" : "items-end"}`}>
        <div className={`mb-3 flex items-center gap-2 ${language === "en" ? "self-start" : "self-end -translate-x-3"}`} dir="ltr">
          <img
            src="/library-logo.webp"
            alt={content.logoAlt}
            className="h-9 w-9 flex-shrink-0 object-contain"
          />
          <div className={language === "en" ? "text-left" : "text-right"}>
            <h2 className={`text-lg font-bold text-[#E8C98A] leading-tight ${language === "en" ? "text-left" : "text-right"}`}>
              {content.title}
            </h2>
            <h3 className={`text-[11px] font-semibold text-white leading-tight whitespace-pre-line ${language === "en" ? "text-left" : "text-right"}`}>
              {content.subtitle}
            </h3>
          </div>
        </div>

        <p className={`hidden mb-5 text-[11px] leading-relaxed text-gray-200 max-w-[260px] ${language === "en" ? "text-left self-start" : "text-right self-end"}`}>
          {content.description}
        </p>

        <button className={`flex items-center gap-0.5 rounded-full border border-[#FDDF96] pl-0.5 pr-1.5 py-0.5 text-[#FDDF96] transition-colors hover:bg-amber-400/10 ${language === "en" ? "self-start" : "self-end"}`}>
          <svg
            className={`h-2.5 w-2.5 ${language === "en" ? "order-3" : ""}`}
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
          <span className={`text-[10px] font-medium text-[#FDDF96] ${language === "en" ? "order-2" : ""}`}>{content.button}</span>
          <img
            src="/library-button.webp"
            alt=""
            className={`h-[18px] w-[18px] object-contain ${language === "en" ? "order-1" : ""}`}
          />
        </button>
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
              <h2 className="text-6xl font-bold text-[#E8C98A] whitespace-nowrap">
                {content.title}
              </h2>
              <h3 className="text-4xl mt-6 sm:mt-4 font-semibold text-white whitespace-pre-line">
                {content.subtitle}
              </h3>
            </div>
          </div>

          <p className={`mb-8 text-2xl leading-relaxed text-gray-200 ${language === "en" ? "text-left ml-[20px]" : "text-right ml-[20] mr-[-50px]"}`}>
            {content.description}
          </p>

          <button className="flex items-center gap-2 rounded-full border border-[#FDDF96] px-6 py-1.5 text-[#FDDF96] transition-colors hover:bg-amber-400/10">
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
          </button>
        </div>
      </div>
    </section>
  );
}