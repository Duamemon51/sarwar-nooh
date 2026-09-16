const features = [
 {
  image: "/1.webp",
  title: "عقيدت جو اظهار",
  lines: ["روحاني ۽ ديني", "برڪتن جو تسلسل"],
},
{
  image: "/2.webp",
  title: "تعليمي ڄاڻ",
  lines: ["تصوف، علم ۽", "اوليا جي تعليمات"],
},
{
  image: "/1.webp",
  title: "سچائي جو پيغام",
  lines: ["محبت، امن ۽", "روحاني واڌارو"],
},
{
  image: "/2.webp",
  title: "عرس مبارڪ",
  lines: ["ايمان، دعا ۽ برڪتن", "جو پيغام"],
},
{
  image: "/1.webp",
  title: "اڳتي جي سرپرستي",
  lines: ["ايندڙ نسلن لاءِ", "هدايت ۽ خدمت"],
},
];

export default function FeatureStrip() {
  return (
    <section className="relative bg-[#f9f4e8] border-y-4 border-[#193D44]">
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
        {/* Mobile & sm: wrapped flex, 3 per row, centered last row */}
        <div className="flex flex-wrap justify-center gap-y-6 md:hidden">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-2"
              style={{ flex: "0 0 33.333%" }}
            >
              <div className="relative flex items-center justify-center w-[60px] h-[70px] sm:w-[70px] sm:h-[80px]">
                <img
                  src={feature.image}
                  alt=""
                  className="w-11 h-11 sm:w-14 sm:h-14 object-contain"
                />
              </div>

              <div className="mt-1 text-[12px] sm:text-[15px] font-bold text-[#0d3d3a] leading-normal">
                {feature.title}
              </div>
              <div className="mt-1 leading-[1.5] text-[10px] sm:text-[12.5px] font-medium text-[#5f4026]">
                {feature.lines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* md and up: original 5-column strip with dividers */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-x-0 md:gap-y-0">
          {features.map((feature, i) => {
            const isLastMd = i === features.length - 1;
            return (
              <div
                key={i}
                className={`
                  flex flex-col items-center text-center py-0
                  ${!isLastMd ? "md:border-r-2 md:border-[#193D44]" : ""}
                `}
              >
                <div className="relative flex items-center justify-center w-[74px] h-[86px]">
                  <img
                    src={feature.image}
                    alt=""
                    className="w-15 h-15 object-contain"
                  />
                </div>

                <div className="mt-0 text-[16px] font-bold text-[#0d3d3a] leading-normal">
                  {feature.title}
                </div>
                <div className="mt-1 leading-[1.8] text-[13px] font-medium text-[#5f4026]">
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