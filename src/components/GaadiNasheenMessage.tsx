export default function GaadiNasheenMessage() {
  return (
    <section className="bg-white py-8 px-3 sm:py-12 sm:px-4">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-[#123a3a]">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 md:w-3/5">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-4xl font-bold tracking-wide text-white uppercase">
              Gaadi Nasheen Message
            </h2>
            <p className="mb-6 sm:mb-8 max-w-xl text-sm md:text-base leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>

            <button className="flex w-fit max-w-full items-center gap-2 rounded-full border border-[#FDDF96] px-4 py-1.5 sm:px-6 text-[#FDDF96] transition-colors hover:bg-amber-400/10">
              <img
                src="/library-button.png"
                alt=""
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain shrink-0"
              />
              <span className="font-medium text-sm sm:text-base whitespace-nowrap" dir="rtl">
                لانبيري ڏانشن وڃو
              </span>
              <svg
                className="h-4 w-4 shrink-0"
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
            </button>
          </div>

          {/* Right: Image */}
          <div className="md:w-2/5">
            <img
              src="/gaadi-nasheen.png"
              alt="Gaadi Nasheen"
              className="h-48 sm:h-64 w-full object-cover object-top md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}