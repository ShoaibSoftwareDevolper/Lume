import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="relative w-full aspect-[2.27/1] max-h-[640px] overflow-hidden">
          <Image
            src="/images/hero/hero.webp"
            alt="Lume Fine Jewelry Collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 lg:p-14">
            <h1 className="font-serif text-white text-2xl sm:text-3xl lg:text-[42px] font-normal leading-tight mb-2 sm:mb-3">
              Shop the Collection
            </h1>
            <p className="text-white font-sans text-xs sm:text-[14px] lg:text-[15px] leading-relaxed max-w-[95%] sm:max-w-[460px] lg:max-w-[38%] font-light">
              Discover thoughtfully crafted jewelry designed to elevate everyday moments and mark life&apos;s most meaningful occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
