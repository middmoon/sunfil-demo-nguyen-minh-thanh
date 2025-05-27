// src/components/product/ProductFilterSidebar.tsx
"use client"; // This component also involves client-side interaction

import type React from "react";
import { useState } from "react"; // For Collapsible state
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
import { FaFilter } from "react-icons/fa";

// Import static data for displaying filter options' names.
// Counts would ideally be passed from server or calculated based on full dataset if needed.
import {
  originCountries as allOriginCountriesData,
  brands as allBrandsData,
  categories as allCategoriesData,
  // products as allProductsData, // Only if calculating counts here based on *all* products
} from "@/data/sample-data"; // Adjust path as necessary

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

interface ProductFilterSidebarProps {
  selectedCategories: number[];
  onCategoryChange: (categoryId: number, isChecked: boolean) => void;
  selectedBrands: number[];
  onBrandChange: (brandId: number, isChecked: boolean) => void;
  selectedYears: number[];
  onYearChange: (yearValue: number, isChecked: boolean) => void;
  selectedOrigins: number[];
  onOriginChange: (originId: number, isChecked: boolean) => void;
  selectedPriceRangeId?: number;
  onPriceRangeChange: (priceRangeId?: number) => void;
  priceRangesForDisplay: (PriceRange & { min?: number; max?: number })[];
}

export default function ProductFilterSidebar({
  selectedCategories,
  onCategoryChange,
  selectedBrands,
  onBrandChange,
  selectedYears,
  onYearChange,
  selectedOrigins,
  onOriginChange,
  selectedPriceRangeId,
  onPriceRangeChange,
  priceRangesForDisplay,
}: ProductFilterSidebarProps) {
  // For display purposes, we'll map the static data.
  // The 'quality' (count) here would be for ALL products, not dynamically filtered counts.
  // If dynamic counts are needed, that's a more complex data flow.
  const displayCategories: FilterItem[] = allCategoriesData.map((c) => ({
    id: c.id,
    name: c.name,
    quality: 0, // Placeholder or calculate from allProductsData if needed
  }));
  const displayBrands: FilterItem[] = allBrandsData.map((b) => ({
    id: b.id,
    name: b.name,
    quality: 0, // Placeholder
  }));
  const uniqueYearsFromData = [
    ...new Set(
      allBrandsData.map((p) => parseInt(p.origin_country.id.toString(), 10))
    ),
  ].sort((a, b) => b - a); // This is not correct for product years, just an example
  // You would need to get years from `allProductsData` or pass them
  const displayYears: YearItem[] = uniqueYearsFromData.map((y, i) => ({
    // MOCKING YEARS HERE
    id: i + 1,
    year: 2022 + i, // Example years
    quality: 0,
  }));
  const displayOrigins: OriginItem[] = allOriginCountriesData.map((o) => ({
    id: o.id,
    name: o.name,
    quality: 0, // Placeholder
  }));

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="flex flex-row items-center text-primary border-b last:border-b-0 px-4 py-3">
          <FaFilter className="w-5 h-5 mr-2" />
          <h2 className="text-lg font-semibold">Bộ lọc</h2>
        </div>

        <FilterSection title="Danh mục sản phẩm">
          {displayCategories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) =>
                  onCategoryChange(category.id, !!checked)
                }
              />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category.name}{" "}
                {/* ({category.quality}) You'd need to pass/calculate this */}
              </label>
            </div>
          ))}
        </FilterSection>

        <FilterSection title="Khoảng giá">
          {priceRangesForDisplay.map((item) => (
            <Button
              key={item.id}
              variant={selectedPriceRangeId === item.id ? "default" : "outline"}
              className="w-full justify-start text-left h-auto py-2 px-3 font-normal text-sm"
              onClick={() => onPriceRangeChange(item.id)}
            >
              {item.moTa}
            </Button>
          ))}
        </FilterSection>

        <FilterSection title="Thương hiệu">
          {displayBrands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand.id}`}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={(checked) =>
                  onBrandChange(brand.id, !!checked)
                }
              />
              <label
                htmlFor={`brand-${brand.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {brand.name} {/* ({brand.quality}) */}
              </label>
            </div>
          ))}
        </FilterSection>

        <FilterSection title="Năm sản xuất">
          {displayYears.map((yearItem) => (
            <div key={yearItem.id} className="flex items-center space-x-2">
              <Checkbox
                id={`year-${yearItem.id}`}
                checked={selectedYears.includes(yearItem.year)}
                onCheckedChange={(checked) =>
                  onYearChange(yearItem.year, !!checked)
                }
              />
              <label
                htmlFor={`year-${yearItem.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {yearItem.year} {/* ({yearItem.quality}) */}
              </label>
            </div>
          ))}
        </FilterSection>

        <FilterSection title="Xuất xứ">
          {displayOrigins.map((origin) => (
            <div key={origin.id} className="flex items-center space-x-2">
              <Checkbox
                id={`origin-${origin.id}`}
                checked={selectedOrigins.includes(origin.id)}
                onCheckedChange={(checked) =>
                  onOriginChange(origin.id, !!checked)
                }
              />
              <label
                htmlFor={`origin-${origin.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {origin.name} {/* ({origin.quality}) */}
              </label>
            </div>
          ))}
        </FilterSection>
      </CardContent>
    </Card>
  );
}
