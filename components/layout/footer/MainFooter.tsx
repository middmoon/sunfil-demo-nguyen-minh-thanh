import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
// import icons
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function MainFooter() {
  return (
    <div className="container mx-auto flex flex-row justify-between py-10">
      <div className="flex flex-col gap-4">
        <Label className="text-xl text-primary font-semibold">
          VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
        </Label>
        <div className="flex flex-col gap-2">
          <Label className="text-gray-500">
            Tax code: <Label className="text-gray-900">0305094228</Label>
          </Label>
          <Label className="text-gray-500">
            Address:{" "}
            <Label className="text-gray-900">
              13 Nghia Thuc, Ward 5, District 5, Ho Chi Minh City, Viet Nam
            </Label>
          </Label>
          <Label className="text-gray-500">
            Phone number: <Label className="text-gray-900">0283 706 7607</Label>
          </Label>
          <Label className="text-gray-500">
            Opening hour:{" "}
            <Label className="text-gray-900">
              09:00 - 22:00 from Mon - Fri
            </Label>
          </Label>
          <div className="mt-4">
            <Badge
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 h-auto"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xs">ĐÃ THÔNG BÁO</div>
                  <div className="text-xs">BỘ CÔNG THƯƠNG</div>
                </div>
              </div>
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xl text-primary font-semibold">Sitemap</Label>
        <div className="flex flex-col gap-2">
          <Label className="text-gray-500">About</Label>
          <Label className="text-gray-500">Article</Label>
          <Label className="text-gray-500">Cart</Label>
          <Label className="text-gray-500">Contact</Label>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xl text-primary font-semibold">Legal</Label>
        <div className="flex flex-col gap-2">
          <Label className="text-gray-500">__Privacy Policy</Label>
          <Label className="text-gray-500">Cookie policy</Label>
          <Label className="text-gray-500">Delivery policy</Label>
          <Label className="text-gray-500">FAQs</Label>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xl text-primary font-semibold">
          Download App
        </Label>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row p-4 px-6 bg-black rounded-lg items-center gap-2">
            <FaGooglePlay className="w-6 h-6 text-white"></FaGooglePlay>
            <div className="flex flex-col">
              <Label className="text-white text-sm font-light">Get it on</Label>
              <Label className="text-white ">Goole Play Store</Label>
            </div>
          </div>
          <div className="flex flex-row p-4 px-6 bg-primary rounded-lg items-center gap-2">
            <FaApple className="w-6 h-6 text-white"></FaApple>
            <div className="flex flex-col">
              <Label className="text-white text-sm font-light">
                Download from
              </Label>
              <Label className="text-white ">Apple App Store</Label>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
}
