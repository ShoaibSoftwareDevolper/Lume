import Image from "next/image";

export default function OrderSummary({ checkoutItems, totalAmount }) {
  return (
    <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 sm:p-8">
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] pb-4 border-b border-[#e5e5e5]">
        Order Summary
      </h2>

      <div className="divide-y divide-[#ebebeb] my-4">
        {checkoutItems.map((item) => (
          <div key={item.id} className="py-3 flex items-center gap-4">
            <div className="relative w-14 h-14 bg-[#f5f3ef] shrink-0 overflow-hidden flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="56px"
                className="object-contain p-1.5"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#181818] uppercase tracking-wide truncate">
                {item.name}
              </p>
              {item.material && (
                <p className="text-[11px] text-[#737373]">
                  {item.material}
                </p>
              )}
              <span className="text-[11px] text-[#737373]">
                Qty: {item.quantity}
              </span>
            </div>
            <span className="text-xs font-semibold text-[#181818]">
              ${item.priceNum * item.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-2.5 pt-4 border-t border-[#e5e5e5] text-xs">
        <div className="flex justify-between text-[#737373]">
          <span>Subtotal</span>
          <span className="text-[#181818]">${totalAmount}</span>
        </div>
        <div className="flex justify-between text-[#737373]">
          <span>Insured Shipping</span>
          <span className="text-[#181818]">Free</span>
        </div>
        <div className="flex justify-between text-[#737373]">
          <span>Estimated Taxes</span>
          <span className="text-[#181818]">$0</span>
        </div>
        <div className="flex justify-between text-sm font-semibold text-[#181818] pt-3 border-t border-[#e5e5e5]">
          <span>Total</span>
          <span>${totalAmount}</span>
        </div>
      </div>
    </div>
  );
}
