"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import type {
  FilterItem,
  PriceRange,
  YearItem,
  OriginItem,
} from "@/types/filter";

//import icon
import { FaFilter } from "react-icons/fa";

// Mock API functions - replace with your actual API calls
const mockAPI = {
  getOrigin: (callback: (err: unknown, data?: OriginItem[]) => void) => {
    setTimeout(() => {
      callback(null, [
        { id: 1, name: "Đức", quality: 15 },
        { id: 2, name: "Mỹ", quality: 8 },
        { id: 3, name: "Nhật Bản", quality: 12 },
        { id: 4, name: "Anh", quality: 5 },
      ]);
    }, 100);
  },
  getBrand: (callback: (err: unknown, data?: FilterItem[]) => void) => {
    setTimeout(() => {
      callback(null, [
        { id: 1, name: "Bosch", quality: 8 },
        { id: 2, name: "K&N", quality: 4 },
        { id: 3, name: "Mobil 1", quality: 6 },
        { id: 4, name: "Denso", quality: 3 },
        { id: 5, name: "Castrol", quality: 5 },
      ]);
    }, 100);
  },
  getCategory: (callback: (err: unknown, data?: FilterItem[]) => void) => {
    setTimeout(() => {
      callback(null, [
        { id: 1, name: "Lọc dầu động cơ", quality: 12 },
        { id: 2, name: "Lọc dầu hiệu suất cao", quality: 5 },
        { id: 3, name: "Lọc dầu tổng hợp", quality: 8 },
      ]);
    }, 100);
  },
  getYears: (callback: (err: unknown, data?: YearItem[]) => void) => {
    setTimeout(() => {
      callback(null, [
        { id: 1, year: 2024, quality: 8 },
        { id: 2, year: 2023, quality: 15 },
        { id: 3, year: 2022, quality: 3 },
      ]);
    }, 100);
  },
  getPriceRanges: (callback: (err: unknown, data?: PriceRange[]) => void) => {
    setTimeout(() => {
      callback(null, [
        { id: 1, moTa: "Dưới 100.000đ" },
        { id: 2, moTa: "100.000đ - 500.000đ" },
        { id: 3, moTa: "500.000đ - 1.000.000đ" },
        { id: 4, moTa: "Trên 1.000.000đ" },
      ]);
    }, 100);
  },
};

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border-b last:border-b-0"
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50">
        <h3 className="font-semibold text-sm">{title}</h3>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-3 pb-3">
        <div className="space-y-2">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function ProductFilterSidebar() {
  const [isError, setIsError] = useState(false);
  const [origins, setOrigins] = useState<OriginItem[]>([]);
  const [brands, setBrands] = useState<FilterItem[]>([]);
  const [categories, setCategories] = useState<FilterItem[]>([]);
  const [years, setYears] = useState<YearItem[]>([]);
  const [prices, setPrices] = useState<PriceRange[]>([]);

  useEffect(() => {
    mockAPI.getOrigin((err, data) =>
      err ? setIsError(true) : setOrigins(data || [])
    );
    mockAPI.getBrand((err, data) =>
      err ? setIsError(true) : setBrands(data || [])
    );
    mockAPI.getCategory((err, data) =>
      err ? setIsError(true) : setCategories(data || [])
    );
    mockAPI.getYears((err, data) =>
      err ? setIsError(true) : setYears(data || [])
    );
    mockAPI.getPriceRanges((err, data) =>
      err ? setIsError(true) : setPrices(data || [])
    );
  }, []);

  if (isError) return null;

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="flex flex-row text-primary border-b last:border-b-0 px-4 pb-4">
          <FaFilter className="w-6 h-6 " />
          <h2 className="text-xl font-semibold">Bộ lọc</h2>
        </div>

        <FilterSection title="Danh mục sản phẩm">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category.name} ({category.quality})
              </label>
            </div>
          ))}
        </FilterSection>

        <FilterSection title="Khoảng giá">
          {prices.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              className="w-full justify-start text-left h-auto py-2 px-3 font-normal"
            >
              {item.moTa}
            </Button>
          ))}
        </FilterSection>

        <FilterSection title="Thương hiệu">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox id={`brand-${brand.id}`} />
              <label
                htmlFor={`brand-${brand.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {brand.name} ({brand.quality})
              </label>
            </div>
          ))}
        </FilterSection>

        <FilterSection title="Năm sản xuất">
          {years.map((year) => (
            <div key={year.id} className="flex items-center space-x-2">
              <Checkbox id={`year-${year.id}`} />
              <label
                htmlFor={`year-${year.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {year.year} ({year.quality})
              </label>
            </div>
          ))}
        </FilterSection>

        <FilterSection title="Xuất xứ">
          {origins.map((origin) => (
            <div key={origin.id} className="flex items-center space-x-2">
              <Checkbox id={`origin-${origin.id}`} />
              <label
                htmlFor={`origin-${origin.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {origin.name} ({origin.quality})
              </label>
            </div>
          ))}
        </FilterSection>
      </CardContent>
    </Card>
  );
}
