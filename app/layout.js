import { Cormorant_Garamond, Inter } from "next/font/google";
import { ShopProvider } from "@/context/ShopContext";
import CartSidebar from "@/components/overlays/CartSidebar";
import WishlistSidebar from "@/components/overlays/WishlistSidebar";
import AccountModal from "@/components/overlays/AccountModal";
import SearchModal from "@/components/overlays/SearchModal";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Lume | Fine Jewelry Collection",
  description: "Discover thoughtfully crafted jewelry designed to elevate everyday moments and mark life's most meaningful occasions.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#171717]">
        <ShopProvider>
          {children}
          <CartSidebar />
          <WishlistSidebar />
          <AccountModal />
          <SearchModal />
        </ShopProvider>
      </body>
    </html>
  );
}
