import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import ProductDetail from "@/components/product/ProductDetail";
import Footer from "@/components/layout/Footer";
import { productsData } from "@/data/products";

export function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product =
    productsData.find((p) => p.slug === slug) ||
    productsData.find((p) => p.id === slug) ||
    productsData[0];

  return (
    <main className="min-h-screen bg-white text-[#181818] flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}
