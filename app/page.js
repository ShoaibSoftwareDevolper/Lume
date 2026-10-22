import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ProductToolbar from "@/components/product/ProductToolbar";
import ProductGrid from "@/components/product/ProductGrid";
import Pagination from "@/components/product/Pagination";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#181818] flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProductToolbar />
      <ProductGrid />
      <Pagination />
      <Newsletter />
      <Footer />
    </main>
  );
}
