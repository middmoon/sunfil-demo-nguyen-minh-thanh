export interface SortOption {
  label: string;
  value: string;
  isActive?: boolean;
}

export const STATIC_SORT_OPTIONS: SortOption[] = [
  { label: "Mới nhất", value: "newest", isActive: true },
  { label: "Bán chạy", value: "bestseller", isActive: false },
  { label: "Đánh giá cao", value: "rating", isActive: false },
];

export const PRICE_SORT_OPTIONS: SortOption[] = [
  { label: "Giá: Thấp đến cao", value: "price_asc" },
  { label: "Giá: Cao đến thấp", value: "price_desc" },
  { label: "Giảm giá nhiều nhất", value: "discount_desc" },
];
