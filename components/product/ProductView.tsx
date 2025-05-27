"use client";

import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ProductListFilter from "@/components/product/ProductListFilter";
import ProductFilterSidebar from "@/components/product/ProductFilterSidebar";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/data/type";
import type { PriceRange as FilterPriceRange } from "@/types/filter";

interface InitialActiveFilters {
  categories: number[];
  brands: number[];
  years: number[];
  origins: number[];
  priceRangeId?: number;
  sortBy: string;
}

interface ProductViewProps {
  initialProducts: Product[];
  initialActiveFilters: InitialActiveFilters;
}

const priceRangesForDisplay: (FilterPriceRange & {
  min?: number;
  max?: number;
})[] = [
  { id: 1, moTa: "Dưới 100.000đ", max: 99999 },
  { id: 2, moTa: "100.000đ - 500.000đ", min: 100000, max: 500000 },
  { id: 3, moTa: "500.000đ - 1.000.000đ", min: 500001, max: 1000000 },
  { id: 4, moTa: "Trên 1.000.000đ", min: 1000001 },
];

export default function ProductView({
  initialProducts,
  initialActiveFilters,
}: ProductViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateSearchParams = useCallback(
    (newParams: Record<string, string | undefined>) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      for (const key in newParams) {
        const value = newParams[key];
        if (value === undefined || value === "") {
          current.delete(key);
        } else {
          current.set(key, value);
        }
      }
      const query = current.toString();
      router.replace(`${pathname}${query ? `?${query}` : ""}`, {
        scroll: false,
      });
    },
    [searchParams, pathname, router]
  );

  const handleCategoryChange = useCallback(
    (categoryId: number, isChecked: boolean) => {
      const currentCategories = new Set(initialActiveFilters.categories);
      if (isChecked) currentCategories.add(categoryId);
      else currentCategories.delete(categoryId);
      const value = Array.from(currentCategories);
      updateSearchParams({
        categories: value.length > 0 ? value.join(",") : undefined,
      });
    },
    [initialActiveFilters.categories, updateSearchParams]
  );

  const handleBrandChange = useCallback(
    (brandId: number, isChecked: boolean) => {
      const currentBrands = new Set(initialActiveFilters.brands);
      if (isChecked) currentBrands.add(brandId);
      else currentBrands.delete(brandId);
      const value = Array.from(currentBrands);
      updateSearchParams({
        brands: value.length > 0 ? value.join(",") : undefined,
      });
    },
    [initialActiveFilters.brands, updateSearchParams]
  );

  const handleYearChange = useCallback(
    (yearValue: number, isChecked: boolean) => {
      const currentYears = new Set(initialActiveFilters.years);
      if (isChecked) currentYears.add(yearValue);
      else currentYears.delete(yearValue);
      const value = Array.from(currentYears);
      updateSearchParams({
        years: value.length > 0 ? value.join(",") : undefined,
      });
    },
    [initialActiveFilters.years, updateSearchParams]
  );

  const handleOriginChange = useCallback(
    (originId: number, isChecked: boolean) => {
      const currentOrigins = new Set(initialActiveFilters.origins);
      if (isChecked) currentOrigins.add(originId);
      else currentOrigins.delete(originId);
      const value = Array.from(currentOrigins);
      updateSearchParams({
        origins: value.length > 0 ? value.join(",") : undefined,
      });
    },
    [initialActiveFilters.origins, updateSearchParams]
  );

  const handlePriceRangeChange = useCallback(
    (priceRangeId?: number) => {
      const newPriceRangeId =
        initialActiveFilters.priceRangeId === priceRangeId
          ? undefined
          : priceRangeId;
      updateSearchParams({ priceRangeId: newPriceRangeId?.toString() });
    },
    [initialActiveFilters.priceRangeId, updateSearchParams]
  );

  const handleSortChange = useCallback(
    (sortValue: string) => {
      updateSearchParams({ sort: sortValue });
    },
    [updateSearchParams]
  );

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilterSidebar
            selectedCategories={initialActiveFilters.categories}
            onCategoryChange={handleCategoryChange}
            selectedBrands={initialActiveFilters.brands}
            onBrandChange={handleBrandChange}
            selectedYears={initialActiveFilters.years}
            onYearChange={handleYearChange}
            selectedOrigins={initialActiveFilters.origins}
            onOriginChange={handleOriginChange}
            selectedPriceRangeId={initialActiveFilters.priceRangeId}
            onPriceRangeChange={handlePriceRangeChange}
            priceRangesForDisplay={priceRangesForDisplay}
          />
        </div>

        <div className="lg:col-span-3 flex flex-col gap-6">
          <ProductListFilter
            sortBy={initialActiveFilters.sortBy}
            onSortChange={handleSortChange}
            resultCount={initialProducts.length}
          />

          {initialProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {initialProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 col-span-full">
              <p className="text-xl text-gray-600">
                Không tìm thấy sản phẩm nào phù hợp.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
