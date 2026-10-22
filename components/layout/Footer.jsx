import Link from "next/link";
import { footerColumns, footerBrand } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="w-full px-6 lg:px-8 xl:px-10">
        <div className="w-full text-center my-8 sm:my-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] tracking-[0.14em] font-medium text-black uppercase">
            TIMELESS JEWELRY, CRAFTED WITH INTEGRITY
          </h2>
        </div>

        <div className="border-t border-[#e5e5e5] pt-8 sm:pt-12">
          <div className="hidden lg:grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-2"></div>
            <div className="col-span-2">
              <h3 className="font-sans text-xs font-semibold text-[#181818] tracking-wider uppercase mb-5">
                {footerColumns[0].title}
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#737373] tracking-wider uppercase">
                {footerColumns[0].links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-black transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="font-sans text-xs font-semibold text-[#181818] tracking-wider uppercase mb-5">
                {footerColumns[1].title}
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#737373] tracking-wider uppercase">
                {footerColumns[1].links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-black transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="font-sans text-xs font-semibold text-[#181818] tracking-wider uppercase mb-5">
                {footerColumns[2].title}
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#737373] tracking-wider uppercase">
                {footerColumns[2].links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-black transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="font-sans text-xs font-semibold text-[#181818] tracking-wider uppercase mb-5">
                {footerColumns[3].title}
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#737373] tracking-wider uppercase">
                {footerColumns[3].links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-black transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 text-right">
              <h3 className="font-sans text-xs font-semibold text-[#181818] tracking-wider uppercase mb-5">
                {footerColumns[4].title}
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#737373] tracking-wider uppercase">
                {footerColumns[4].links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-black transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((col, index) => (
              <div
                key={col.title}
                className={index === 4 ? "col-span-2 sm:col-span-1" : ""}
              >
                <h3 className="font-sans text-xs font-semibold text-[#181818] tracking-wider uppercase mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 font-sans text-xs text-[#737373] tracking-wider uppercase">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-black transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mt-10 sm:mt-14 mb-8 sm:mb-10">
            <div className="w-full lg:w-[38%]">
              <Link href="/" className="inline-block select-none group">
                <span className="font-serif text-[68px] sm:text-[92px] lg:text-[116px] font-light leading-none tracking-[0.18em] text-[#181818] uppercase block">
                  {footerBrand.name}
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.45em] text-[#737373] uppercase block mt-2 font-normal">
                  Fine Jewelry Atelier
                </span>
              </Link>
            </div>
            <div className="w-full lg:w-[36%] pt-1 sm:pt-4">
              <p className="font-sans text-xs sm:text-[14px] text-[#737373] leading-relaxed">
                {footerBrand.description}
              </p>
            </div>
            <div className="hidden lg:block lg:w-[26%]"></div>
          </div>

          <div className="border-t border-[#e5e5e5] py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#737373] tracking-wider uppercase">
            <span>{footerBrand.copyright}</span>
            <span>{footerBrand.perks}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
