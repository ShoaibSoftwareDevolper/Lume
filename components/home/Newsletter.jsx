"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <section className="w-full mb-8 sm:mb-12">
      <div className="w-full px-0 min-[1440px]:max-w-[1560px] min-[1440px]:mx-auto min-[1440px]:px-8 xl:min-[1440px]:px-10">
        <div className="w-full bg-[#f5f3ef] py-10 sm:py-14 lg:py-16 px-5 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-2xl sm:text-[32px] font-normal text-[#181818] leading-tight">
              Join Our Private List
            </h2>
            <p className="font-sans text-xs sm:text-[14px] text-[#737373] mt-2 leading-relaxed">
              Receive early access to new collections, private releases, and exclusive updates.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-start">
            {isSubscribed ? (
              <div className="flex items-center gap-3.5 bg-white border border-[#e5e5e5] px-5 py-4 w-full max-w-md">
                <div className="w-8 h-8 rounded-full border border-[#181818] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#181818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-xs font-semibold text-[#181818] uppercase tracking-wider">
                    Thank you for subscribing
                  </p>
                  <p className="font-sans text-[11px] text-[#737373] mt-0.5 truncate">
                    Welcome to the private list. You will receive updates shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 sm:gap-2.5 w-full max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 h-[46px] px-3.5 sm:px-4 bg-white border border-[#d8d8d8] text-xs sm:text-[13px] text-[#181818] placeholder:text-[#888888] focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  className="h-[46px] px-4 sm:px-7 bg-[#181818] hover:bg-black text-white text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
