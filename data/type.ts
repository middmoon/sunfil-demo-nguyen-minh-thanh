// Định nghĩa kiểu dữ liệu cho quốc gia xuất xứ
export interface OriginCountry {
  id: number;
  name: string;
}

// Định nghĩa kiểu dữ liệu cho thương hiệu
export interface Brand {
  id: number;
  name: string;
  img_url: string;
  origin_country: OriginCountry;
}

// Định nghĩa kiểu dữ liệu cho danh mục phụ (sub-category)
export interface SubCategory {
  id: number;
  name: string;
  img_url: string;
}

// Định nghĩa kiểu dữ liệu cho danh mục sản phẩm
export interface Category {
  id: number;
  name: string;
  img_url: string;
  sub_categories?: SubCategory[];
}

// Định nghĩa kiểu dữ liệu cho sản phẩm
export interface Product {
  id: number;
  name: string;
  img_url: string;
  year_of_manufacture: string;
  is_best_seller: boolean;
  price: number;
  original_price?: number; // For discount calculation (optional)
  brand: Brand;
  category: Category[];
  sub_categories: SubCategory[];
  salesCount?: number;
  averageRating?: number;
}
