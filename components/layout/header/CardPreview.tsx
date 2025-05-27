"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CartItem {
  id: string | number;
  img_url?: string;
  name: string;
  quantity: number;
  price: number;
}

export default function CartPreview() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart_items") || "[]");
      setItems(cart);
    };

    loadCart();
    window.addEventListener("cart-updated", loadCart);
    return () => window.removeEventListener("cart-updated", loadCart);
  }, []);

  if (items.length === 0) {
    return <p className="text-sm text-gray-500">Chưa có sản phẩm nào.</p>;
  }

  return (
    <div className="space-y-2 max-h-64 overflow-y-auto">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <Image
              src={item.img_url || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-1">{item.name}</p>
            <p className="text-xs text-gray-500">
              {item.quantity} x {item.price.toLocaleString("vi-VN")} ₫
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
