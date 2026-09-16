import { aboutContent, englishAboutContent } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutDargah() {
  const { language } = useLanguage();
  const content = language === "en" ? englishAboutContent : aboutContent;

  return (
    <section
      className="mx-auto max-w-[1400px] bg-white px-4 sm:px-8 py-10 sm:py-14"
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-center">
        {/* Video thumbnail - RIGHT side */}
        <div className="relative overflow-hidden rounded-sm shadow-md md:order-2 aspect-[4/3] sm:aspect-video md:aspect-auto md:h-full">
          <img
            src="/dargah-video-thumb.webp"
            alt={content.imageAlt}
            className="w-full h-full object-cover"
          />

          {/* Play button */}
          <button
            aria-label={content.playLabel}
            className="absolute inset-0 m-auto flex h-11 w-20 sm:h-14 sm:w-24 max-w-[96px] shrink-0 items-center justify-center rounded-2xl bg-red-600 shadow-lg transition-transform hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 sm:h-7 sm:w-7 fill-white translate-x-[2px]"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          {/* YouTube badge bottom-left */}
          <div className="absolute bottom-3 left-3 sm:bottom-8 sm:left-12 flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-400/40 bg-[#0d2b2b]/90 px-2.5 py-1.5 sm:px-4 sm:py-2 max-w-[calc(100%-1.5rem)]">
            <svg
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-200 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
            <span className="text-white text-[10px] sm:text-xs font-medium shrink-0">
              YouTube
            </span>
            <span className="text-amber-200 text-[10px] sm:text-xs shrink-0">
              {content.followLabel}
            </span>

            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-300 shrink-0"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
          </div>
        </div>

        {/* Text content - LEFT side */}
        <div className={`md:order-1 ${language === "en" ? "text-left" : "text-right"}`}>
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold leading-snug text-[#123A3A] mb-1">
            {content.title}
          </h2>
 
<p className={`text-sm sm:text-[20px] leading-[1.9] text-[#123A3A] mb-6 max-w-md ${language === "en" ? "mr-auto" : "ml-auto"}`}>
  {content.description}
</p>


          <img
            src="/botom-border.webp"
            alt=""
            className="w-full h-auto -my-6 max-w-md mx-auto sm:mx-0"
          />

          <p className={`text-sm sm:text-[22px] font-semibold text-[#123A3A] mt-4 text-center ${language === "en" ? "sm:text-center sm:-translate-x-[85px]" : "mr-0 sm:mr-32 sm:text-right"}`}>
            {content.signature}
          </p>
        </div>
      </div>
    </section>
  );
}