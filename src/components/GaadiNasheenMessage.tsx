export default function GaadiNasheenMessage() {
  return (
    <section className="bg-white py-6 px-3 sm:py-12 sm:px-4">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-[#123a3a]">
        <div className="flex flex-row items-stretch">
          {/* Text content */}
          <div className="flex flex-col justify-center px-3 py-4 sm:px-8 sm:py-10 md:px-12 md:py-14 w-3/5">
            <h2 className="mb-1.5 sm:mb-4 text-[13px] sm:text-2xl md:text-4xl font-bold tracking-wide text-white uppercase leading-tight">
              Gaadi Nasheen Message
            </h2>
            <p className="mb-3 sm:mb-8 max-w-xl text-[8.5px] sm:text-sm md:text-base leading-[1.5] sm:leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>

            <button
              className="flex w-fit max-w-full items-center gap-1 sm:gap-2 rounded-full border border-[#FDDF96] px-2.5 py-1 sm:px-6 sm:py-1.5 text-[#FDDF96] transition-colors hover:bg-amber-400/10"
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
                لائبريري ڏانھن وڃو
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="w-2/5">
            <img
              src="/gaadi-nasheen.webp"
              alt="Gaadi Nasheen"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}