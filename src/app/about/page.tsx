import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StarDivider from "@/components/StarDivider";
import TimelineEntry from "@/components/TimelineEntry";
import {
  ArchNiche,
  LegacyRing,
  LineageMark,
  ManuscriptPage,
  Medal,
  Rosette,
  SealMark,
  TombDome,
} from "@/components/Illustrations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Explore the life, lineage, scholarship, and Sufi legacy of Hazrat Makhdoom Sarwar Nooh in Hala, Sindh.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div className="mb-2 text-center">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#8a7a4a]">
            About the Saint
          </p>
          <h1 className="mt-0 font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[#0f3d33]">
            Makhdoom Sarwar Nooh
          </h1>
        </div>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-3 sm:pt-4 pb-4 text-center">
          <p className="text-[16px] sm:text-[19px] leading-[1.7] sm:leading-[1.8] text-ink/90 max-w-full sm:max-w-[110ch] mx-auto text-center">
            Also known by the name Makhdoom Lutfullah, he is remembered in
            Sindh chiefly as <span className="italic">Makhdoom Nooh</span> — a title carried today by the shrine at Hala and by the religious order that traces its authority back to him. What follows draws on his shrine records, regional scholarship, and the accounts of historians who have written on the Sufis of sixteenth-century Sindh.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 sm:pt-10 pb-4 md:pl-6">
          <div id="lineage" className="scroll-mt-24">
            <TimelineEntry
              year="Ancestral"
              title="A Siddiqui family from Punjab"
              icon={<LineageMark className="w-full h-full" />}
            >
              <p>
                His forebears traced their descent to Hazrat Umar al-Siddiq, hence the family name Siddiqui. An ancestor, Makhdoom Fakharuddin Kabir, had migrated from Kot Karor in Punjab and settled at Bubak, in what is now the Sehwan area of Sindh. A later generation of the family, led by Makhdoom Fakharuddin Saghir, moved on from Bubak and made its home in Hala — the town that the family, and its order, would remain tied to ever since.
              </p>
              <p>
                Makhdoom Nooh&rsquo;s own father, Makhdoom Naimatullah, was already a respected figure within the Suhrawardi Sufi tradition by the time his son was born.
              </p>
            </TimelineEntry>
          </div>

          <div id="life" className="scroll-mt-24">
            <TimelineEntry
              year="1506"
              title="Birth near Halakandi"
              icon={<LineageMark className="w-full h-full" />}
            >
              <p>
                He was born in a village close to Halakandi, near Hala, in 1506 CE — the eleventh century of the Hijri calendar. It was a period when Suhrawardi teachers had already made lower Sindh a serious centre of Islamic learning, and the family into which he was born stood near the centre of that world.
              </p>
            </TimelineEntry>

            <TimelineEntry
              year="Youth"
              title="Study under Makhdoom Arabi Dhayno"
              icon={<ArchNiche className="w-full h-full" />}
            >
              <p>
                His early religious education took place in Halakandi itself, under a teacher known as Makhdoom Arabi Dhayno, also called Shah Dino — an accomplished scholar of Arabic whose own brother had studied under a noted Sufi of Jaunpur. Unusually for a Sufi of his stature, Makhdoom Nooh is not recorded as having taken formal initiation from any living master of his time; his connection to the Suhrawardi path came through inherited practice and independent spiritual attainment, a status sometimes described as Uwaisi.
              </p>
            </TimelineEntry>
          </div>

          <div id="order" className="scroll-mt-24">
            <TimelineEntry
              year="16th century"
              title="Founding the Sarwari order"
              icon={<Rosette className="w-full h-full" />}
            >
              <p>
                From this training, and from a reputation for learning that reached across Sindh, Makhdoom Nooh established what came to be known as the Sarwari order — a branch of the wider Suhrawardi silsila that took his own name, Sarwar, as its identity. It survives today as the Sarwari Jamat, still centred on his shrine at Hala.
              </p>
              <p>
                He was one of three Sufi figures most closely associated with lower Sindh in this period, alongside Makhdoom Ismail Soomro of Aghamkot and the little-documented Shaikh Bhirkio — each preaching, by most accounts, a message of tolerance that drew converts as much through example as through argument.
              </p>
            </TimelineEntry>
          </div>

          <div id="scholarship" className="scroll-mt-24">
            <TimelineEntry
              year="16th century"
              title="A khanqah, and the Qur'an in Persian"
              icon={<ManuscriptPage className="w-full h-full" />}
            >
              <p>
                At his khanqah in Halakandi, Makhdoom Nooh convened gatherings that drew dervishes and scholars from across the region, and it was here that many of his disciples first came to him. His own scholarship extended well beyond Sufi practice: fluent in Persian as well as Arabic, he produced a Persian-language translation of the Qur&rsquo;an, work that historians regard as the first undertaken by a religious scholar of Sindh.
              </p>
              <p>
                He also wrote poetry in Sindhi, placing him among the early figures of a literary tradition that would later produce Shah Abdul Latif Bhitai, whose own shrine stands a short distance from Hala.
              </p>
            </TimelineEntry>
          </div>

          <div id="shrine" className="scroll-mt-24">
            <TimelineEntry
              year="1590"
              title="Death and the dargah at Hala"
              icon={<TombDome className="w-full h-full" />}
            >
              <p>
                Makhdoom Nooh died in 1590 CE, having lived to roughly eighty-four years of age. He was buried at Hala, where his tomb became the Dargah Sarwar-e-Nooh Siddiqui. The shrine has remained a site of pilgrimage in Sindh from that century to this one.
              </p>
            </TimelineEntry>
          </div>

          <div id="titles" className="scroll-mt-24">
            <TimelineEntry
              year="Posthumous"
              title="The honorific Ghous-ul-Haq"
              icon={<SealMark className="w-full h-full" />}
            >
              <p>
                In Sindh, his shrine and the order that grew from it are formally addressed as Ghous-ul-Haq Makhdoom Sarwar Nooh — &ldquo;Ghous&rdquo; being an honorific reserved for a Sufi of the very highest standing, and one used sparingly. The name Makhdoom itself, carried by every head of the order since, marks him as a master whose authority is served rather than simply respected.
              </p>
              <p>
                These are titles of religious standing, distinct from any civil honour, and they attach to the office of the shrine as much as to the man who founded it.
              </p>
            </TimelineEntry>
          </div>

          <div id="legacy" className="scroll-mt-24">
            <TimelineEntry
              year="17th – 20th century"
              title="The Sarwari Jamat and Hala's living heritage"
              icon={<LegacyRing className="w-full h-full" />}
            >
              <p>
                Guardianship of the shrine passed down through a line of descendants known as Sajjada Nasheen, several of whom became noted scholars and poets in their own right. Partly through this lineage, Hala grew into a lasting centre of Suhrawardi Sufism, known today as much for its glazed Kashi pottery and woven textiles as for the shrine that first drew scholars and pilgrims to the town.
              </p>
            </TimelineEntry>

            <TimelineEntry
              year="1919 – 1993"
              title="A documented civil honour, five centuries on"
              icon={<Medal className="w-full h-full" />}
              last
            >
              <p>
                The clearest record of formal recognition in this lineage belongs to Makhdoom Muhammad Zaman Talibul Moula, the seventeenth Sajjada Nasheen of the shrine and a Sindhi poet and scholar of more than thirty published books. Alongside his religious office he served in national politics and chaired the Sindhi Adabi Board, and for this combined body of work the state of Pakistan awarded him the Tamgha-e-Pakistan and the Hilal-e-Imtiaz, and the province recognised him with the Latif Award. He was also a co-founder of the Sarwari Islamic College in Hala.
              </p>
              <p className="text-[14px] sm:text-[15px] text-ink/60">
                These honours were conferred on a twentieth-century custodian of the shrine, not on Makhdoom Nooh himself — civil awards of this kind did not exist in the sixteenth century.
              </p>
            </TimelineEntry>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <StarDivider tone="teal" />
        </div>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 sm:pt-10 pb-4">
          <h2 className="font-[family-name:var(--font-display)] text-[22px] sm:text-[26px] text-indigo mb-4">
            Further reading
          </h2>
          <ul className="space-y-2 text-[14px] sm:text-[15px]">
            <li>
              <a
                className="text-[#e9c568] hover:underline break-words"
                href="https://en.wikipedia.org/wiki/Makhdoom_Lutufullah"
                target="_blank"
                rel="noopener noreferrer"
              >
                Makhdoom Lutufullah — Wikipedia
              </a>
            </li>
            <li>
              <a
                className="text-[#e9c568] hover:underline break-words"
                href="https://www.brjisr.com/index.php/brjisr/article/view/53"
                target="_blank"
                rel="noopener noreferrer"
              >
                Balochistan Review of Journal of Islamic and Social Research — article on the Sarwari order
              </a>
            </li>
            <li>
              <a
                className="text-[#e9c568] hover:underline break-words"
                href="https://www.thefridaytimes.com/25-Sep-2020/makhdoom-mystics-of-hala"
                target="_blank"
                rel="noopener noreferrer"
              >
                &ldquo;Makhdoom: Mystics of Hala&rdquo; — The Friday Times
              </a>
            </li>
          </ul>
          <p className="mt-6 text-[12px] sm:text-[13px] text-ink/60">
            A tribute page prepared with care for accuracy. Corrections from
            those closer to the shrine and its records are welcome.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

