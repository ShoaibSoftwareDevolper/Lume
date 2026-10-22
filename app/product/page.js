import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import ProductDetail from "@/components/product/ProductDetail";
import Footer from "@/components/layout/Footer";
import { productsData } from "@/data/products";

export default function DefaultProductPage() {
  const product = productsData[0];

  return (
    <main className="min-h-screen bg-white text-[#181818] flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}
