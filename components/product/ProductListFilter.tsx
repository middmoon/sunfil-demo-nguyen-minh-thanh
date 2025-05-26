"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  STATIC_SORT_OPTIONS,
  PRICE_SORT_OPTIONS,
  type SortOption,
} from "@/constants/sort-options";

export default function ProductListFilter() {
  const [selectedPriceSort, setSelectedPriceSort] = useState<SortOption>(
    PRICE_SORT_OPTIONS[0]
  );
  const [activeSortOption, setActiveSortOption] = useState<string>("newest");

  const handlePriceSelect = (option: SortOption) => {
    setSelectedPriceSort(option);
  };

  const handleStaticSortSelect = (value: string) => {
    setActiveSortOption(value);
  };

  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
      <span className="text-xl font-medium text-black">Danh sách sản phẩm</span>

      <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-700">
        <span className="text-gray-500">Sắp xếp theo</span>

        {STATIC_SORT_OPTIONS.map((item) => (
          <Button
            key={item.value}
            variant={activeSortOption === item.value ? "default" : "outline"}
            size="sm"
            onClick={() => handleStaticSortSelect(item.value)}
            className={
              activeSortOption === item.value
                ? "border-blue-500 text-blue-500 bg-blue-50 hover:bg-blue-100"
                : "border-gray-300 hover:bg-gray-100"
            }
          >
            {item.label}
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 hover:bg-gray-100"
            >
              {selectedPriceSort.label}
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {PRICE_SORT_OPTIONS.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => handlePriceSelect(option)}
                className={
                  option.value === selectedPriceSort.value
                    ? "bg-gray-100 font-semibold"
                    : ""
                }
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
