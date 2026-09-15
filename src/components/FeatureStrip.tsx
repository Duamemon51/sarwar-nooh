const features = [
  {
    image: "/1.png",
    title: "عزس جي لايپيڻ",
    lines: ["روحاني پ دبني", "ٻيرڪسن جو تسلسل"],
  },
  {
    image: "/2.png",
    title: "تعليمي چاڻ",
    lines: ["تضوفي، علم پ", "اولياء جي تعليمات"],
  },
  {
    image: "/1.png",
    title: "سزاي جو فرحڪم",
    lines: ["محبيت، امن پ", "روحاني واڌو"],
  },
  {
    image: "/2.png",
    title: "عرس مبارڪڻ",
    lines: ["اصن د ٻا پ برڪين", "جو پيغام"],
  },
  {
    image: "/1.png",
    title: "هيٿه جي سرپرستي",
    lines: ["اڳئي نسل للرء", "هدايت پ خدمت"],
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative bg-[#f9f4e8] border-y-4 border-[#193D44]">
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
        <div
          className="
            grid grid-cols-2 gap-x-3 gap-y-6
            sm:grid-cols-3 sm:gap-x-4
            md:grid-cols-5 md:gap-x-0 md:gap-y-0
          "
        >
          {features.map((feature, i) => {
            const isLastMd = i === features.length - 1;

            return (
              <div
                key={i}
                className={`
                  flex flex-col items-center text-center
                  rounded-xl border border-[#193D44]/25 bg-white/40 px-3 py-4
                  sm:rounded-2xl
                  md:rounded-none md:border-0 md:bg-transparent md:py-0
                  ${!isLastMd ? "md:border-r-2 md:border-[#193D44]" : ""}
                `}
              >
                {/* arch-shaped badge */}
                <div className="relative flex items-center justify-center w-[64px] h-[74px] sm:w-[70px] sm:h-[80px] md:w-[74px] md:h-[86px]">
                  <img
                    src={feature.image}
                    alt=""
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 object-contain"
                  />
                </div>

                <div className="mt-0 text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#0d3d3a] leading-normal">
                  {feature.title}
                </div>
                <div className="mt-1 leading-[1.6] md:leading-[1.8] text-[12px] sm:text-[12.5px] md:text-[13px] font-medium text-[#5f4026]">
                  {feature.lines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}