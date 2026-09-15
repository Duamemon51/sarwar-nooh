export default function LibrarySection() {
  return (
    <section
      className="library--section relative overflow-hidden text-white"
      dir="rtl"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/library--section.png')" }}
      />

      {/* MOBILE: right-aligned layout */}
      <div className="relative z-10 flex flex-col items-end px-5 py-8 md:hidden w-full">
        <div className="mb-3 flex items-center gap-2 self-end" dir="ltr">
          <img
            src="/library-logo.png"
            alt="لائبريري سيڪشن لوگو"
            className="h-9 w-9 flex-shrink-0 object-contain"
          />
          <div className="text-right">
            <h2 className="text-lg font-bold text-[#E8C98A] leading-tight text-right">
              لائبريري سيڪشن
            </h2>
            <h3 className="text-[11px] font-semibold text-white leading-tight text-right">
              علم، روشني ۽ روحاني ورثو
            </h3>
          </div>
        </div>

        <p className="mb-5 text-[11px] leading-relaxed text-gray-200 max-w-[260px] text-right self-end">
          درگاه حضرت مخدوم نوح جي لائبريري سيڪشن م
          مذهبي، تاريخي، تصوفي ۽ تعليمي ڪتابن جو خزانو دستياب
          هتي ڏانرين ۽ محققين لاءِ قيمتي مخطوطه جات، نادر ڪتاب
          ۽ ڊجيٽل مواد نبسر فراهم ڪئي ٿي
        </p>

        <button className="flex items-center gap-1.5 rounded-full border border-[#FDDF96] pl-1.5 pr-4 py-1 text-[#FDDF96] transition-colors hover:bg-amber-400/10 self-end">
          <svg
            className="h-3.5 w-3.5"
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
          <span className="text-xs font-medium text-[#FDDF96]">لائبريري ڏانھن وڃو</span>
          <img
            src="/library-button.png"
            alt=""
            className="h-6 w-6 object-contain"
          />
        </button>
      </div>

      {/* DESKTOP: original absolute layout */}
      <div className="hidden md:block py-20 px-4 min-h-[500px]">
        <div className="absolute top-1/2 left-24 -translate-y-1/2 z-10 max-w-md text-right">
          <div className="mb-6 flex items-center gap-4" dir="ltr">
            <img
              src="/library-logo.png"
              alt="لائبريري سيڪشن لوگو"
              className="h-20 w-20 lg:w-32 lg:h-32 flex-shrink-0 object-contain"
            />

            <div className="text-right min-w-0">
              <h2 className="text-6xl font-bold text-[#E8C98A] whitespace-nowrap">
                لائبريري سيڪشن
              </h2>
              <h3 className="text-4xl font-semibold text-white whitespace-nowrap">
                علم، روشني ۽ روحاني ورثو
              </h3>
            </div>
          </div>

          <p className="mb-8 text-2xl leading-relaxed ml-[20] mr-[-50px] text-gray-200">
            درگاه حضرت مخدوم نوح جي لائبريري سيڪشن م
            مذهبي، تاريخي، تصوفي ۽ تعليمي ڪتابن جو خزانو دستياب
            هتي ڏانرين ۽ محققين لاءِ قيمتي مخطوطه جات، نادر ڪتاب
            ۽ ڊجيٽل مواد نبسر فراهم ڪئي ٿي
          </p>

          <button className="flex items-center gap-2 rounded-full border border-[#FDDF96] px-6 py-1.5 text-[#FDDF96] transition-colors hover:bg-amber-400/10">
            <svg
              className="h-4 w-4"
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
            <span className="font-medium text-[#FDDF96]">لائبريري ڏانھن وڃو</span>
            <img
              src="/library-button.png"
              alt=""
              className="h-10 w-10 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
}