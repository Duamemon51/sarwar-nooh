import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ArrowRight,
  Repeat,
} from "lucide-react";

/**
 * /events
 * Sections: Hero, Featured (next) event, Upcoming events list, Recurring/weekly events
 * Same design tokens as Footer.jsx & dua-ziyarat/page.jsx: bg #0d2a28, gold accent #c9a961
 *
 * Save as: app/events/page.jsx
 */

export const metadata = {
  title: "Events | Dargah Makhdoom Sarwar Noor",
  description:
    "Upcoming Urs Mubarak, mehfil-e-sama, and gatherings at Dargah Makhdoom Sarwar Noor, Hala Naw.",
};

const featuredEvent = {
  date: "15",
  month: "Rajab",
  year: "1447 AH",
  title: "Annual Urs Mubarak",
  location: "Dargah Makhdoom Sarwar Noor, Hala Naw",
  time: "Begins after Maghrib, continues through the night",
  description:
    "The annual Urs commemorates the wisal of Hazrat Makhdoom Sarwar Noor with qawwali, mehfil-e-sama, langar, and gatherings of zikr that draw visitors from across Sindh.",
};

type UpcomingEvent = {
  date: string;
  month: string;
  title: string;
  location: string;
  day: string;
  time: string;
  description: string;
};

const upcomingEvents: UpcomingEvent[] = [];

const recurringEvents = [
  {
    day: "Every Thursday",
    title: "Weekly Mehfil-e-Sama",
    time: "After Isha – Midnight",
    description: "Qawwali and zikr held weekly at the mazar, open to all visitors.",
  },
  {
    day: "First Friday of the month",
    title: "Community Langar",
    time: "After Jumma",
    description: "Free meal served to visitors and the surrounding community.",
  },
  {
    day: "Every Sunday",
    title: "Qur'an Circle",
    time: "10:00 AM – 12:00 PM",
    description: "Tajweed and tafsir sessions for beginners, held in the east hall.",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#1c2b28]">
      <Nav />
      <main>
      {/* ---------- Hero ---------- */}
      <section className="relative bg-[#0d2a28] py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <nav className="flex items-center justify-center gap-1 text-xs text-[#e9e4d8]/60">
            <Link href="/" className="hover:text-[#c9a961]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#c9a961]">Events</span>
          </nav>
          <h1 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
            Events &amp; Gatherings
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#e9e4d8]/70">
            Urs Mubarak, weekly mehfil, and community gatherings held at
            Dargah Makhdoom Sarwar Noor throughout the year.
          </p>
        </div>
      </section>

      {/* ---------- Featured event ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="h-5 w-5 text-[#c9a961]" />
          <h2 className="font-serif text-2xl text-[#0d2a28]">Next Event</h2>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#c9a961]/30 bg-[#0d2a28] p-8 sm:flex-row sm:items-center">
          <div className="flex shrink-0 flex-col items-center justify-center rounded-xl border border-[#c9a961]/40 px-6 py-4 text-center">
            <span className="text-3xl font-semibold leading-none text-white">
              {featuredEvent.date}
            </span>
            <span className="mt-1 text-sm text-[#e9e4d8]/70">
              {featuredEvent.month}
            </span>
            <span className="text-[10px] text-[#e9e4d8]/50">
              {featuredEvent.year}
            </span>
          </div>
          <div>
            <h3 className="font-serif text-xl text-white sm:text-2xl">
              {featuredEvent.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#e9e4d8]/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#c9a961]" />
                {featuredEvent.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#c9a961]" />
                {featuredEvent.time}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#e9e4d8]/80">
              {featuredEvent.description}
            </p>
            <Link
              href="/dua-ziyarat"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#c9a961] hover:underline"
            >
              Ziyarat adab &amp; timings
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Upcoming events list ---------- */}
      <section className="bg-[#0d2a28]/[0.04] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 font-serif text-2xl text-[#0d2a28]">
            Upcoming Events
          </h2>
          {upcomingEvents.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-[#0d2a28]/20 bg-white px-6 py-14 text-center">
              <Calendar className="h-6 w-6 text-[#c9a961]" />
              <p className="font-serif text-lg text-[#0d2a28]">
                No upcoming events right now
              </p>
              <p className="max-w-sm text-sm text-[#1c2b28]/60">
                New dates will be posted here as soon as they're announced.
                Check back soon, or follow our social pages for updates.
              </p>
            </div>
          ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex gap-4 rounded-xl border border-[#0d2a28]/10 bg-white p-5"
              >
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-[#0d2a28] text-center">
                  <span className="text-lg font-semibold leading-none text-white">
                    {event.date}
                  </span>
                  <span className="mt-0.5 text-[10px] text-[#c9a961]">
                    {event.month}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-base text-[#0d2a28]">
                    {event.title}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-[#1c2b28]/60">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#1c2b28]/70">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* ---------- Recurring events ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="flex items-center gap-2 mb-6">
          <Repeat className="h-5 w-5 text-[#c9a961]" />
          <h2 className="font-serif text-2xl text-[#0d2a28]">
            Weekly &amp; Recurring
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#0d2a28]/10 bg-white">
          {recurringEvents.map((event, i) => (
            <div
              key={event.title}
              className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                i !== recurringEvents.length - 1
                  ? "border-b border-[#0d2a28]/10"
                  : ""
              }`}
            >
              <div>
                <p className="text-sm font-medium text-[#0d2a28]">
                  {event.title}
                </p>
                <p className="text-xs text-[#1c2b28]/60">
                  {event.day} · {event.time}
                </p>
              </div>
              <p className="max-w-sm text-sm text-[#1c2b28]/70 sm:text-right">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-[#0d2a28] py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
          <h2 className="font-serif text-xl text-white sm:text-2xl">
            Planning to attend an event?
          </h2>
          <p className="max-w-md text-sm text-[#e9e4d8]/70">
            Read the ziyarat adab and visiting timings before you come, so
            your visit is smooth and respectful.
          </p>
          <Link
            href="/dua-ziyarat"
            className="inline-flex items-center gap-2 rounded-full border border-[#c9a961]/50 px-6 py-2.5 text-sm text-[#e9e4d8] transition-colors hover:border-[#c9a961] hover:text-[#c9a961]"
          >
            Dua, Adab &amp; Timings
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}