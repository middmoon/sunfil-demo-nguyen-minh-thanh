import { Label } from "@/components/ui/label";

// import icon
import { FaMapLocation } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function StoreLocatorBar() {
  return (
    <div className="flex flex-col py-4 bg-blue-100">
      <div className="container mx-auto flex flex-row items-center justify-between ">
        <div className="flex flex-row gap-4">
          <FaMapLocation className="w-8 h-8 text-primary text-2xl" />
          <Label className="text-2xl font-semibold text-gray-800">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </Label>
        </div>
        <div className="flex flex-row gap-4">
          <div className="rounded-full bg-white shadow-lg px-6 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <Label className="text-lg font-semibold text-primary    ">
              Xem ngay
            </Label>
            <IoIosArrowRoundForward className="w-8 h-8 text-primary text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
