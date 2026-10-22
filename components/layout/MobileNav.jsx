"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const { openCart, openWishlist, openAccount, openSearch, cartCount, wishlist } = useShop();

  const categories = [
    { label: "SHOP ALL", href: "/" },
    { label: "NECKLACES", href: "/" },
    { label: "EARRINGS", href: "/product/bold-huggie-hoops" },
    { label: "BRACELETS", href: "/" },
    { label: "RINGS", href: "/" },
    {
      label: "GIFTS",
      href: "/",
      badge: "Discover Advent & Baubles",
    },
  ];

  const trendingItems = [
    {
      title: "T-bar Jewellery",
      image: "/images/products/necklace-layered.png",
      href: "/",
    },
    {
      title: "New: Molten Teardrop",
      image: "/images/products/necklace-teardrop.png",
      href: "/",
    },
    {
      title: "Advent & Baubles",
      image: "/images/products/earrings-dangle-hoop.png",
      href: "/product/bold-huggie-hoops",
    },
  ];

  const secondaryLinks = [
    { label: "Piercing & Welding", href: "#" },
    { label: "Our Stores", href: "#" },
    { label: "Blog", href: "/journal" },
    { label: "Our Story", href: "/our-story" },
  ];

  const scrollTrending = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -160 : 160;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden flex items-center gap-1">
      <button
        type="button"
        aria-label="Open search"
        onClick={openSearch}
        className="p-2 text-[#181818] focus:outline-none cursor-pointer hover:opacity-60 transition-opacity"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="p-2 text-[#181818] focus:outline-none cursor-pointer hover:opacity-60 transition-opacity"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 font-sans ${
          isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        <aside
          className={`relative w-full max-w-[340px] bg-white h-full shadow-2xl flex flex-col justify-between z-10 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e5e5]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl tracking-[0.2em] font-light uppercase text-black"
            >
              Lume
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-1.5 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 pt-4 pb-1">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openSearch();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#fafafa] border border-[#e5e5e5] text-xs text-[#737373] tracking-wider uppercase font-sans cursor-pointer hover:border-black transition-colors"
            >
              <span>Search jewelry...</span>
              <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            <nav className="divide-y divide-[#f0f0f0]">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#181818] group-hover:text-black">
                      {cat.label}
                    </span>
                    {cat.badge && (
                      <span className="text-[10px] bg-[#9fc1d3]/40 text-[#181818] px-2.5 py-0.5 rounded-full font-medium">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <svg
                    className="w-4 h-4 text-[#737373] group-hover:text-black transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </nav>

            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-[#737373] uppercase tracking-[0.16em]">
                  Trending
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollTrending("left")}
                    aria-label="Scroll trending left"
                    className="p-1 text-[#737373] hover:text-black transition-colors cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTrending("right")}
                    aria-label="Scroll trending right"
                    className="p-1 text-[#737373] hover:text-black transition-colors cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
              >
                {trendingItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="w-[130px] shrink-0 block group cursor-pointer"
                  >
                    <div className="relative w-full h-[155px] bg-[#f5f3ef] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="130px"
                        className="object-contain p-2"
                      />
                    </div>
                    <span className="font-serif text-xs text-[#181818] mt-2 block line-clamp-1">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#f0f0f0] space-y-3 font-sans">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xs uppercase tracking-[0.14em] text-[#181818] hover:text-[#737373] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-6 border-t border-[#e5e5e5] bg-[#fafafa] flex items-center justify-between text-[11px] sm:text-xs tracking-wider uppercase font-sans">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openAccount();
              }}
              className="flex items-center gap-1.5 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer font-medium"
            >
              <svg
                viewBox="0 0 109.68 122.88"
                className="w-3.5 h-3.5 shrink-0 fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.02,90.59c9.73,9.45,19.51,14.73,29.37,15.03c9.88,0.3,19.97-4.42,30.31-14.97 c-1.5-0.35-3.1-0.69-4.79-1.03l0,0.01l-0.24-0.05c-2.96-0.59-8.37-1.68-11.78-3.75c-1.94-1.18-3.04-2.33-3.01-3.91 c-2.56,1.53-5.25,2.51-8.01,2.9c-4.21,0.6-8.53-0.19-12.77-2.5c0.21,1.77-0.77,3.01-2.65,4.15c-2.92,1.77-7.61,2.54-11.04,3.1 c-0.8,0.13-1.53,0.25-2.23,0.39C27.08,90.15,26.03,90.36,25.02,90.59L25.02,90.59z M38.06,25.98 c6.61,11.54,19.36,19.25,43.05,20.13c0.69,2.01,0.47,4.12,0,6.24c-9.72,33.2-34.62,42.57-51.83,8.7l-2.58-6.92 c-5.27-10.77,4.55-6.38,8.14-14.01l1.51-6.63L38.06,25.98L38.06,25.98z M84.7,58.7c9.06-35.18,0.08-50.06-16.43-52.87 C64.76,1.99,58.22,0.25,53.6,0C13.7,2.02,11.88,44.53,21.87,72.53l9.8-2.16c2.89,4.18,5.93,7.41,9.04,9.75l0.1,0.16 c1.02,1.68,0.41,2.82-0.92,3.62c-2.41,1.47-6.78,2.18-9.98,2.7c-0.91,0.15-1.74,0.28-2.32,0.4c-10.48,2.05-17.33,4.49-21.66,9.6 C1.62,101.69,0,109.22,0,121.39c0,0.83,0.67,1.49,1.49,1.49h106.7c0.83,0,1.49-0.67,1.49-1.49c0-12.5-1.71-20.02-6.3-25.07 c-4.57-5.03-11.8-7.39-22.9-9.62l0,0l0-0.01l-0.24-0.05c-2.79-0.56-7.89-1.58-10.83-3.36c-1.5-0.91-2.35-2.05-1.55-3.45 c0.88-0.7,1.74-1.47,2.58-2.31c4.35-4.32,8.17-10.46,11.12-18.12L84.7,58.7L84.7,58.7z M88.67,91.67 c-11.57,12.35-23.02,17.86-34.38,17.52c-11.36-0.34-22.46-6.54-33.33-17.6c-5.84,1.62-9.97,3.68-12.74,6.94 c-3.63,4.28-5.1,10.82-5.22,21.36h103.69c-0.13-10.81-1.66-17.33-5.51-21.57C98.41,95.26,94.34,93.29,88.67,91.67L88.67,91.67z"
                />
              </svg>
              <span>Account</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openWishlist();
              }}
              className="flex items-center gap-1.5 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer font-medium"
            >
              <svg
                viewBox="0 0 122.88 107.41"
                className="w-3.5 h-3.5 shrink-0 fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z M39.31,51.36 c-1.11-1.07-1.69-2.49-1.72-3.93c-0.03-1.43,0.49-2.88,1.56-3.99c1.07-1.11,2.49-1.69,3.92-1.72c1.43-0.03,2.88,0.49,3.99,1.56 l8.52,8.16l20.26-18.82l0.69,0.52l-0.69-0.52c0.05-0.07,0.12-0.13,0.19-0.18c1.14-0.98,2.57-1.43,3.97-1.36v0l0.07,0.01 c1.41,0.09,2.78,0.72,3.8,1.85c1.03,1.15,1.5,2.61,1.42,4.04h0l-0.01,0.07c-0.09,1.38-0.7,2.73-1.79,3.74L59.39,63.25l0,0 c-0.04,0.05-0.09,0.1-0.14,0.14c-1.08,0.95-2.44,1.41-3.79,1.39c-1.36-0.02-2.72-0.54-3.78-1.56L39.31,51.36L39.31,51.36z"
                />
              </svg>
              <span>Wishlist {wishlist.length > 0 && `(${wishlist.length})`}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openCart();
              }}
              className="flex items-center gap-1.5 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer font-medium"
            >
              <svg
                viewBox="0 0 93.81 122.88"
                className="w-3.5 h-3.5 shrink-0 fill-current"
              >
                <path
                  d="M28.98,31.32v-9.74h-0.01c0-4.72,1.94-9.02,5.05-12.13c3.12-3.12,7.41-5.06,12.13-5.06V4.4h0.03V4.39 c4.72,0,9.02,1.94,12.13,5.05c3.12,3.12,5.05,7.41,5.06,12.13h-0.01v9.86c-2.09,0.69-3.6,2.65-3.6,4.97c0,2.89,2.34,5.24,5.24,5.24 c2.89,0,5.24-2.35,5.24-5.24c0-1.88-0.99-3.52-2.47-4.44V21.57h-0.01c-0.01-5.93-2.43-11.32-6.33-15.22 c-3.91-3.91-9.31-6.34-15.24-6.34V0l-0.03,0v0.01c-5.93,0-11.32,2.43-15.22,6.33c-3.91,3.91-6.34,9.31-6.34,15.24h-0.01v10.65 c-1.26,0.96-2.08,2.47-2.08,4.17c0,2.89,2.35,5.24,5.24,5.24c2.89,0,5.24-2.35,5.24-5.24C32.98,33.94,31.27,31.88,28.98,31.32 L28.98,31.32L28.98,31.32z M10.99,31.49h6.56c-0.86,1.61-1.36,3.46-1.36,5.42c0,0.68,0.06,1.34,0.17,1.98h-3.23l-5.56,76.59h78.67 l-5.56-76.59h-4.6c0.11-0.64,0.17-1.31,0.17-1.98c0-1.96-0.49-3.8-1.36-5.42h7.92c1.41,0,2.64,0.57,3.55,1.48 c0.88,0.88,1.44,2.07,1.53,3.36l5.89,81.19c0.01,0.16,0.02,0.28,0.02,0.35c0,1.39-0.59,2.62-1.5,3.52c-0.85,0.83-2,1.38-3.24,1.47 c-0.16,0.01-0.29,0.02-0.36,0.02H5.1c-0.07,0-0.2-0.01-0.36-0.02c-1.23-0.09-2.39-0.63-3.24-1.47c-0.92-0.9-1.5-2.13-1.5-3.53 c0-0.07,0.01-0.18,0.02-0.35l5.89-81.19c0.09-1.29,0.65-2.48,1.53-3.36C8.36,32.06,9.59,31.49,10.99,31.49L10.99,31.49z M37.81,31.49h16.83c-0.86,1.61-1.36,3.46-1.36,5.42c0,0.68,0.06,1.34,0.17,1.98H38.99c0.11-0.64,0.17-1.31,0.17-1.98 C39.17,34.95,38.67,33.11,37.81,31.49L37.81,31.49z"
                />
              </svg>
              <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
