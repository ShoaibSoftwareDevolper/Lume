export default function CheckoutForm({ onSubmit, totalAmount }) {
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] mb-4">
          Contact Information
        </h2>
        <input
          type="email"
          required
          placeholder="Email address"
          className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
        />
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] mb-4">
          Shipping Address
        </h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="First name"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <input
            type="text"
            required
            placeholder="Street address"
            className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit (optional)"
            className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
          />
          <div className="grid grid-cols-3 gap-3">
            <input
              type="text"
              required
              placeholder="City"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="text"
              required
              placeholder="State / Region"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="text"
              required
              placeholder="Postal code"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] mb-4">
          Delivery Method
        </h2>
        <div className="border border-[#181818] p-4 flex items-center justify-between text-xs">
          <div>
            <span className="font-semibold text-[#181818] block">Complimentary Express Shipping</span>
            <span className="text-[#737373] text-[11px]">2-4 business days, insured delivery</span>
          </div>
          <span className="font-medium text-[#181818]">FREE</span>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] mb-4">
          Payment
        </h2>
        <div className="space-y-3">
          <input
            type="text"
            required
            placeholder="Card number"
            className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Expiration (MM / YY)"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="text"
              required
              placeholder="Security code (CVC)"
              className="w-full h-11 px-3.5 bg-white border border-[#d8d8d8] text-xs text-[#181818] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-13 bg-[#181818] hover:bg-black text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors flex items-center justify-center cursor-pointer"
      >
        Complete Order (${totalAmount})
      </button>
    </form>
  );
}
