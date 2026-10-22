"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import { productsData } from "@/data/products";

const searchSuggestions = [
  "EARRINGS",
  "HOOPS",
  "NECKLACES",
  "RINGS",
  "GOLD",
  "DIAMONDS",
];

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useShop();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeSearch();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      setQuery("");
    }
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? productsData.filter((item) =>
        item.name.toLowerCase().includes(trimmedQuery)
      )
    : productsData.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start">
      <div
        onClick={closeSearch}
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
        aria-hidden="true"
      />

      <div className="relative w-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] border-b border-[#e5e5e5] z-10 font-sans max-h-[85vh] flex flex-col">
        <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-10 pt-6 pb-4">
          <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
            <div className="flex items-center gap-3 flex-1">
              <svg
                className="w-5 h-5 text-[#737373] shrink-0"
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
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewelry, collections, metals..."
                className="w-full bg-transparent text-base sm:text-xl font-serif text-[#181818] placeholder:text-[#999999] focus:outline-none tracking-wide"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="p-1 text-[#737373] hover:text-black transition-colors text-xs uppercase font-sans tracking-wider"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-[#e5e5e5] shrink-0">
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="flex items-center gap-1.5 text-xs tracking-[0.16em] uppercase text-[#181818] hover:opacity-60 transition-opacity cursor-pointer font-medium"
              >
                <span>Close</span>
                <span className="hidden sm:inline text-[10px] text-[#737373]">
                  [ESC]
                </span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-4 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#737373] shrink-0 font-medium mr-1">
              Suggestions:
            </span>
            {searchSuggestions.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className={`text-[10px] sm:text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-full border transition-colors cursor-pointer shrink-0 font-sans ${
                  query.toUpperCase() === term
                    ? "bg-black text-white border-black"
                    : "bg-[#fafafa] text-[#181818] border-[#e5e5e5] hover:border-black"
                }`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 lg:px-10 pb-8 max-w-[1200px] w-full mx-auto">
          <div className="pt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#737373]">
                {trimmedQuery
                  ? `Search Results (${filteredProducts.length})`
                  : "Trending Discoveries"}
              </h3>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.slug || product.id}
                    href={`/product/${product.slug || product.id}`}
                    onClick={closeSearch}
                    className="group block"
                  >
                    <div className="relative w-full aspect-square bg-[#fafafa] flex items-center justify-center p-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="mt-2.5">
                      <h4 className="font-serif text-xs sm:text-sm text-[#181818] line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-[11px] font-sans text-[#737373] tracking-wider mt-0.5">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="font-serif text-base text-[#181818]">
                  No jewelry found matching &ldquo;{query}&rdquo;
                </p>
                <p className="font-sans text-xs text-[#737373] mt-1.5">
                  Try checking your spelling or explore suggestions above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
