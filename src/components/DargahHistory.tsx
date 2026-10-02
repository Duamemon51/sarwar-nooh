"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

/* Theme (site ke screenshots se liye gaye rang) */
const TEAL = "#123a3a";
const GOLD = "#c5a964";
const GOLD_LIGHT = "#fddf96";
const GOLD_DARK = "#8a6f2a"; // chhote text ke liye (white par readable)

/* ------------------------------------------------------------------ */
/*  DATA  — yahan se text edit karein, UI khud update ho jayegi        */
/* ------------------------------------------------------------------ */

const TITLE = "درگاهه شريف مخدوم سرور نوح جي تاريخ";
const CAPTION = "غوث الحق حضرت مخدوم سرور نوح";
type ChapterDetail = { heading: string; text: string };
type Chapter = {
  heading: string;
  text: string;
  notes: { label: string; value: string }[];
  details?: ChapterDetail[];
};

/**
 * Har chapter = ek rubric (heading) + paragraph + kinare (hashiya) ke notes.
 * Notes desktop par paragraph ke bagal mein, mobile par neeche aate hain.
 */
const CHAPTERS: Chapter[] = [
  {
    heading: "حضرت غوث الحق مخدوم سرور نوح رحه (سوانح حيات)",
    text: "سنڌ جي تاريخ ۾ هالا ڪنڊي ۽ هالا جو نالو علم، عرفان، روحانيت ۽ ادب جي حوالي سان وڏي اهميت رکي ٿو. هن سرزمين کي اها سعادت حاصل آهي، جو هتي حضرت غوث الحق مخدوم لطف الله المعروف حضرت مخدوم سرور نوح رحه جهڙي عظيم بزرگ هستي جنم ورتو، جن جي روحاني فيض، علمي عظمت ۽ ديني خدمتن جو اثر سنڌ جي تاريخ تي گهرو رهيو آهي.",
    details: [
      {
        heading: "ولادت ۽ اصل نالو",
        text: "حضرت مخدوم سرور نوح رحه جو اصل نالو مخدوم لطف الله هو. پاڻ مخدوم نعمت الله قريشي و صديقي جي گهر ۾ هالا ڪنڊي يا ان جي ڀر واري ڳوٺ ٽوڙي ۾ پيدا ٿيا. سندن ولادت 27 رمضان المبارڪ 911 هجري ۾ ٿي. ننڍپڻ کان ئي سندن ذات ۾ غيرمعمولي روحاني ڪيفيتون ۽ بزرگيءَ جون نشانيون ظاهر ٿيون.",
      },
      {
        heading: "روحاني مقام",
        text: "حضرت مخدوم سرور نوح رحه کي ڏهين صدي هجريءَ جو وڏو عالم، مجتهد ۽ قطب سمجهيو ويو آهي. پاڻ سهروردي سلسلي سان وابسته اويسي بزرگ هئا. سندن روحاني مقام ۽ فيض سبب سنڌ جي مختلف علائقن مان ماڻهو سندن خدمت ۾ حاضر ٿيندا رهيا ۽ سندن روحاني تربيت مان فيض حاصل ڪندا رهيا.",
      },
      {
        heading: "علمي مقام ۽ قرآن پاڪ جو ترجمو",
        text: "حضرت مخدوم سرور نوح رحه جو علمي مقام به نهايت بلند هو. پاڻ برصغير جي انهن اوائلي عالمن مان هئا، جن قرآن حڪيم جو فارسي زبان ۾ ترجمو ڪيو. سندن ترجمي ۾ فارسي زبان جي سادگي، رواني ۽ معنيٰ جي وضاحت کي خاص اهميت حاصل هئي. قرآن پاڪ جي ترجمي سان گڏ پاڻ ڪيترن ئي آيتن، حروفِ مقطعات ۽ آياتِ متشابهات جي تشريح پڻ فرمائي. ان علمي خدمت سبب سندن نالو سنڌ جي علمي تاريخ ۾ هڪ نمايان حيثيت رکي ٿو.",
      },
      {
        heading: "سنڌي شاعري",
        text: "حضرت مخدوم سرور نوح رحه سنڌي شاعريءَ جي ابتدائي بزرگ شاعرن مان پڻ شمار ٿين ٿا. سندن محفوظ ڪلام ۾ روحاني عشق، دنيا کان بي رغبتي، معرفت ۽ حقيقت جا مضمون نمايان آهن. سندن مشهور بيتن مان هڪ بيت سندن روحاني مقام ۽ فاني دنيا کان بي رغبتيءَ جي ترجماني ڪري ٿو:\nنه سي جوڳي جوءِ ۾، نه سي سامي واٽ،\nڪاپڙين ڪنواٽ، مڙهي منجهاهين ويا.",
      },
      {
        heading: "وصال ۽ مزار جي منتقلي",
        text: "حضرت مخدوم سرور نوح رحه جو وصال 27 ذوالقعد 998 هجري تي ٿيو. سندن وصال کان پوءِ کين پهرين ٽوڙي، هالڪنڊي ۾ دفن ڪيو ويو. ڪجهه عرصي کان پوءِ درياهه جي پاڻيءَ جي تبديلي ۽ درياهه خوردي سبب پاڻي مقبرن ۽ مسجد شريف تائين پهچي ويو. ان صورتحال ۾ حضرت مخدوم نوح رحه جو نعش مبارڪ منتقل ڪري ٻئي هنڌ آندو ويو، جنهن کي اسلام آباد جو نالو ڏنو ويو ۽ اهو ئي علائقو اڳتي هلي هالا پراڻا جي نالي سان مشهور ٿيو. بعد ۾ حضرت مخدوم نوح رحه جي مبارڪ مزار کي موجوده هالا نوان ڏانهن منتقل ڪيو ويو.",
      },
    ],
    notes: [
      { label: "اصل نالو", value: "مخدوم لطف الله" },
      { label: "ولادت", value: "27 رمضان 911 هجري" },
      { label: "والد", value: "مخدوم نعمت الله قريشي و صديقي" },
    ],
  },
  {
    heading: "درگاهه شريف هالا جي تاريخ ۽ تعميراتي مرحلا",
    text: "سندن مقدس نسبت سان وابسته درگاهه شريف هالا صدين کان عقيدتمندن، مريدن ۽ زائرين لاءِ عقيدت ۽ روحاني فيض جو مرڪز رهي آهي. اڄ جيڪا درگاهه شريف حضرت مخدوم سرور نوح رحه جي نالي سان مشهور آهي، سا سندن مقدس نسبت ۽ روحاني فيض جو مرڪز بڻجي وئي.",
    details: [
      {
        heading: "تعمير جو تاريخي پسمنظر",
        text: "حضرت مخدوم سرور نوح رحه جي درگاهه شريف هالا جي تعمير هڪ ئي وقت ۾ مڪمل نه ٿي، پر مختلف دورن ۾ مختلف مرحلن ذريعي اها عمارت پنهنجي موجوده شڪل تائين پهتي. هر دور ۾ ڪنهن نه ڪنهن بزرگ، سجاده نشين، حڪمران يا فنڪار جو حصو شامل رهيو. ان ڪري درگاهه شريف جي عمارت رڳو هڪ مزار نه، پر سنڌ جي ڪيترن ئي تاريخي دورن جي گڏيل تعميراتي يادگار پڻ آهي. درگاهه شريف جي تعميرات ۾ وڏو قبو، ننڍو قبو، مسجد شريف، لکي دروازو ۽ وڏو ورانڊو خاص اهميت رکن ٿا.",
      },
      {
        heading: "وڏو قبو (1205 هجري)",
        text: "درگاهه شريف جي تعميراتي تاريخ ۾ سڀ کان اهم عمارت وڏو قبو آهي. حضرت مخدوم ميان مير محمد جي حياتيءَ ۾ سندن فرزند حضرت مخدوم محمد زمان وڏي قبي جي تعمير جو ڪم شروع ڪرايو. حضرت مخدوم ميان مير محمد جو وصال 1202 هجري ۾ ٿيو، جڏهن ته وڏي قبي جي تعمير 1205 هجري ۾ مڪمل ٿي. اهڙيءَ طرح وڏي قبي جي تعمير سندن حياتيءَ ۾ شروع ٿي ۽ وصال کان پوءِ ٽن سالن اندر مڪمل ٿي. تعمير ۾ مضبوط بنياد، پٿر، چوني جي مسالي ۽ روايتي طريقي سان گڏ ڪاشيءَ جي ڪم کي خاص اهميت ڏني وئي. تاريخي تعميراتي عبارت ۾ عمر ۽ جمع بن سليمان کي هن تعمير جا معمار طور ياد ڪيو ويو آهي. وڏو قبو اڄ به درگاهه شريف جي تعميراتي سڃاڻپ جو اهم حصو ۽ حضرت مخدوم سرور نوح رحه جي مزار مبارڪ جي عظمت جو نشان آهي.",
      },
      {
        heading: "ننڍو قبو (1210 هجري)",
        text: "درگاهه شريف جي تعمير جو ٻيو اهم مرحلو ننڍي قبي جي تعمير آهي. هي قبو مير فتح علي خان جي دور ۾ 1210 هجري ۾ تعمير ڪرايو ويو. ننڍي قبي جي تعمير مضبوط طرز تي ڪئي وئي ۽ ان جي سجاوٽ ۾ ڪاشيءَ جي فن کي خاص اهميت ڏني وئي. وڏي قبي سان گڏ ننڍي قبي جي موجودگيءَ درگاهه شريف جي تعميراتي حسن ۽ مجموعي شڪل ۾ وڌيڪ وقار پيدا ڪيو.",
      },
      {
        heading: "مسجد شريف (1222 هجري)",
        text: "عقيدتمندن ۽ زائرين جي وڌندڙ آمد سبب عبادت لاءِ مسجد جي ضرورت محسوس ٿي. ان مقصد لاءِ مير ڪرم علي خان جي دور ۾ 1222 هجري ۾ مسجد شريف تعمير ڪرائي وئي. مسجد جي تعمير ۾ سنڌ جي روايتي فنِ تعمير ۽ ڪاشيءَ جي هنر کي نمايان حيثيت حاصل رهي. ڪاشيءَ جي ڪم سان يوسف بن دوس محمد ڪاشيگر جو نالو وابسته آهي، جڏهن ته نقاشيءَ جو ڪم فضل بن حاجي محمود نقاش سان منسوب ڪيو ويو آهي. مسجد جي تعمير سان درگاهه شريف جو روحاني ماحول وڌيڪ وسيع ٿيو ۽ زائرين لاءِ زيارت سان گڏ نماز ۽ عبادت جي سهولت پيدا ٿي.",
      },
      {
        heading: "لکي دروازو (1231 هجري)",
        text: "درگاهه شريف جي تعميراتي تاريخ ۾ لکي دروازو پڻ هڪ اهم باب آهي. هن دروازي جي تعمير 1231 هجري سان وابسته آهي. تاريخي تفصيل موجب هي ٻاهرين دروازو درگاهه شريف جي داخلي تعميراتي نظام جو اهم حصو بڻيو. ان جي تعمير ۾ مضبوط ڀتين ۽ ڪاشيءَ جي ڪم کي خاص اهميت ڏني وئي. دروازي ۽ ان سان لاڳاپيل ڀتين درگاهه شريف جي ٻاهرين حصي کي باوقار ۽ شاندار صورت ڏني. هن تعمير سان وابسته تاريخي سلسلي ۾ مخدوم ميان پنهين لڌي جو نالو اچي ٿو، جن جو تعلق درگاهه جي سجاده نشين خاندان سان هو. لکي دروازي جي تعمير درگاهه شريف جي تاريخي عمارت جي واڌ ويجهه جو نمايان مرحلو شمار ٿئي ٿي.",
      },
      {
        heading: "درگاهه شريف جو ورانڊو (1351 هجري)",
        text: "وقت سان گڏ زائرين جي آمد وڌڻ سبب وڌيڪ وسيع جاءِ جي ضرورت محسوس ٿي. ان ضرورت کي نظر ۾ رکندي درگاهه شريف ۽ مسجد شريف جي سامهون هڪ وڏو ورانڊو تعمير ڪرايو ويو. هن ورانڊي جي تعمير جو تعلق مخدوم ظاهرالدين عرف پرو ڄام سائين سان بيان ٿيل آهي، جڏهن ته ان جي تڪميل سندن فرزند مخدوم مولوي غلام حيدر جي ڪوشش سان ٿي. ورانڊي جي تعمير 1351 هجري ۾ مڪمل ٿي. هي ورانڊو تقريباً 120 فوٽ ڊگهو، 30 فوٽ ويڪرو ۽ لڳ ڀڳ 30 فوٽ اوچو آهي. اهو زائرين ۽ جمعي جي نماز لاءِ وڏي سهولت بڻيو.",
      },
      {
        heading: "تعميراتي ۽ روحاني اهميت",
        text: "درگاهه شريف هالا جي عمارت پنهنجي تاريخي تسلسل ۾ ڪيترن ئي نسلن ۽ دورن جون يادگيريون محفوظ رکي ٿي. ان جي تعميرات ۾ پٿر، چونو، ڪاشي، نقاشي ۽ روايتي سنڌي فنِ تعمير جا مختلف نمونا نظر اچن ٿا. ان ڪري درگاهه شريف هالا روحاني عقيدت جو مرڪز هجڻ سان گڏ سنڌ جي تعميراتي، فني ۽ ثقافتي ورثي جي اهم علامت پڻ آهي.",
      },
    ],
    notes: [
      { label: "وڏو قبو", value: "1205 هجري" },
      { label: "ننڍو قبو", value: "1210 هجري" },
      { label: "مسجد شريف", value: "1222 هجري" },
      { label: "لکي دروازو", value: "1231 هجري" },
      { label: "وڏو ورانڊو", value: "1351 هجري" },
    ],
  },
  {
    heading: "علم ۽ سلسلو",
    text: "ابتدائي ديني تعليم هالڪنڊي ۾ مخدوم عربي (شاهه ڏينو) کان حاصل ڪيائون. هو سهروردي-اويسي سلسلي سان تعلق رکندڙ هئا ۽ سنڌ ۾ ”سرواري“ سلسلي جو باني ليکيا وڃن ٿا. مخدوم صاحب سنڌ جو پهريون عالم ۽ صوفي هو جنهن قرآن ڪريم جو فارسي ٻولي ۾ ترجمو ڪيو. سندن خانقاهه ۾ ديني مجلسون ۽ وعظ ٿيندا هئا، جن ۾ ان دور جا بزرگ ۽ درويش شريڪ ٿيندا هئا، ۽ گهڻن ماڻهن سندن علم ۽ روحاني فيض کان متاثر ٿي مريد ٿيا.",
    notes: [
      { label: "استاد", value: "مخدوم عربي (شاهه ڏينو)" },
      { label: "سلسلو", value: "سهروردي-اويسي، سرواري" },
      { label: "علمي ڪم", value: "قرآن ڪريم جو فارسي ترجمو" },
    ],
  },
];

const ENGLISH_TITLE = "The History of Dargah Sharif Makhdoom Sarwar Nooh";
const ENGLISH_CAPTION = "Ghaus-ul-Haq Hazrat Makhdoom Sarwar Nooh";
const ENGLISH_CHAPTERS: Chapter[] = [
  {
    heading: "Hazrat Ghaus-ul-Haq Makhdoom Sarwar Nooh (Biography)",
    text: "In Sindh's history, Hala Kandi and Hala hold an important place in learning, spirituality and literature. This region has the distinction of being the birthplace of Hazrat Ghaus-ul-Haq Makhdoom Lutfullah, known as Hazrat Makhdoom Sarwar Nooh. His spiritual influence, learning and religious service left a deep mark on Sindh's history.",
    details: [
      {
        heading: "Birth and original name",
        text: "Hazrat Makhdoom Sarwar Nooh's original name was Makhdoom Lutfullah. He was born to Makhdoom Nematullah Qureshi Siddiqui in Hala Kandi or nearby Tori village on 27 Ramadan 911 AH. Signs of unusual spiritual sensitivity and piety appeared from his childhood.",
      },
      {
        heading: "Spiritual standing",
        text: "Hazrat Makhdoom Sarwar Nooh was regarded as a great scholar, mujtahid and qutb of the tenth Islamic century. He was an Owaisi elder associated with the Suhrawardi order. People from across Sindh came to him and benefited from his spiritual guidance.",
      },
      {
        heading: "Scholarship and translation of the Quran",
        text: "Hazrat Makhdoom Sarwar Nooh was also a highly accomplished scholar and among the early scholars of the subcontinent to translate the Holy Quran into Persian. His translation was noted for its simplicity, fluency and clarity of meaning. Alongside the translation, he explained many verses, the disconnected letters and allegorical verses. This work secured him a notable place in Sindh's intellectual history.",
      },
      {
        heading: "Sindhi poetry",
        text: "Hazrat Makhdoom Sarwar Nooh is also counted among the early revered poets of Sindhi. His preserved poetry explores spiritual love, detachment from worldly life, gnosis and truth. One well-known verse reflects his spiritual station and detachment from the transient world:\nنه سي جوڳي جوءِ ۾، نه سي سامي واٽ،\nڪاپڙين ڪنواٽ، مڙهي منجهاهين ويا.",
      },
      {
        heading: "Passing and relocation of the tomb",
        text: "Hazrat Makhdoom Sarwar Nooh passed away on 27 Zil-Qadah 998 AH and was first buried in Tori, Halkandi. Later, changes in the river and river erosion brought water close to the tombs and the mosque. His remains were moved to another place called Islamabad, an area later known as Hala Purana. His blessed tomb was subsequently relocated to present-day Hala Nawan.",
      },
    ],
    notes: [
      { label: "Original name", value: "Makhdoom Lutfullah" },
      { label: "Birth", value: "27 Ramadan 911 AH" },
      { label: "Father", value: "Makhdoom Nematullah Qureshi Siddiqui" },
    ],
  },
  {
    heading: "History and construction phases of Dargah Sharif Hala",
    text: "For centuries, Dargah Sharif Hala, associated with the sacred lineage of Hazrat Makhdoom Sarwar Nooh, has been a centre of devotion and spiritual grace for followers, disciples and visitors. Today, the shrine known by his name remains a place of spiritual connection and blessing.",
    details: [
      {
        heading: "Historical background",
        text: "The construction of Dargah Sharif Hala was not completed at one time. It reached its present form through different phases across several periods, with contributions from spiritual elders, custodians, rulers and artisans. The complex is therefore not only a shrine but also a record of several historical periods in Sindh. Its major structures include the large dome, small dome, mosque, Lakhi Gate and grand veranda.",
      },
      {
        heading: "Large dome (1205 AH)",
        text: "The large dome is the most significant structure in the dargah's architectural history. During the life of Hazrat Makhdoom Mian Mir Muhammad, his son Hazrat Makhdoom Muhammad Zaman began its construction. Makhdoom Mian Mir Muhammad passed away in 1202 AH, and the dome was completed in 1205 AH, three years later. It features strong foundations, stone, lime mortar, traditional building methods and notable tilework. The historical inscription names Umar and Juma bin Suleman as its architects. The dome remains a defining feature of the shrine and reflects the stature of the tomb of Hazrat Makhdoom Sarwar Nooh.",
      },
      {
        heading: "Small dome (1210 AH)",
        text: "The small dome was another important phase in the shrine's development. It was built in 1210 AH during the rule of Mir Fateh Ali Khan. Its solid construction and decorative tilework, together with the large dome, added distinction to the overall architectural form of the dargah.",
      },
      {
        heading: "Mosque (1222 AH)",
        text: "As the number of devotees and visitors grew, a mosque was needed for worship. It was built in 1222 AH during the rule of Mir Karam Ali Khan, using traditional Sindhi architectural forms and tilework. Yusuf bin Dos Muhammad Kashigar is associated with the tilework, and the painted decoration is attributed to Fazal bin Haji Mahmood Naqqash. The mosque expanded the spiritual life of the complex and provided visitors with a place for prayer.",
      },
      {
        heading: "Lakhi Gate (1231 AH)",
        text: "Lakhi Gate is another important chapter in the dargah's architectural history. Dating to 1231 AH, this outer gate became a key part of the entrance complex. Its strong walls and tilework gave the exterior a stately appearance. The historical account associates this work with Makhdoom Mian Panheen Ladhi, who belonged to the dargah's custodial family. The gate marks a notable phase in the complex's growth.",
      },
      {
        heading: "Grand veranda (1351 AH)",
        text: "As visitor numbers increased, a larger gathering space became necessary. A grand veranda was built in front of the dargah and mosque. Its construction is associated with Makhdoom Zahiruddin, known as Pro Jam Saeen, and it was completed through the efforts of his son, Makhdoom Molvi Ghulam Haider, in 1351 AH. It is approximately 120 feet long, 30 feet wide and 30 feet high, and provides space for visitors and Friday prayers.",
      },
      {
        heading: "Architectural and spiritual significance",
        text: "Dargah Sharif Hala preserves the memory of many generations and historical periods. Its structures display stone, lime, tilework, painted decoration and traditional Sindhi architecture. Alongside its spiritual importance, the dargah is an important symbol of Sindh's architectural, artistic and cultural heritage.",
      },
    ],
    notes: [
      { label: "Large dome", value: "1205 AH" },
      { label: "Small dome", value: "1210 AH" },
      { label: "Mosque", value: "1222 AH" },
      { label: "Lakhi Gate", value: "1231 AH" },
      { label: "Grand veranda", value: "1351 AH" },
    ],
  },
  {
    heading: "Learning and spiritual order",
    text: "He received his early religious education in Halkandi from Makhdoom Arabi, also known as Shah Deno. He belonged to the Suhrawardi-Owaisi tradition and is regarded as the founder of the Sarwari order in Sindh. He translated the Holy Quran into Persian and held religious gatherings and sermons at his khanqah, inspiring many people through his knowledge and spiritual grace.",
    notes: [
      { label: "Teacher", value: "Makhdoom Arabi (Shah Deno)" },
      { label: "Order", value: "Suhrawardi-Owaisi, Sarwari" },
      { label: "Scholarly work", value: "Persian translation of the Quran" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Compact section heading                                            */
/* ------------------------------------------------------------------ */

function ArchHeading({ title, caption }: { title: string; caption: string }) {
  return (
    <div
      className="mx-auto flex max-w-5xl flex-col items-center rounded-xl px-5 py-7 text-center sm:rounded-2xl sm:px-10 sm:py-9"
      style={{ background: TEAL, border: `1px solid ${GOLD}66` }}
    >
      <h2 id="dargah-title" className="text-2xl font-bold leading-snug text-white sm:text-4xl">
        {title}
      </h2>
      <span className="mt-3 h-px w-24" style={{ background: GOLD }} aria-hidden="true" />
      <p className="mt-3 text-base sm:text-xl" style={{ color: GOLD_LIGHT }}>
        {caption}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function DargahHistory({
  ctaHref,
  ctaLabel = "وڌيڪ پڙهو",
}: {
  /** Optional: button tab dikhega jab link diya jaye */
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const title = isEnglish ? ENGLISH_TITLE : TITLE;
  const caption = isEnglish ? ENGLISH_CAPTION : CAPTION;
  const chapters = isEnglish ? ENGLISH_CHAPTERS : CHAPTERS;

  return (
    <section
      dir={isEnglish ? "ltr" : "rtl"}
      lang={isEnglish ? "en" : "sd"}
      aria-labelledby="dargah-title"
      className={`${isEnglish ? "font-[family-name:var(--font-english-body)]" : "font-[family-name:var(--font-sindhi)]"} w-full overflow-x-hidden bg-white px-4 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-14 lg:px-16`}
      style={{ color: TEAL }}
    >
      <ArchHeading title={title} caption={caption} />

      <div className="mx-auto mt-8 max-w-7xl sm:mt-16">
        {chapters.map((c, i) => (
          <article
            key={c.heading}
            className="grid gap-5 py-7 sm:py-9 md:grid-cols-[minmax(0,1fr)_320px] md:gap-16"
            style={{
              borderTop: i === 0 ? "none" : `1px solid ${GOLD}66`,
            }}
          >
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold sm:text-2xl lg:text-3xl">
                <span
                  className="h-2.5 w-2.5 shrink-0 rotate-45"
                  style={{ background: GOLD }}
                  aria-hidden="true"
                />
                {c.heading}
              </h3>
              <p className="mt-3 text-[17px] leading-[2.05] sm:mt-4 sm:text-[19px] sm:leading-[2.15] lg:text-[20px]">
                {c.text}
              </p>
              {c.details && (
                <>
                  {c.details.slice(0, 1).map((detail) => (
                    <section key={detail.heading} className="mt-5">
                      <h4 className="text-lg font-bold sm:text-xl">{detail.heading}</h4>
                      <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.95] sm:text-[18px] sm:leading-[2.05]">
                        {detail.text}
                      </p>
                    </section>
                  ))}
                  {c.details.length > 2 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedChapter((expanded) =>
                            expanded === c.heading ? null : c.heading,
                          )
                        }
                        aria-expanded={expandedChapter === c.heading}
                        className={`mt-4 rounded-md border px-5 py-2 text-base font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                          expandedChapter === c.heading
                            ? "bg-[#123a3a] text-white"
                            : "bg-transparent text-[#123a3a] hover:bg-[#123a3a] hover:text-white"
                        }`}
                        style={{ borderColor: TEAL, outlineColor: TEAL }}
                      >
                        {expandedChapter === c.heading
                          ? isEnglish ? "Read less" : "گهٽ پڙهو"
                          : isEnglish ? "Read more" : "وڌيڪ پڙهو"}
                      </button>
                      {expandedChapter === c.heading && c.details.slice(1).map((detail) => (
                        <section key={detail.heading} className="mt-5">
                          <h4 className="text-lg font-bold sm:text-xl">{detail.heading}</h4>
                          <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.95] sm:text-[18px] sm:leading-[2.05]">
                            {detail.text}
                          </p>
                        </section>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>

            {/* hashiya: kinare ke notes */}
            <dl
              className="grid grid-cols-2 gap-x-4 gap-y-4 self-start rounded-xl bg-[#f7f4ee] p-4 pr-5 md:block md:space-y-4 md:rounded-none md:bg-transparent md:p-0 md:pr-6"
              style={{ borderRight: `3px solid ${GOLD}` }}
            >
              {c.notes.map((n) => (
                <div
                  key={n.label}
                  className="[&:last-child:nth-child(odd)]:col-span-2 md:[&:last-child:nth-child(odd)]:col-span-1"
                >
                  <dt
                    className="text-[14px] md:text-[15px]"
                    style={{ color: GOLD_DARK }}
                  >
                    {n.label}
                  </dt>
                  <dd className="mt-0.5 text-[16px] font-bold leading-snug md:text-[18px]">
                    {n.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}

        {ctaHref && (
          <div className="mt-6 text-center">
            <a
              href={ctaHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-8 py-3 sm:w-auto text-lg font-bold transition-colors hover:bg-[#123a3a] hover:text-[#fddf96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderColor: TEAL, color: TEAL, outlineColor: TEAL }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}