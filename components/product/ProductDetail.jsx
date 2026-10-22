"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";

export default function ProductDetail({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const materials = [
    { name: "Sterling Silver", color: "#dcdcdc" },
    { name: "18k Gold Vermeil", color: "#e5c158" },
    { name: "14k Rose Gold", color: "#deb0a0" },
    { name: "White Gold", color: "#ebebeb" },
  ];

  const [selectedMaterial, setSelectedMaterial] = useState(materials[1]);
  const [isAdded, setIsAdded] = useState(false);

  const isFavorited = isInWishlist(product.slug || product.id);

  const handleAddToBag = () => {
    addToCart(product, selectedMaterial.name);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <section className="w-full bg-white">
      <div className="w-full min-h-[calc(100vh-140px)] flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 bg-[#f5f3ef] min-h-[420px] sm:min-h-[520px] lg:min-h-[700px] flex items-center justify-center p-8 sm:p-14 lg:p-20">
          <div className="relative w-[70%] sm:w-[60%] lg:w-[58%] aspect-[4/3] flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-24 py-12 lg:py-20">
          <div className="max-w-[480px] w-full">
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-sans text-base sm:text-lg font-medium tracking-[0.06em] text-[#181818] uppercase">
                {product.name}
              </h1>
              <div className="flex items-center gap-1 shrink-0 text-xs font-sans text-[#181818] cursor-pointer border-b border-[#181818] pb-0.5">
                <span>{product.rating || "4.8"}</span>
                <svg
                  className="w-2.5 h-2.5 fill-[#181818]"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>

            <p className="font-mono text-sm sm:text-[15px] text-[#181818] mt-2 mb-8">
              {product.price}
            </p>

            <div className="mb-8">
              <span className="font-sans text-xs text-[#181818] block mb-2.5">
                {selectedMaterial.name}
              </span>
              <div className="flex items-center gap-2">
                {materials.map((mat) => {
                  const isSelected = selectedMaterial.name === mat.name;
                  return (
                    <button
                      key={mat.name}
                      type="button"
                      onClick={() => setSelectedMaterial(mat)}
                      aria-label={mat.name}
                      className="group flex flex-col items-center cursor-pointer"
                    >
                      <span
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 block border border-[#c4c4c4]"
                        style={{ backgroundColor: mat.color }}
                      />
                      <span
                        className={`h-[1.5px] w-3.5 sm:w-4 mt-1 transition-colors ${
                          isSelected ? "bg-[#181818]" : "bg-transparent"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-10 font-sans text-xs text-[#181818]">
              <Link
                href="#"
                className="hover:underline flex items-center gap-1.5 w-fit tracking-wide"
              >
                <span>Add a Charm</span>
                <svg
                  className="w-3.5 h-3.5 text-[#181818]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:underline flex items-center gap-1.5 w-fit tracking-wide"
              >
                <span>Browse Other Sizes</span>
                <svg
                  className="w-3.5 h-3.5 text-[#181818]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="flex items-center gap-2.5 w-full">
              <button
                type="button"
                onClick={handleAddToBag}
                className={`flex-1 h-12 text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer flex items-center justify-center border border-black ${
                  isAdded
                    ? "bg-white text-black"
                    : "bg-black hover:bg-[#222] text-white"
                }`}
              >
                {isAdded ? "ADDED TO BAG" : "ADD TO BAG"}
              </button>
              <button
                type="button"
                onClick={handleToggleWishlist}
                aria-label="Add to wishlist"
                className="w-12 h-12 bg-black hover:bg-[#222] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <svg
                  className={`w-4 h-4 ${
                    isFavorited ? "fill-white stroke-white" : "fill-none stroke-white"
                  }`}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
