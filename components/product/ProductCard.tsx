"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import type { Product } from "../../data/type";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    const cartKey = "cart_items";
    const existingCart = JSON.parse(localStorage.getItem(cartKey) || "[]");

    const updatedCart = [...existingCart];
    const existingItemIndex = updatedCart.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart-updated")); // Bắn sự kiện để header cập nhật
  };

  return (
    <Card className="w-full h-full hover:shadow-md transition-all duration-200">
      <CardContent className="flex flex-col h-full">
        {/* Ảnh */}
        <div className="relative w-full flex items-center justify-center overflow-hidden mb-4">
          <div className="w-80 aspect-square bg-white flex items-center justify-center overflow-hidden">
            <Image
              src={product.img_url || "/placeholder320x320.png"}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          {product.is_best_seller && (
            <Badge
              variant="secondary"
              className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-semibold hover:bg-orange-500"
            >
              🏆 Bán chạy
            </Badge>
          )}
        </div>

        {/* Phần nội dung linh hoạt */}
        <div className="flex-1 flex flex-col justify-between">
          <h2
            className="text-lg font-bold text-gray-800 mb-2 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.name}
          </h2>

          <div className="mb-2">
            <p className="text-blue-600 font-bold text-lg">
              {product.price.toLocaleString("vi-VN")} ₫
            </p>
          </div>
        </div>

        {/* Nút mua ngay ở đáy */}
        <div className="mt-4">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-blue-200 text-primary hover:bg-blue-300 hover:text-primary hover:shadow-none focus:ring-0 active:scale-100 font-semibold"
          >
            Mua ngay
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
