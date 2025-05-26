import { Label } from "@/components/ui/label";

// import icons
import { IoWalletSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";

export default function SupportServices() {
  return (
    <div className="container mx-auto flex flex-row justify-between py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center bg-white rounded-xl shadow-lg gap-4 p-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <IoWalletSharp className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <Label className="text-base font-semibold text-gray-900 mb-1">
              Miễn phí vận chuyển
            </Label>
            <Label className="text-sm text-gray-500 leading-tight">
              Với hóa đơn từ 1 triệu
            </Label>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-xl shadow-lg gap-4 p-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <BiSupport className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <Label className="text-base font-semibold text-gray-900 mb-1">
              Hỗ trợ 24/7
            </Label>
            <Label className="text-sm text-gray-500 leading-tight">
              Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm
            </Label>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-xl shadow-lg gap-4 p-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <FaTruck className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <Label className="text-base font-semibold text-gray-900 mb-1">
              Giao hàng nhanh 2h
            </Label>
            <Label className="text-sm text-gray-500 leading-tight">
              Trong vòng bán kính 10km nội thành TP HCM
            </Label>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-xl shadow-lg gap-4 p-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <BsBoxFill className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <Label className="text-base font-semibold text-gray-900 mb-1">
              30 ngày đổi trả
            </Label>
            <Label className="text-sm text-gray-500 leading-tight">
              Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
