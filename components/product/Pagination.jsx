"use client";

import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3, "...", 12];

  const handlePageClick = (page) => {
    if (typeof page === "number") {
      setCurrentPage(page);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 12) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className="w-full max-w-[1560px] mx-auto px-6 lg:px-8 xl:px-10 flex items-center justify-center my-8 sm:my-12"
    >
      <div className="flex items-center gap-2 font-sans text-xs sm:text-[13px]">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="w-9 h-9 sm:w-10 sm:h-10 border border-[#e5e5e5] bg-white flex items-center justify-center text-[#181818] hover:border-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-9 h-9 sm:w-10 sm:h-10 border border-[#e5e5e5] bg-white flex items-center justify-center text-[#737373] select-none"
              >
                ...
              </span>
            );
          }

          const isActive = currentPage === page;

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageClick(page)}
              aria-current={isActive ? "page" : undefined}
              className={`w-9 h-9 sm:w-10 sm:h-10 border flex items-center justify-center transition-colors font-medium ${
                isActive
                  ? "bg-[#181818] border-[#181818] text-white"
                  : "border-[#e5e5e5] bg-white text-[#181818] hover:border-black"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === 12}
          aria-label="Next page"
          className="w-9 h-9 sm:w-10 sm:h-10 border border-[#e5e5e5] bg-white flex items-center justify-center text-[#181818] hover:border-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
