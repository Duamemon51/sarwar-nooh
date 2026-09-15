export default function LibrarySection() {
  return (
    <section
      className="library--section relative overflow-hidden py-20 px-4 text-white min-h-[600px] md:min-h-[500px]"
      dir="rtl"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/library--section.png')" }}
      />

      <div className="absolute top-1/2 left-4 md:left-24 -translate-y-1/2 z-10 max-w-md text-right">
        {/* Icon */}
       <div className="mb-6 flex items-center gap-3 md:gap-4" dir="ltr">
  <img
    src="/library-logo.png"
    alt="لائبريري سيڪشن لوگو"
    className="h-14 w-14 md:h-20 md:w-20 lg:w-32 lg:h-32 flex-shrink-0 object-contain"
  />

  <div className="text-right min-w-0">
    <h2 className="text-2xl md:text-6xl font-bold text-[#E8C98A] whitespace-nowrap">
      لائبريري سيڪشن
    </h2>
    <h3 className="text-lg md:text-4xl font-semibold text-white whitespace-nowrap">
      علم، روشني ۽ روحاني ورثو
    </h3>
  </div>
</div>

       <p className="mb-8 text-sm md:text-2xl leading-relaxed ml-[20] mr-[-50px] text-gray-200">
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
    </section>
  );
}