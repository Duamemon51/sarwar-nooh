function LineageFeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M12 8.2v3M12 11.2 6 15.8M12 11.2l6 4.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScholarshipFeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
      <path
        d="M4 5.5c2.5-1 5-1 8 .5 3-1.5 5.5-1.5 8-.5v13c-2.5-1-5-1-8 .5-3-1.5-5.5-1.5-8-.5v-13Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M12 6v13" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function SajjadaFeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17" cy="9" r="1.9" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M3.5 19c.5-3.2 2.6-5 5.5-5s5 1.8 5.5 5M15 19c.3-2.4 1.7-3.8 4-3.8s3.7 1.4 4 3.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UrsFeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6.2 6.2l1.4 1.4M16.4 16.4l1.4 1.4M6.2 17.8l1.4-1.4M16.4 7.6l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeritageFeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="m3.5 15 4.5-4.5 3 3 4-4.5 5.5 6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="8" cy="9" r="1.1" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

const features = [
  {
    icon: <LineageFeatureIcon />,
    title: "Ancestral Lineage",
    desc: "A Siddiqui family tracing descent to Hazrat Umar al-Siddiq",
  },
  {
    icon: <ScholarshipFeatureIcon />,
    title: "Scholarship",
    desc: "First Persian translation of the Qur'an by a Sindhi scholar",
  },
  {
    icon: <SajjadaFeatureIcon />,
    title: "The Sarwari Order",
    desc: "A Suhrawardi lineage of faith carried forward since 1590",
  },
  {
    icon: <UrsFeatureIcon />,
    title: "The Dargah at Hala",
    desc: "A shrine of pilgrimage for over four centuries",
  },
  {
    icon: <HeritageFeatureIcon />,
    title: "Living Legacy",
    desc: "Sajjada Nasheen guardianship, poetry, and civil honour",
  },
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-indigo/10" style={{ backgroundColor: "#FAF9F7" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col items-center text-center px-3 ${
                i !== 0 ? "md:border-l md:border-indigo/10" : ""
              }`}
            >
              <div className="text-indigo mb-3">{f.icon}</div>
              <h3 className="text-[11px] sm:text-[12px] font-semibold tracking-[0.12em] uppercase text-indigo mb-1.5">
                {f.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] leading-snug text-ink/60 max-w-[16ch]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}