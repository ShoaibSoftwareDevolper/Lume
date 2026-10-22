import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articlesData } from "@/data/articles";

export const metadata = {
  title: "The Journal | Lume Fine Jewelry",
  description: "Read curated articles on fine jewelry care, ethical metals, and timeless styling.",
};

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-white text-[#181818] flex flex-col font-sans">
      <AnnouncementBar />
      <Navbar />

      <section className="w-full bg-[#f5f3ef] py-14 sm:py-20 px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#737373] block mb-2">
            Editorial
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-[0.04em] text-[#181818]">
            The Journal
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] mt-3">
            Explorations in jewelry craftsmanship, conscious materials, and timeless styling.
          </p>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto px-6 py-14 sm:py-20 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="border border-[#e5e5e5] p-7 sm:p-9 flex flex-col justify-between hover:border-black transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#737373] uppercase tracking-wider mb-4 pb-3 border-b border-[#f0f0f0]">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181818] leading-snug mb-3">
                  {article.title}
                </h2>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                <span className="text-[10px] text-[#999999] tracking-wider uppercase">
                  {article.date}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#181818] hover:underline cursor-pointer">
                  Read Article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
