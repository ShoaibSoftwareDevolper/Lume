import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { storyPillars } from "@/data/story";

export const metadata = {
  title: "Our Story | Lume Fine Jewelry",
  description: "Discover the ethos, craftsmanship, and conscious integrity behind Lume Fine Jewelry.",
};

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white text-[#181818] flex flex-col font-sans">
      <AnnouncementBar />
      <Navbar />

      <section className="w-full bg-[#f5f3ef] py-16 sm:py-24 px-6 lg:px-12 text-center">
        <div className="max-w-[800px] mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#737373] block mb-3">
            Since 2018
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-[0.04em] text-[#181818] leading-tight">
            Modern Heirlooms for Everyday Moments
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] mt-5 leading-relaxed max-w-[580px] mx-auto">
            Lume was founded on a simple belief: fine jewelry should not be reserved for rare occasions. We craft timeless pieces meant to be lived in, layered, and passed down.
          </p>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#737373] block mb-3">
              The Atelier
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#181818] leading-snug">
              Artisan Craft Meets Conscious Design
            </h2>
            <div className="mt-6 space-y-4 text-xs sm:text-[13px] text-[#737373] leading-relaxed">
              <p>
                From initial hand sketch to final polish, each Lume silhouette balances architectural proportion with refined organic elegance. We work directly with master jewelers who bring centuries of heritage techniques into contemporary silhouettes.
              </p>
              <p>
                By cutting out traditional showroom middlemen, we offer uncompromising fine jewelry at honest pricing, investing deeply into sustainable practices and fair artisan wages.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f3ef] p-8 sm:p-12 border border-[#eae6df]">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] mb-6">
              Our Commitments
            </h3>
            <div className="space-y-6">
              {storyPillars.map((pillar) => (
                <div key={pillar.title} className="border-b border-[#e5e1d8] pb-6 last:border-b-0 last:pb-0">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#181818] mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
