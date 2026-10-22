"use client";

import { useState } from "react";
import FilterDrawer from "@/components/product/FilterDrawer";

export default function ProductToolbar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="w-full mt-6 sm:mt-8 mb-4 sm:mb-6">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2.5 px-5 py-2.5 border border-[#d8d8d8] bg-white text-xs sm:text-[13px] text-[#181818] hover:border-black transition-colors cursor-pointer"
          >
            <span className="font-sans">Filters</span>
            <svg
              className="w-3.5 h-3.5 text-[#181818]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="17" x2="20" y2="17" />
              <circle cx="9" cy="7" r="2" fill="white" />
              <circle cx="15" cy="17" r="2" fill="white" />
            </svg>
          </button>

          <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#181818]">
            Showing 22 products
          </span>
        </div>
      </div>

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        productCount={22}
      />
    </>
  );
}
