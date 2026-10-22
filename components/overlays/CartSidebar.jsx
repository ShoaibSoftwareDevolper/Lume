"use client";

import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";

export default function CartSidebar() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
  } = useShop();

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
        isCartOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        className={`relative w-full max-w-[440px] bg-white h-full shadow-[0_4px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between z-10 font-sans transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-2">
            <h2 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#181818]">
              Shopping Bag
            </h2>
            <span className="text-xs text-[#737373]">({cartCount})</span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1.5 text-[#181818] hover:opacity-60 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 divide-y divide-[#f0f0f0]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <svg className="w-7 h-7 stroke-[#181818]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#181818]">Your bag is empty</p>
              <p className="text-xs text-[#737373] mt-1 max-w-[220px]">
                Explore timeless fine jewelry crafted for meaningful everyday luxury.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 px-6 py-2.5 bg-[#181818] hover:bg-black text-white text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="py-4.5 flex gap-4 first:pt-0 last:pb-0">
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
                        onClick={closeCart}
                        className="text-xs font-semibold text-[#181818] uppercase tracking-wide truncate hover:opacity-70 transition-opacity"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        className="text-[#737373] hover:text-black transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    {item.material && (
                      <p className="text-[11px] text-[#737373] mt-0.5">
                        {item.material}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#d8d8d8] h-7">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-full flex items-center justify-center text-xs text-[#181818] hover:bg-[#f5f3ef] transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-medium text-[#181818]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-full flex items-center justify-center text-xs text-[#181818] hover:bg-[#f5f3ef] transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-semibold text-[#181818]">
                      ${item.priceNum * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-[#e5e5e5] bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#737373] uppercase tracking-wider">
                Subtotal
              </span>
              <span className="text-sm font-semibold text-[#181818]">
                ${cartTotal}
              </span>
            </div>
            <p className="text-[11px] text-[#888888] mb-4">
              Taxes and shipping calculated at checkout.
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full h-12 bg-[#181818] hover:bg-black text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors flex items-center justify-center"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-2 h-10 border border-[#e5e5e5] text-xs font-medium uppercase tracking-[0.14em] text-[#181818] hover:border-black transition-colors flex items-center justify-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
