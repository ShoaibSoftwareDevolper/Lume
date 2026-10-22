"use client";

import { useState } from "react";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";

export default function AccountModal() {
  const { isAccountOpen, closeAccount } = useShop();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isAccountOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeAccount();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={closeAccount}
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[420px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] p-7 sm:p-8 z-10 font-sans">
        <div className="flex items-center justify-between pb-5 border-b border-[#e5e5e5]">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181818]">
            Client Account
          </h2>
          <button
            type="button"
            onClick={closeAccount}
            aria-label="Close modal"
            className="p-1 text-[#181818] hover:opacity-60 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-[#737373] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#737373]">
                Password
              </label>
              <Link href="#" className="text-[11px] text-[#737373] hover:text-black transition-colors">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 mt-2 bg-[#181818] hover:bg-black text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors flex items-center justify-center cursor-pointer"
          >
            {isSubmitted ? "Welcome Back" : "Sign In"}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#f0f0f0] text-center">
          <p className="text-xs text-[#737373]">
            Don&apos;t have an account?{" "}
            <Link href="#" className="text-[#181818] font-semibold underline underline-offset-2">
              Create one
            </Link>
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-[#f0f0f0] bg-[#fafafa] -mx-7 sm:-mx-8 -mb-7 sm:-mb-8 p-5">
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#181818] mb-2">
            Client Privileges
          </span>
          <ul className="space-y-1.5 text-[11px] text-[#737373]">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#181818]" />
              Complimentary global insured express shipping
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#181818]" />
              Sync your curated wishlist across devices
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#181818]" />
              First priority for limited private collection drops
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
