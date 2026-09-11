export default function AboutDargah() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
      <div className="grid md:grid-cols-[1.12fr_1.18fr_0.62fr] gap-7 md:gap-8 lg:gap-10 md:items-stretch">
        {/* heritage video */}
        <div className="relative overflow-hidden aspect-[1.64/1] md:aspect-auto md:h-full md:min-h-[264px] rounded-[3px] bg-indigo-deep">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/pEkhC9OyQU0"
            title="Heritage film of Dargah Makhdoom Sarwar Nooh"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* text content */}
        <div className="flex h-full flex-col items-start">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-gold mb-2.5">
            About the Dargah
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[24px] sm:text-[28px] md:text-[31px] leading-[1.12] text-indigo mb-4">
            The Blessed Legacy of Makhdoom Sarwar Nooh
          </h2>
          <p className="text-[13px] sm:text-[14px] leading-[1.7] text-ink/75 mb-4">
            Hazrat Makhdoom Sarwar Nooh (1506–1590) was a great Sufi
            scholar and poet, belonging to the Suhrawardi order. His
            teachings spread love, tolerance and the light of knowledge
            across Sindh and beyond. The Dargah in Hala New stands as a
            symbol of his eternal message and the spiritual heritage of
            the Makhdoom family.
          </p>

          <a
            href="/about"
            className="mt-1 inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-indigo hover:text-gold transition-colors self-start"
          >
            Read More
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* pull quote */}
        <div className="relative pl-5 border-l border-indigo/15 md:self-start md:h-[170px] md:pt-2 md:ml-1">
          <span
            className="absolute left-[18px] -top-2 font-[family-name:var(--font-display)] text-[40px] sm:text-[48px] leading-none text-gold/55"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="font-[family-name:var(--font-display)] italic text-[16px] sm:text-[17px] leading-[1.5] text-indigo text-center mb-3">
            Ishq-e-Haqiqi se badhkar koi daulat nahi.
          </p>
          <span className="block text-center text-[11px] sm:text-[12px] text-ink/55">
            Makhdoom Sarwar Nooh
          </span>
          <div className="mt-4 mx-auto w-8 h-px bg-gold/50" />
        </div>
      </div>
    </section>
  );
}