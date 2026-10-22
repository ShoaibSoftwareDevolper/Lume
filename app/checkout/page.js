"use client";

import { useState } from "react";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import OrderConfirmation from "@/components/checkout/OrderConfirmation";

export default function CheckoutPage() {
  const { cart, cartTotal } = useShop();
  const [isPlaced, setIsPlaced] = useState(false);

  const fallbackItems = [
    {
      id: "preview-1",
      name: "Bold Huggie Hoops",
      material: "18k Gold Vermeil",
      price: "$128",
      priceNum: 128,
      quantity: 1,
      image: "/images/products/earrings-dangle-hoop.png",
    },
  ];

  const checkoutItems = cart.length > 0 ? cart : fallbackItems;
  const totalAmount = cart.length > 0 ? cartTotal : 128;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsPlaced(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#181818] font-sans">
      <header className="border-b border-[#e5e5e5] bg-white sticky top-0 z-30">
        <div className="max-w-[1240px] mx-auto px-6 h-18 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl tracking-[0.2em] font-light uppercase text-black"
          >
            Lume
          </Link>
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-[#737373] hover:text-black transition-colors"
          >
            &larr; Return to Store
          </Link>
        </div>
      </header>

      <main className="max-w-[1240px] mx-auto px-6 py-10 lg:py-16">
        {isPlaced ? (
          <OrderConfirmation />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <CheckoutForm
                onSubmit={handlePlaceOrder}
                totalAmount={totalAmount}
              />
            </div>

            <div className="lg:col-span-5">
              <OrderSummary
                checkoutItems={checkoutItems}
                totalAmount={totalAmount}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
