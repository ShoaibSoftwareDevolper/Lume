"use client";

import Link from "next/link";
import { mainNavLinks, secondaryNavLinks } from "@/data/navigation";
import MobileNav from "@/components/layout/MobileNav";
import { useShop } from "@/context/ShopContext";

export default function Navbar() {
  const { openCart, openWishlist, openAccount, openSearch, cartCount, wishlist } = useShop();

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1560px] mx-auto px-6 lg:px-8 xl:px-10 h-18 lg:h-[88px] flex items-center justify-between">
        <div className="hidden lg:flex flex-1 items-center justify-start gap-4 xl:gap-5">
          {mainNavLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] xl:text-xs tracking-[0.14em] uppercase text-black hover:opacity-65 transition-opacity font-medium font-sans"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex-1 lg:flex-initial text-left lg:text-center">
          <Link
            href="/"
            className="inline-flex flex-col items-start lg:items-center group"
          >
            <span className="font-serif text-[28px] sm:text-[34px] tracking-[0.28em] font-light leading-none text-[#181818] uppercase pl-[0.28em]">
              LUME
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.42em] uppercase font-sans text-[#737373] mt-1 pl-[0.42em] font-normal">
              Fine Jewelry
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-4 xl:gap-5">
          {secondaryNavLinks.map((item) => {
            if (item.label === "SEARCH") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={openSearch}
                  className="text-[11px] xl:text-xs tracking-[0.14em] uppercase text-black hover:opacity-65 transition-opacity font-medium font-sans cursor-pointer"
                >
                  SEARCH
                </button>
              );
            }

            if (item.label === "CART") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={openCart}
                  className="text-[11px] xl:text-xs tracking-[0.14em] uppercase text-black hover:opacity-65 transition-opacity font-medium font-sans cursor-pointer"
                >
                  CART {cartCount > 0 && `(${cartCount})`}
                </button>
              );
            }

            if (item.label === "WISHLIST") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={openWishlist}
                  className="text-[11px] xl:text-xs tracking-[0.14em] uppercase text-black hover:opacity-65 transition-opacity font-medium font-sans cursor-pointer"
                >
                  WISHLIST {wishlist.length > 0 && `(${wishlist.length})`}
                </button>
              );
            }

            if (item.label === "ACCOUNT") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={openAccount}
                  className="text-[11px] xl:text-xs tracking-[0.14em] uppercase text-black hover:opacity-65 transition-opacity font-medium font-sans cursor-pointer"
                >
                  ACCOUNT
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] xl:text-xs tracking-[0.14em] uppercase text-black hover:opacity-65 transition-opacity font-medium font-sans"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
