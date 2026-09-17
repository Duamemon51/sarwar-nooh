"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

/**
 * /gallery
 * Sections: Hero, category filter, image grid, lightbox
 * Same design tokens as Footer.jsx, dua-ziyarat/page.jsx & events/page.jsx
 *
 * Save as: app/gallery/page.jsx
 * NOTE: this page uses client-side state (filter + lightbox), so it must
 * stay a client component — keep the "use client" directive at the top.
 * Replace the placeholder image paths below with real photos in /public/images/gallery/
 */

const categories = ["All", "Dargah", "Urs Mubarak", "Architecture"];

const galleryImages = [
  ["01-calligraphic-panel", "Calligraphic panel", "Architecture"],
  ["02-mihrab-niche", "Arched mihrab niche", "Architecture"],
  ["03-dargah-complex-wide", "The dargah complex", "Dargah"],
  ["04-calligraphic-inscription", "Calligraphic inscription", "Architecture"],
  ["05-prayer-hall-interior", "Prayer hall interior", "Dargah"],
  ["06-courtyard-fountain", "The courtyard fountain", "Dargah"],
  ["07-mazar-chadars-railing", "At the mazar", "Urs Mubarak"],
  ["09-shrine-hall-floor", "Inside the shrine hall", "Dargah"],
  ["10-arched-cloister", "Arched cloister", "Architecture"],
  ["11-graves-courtyard", "Graves in the courtyard", "Dargah"],
  ["12-courtyard-steps", "Courtyard steps", "Dargah"],
  ["13-tiled-hall-corner", "The tiled hall", "Architecture"],
  ["14-tomb-canopy", "The tomb canopy", "Architecture"],
  ["15-shrine-hall-visitors", "Inside the shrine hall", "Dargah"],
  ["16-entrance-gate", "The entrance at Hala Sharif", "Architecture"],
  ["17-courtyard-view-1", "Courtyard view", "Dargah"],
  ["18-courtyard-walkway-1", "Courtyard walkway", "Dargah"],
  ["19-shrine-domes", "Domes of the shrine", "Architecture"],
  ["20-dargah-hala-facade", "The dargah at Hala", "Architecture"],
  ["21-sunlit-hall", "Sunlit hall", "Dargah"],
  ["22-courtyard-wide-1", "The courtyard", "Dargah"],
  ["23-facade-detail-1", "Facade detail", "Architecture"],
  ["24-tilework-detail", "Tilework detail", "Architecture"],
  ["25-dome-and-steps", "Dome and steps", "Architecture"],
  ["26-tomb-corner", "Corner of the tomb", "Architecture"],
  ["27-domed-shrine", "The domed shrine", "Architecture"],
  ["28-calligraphic-wall-panel", "Calligraphic wall panel", "Architecture"],
  ["29-path-to-graves", "Path to the graves", "Dargah"],
  ["30-doorway-to-graves", "Doorway to the graves", "Dargah"],
  ["31-chadars-at-grave", "Chadars at the grave", "Urs Mubarak"],
  ["32-graves-along-path", "Graves along the path", "Urs Mubarak"],
  ["33-chadar-covered-graves", "Chadar-covered graves", "Urs Mubarak"],
  ["34-tiled-archway", "Tiled archway", "Architecture"],
  ["35-courtyard-walkway-2", "Courtyard walkway", "Dargah"],
  ["36-courtyard-wide-2", "The courtyard", "Dargah"],
  ["37-walkway-by-tomb", "Walkway by the tomb", "Dargah"],
  ["38-courtyard-wide-3", "The courtyard", "Dargah"],
].map(([name, alt, category]) => ({
  src: `/gallery/dargah-${name}.webp`,
  alt,
  category,
}));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => {
      if (i === null) return null;
      return i === 0 ? filteredImages.length - 1 : i - 1;
    });
  const showNext = () =>
    setLightboxIndex((i) => {
      if (i === null) return null;
      return i === filteredImages.length - 1 ? 0 : i + 1;
    });

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#1c2b28]">
      <Nav />
      <main>
      <HeroSection compact gallery />

      {/* ---------- Filter tabs ---------- */}
      <section className="sticky top-[61px] z-30 border-b border-[#0d2a28]/10 bg-[#f7f5ef]/95 backdrop-blur sm:top-[68px]">
        <div className="gallery-filter-scroll mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-6 sm:py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors ${
                activeCategory === cat
                  ? "border-[#0d2a28] bg-[#0d2a28] text-white"
                  : "border-[#0d2a28]/20 text-[#1c2b28]/70 hover:border-[#c9a961] hover:text-[#0d2a28]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- Image grid ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        {filteredImages.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-[#0d2a28]/20 bg-white px-6 py-14 text-center">
            <p className="font-serif text-lg text-[#0d2a28]">
              No photos in this category yet
            </p>
            <p className="max-w-sm text-sm text-[#1c2b28]/60">
              Check back soon — new photos are added after every event.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {filteredImages.map((img, i) => (
              <button
                key={`${img.src}-${img.alt}-${i}`}
                onClick={() => openLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-[#0d2a28]/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span className="absolute inset-0 bg-[#0d2a28]/0 transition-colors group-hover:bg-[#0d2a28]/20" />
                <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-[#0d2a28]/80 to-transparent px-3 py-2 text-left text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.category}
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ---------- Lightbox ---------- */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-[#c9a961] hover:text-[#c9a961]"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white hover:border-[#c9a961] hover:text-[#c9a961] sm:left-6 sm:h-10 sm:w-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="relative aspect-[4/3] w-[calc(100%-4rem)] max-w-3xl sm:w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white hover:border-[#c9a961] hover:text-[#c9a961] sm:right-6 sm:h-10 sm:w-10"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60">
            {filteredImages[lightboxIndex].alt}
          </p>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}