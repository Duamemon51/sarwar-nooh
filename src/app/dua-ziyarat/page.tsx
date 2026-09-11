import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  Clock,
  MapPin,
  Phone,
  Car,
  Footprints,
  BookOpen,
  Heart,
  Users,
  ChevronRight,
} from "lucide-react";

/**
 * /dua-ziyarat
 * Sections: Hero, Dua (Arabic + translation), Ziyarat Adab, Timings, Visit Information
 * Same design tokens as Footer.jsx: bg #0d2a28, gold accent #c9a961, font-serif headings
 *
 * Save as: app/dua-ziyarat/page.jsx
 */

export const metadata = {
  title: "Dua & Ziyarat | Dargah Makhdoom Sarwar Noor",
  description:
    "Dua for ziyarat, adab of visiting the shrine, daily timings, and visit information for Dargah Makhdoom Sarwar Noor, Hala Naw.",
};

const adabPoints = [
  {
    title: "Perform wudu before entering",
    body: "Arrive in a state of purity. Wudu facilities are available at the main entrance for both men and women.",
  },
  {
    title: "Enter with humility and salam",
    body: "Step in with the right foot, lower your gaze, and greet the resting soul with salam rather than sajdah — sujood belongs to Allah alone.",
  },
  {
    title: "Keep voices low",
    body: "The shrine is a place of remembrance. Avoid loud conversation, phone calls, and unnecessary movement near the mazar.",
  },
  {
    title: "Recite Qur'an and durood",
    body: "Bring a portion of Qur'an, send durood upon the Prophet ﷺ, and make dua — the reward is conveyed to the deceased, from Allah.",
  },
  {
    title: "Dress modestly",
    body: "Cover your head and shoulders. Loose, modest clothing is expected of all visitors, regardless of background.",
  },
  {
    title: "Respect the queue and staff",
    body: "Follow the direction of the khuddam (attendants) at the mazar, especially during Thursday evenings and Urs when crowds are larger.",
  },
];

const timings = [
  { day: "Monday – Wednesday", hours: "Fajr – Isha (5:00 AM – 9:30 PM)" },
  { day: "Thursday", hours: "Fajr – 12:00 AM (extended for weekly mehfil)" },
  { day: "Friday", hours: "Fajr – Isha, reopens after Jumma till 10:00 PM" },
  { day: "Saturday – Sunday", hours: "Fajr – Isha (5:00 AM – 9:30 PM)" },
  { day: "Urs Mubarak & special nights", hours: "Open 24 hours" },
];

const visitInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Dargah Makhdoom Sarwar Noor, Hala Naw, District Matiari, Sindh",
  },
  {
    icon: Phone,
    label: "Helpdesk",
    value: "+92 300 0000000 (9:00 AM – 8:00 PM)",
  },
  {
    icon: Car,
    label: "Parking",
    value: "Free parking available on the north side, 2 minutes' walk from the main gate",
  },
  {
    icon: Footprints,
    label: "Shoe deposit",
    value: "Counters at both entrances — free of charge, keep your token safe",
  },
  {
    icon: Users,
    label: "Facilities",
    value: "Separate section for women, wheelchair access, free langar after Zuhr",
  },
];

export default function DuaZiyaratPage() {
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
            <span className="text-[#c9a961]">Dua &amp; Ziyarat</span>
          </nav>
          <h1 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
            Dua &amp; Ziyarat
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#e9e4d8]/70">
            Guidance for visitors on the dua, etiquette, timings, and practical
            information for visiting Dargah Makhdoom Sarwar Noor.
          </p>
        </div>
      </section>

      {/* ---------- Dua ---------- */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-6 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#c9a961]" />
          <h2 className="font-serif text-2xl text-[#0d2a28]">
            Dua for Ziyarat
          </h2>
        </div>
        <div className="rounded-2xl border border-[#c9a961]/30 bg-white px-6 py-8 shadow-sm sm:px-10">
          <p
            dir="rtl"
            className="text-right font-serif text-2xl leading-loose text-[#0d2a28] sm:text-3xl"
          >
            اَلسَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ
            وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللهُ بِكُمْ لَاحِقُونَ،
            نَسْأَلُ اللهَ لَنَا وَلَكُمُ الْعَافِيَةَ
          </p>
          <p className="mt-5 text-sm italic text-[#1c2b28]/70">
            "Peace be upon you, O people of this abode, believers and
            Muslims. We shall, Allah willing, soon join you. We ask Allah for
            well-being for us and for you."
          </p>
          <div className="mt-6 h-px w-16 bg-[#c9a961]/50" />
          <p className="mt-6 text-sm leading-relaxed text-[#1c2b28]/80">
            Visitors commonly recite this greeting on approaching the mazar,
            followed by Surah Al-Fatiha, Surah Yaseen or Surah Ikhlas, and
            durood upon the Prophet ﷺ. Personal dua may then be made,
            remembering that all benefit and answering of prayer comes from
            Allah alone — the deceased is asked for nothing; only remembered,
            and prayed for.
          </p>
        </div>
      </section>

      {/* ---------- Adab ---------- */}
      <section className="bg-[#0d2a28]/[0.04] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#c9a961]" />
            <h2 className="font-serif text-2xl text-[#0d2a28]">
              Adab of Ziyarat
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adabPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-[#0d2a28]/10 bg-white p-5"
              >
                <p className="font-serif text-base text-[#0d2a28]">
                  {point.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#1c2b28]/70">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Timings ---------- */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-6 flex items-center gap-2">
          <Clock className="h-5 w-5 text-[#c9a961]" />
          <h2 className="font-serif text-2xl text-[#0d2a28]">
            Visiting Timings
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#0d2a28]/10 bg-white">
          {timings.map((row, i) => (
            <div
              key={row.day}
              className={`flex flex-col justify-between gap-1 px-6 py-4 sm:flex-row sm:items-center ${
                i !== timings.length - 1 ? "border-b border-[#0d2a28]/10" : ""
              }`}
            >
              <span className="text-sm font-medium text-[#0d2a28]">
                {row.day}
              </span>
              <span className="text-sm text-[#1c2b28]/70">{row.hours}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#1c2b28]/50">
          Timings may extend during Ramadan and on the eve of major Islamic
          dates. Check the events page for Urs Mubarak dates.
        </p>
      </section>

      {/* ---------- Visit Information ---------- */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 font-serif text-2xl text-[#0d2a28]">
            Visit Information
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {visitInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-[#0d2a28]/10 bg-[#f7f5ef] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9a961]/40">
                  <Icon className="h-4 w-4 text-[#c9a961]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#c9a961]/80">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-[#1c2b28]/75">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-[#0d2a28]/10 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-[#1c2b28]/70">
              Planning to visit during Urs Mubarak? Check upcoming dates and
              event details.
            </p>
            <Link
              href="/events"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#c9a961]/60 px-5 py-2.5 text-sm text-[#0d2a28] transition-colors hover:border-[#c9a961] hover:text-[#8a6d26]"
            >
              View Events
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-24 bg-[#f7f5ef] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-2xl text-[#0d2a28]">
            Visiting the shrine today
          </h2>
          <p className="mt-3 mb-6 max-w-[62ch] text-[15px] leading-[1.7] text-[#1c2b28]/80 sm:text-[17px] sm:leading-[1.75]">
            The dargah still stands in Hala, Sindh, and remains open to
            visitors and pilgrims. No portrait of Makhdoom Nooh survives
            from his lifetime — photography did not yet exist in
            sixteenth-century Sindh — so the photograph of the building he is
            buried in is the most honest image of him available today.
          </p>
          <div className="overflow-hidden border border-[#0d2a28]/15">
            <iframe
              title="Map showing the location of the Dargah Makhdoom Nooh shrine in Hala, Sindh"
              src="https://www.google.com/maps?q=Dargah+Makhdoom+Nooh+Hala+Sindh&output=embed"
              width="100%"
              height="240"
              className="block w-full sm:hidden"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <iframe
              title="Map showing the location of the Dargah Makhdoom Nooh shrine in Hala, Sindh"
              src="https://www.google.com/maps?q=Dargah+Makhdoom+Nooh+Hala+Sindh&output=embed"
              width="100%"
              height="320"
              className="hidden w-full sm:block"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}