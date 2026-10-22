import Link from "next/link";

export default function OrderConfirmation() {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <div className="w-12 h-12 border border-[#181818] rounded-full flex items-center justify-center mx-auto mb-5">
        <svg className="w-5 h-5 stroke-[#181818]" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-xl font-medium tracking-wide uppercase text-[#181818]">
        Order Confirmed
      </h1>
      <p className="text-xs text-[#737373] mt-2 leading-relaxed">
        Thank you for your order. A confirmation has been sent to your email address.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-8 py-3.5 bg-[#181818] hover:bg-black text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
      >
        Back to Collection
      </Link>
    </div>
  );
}
