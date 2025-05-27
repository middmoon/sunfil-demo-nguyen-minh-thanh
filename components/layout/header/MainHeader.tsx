"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CartPreview from "./CardPreview";
import Link from "next/link";
// import icons
import { Search, Camera } from "lucide-react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";

interface CartItem {
  id: string;
  name?: string;
  quantity: number;
}

export default function MainHeader() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart_items") || "[]");
      const total = cartItems.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0
      );
      setCartCount(total);
    };

    updateCart();
    window.addEventListener("cart-updated", updateCart);
    return () => window.removeEventListener("cart-updated", updateCart);
  }, []);

  return (
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="shrink-0">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={240} height={80} />
        </Link>
      </div>

      <div className="flex-1">
        <div className="flex items-center w-full max-w-3xl mx-auto space-x-2 rounded-full border border-primary px-3.5 py-2">
          <Input
            type="search"
            placeholder="Tìm sản phẩm"
            className="w-full rounded-full h-8 font-semibold"
          />
          <Camera className="h-6 w-6 text-primary" />
          <div className="h-8 w-16 flex items-center justify-center rounded-full bg-primary text-white">
            <Search className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="shrink-0 flex items-center gap-4">
        <div className="flex flex-row p-2 gap-1">
          <div className="w-10 h-10 rounded-full overflow-hidden border">
            <Image
              src="/vn.svg"
              alt="VI"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <Label>VI</Label>
        </div>
        <div className="p-2 ml-2">
          <div className="relative p-2 ml-2 group">
            <div className="flex items-center gap-2">
              <RiShoppingBasket2Fill className="h-8 w-8 text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <Label className="font-semibold text-md">Giỏ hàng</Label>
            </div>

            {/* Hover popup */}
            <div className="absolute top-12 right-0 bg-white shadow-lg border rounded-md w-72 p-4 z-50 hidden group-hover:block">
              <CartPreview />
            </div>
          </div>
        </div>
        <div className="p-2 ml-2">
          <div className="flex items-center gap-2">
            <FaCircleUser className="h-8 w-8 text-primary" />
            <Label className="font-semibold text-md">Tài khoản</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
