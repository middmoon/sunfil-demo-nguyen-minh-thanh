// src/components/product/ProductListFilter.tsx
"use client"; // This component interacts with user, so it's a client component

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import {
  STATIC_SORT_OPTIONS,
  PRICE_SORT_OPTIONS,
  type SortOption,
} from "@/constants/sort-options"; // Adjust path as necessary

interface ProductListFilterProps {
  sortBy: string;
  onSortChange: (sortValue: string) => void;
  resultCount?: number;
}

export default function ProductListFilter({
  sortBy,
  onSortChange,
  resultCount,
}: ProductListFilterProps) {
  const isPriceSortActive = PRICE_SORT_OPTIONS.some(
    (opt) => opt.value === sortBy
  );

  const priceDropdownLabel = isPriceSortActive
    ? PRICE_SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || "Giá"
    : "Giá";

  const handleStaticSortSelect = (value: string) => {
    onSortChange(value);
  };

  const handlePriceSortSelect = (optionValue: string) => {
    onSortChange(optionValue);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4 p-4 bg-card border rounded-lg">
      <span className="text-lg font-medium text-gray-900">
        Danh sách sản phẩm
        {resultCount !== undefined && (
          <span className="text-sm text-gray-500 ml-2">
            ({resultCount} kết quả)
          </span>
        )}
      </span>

      <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
        <span className="text-gray-500 mr-2">Sắp xếp theo</span>

        {STATIC_SORT_OPTIONS.map((item) => (
          <Button
            key={item.value}
            variant={sortBy === item.value ? "default" : "outline"}
            size="sm"
            onClick={() => handleStaticSortSelect(item.value)}
            className={`
              ${
                sortBy === item.value
                  ? "border-primary text-primary bg-primary-foreground hover:bg-primary/10"
                  : "border-gray-300 hover:bg-gray-100 text-gray-700"
              }
            `}
          >
            {item.label}
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isPriceSortActive ? "default" : "outline"}
              size="sm"
              className={`
                ${
                  isPriceSortActive
                    ? "border-primary text-primary bg-primary-foreground hover:bg-primary/10"
                    : "border-gray-300 hover:bg-gray-100 text-gray-700"
                }
              `}
            >
              {priceDropdownLabel}
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {PRICE_SORT_OPTIONS.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => handlePriceSortSelect(option.value)}
              >
                {option.value === sortBy && <Check className="mr-2 h-4 w-4" />}
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
