import { Label } from "@/components/ui/label";

// import icons
import { MdAccessTimeFilled } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { RiRefreshFill } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className="container mx-auto p-4 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-8">
        <Label className="text-sm font-semibold">Danh Mục Sản Phẩm</Label>
        <Label className="text-sm font-semibold">Về Chúng Tôi</Label>
        <Label className="text-sm font-semibold">Catalog</Label>
        <Label className="text-sm font-semibold">Liên Hệ</Label>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex items-center gap-2">
          <MdAccessTimeFilled className="w-6 h-6 text-primary" />
          <Label className="text-sm font-semibold">Hỗ Trợ 24/7</Label>
        </div>

        <div className="flex items-center gap-2">
          <FaShippingFast className="w-6 h-6 text-primary" />
          <Label className="text-sm font-semibold">Miễn Phí Vận Chuyển</Label>
        </div>

        <div className="flex items-center gap-2">
          <FaShippingFast className="w-6 h-6 text-primary" />
          <Label className="text-sm font-semibold">Giao Hàng Nhanh 2h</Label>
        </div>
        <div className="flex items-center gap-2">
          <RiRefreshFill className="w-6 h-6 text-primary" />
          <Label className="text-sm font-semibold">30 Ngày Đổi Trả</Label>
        </div>
      </div>
    </div>
  );
}
