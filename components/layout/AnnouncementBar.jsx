import Link from "next/link";
import { announcementData } from "@/data/navigation";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-[#181818] text-white text-[11px] sm:text-xs tracking-[0.08em] uppercase"
    >
      <div className="w-full px-6 lg:px-8 xl:px-10 h-10 sm:h-11 flex items-center justify-between font-sans">
        <div className="truncate">
          <span>{announcementData.contactText} </span>
          <Link
            href={`tel:${announcementData.phone.replace(/\s+/g, "")}`}
            className="underline underline-offset-2 hover:text-neutral-300 transition-colors"
          >
            {announcementData.phone}
          </Link>
        </div>
        <div className="hidden sm:block text-center">
          <span>{announcementData.promoPrefix} </span>
          <Link
            href="/"
            className="underline underline-offset-2 font-medium hover:text-neutral-300 transition-colors"
          >
            {announcementData.promoAction}
          </Link>
        </div>
        <div className="text-right">
          <span>{announcementData.languageLabel} </span>
          <button
            type="button"
            className="underline underline-offset-2 hover:text-neutral-300 transition-colors uppercase"
          >
            {announcementData.language}
          </button>
        </div>
      </div>
    </aside>
  );
}
