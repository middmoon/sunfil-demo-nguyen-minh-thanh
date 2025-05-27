import React, { Suspense } from "react";
import ProductView from "@/components/product/ProductView";
import { products as allProductsFromData } from "@/data/sample-data";
import type { Product } from "@/data/type";
import { STATIC_SORT_OPTIONS } from "@/constants/sort-options";
import BreadCrumb from "@/components/BreadCrum";
import DealBanner from "@/components/banner/DealBanner";

const parseQueryParamArray = (
  param: string | string[] | undefined
): number[] => {
  if (!param) return [];
  if (Array.isArray(param)) return param.map(Number).filter((n) => !isNaN(n));
  return param
    .split(",")
    .map(Number)
    .filter((n) => !isNaN(n));
};

const priceRangesForFiltering = [
  { id: 1, moTa: "Dưới 100.000đ", max: 99999 },
  { id: 2, moTa: "100.000đ - 500.000đ", min: 100000, max: 500000 },
  { id: 3, moTa: "500.000đ - 1.000.000đ", min: 500001, max: 1000000 },
  { id: 4, moTa: "Trên 1.000.000đ", min: 1000001 },
];

// Define the expected resolved types
type ResolvedPageParamsType = Record<string, never>;
type ResolvedSearchParamsType = {
  [key: string]: string | string[] | undefined;
};

interface ProductsPageProps {
  params: Promise<ResolvedPageParamsType>;
  searchParams: Promise<ResolvedSearchParamsType>; // searchParams is now also a Promise
}

export default async function ProductsPage({
  params: paramsPromise,
  searchParams: searchParamsPromise, // searchParams is now a promise
}: ProductsPageProps) {
  // Await both promises
  // We can await them concurrently for slight efficiency

  //
  await paramsPromise;
  const resolvedSearchParams = await searchParamsPromise;
  // resolvedParams will be {} for this page, so it's not used.
  // If ESLint complains about resolvedParams being unused, you can do:
  // await paramsPromise;
  // const resolvedSearchParams = await searchParamsPromise;

  const activeCategories = parseQueryParamArray(
    resolvedSearchParams.categories
  );
  const activeBrands = parseQueryParamArray(resolvedSearchParams.brands);
  const activeYears = parseQueryParamArray(resolvedSearchParams.years);
  const activeOrigins = parseQueryParamArray(resolvedSearchParams.origins);

  const rawPriceRangeId = resolvedSearchParams.priceRangeId;
  const activePriceRangeId =
    typeof rawPriceRangeId === "string" && !isNaN(+rawPriceRangeId)
      ? +rawPriceRangeId
      : undefined;

  const initialSortBy =
    STATIC_SORT_OPTIONS.find((opt) => opt.isActive)?.value ||
    STATIC_SORT_OPTIONS[0]?.value ||
    "newest";

  const sortBy =
    typeof resolvedSearchParams.sort === "string"
      ? resolvedSearchParams.sort
      : initialSortBy;

  let filteredProducts: Product[] = [...allProductsFromData];

  if (activeCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.some((cat) => activeCategories.includes(cat.id))
    );
  }
  if (activeBrands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      activeBrands.includes(product.brand.id)
    );
  }
  if (activeYears.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      activeYears.includes(parseInt(String(product.year_of_manufacture), 10))
    );
  }
  if (activeOrigins.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      activeOrigins.includes(product.brand.origin_country.id)
    );
  }
  if (activePriceRangeId !== undefined) {
    const selectedRange = priceRangesForFiltering.find(
      (r) => r.id === activePriceRangeId
    );
    if (selectedRange) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.price;
        const minOk =
          selectedRange.min === undefined || price >= selectedRange.min;
        const maxOk =
          selectedRange.max === undefined || price <= selectedRange.max;
        return minOk && maxOk;
      });
    }
  }

  if (sortBy === "price_asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price_desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "discount_desc") {
    filteredProducts.sort((a, b) => {
      const discountA =
        a.original_price && a.price
          ? (a.original_price - a.price) / a.original_price
          : 0;
      const discountB =
        b.original_price && b.price
          ? (b.original_price - b.price) / b.original_price
          : 0;
      return discountB - discountA;
    });
  } else if (sortBy === "newest") {
    filteredProducts.sort((a, b) => b.id - a.id);
  } else if (sortBy === "bestseller") {
    filteredProducts.sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0));
  } else if (sortBy === "rating") {
    filteredProducts.sort(
      (a, b) => (b.averageRating || 0) - (a.averageRating || 0)
    );
  }

  const initialActiveFiltersForClient = {
    categories: activeCategories,
    brands: activeBrands,
    years: activeYears,
    origins: activeOrigins,
    priceRangeId: activePriceRangeId,
    sortBy: sortBy,
  };

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm" },
  ];

  const productViewFallback = <div>Đang tải sản phẩm...</div>;

  return (
    <div>
      <BreadCrumb items={breadcrumbItems} />
      <DealBanner
        bannerImage="/event.png"
        products={filteredProducts.slice(0, 8)}
        title="Ưu đãi nổi bật"
      />
      <Suspense fallback={productViewFallback}>
        <ProductView
          initialProducts={filteredProducts}
          initialActiveFilters={initialActiveFiltersForClient}
        />
      </Suspense>
    </div>
  );
}
