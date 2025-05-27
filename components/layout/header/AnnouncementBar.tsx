import { Label } from "@/components/ui/label";

// import icons
import {
  RiDiscountPercentFill,
  RiPhoneFill,
  RiSmartphoneFill,
} from "react-icons/ri";

export default function AnnouncementBar() {
  return (
    <div className="bg-gray-100 py-2 bg-custom-gradient">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        {/* Phần khuyến mãi luôn hiển thị */}
        <div className="flex items-center gap-2">
          <RiDiscountPercentFill className="w-6 h-6 text-white" />
          <Label className="text-sm font-semibold text-white ">
            Nhập mã <span className="text-yellow-500">NEWBIE</span> giảm ngay
            10% cho lần đầu mua hàng.
          </Label>
        </div>
        {/* Phần liên hệ: chỉ hiện ở màn hình >= md */}
        <div className="hidden md:flex gap-4">
          <div className="flex items-center gap-2">
            <RiPhoneFill className="w-6 h-6 text-white" />
            <Label className="text-sm font-semibold text-white">
              Hotline:{" "}
              <span className="text-yellow-500 inline">0283 760 7607</span>
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RiSmartphoneFill className="w-6 h-6 text-white" />
            <Label className="text-sm font-semibold text-white">
              Tải ứng dụng.
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
