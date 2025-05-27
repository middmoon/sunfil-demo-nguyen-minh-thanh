"use client";

import Image from "next/image";
import { Product } from "@/data/type";
import ProductCarousel from "@/components/product/ProductCarousel";

interface DealBannerProps {
  bannerImage: string;
  products: Product[];
  title?: string;
}

export default function DealBanner({
  bannerImage,
  products,
  title = "Ưu đãi nổi bật",
}: DealBannerProps) {
  return (
    <section className="container mx-auto w-full bg-blue-500 m-4 rounded-2xl">
      {/* Banner ảnh */}
      <div className="relative w-full h-[180px] md:h-[260px] rounded-t-2xl overflow-hidden">
        <Image
          src={bannerImage}
          alt="Khuyến mãi"
          fill
          className="object-cover"
        />
      </div>

      {/* Carousel sản phẩm */}
      <div className="p-6">
        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
