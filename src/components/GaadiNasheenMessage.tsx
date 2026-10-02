import { englishGaadiMessage, gaadiMessage } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function GaadiNasheenMessage() {
  const { language } = useLanguage();
  const content = language === "en" ? englishGaadiMessage : gaadiMessage;

  return (
    <section className="bg-white py-3 px-3 sm:py-6 sm:px-4">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-[#123a3a]">
        <div
          dir="ltr"
          className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]"
        >
          {/* Text content */}
          <div className="col-span-2 row-start-1 w-full px-3 pt-3 sm:px-8 sm:pt-6 md:col-span-1 md:col-start-1 md:px-12 md:pt-8">
            <div>
           <h2 className={`mb-1.5 max-w-xl text-[13px] sm:mb-4 sm:text-2xl md:text-4xl font-bold tracking-wide text-white uppercase leading-tight ${language === "en" ? "text-left" : "text-right"}`}>
  {content.title}
</h2>

<p
  className={`mb-3 sm:mb-8 max-w-xl text-[8.5px] sm:text-sm md:text-base leading-[1.5] sm:leading-relaxed text-gray-200 ${language === "en" ? "text-left" : "text-right md:text-left"}`}
  style={{
    textAlignLast: language === "en" ? "left" : "right",
    paddingRight: language === "en" ? undefined : "8px",
  }}
>
  {content.description}
</p>
            </div>
          </div>

          <button
              className="col-start-1 row-start-2 mb-4 ml-3 flex w-fit max-w-full items-center gap-1 self-end justify-self-start rounded-full border border-[#FDDF96] px-2.5 py-1 text-[#FDDF96] transition-colors hover:bg-amber-400/10 sm:mb-6 sm:ml-8 sm:gap-2 sm:px-6 sm:py-1.5 md:mb-8 md:ml-12"
              dir="rtl"
            >
              <svg
                className="h-2.5 w-2.5 sm:h-4 sm:w-4 shrink-0"
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
              <span className="font-medium text-[8.5px] sm:text-base whitespace-nowrap">
                {content.button}
              </span>
          </button>

          {/* Image */}
          <div className="col-start-2 row-start-2 w-full self-end md:row-span-2 md:row-start-1">
            <img
              src="/SAin-jameel.png"
              alt={content.imageAlt}
              className="block aspect-square w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}