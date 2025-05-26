export interface OriginCountry {
  id: number;
  name: string;
}

export interface Brand {
  id: number;
  name: string;
  img_url: string;
  origin_country: OriginCountry;
}

export interface SubCategory {
  id: number;
  name: string;
  img_url: string;
}

export interface Category {
  id: number;
  name: string;
  img_url: string;
  sub_categories?: SubCategory[];
}

export interface Product {
  id: number;
  name: string;
  img_url: string;
  year_of_manufacture: string;
  is_best_seller: boolean;
  price: number;
  brand: Brand;
  category: Category[];
  sub_categories: SubCategory[];
}
