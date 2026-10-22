"use client";

import { useState } from "react";

export default function FilterDrawer({ isOpen, onClose, productCount = 22 }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMetal, setSelectedMetal] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "necklaces", label: "Necklaces" },
    { id: "earrings", label: "Earrings" },
    { id: "bracelets", label: "Bracelets" },
    { id: "rings", label: "Rings" },
  ];

  const metals = [
    { id: "18k-gold", label: "18k Solid Gold" },
    { id: "gold-vermeil", label: "14k Gold Vermeil" },
    { id: "sterling-silver", label: "Sterling Silver" },
    { id: "diamond-pave", label: "Diamond Pavé" },
  ];

  const priceRanges = [
    { id: "all", label: "All Prices" },
    { id: "under-250", label: "Under $250" },
    { id: "250-450", label: "$250 – $450" },
    { id: "above-450", label: "Above $450" },
  ];

  const sortOptions = [
    { id: "featured", label: "Featured" },
    { id: "price-asc", label: "Price: Low to High" },
    { id: "price-desc", label: "Price: High to Low" },
    { id: "newest", label: "Newest Arrivals" },
  ];

  const toggleMetal = (id) => {
    setSelectedMetal((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedMetal([]);
    setSelectedPrice("all");
    setSortBy("featured");
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-start transition-all duration-300 font-sans ${
        isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        className={`relative w-full max-w-[400px] bg-white h-full shadow-[0_4px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-2">
            <h2 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#181818]">
              Filters & Sort
            </h2>
            <span className="text-xs text-[#737373]">({productCount})</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="p-1.5 text-[#181818] hover:opacity-60 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-[#efefef] space-y-6">
          <div className="pt-0">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#181818] mb-3">
              Sort By
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {sortOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSortBy(opt.id)}
                  className={`px-3 py-2 text-xs text-left border transition-colors ${
                    sortBy === opt.id
                      ? "border-black bg-[#181818] text-white"
                      : "border-[#e5e5e5] text-[#737373] hover:border-black hover:text-[#181818]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#181818] mb-3">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-3 text-xs text-[#181818] cursor-pointer py-1"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat.id}
                    onChange={() => setSelectedCategory(cat.id)}
                    className="accent-black w-4 h-4"
                  />
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#181818] mb-3">
              Precious Metal
            </h3>
            <div className="space-y-2">
              {metals.map((metal) => {
                const checked = selectedMetal.includes(metal.id);
                return (
                  <label
                    key={metal.id}
                    className="flex items-center gap-3 text-xs text-[#181818] cursor-pointer py-1"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleMetal(metal.id)}
                      className="accent-black w-4 h-4 rounded"
                    />
                    <span>{metal.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#181818] mb-3">
              Price Range
            </h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label
                  key={range.id}
                  className="flex items-center gap-3 text-xs text-[#181818] cursor-pointer py-1"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    checked={selectedPrice === range.id}
                    onChange={() => setSelectedPrice(range.id)}
                    className="accent-black w-4 h-4"
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-[#e5e5e5] bg-white flex items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 h-11 border border-[#e5e5e5] text-xs font-medium uppercase tracking-[0.14em] text-[#737373] hover:border-black hover:text-[#181818] transition-colors"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 h-11 bg-[#181818] hover:bg-black text-white text-xs font-semibold uppercase tracking-[0.14em] transition-colors"
          >
            Apply ({productCount})
          </button>
        </div>
      </aside>
    </div>
  );
}
