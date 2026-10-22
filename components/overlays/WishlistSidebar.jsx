"use client";

import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";

export default function WishlistSidebar() {
  const {
    wishlist,
    isWishlistOpen,
    closeWishlist,
    removeFromWishlist,
    addToCart,
  } = useShop();

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
        isWishlistOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <div
        onClick={closeWishlist}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${
          isWishlistOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        className={`relative w-full max-w-[440px] bg-white h-full shadow-[0_4px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between z-10 font-sans transition-transform duration-300 ease-in-out ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-2">
            <h2 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#181818]">
              Wishlist
            </h2>
            <span className="text-xs text-[#737373]">({wishlist.length})</span>
          </div>
          <button
            type="button"
            onClick={closeWishlist}
            aria-label="Close wishlist"
            className="p-1.5 text-[#181818] hover:opacity-60 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 divide-y divide-[#f0f0f0]">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <svg className="w-7 h-7 stroke-[#181818]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#181818]">Your wishlist is empty</p>
              <p className="text-xs text-[#737373] mt-1 max-w-[220px]">
                Save pieces you cherish to revisit anytime.
              </p>
              <button
                type="button"
                onClick={closeWishlist}
                className="mt-6 px-6 py-2.5 bg-[#181818] hover:bg-black text-white text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
              >
                Discover Pieces
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div key={item.id || item.slug} className="py-4.5 flex gap-4 first:pt-0 last:pb-0">
                <div className="relative w-20 h-20 bg-[#f5f3ef] shrink-0 overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeWishlist}
                        className="text-xs font-semibold text-[#181818] uppercase tracking-wide truncate hover:opacity-70 transition-opacity"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(item.slug || item.id)}
                        aria-label="Remove from wishlist"
                        className="text-[#737373] hover:text-black transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <span className="text-xs font-semibold text-[#181818] block mt-1">
                      {item.price}
                    </span>
                  </div>

                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(item);
                        removeFromWishlist(item.slug || item.id);
                      }}
                      className="w-full h-8 bg-[#181818] hover:bg-black text-white text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors flex items-center justify-center"
                    >
                      Add To Bag
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="px-6 py-4 border-t border-[#e5e5e5] bg-white">
            <button
              type="button"
              onClick={closeWishlist}
              className="w-full h-11 border border-[#e5e5e5] text-xs font-medium uppercase tracking-[0.14em] text-[#181818] hover:border-black transition-colors flex items-center justify-center"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
