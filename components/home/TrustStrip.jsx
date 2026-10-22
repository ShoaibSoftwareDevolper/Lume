import { trustItems } from "@/data/trust";

export default function TrustStrip() {
  return (
    <section className="w-full">
      <div className="w-full px-0 min-[1440px]:max-w-[1560px] min-[1440px]:mx-auto min-[1440px]:px-8 xl:min-[1440px]:px-10">
        <div className="w-full bg-[#f5f3ef] h-12 sm:h-14 lg:h-16 flex items-center overflow-hidden select-none">
          <div className="animate-marquee flex items-center">
            <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 shrink-0">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-8 sm:gap-12 shrink-0">
                  <span className="font-sans text-xs sm:text-[14px] text-[#181818] font-normal whitespace-nowrap">
                    {item}
                  </span>
                  <svg
                    className="w-2.5 h-2.5 fill-[#181818] shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 shrink-0" aria-hidden="true">
              {trustItems.map((item, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
                  <span className="font-sans text-xs sm:text-[14px] text-[#181818] font-normal whitespace-nowrap">
                    {item}
                  </span>
                  <svg
                    className="w-2.5 h-2.5 fill-[#181818] shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
