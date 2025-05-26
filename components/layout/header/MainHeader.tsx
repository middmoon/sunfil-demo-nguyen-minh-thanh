import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// import icons
import { Search, Camera } from "lucide-react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";

export default function MainHeader() {
  return (
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="shrink-0">
        <Image src="/logo.png" alt="Logo" width={240} height={80} />
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
          <div className="flex items-center gap-2">
            <RiShoppingBasket2Fill className="h-8 w-8 text-primary" />
            <Label className="font-semibold text-md">Giỏ hàng</Label>
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
