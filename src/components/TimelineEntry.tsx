import type { ReactNode } from "react";

type TimelineEntryProps = {
  year: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  last?: boolean;
};

export default function TimelineEntry({
  year,
  title,
  children,
  icon,
  last = false,
}: TimelineEntryProps) {
  return (
    <div className="md:grid md:grid-cols-[108px_32px_1fr]">
      <div className="hidden md:block pt-1 text-right pr-1">
        <span className="text-[13px] tracking-wide text-maroon font-medium">
          {year}
        </span>
      </div>
      <div className="hidden md:flex md:justify-center relative">
        {!last && (
          <div className="absolute top-0 bottom-0 w-px bg-gold/30" />
        )}
        <span className="w-2.5 h-2.5 rounded-full bg-gold mt-1.5 relative z-10 ring-4 ring-parchment" />
      </div>
      <div className={last ? "pb-2" : "pb-9 sm:pb-12 md:pb-14"}>
        <div className="md:hidden text-[12px] sm:text-[13px] tracking-wide text-maroon font-medium mb-1">
          {year}
        </div>
        <div className="flex items-start gap-3 sm:gap-4 mb-2">
          {icon && (
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 -mt-1" aria-hidden="true">
              {icon}
            </div>
          )}
          <h3 className="font-[family-name:var(--font-display)] text-[21px] sm:text-[26px] text-indigo leading-snug pt-1">
            {title}
          </h3>
        </div>
        <div className="text-[15px] sm:text-[17px] leading-[1.7] sm:leading-[1.75] text-ink/85 max-w-full sm:max-w-[62ch] space-y-3 sm:space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}