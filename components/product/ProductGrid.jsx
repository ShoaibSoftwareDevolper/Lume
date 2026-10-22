import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/products";

function ProductCard({ product, type = "single" }) {
  const isLocket =
    product.name?.toLowerCase().includes("necklace") ||
    product.name?.toLowerCase().includes("locket") ||
    product.slug?.toLowerCase().includes("necklace") ||
    product.slug?.toLowerCase().includes("locket");

  const getContainerClass = () => {
    if (type === "tall") {
      return "w-full h-full aspect-square md:aspect-auto md:min-h-[500px] lg:min-h-[620px]";
    }
    if (type === "wide") {
      return "w-full aspect-[2/1]";
    }
    return "w-full aspect-square";
  };

  const getImageSizeClass = () => {
    if (isLocket) {
      if (type === "wide") {
        return "w-[50%] h-[82%] sm:w-[54%] sm:h-[84%]";
      }
      if (type === "tall") {
        return "w-[64%] h-[78%] sm:w-[68%] sm:h-[80%]";
      }
      return "w-[68%] h-[76%] sm:w-[72%] sm:h-[78%]";
    }

    if (type === "tall") {
      return "w-[48%] h-[54%] sm:w-[52%] sm:h-[58%]";
    }
    if (type === "wide") {
      return "w-[36%] h-[54%] sm:w-[40%] sm:h-[58%]";
    }
    return "w-[48%] h-[48%] sm:w-[52%] sm:h-[52%]";
  };

  return (
    <Link href={`/product/${product.slug}`} className="flex flex-col justify-between h-full">
      <div
        className={`relative bg-[#f5f3ef] overflow-hidden ${
          isLocket
            ? "flex items-start justify-center"
            : "flex items-center justify-center"
        } ${getContainerClass()}`}
      >
        <div className={`relative ${getImageSizeClass()}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={
              type === "wide"
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            }
            className={`object-contain ${
              isLocket ? "object-top" : "object-center"
            }`}
          />
        </div>
      </div>

      <div className="pt-3 font-sans">
        <h2 className="text-xs sm:text-[13px] text-[#737373] font-normal tracking-tight truncate">
          {product.name}
        </h2>
        <p className="text-xs sm:text-[13px] font-semibold text-[#181818] mt-0.5">
          From {product.price}
        </p>
      </div>
    </Link>
  );
}

export default function ProductGrid() {
  const row1 = productsData.slice(0, 4);
  const solisHuggie = productsData[4];
  const lunaNecklace = productsData[5];
  const celestialChain = productsData[6];

  const haloPearl = productsData[7];
  const solaraLayered = productsData[8];
  const novaBar = productsData[9];
  const ariaChain = productsData[10];

  const row5 = productsData.slice(11, 15);
  const solisCuff2 = productsData[15];
  const novaAdjustable = productsData[16];
  const haloDiamond = productsData[17];

  const auraPearlRing = productsData[18];
  const lunaPromise = productsData[19];
  const solaraGoldBand = productsData[20];
  const celesteDiamond = productsData[21];

  return (
    <section className="w-full">
      <div className="max-w-[1560px] mx-auto px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-y-5 sm:gap-y-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[6px]">
            {row1.map((product) => (
              <ProductCard key={product.id} product={product} type="single" />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[6px]">
            <div className="col-span-1 order-1">
              <ProductCard product={solisHuggie} type="single" />
            </div>
            <div className="col-span-2 order-3 lg:order-2">
              <ProductCard product={lunaNecklace} type="wide" />
            </div>
            <div className="col-span-1 order-2 lg:order-3">
              <ProductCard product={celestialChain} type="single" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[6px]">
            <div className="flex flex-col gap-y-5 sm:gap-y-7 justify-between">
              <div className="grid grid-cols-2 gap-[6px]">
                <ProductCard product={haloPearl} type="single" />
                <ProductCard product={solaraLayered} type="single" />
              </div>
              <div>
                <ProductCard product={novaBar} type="wide" />
              </div>
            </div>
            <div className="h-full">
              <ProductCard product={ariaChain} type="tall" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[6px]">
            {row5.map((product) => (
              <ProductCard key={product.id} product={product} type="single" />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[6px]">
            <div className="col-span-1 order-1">
              <ProductCard product={solisCuff2} type="single" />
            </div>
            <div className="col-span-2 order-3 lg:order-2">
              <ProductCard product={novaAdjustable} type="wide" />
            </div>
            <div className="col-span-1 order-2 lg:order-3">
              <ProductCard product={haloDiamond} type="single" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[6px]">
            <div className="h-full order-2 md:order-1">
              <ProductCard product={auraPearlRing} type="tall" />
            </div>
            <div className="flex flex-col gap-y-5 sm:gap-y-7 justify-between order-1 md:order-2">
              <div className="grid grid-cols-2 gap-[6px]">
                <ProductCard product={lunaPromise} type="single" />
                <ProductCard product={solaraGoldBand} type="single" />
              </div>
              <div>
                <ProductCard product={celesteDiamond} type="wide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
