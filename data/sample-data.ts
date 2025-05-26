import { OriginCountry, Brand, Category, Product, SubCategory } from "./type"; // Assuming SubCategory is part of type.ts

// Origin countries (Reduced to 4 relevant countries)
export const originCountries: OriginCountry[] = [
  { id: 1, name: "Đức" }, // For Bosch
  { id: 2, name: "Mỹ" }, // For K&N, Mobil 1
  { id: 3, name: "Nhật Bản" }, // For Denso
  { id: 4, name: "Anh" }, // For Castrol
];

// Brands (Reduced to 5 brands)
export const brands: Brand[] = [
  {
    id: 1,
    name: "Bosch",
    img_url: "/images/brands/bosch.png",
    origin_country: originCountries[0],
  },
  {
    id: 2,
    name: "K&N",
    img_url: "/images/brands/kn.png",
    origin_country: originCountries[1],
  },
  {
    id: 3,
    name: "Mobil 1",
    img_url: "/images/brands/mobil1.png",
    origin_country: originCountries[1],
  },
  {
    id: 4,
    name: "Denso",
    img_url: "/images/brands/denso.png",
    origin_country: originCountries[2],
  },
  {
    id: 5,
    name: "Castrol",
    img_url: "/images/brands/castrol.png",
    origin_country: originCountries[3],
  },
];

// Categories (Reduced to 3 categories, each with a few sub-categories)
export const categories: Category[] = [
  {
    id: 1,
    name: "Lọc dầu động cơ",
    img_url: "/images/categories/loc-dau-dong-co.jpg",
    sub_categories: [
      {
        id: 101,
        name: "Cho xe tải",
        img_url: "/images/sub_categories/xe-tai.jpg",
      },
      {
        id: 102,
        name: "Cho xe du lịch",
        img_url: "/images/sub_categories/xe-du-lich.jpg",
      },
      {
        id: 103,
        name: "Lọc dầu máy dầu diesel",
        img_url: "/images/sub_categories/may-dau-diesel.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Lọc dầu hiệu suất cao",
    img_url: "/images/categories/loc-dau-hieu-suat-cao.jpg",
    sub_categories: [
      {
        id: 201,
        name: "Lọc dầu cho xe đua",
        img_url: "/images/sub_categories/xe-dua.jpg",
      },
      {
        id: 202,
        name: "Lọc dầu lưu lượng cao",
        img_url: "/images/sub_categories/luu-luong-cao.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Lọc dầu tổng hợp",
    img_url: "/images/categories/loc-dau-tong-hop.jpg",
    sub_categories: [
      {
        id: 301,
        name: "Dùng cho dầu tổng hợp hoàn toàn",
        img_url: "/images/sub_categories/dau-tong-hop-hoan-toan.jpg",
      },
      {
        id: 302,
        name: "Dùng cho dầu bán tổng hợp",
        img_url: "/images/sub_categories/dau-ban-tong-hop.jpg",
      },
    ],
  },
];

// Helper function to safely get subcategories
const getSubCategories = (
  categoryIndices: number[],
  subCategoryIndices: (number[] | number)[]
): SubCategory[] => {
  const subs: SubCategory[] = [];
  categoryIndices.forEach((catIdx, i) => {
    const parentCategory = categories[catIdx];
    if (parentCategory && parentCategory.sub_categories) {
      const subIndicesForParent = Array.isArray(subCategoryIndices[i])
        ? (subCategoryIndices[i] as number[])
        : [subCategoryIndices[i] as number];
      subIndicesForParent.forEach((subIdx) => {
        if (
          parentCategory.sub_categories &&
          parentCategory.sub_categories[subIdx]
        ) {
          subs.push(parentCategory.sub_categories[subIdx]);
        }
      });
    }
  });
  return subs;
};

// Products (Expanded to 20 products)
export const products: Product[] = [
  {
    id: 1,
    name: "Bosch 3330 Premium Oil Filter",
    img_url: "/images/products/52046262-2.jpg",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 130000,
    brand: brands[0], // Bosch
    category: [categories[0]], // Lọc dầu động cơ
    sub_categories: getSubCategories([0], [0]), // Cho xe tải
  },
  {
    id: 2,
    name: "K&N HP-1008 Performance Gold Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 1550000,
    brand: brands[1], // K&N
    category: [categories[1]], // Lọc dầu hiệu suất cao
    sub_categories: getSubCategories([1], [0]), // Lọc dầu cho xe đua
  },
  {
    id: 3,
    name: "Mobil 1 M1-110A Extended Performance Oil Filter",
    img_url:
      "/images/products/155626-z-phin-ong-loc-dau-thuy-luc-loc-dau-dong-co-loc-nhot.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 650000,
    brand: brands[2], // Mobil 1
    category: [categories[2]], // Lọc dầu tổng hợp
    sub_categories: getSubCategories([2], [0]), // Dùng cho dầu tổng hợp hoàn toàn
  },
  {
    id: 4,
    name: "Denso 150-1000 First Time Fit Oil Filter",
    img_url: "/images/products/52046262-2.jpg",
    year_of_manufacture: "2023",
    is_best_seller: false,
    price: 400000,
    brand: brands[3], // Denso
    category: [categories[0]], // Lọc dầu động cơ
    sub_categories: getSubCategories([0], [1]), // Cho xe du lịch
  },
  {
    id: 5,
    name: "Castrol GTX 7317 Conventional Oil Filter",
    img_url:
      "/images/products/155626-z-phin-ong-loc-dau-thuy-luc-loc-dau-dong-co-loc-nhot.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 450000,
    brand: brands[4], // Castrol
    category: [categories[1]], // Lọc dầu hiệu suất cao
    sub_categories: getSubCategories([1], [1]), // Lọc dầu lưu lượng cao
  },
  {
    id: 6,
    name: "Bosch Workshop D3323 Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: false,
    price: 180000,
    brand: brands[0], // Bosch
    category: [categories[0]], // Lọc dầu động cơ
    sub_categories: getSubCategories([0], [2]), // Lọc dầu máy dầu diesel
  },
  {
    id: 7,
    name: "K&N PS-7000 Pro-Series Oil Filter",
    img_url: "/images/products/52046262-2.jpg",
    year_of_manufacture: "2024",
    is_best_seller: true,
    price: 1200000,
    brand: brands[1], // K&N
    category: [categories[1], categories[2]], // Multiple categories
    sub_categories: getSubCategories([1, 2], [[0], [1]]), // Lọc dầu cho xe đua, Dùng cho dầu bán tổng hợp
  },
  {
    id: 8,
    name: "Mobil 1 M1-210A High Efficiency Oil Filter",
    img_url:
      "/images/products/155626-z-phin-ong-loc-dau-thuy-luc-loc-dau-dong-co-loc-nhot.webp",
    year_of_manufacture: "2024",
    is_best_seller: false,
    price: 750000,
    brand: brands[2], // Mobil 1
    category: [categories[2]], // Lọc dầu tổng hợp
    sub_categories: getSubCategories([2], [1]), // Dùng cho dầu bán tổng hợp
  },
  {
    id: 9,
    name: "Denso 150-2002 Standard Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 380000,
    brand: brands[3], // Denso
    category: [categories[0]], // Lọc dầu động cơ
    sub_categories: getSubCategories([0], [0]), // Cho xe tải
  },
  {
    id: 10,
    name: "Castrol Edge 03124 Professional Oil Filter",
    img_url:
      "/images/products/155626-z-phin-ong-loc-dau-thuy-luc-loc-dau-dong-co-loc-nhot.webp",
    year_of_manufacture: "2024",
    is_best_seller: false,
    price: 520000,
    brand: brands[4], // Castrol
    category: [categories[2]], // Lọc dầu tổng hợp
    sub_categories: getSubCategories([2], [0]), // Dùng cho dầu tổng hợp hoàn toàn
  },
  {
    id: 11,
    name: "Bosch Longlife 5432 Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 95000,
    brand: brands[0], // Bosch
    category: [categories[0]], // Lọc dầu động cơ
    sub_categories: getSubCategories([0], [1]), // Cho xe du lịch
  },
  {
    id: 12,
    name: "K&N KN-171C Chrome Oil Filter for Motorcycles",
    img_url: "/images/products/52046262-2.jpg",
    year_of_manufacture: "2023",
    is_best_seller: false,
    price: 1650000,
    brand: brands[1], // K&N
    category: [categories[1]], // Lọc dầu hiệu suất cao
    sub_categories: getSubCategories([1], [0]), // Lọc dầu cho xe đua
  },
  {
    id: 13,
    name: "Mobil 1 M1C-151A Motorcycle Oil Filter",
    img_url:
      "/images/products/155626-z-phin-ong-loc-dau-thuy-luc-loc-dau-dong-co-loc-nhot.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 580000,
    brand: brands[2], // Mobil 1
    category: [categories[2], categories[1]],
    sub_categories: getSubCategories([2, 1], [[0], [1]]), // Dùng cho dầu tổng hợp hoàn toàn, Lọc dầu lưu lượng cao
  },
  {
    id: 14,
    name: "Denso 151-2003 Economy Oil Filter",
    img_url: "/images/products/52046262-2.jpg",
    year_of_manufacture: "2024",
    is_best_seller: false,
    price: 320000,
    brand: brands[3], // Denso
    category: [categories[0]], // Lọc dầu động cơ
    sub_categories: getSubCategories([0], [2]), // Lọc dầu máy dầu diesel
  },
  {
    id: 15,
    name: "Castrol GTX High Mileage 51372 Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 480000,
    brand: brands[4], // Castrol
    category: [categories[0], categories[2]],
    sub_categories: getSubCategories([0, 2], [[1], [1]]), // Cho xe du lịch, Dùng cho dầu bán tổng hợp
  },
  {
    id: 16,
    name: "Bosch DistancePlus D3422 Oil Filter",
    img_url:
      "/images/products/155626-z-phin-ong-loc-dau-thuy-luc-loc-dau-dong-co-loc-nhot.webp",
    year_of_manufacture: "2024",
    is_best_seller: true,
    price: 220000,
    brand: brands[0], // Bosch
    category: [categories[2]], // Lọc dầu tổng hợp
    sub_categories: getSubCategories([2], [0]), // Dùng cho dầu tổng hợp hoàn toàn
  },
  {
    id: 17,
    name: "K&N SS-1002 Reusable Stainless Steel Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: false,
    price: 2800000,
    brand: brands[1], // K&N
    category: [categories[1]], // Lọc dầu hiệu suất cao
    sub_categories: getSubCategories([1], [1]), // Lọc dầu lưu lượng cao
  },
  {
    id: 18,
    name: "Mobil 1 M1-103A Heavy Duty Truck Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 820000,
    brand: brands[2], // Mobil 1
    category: [categories[0]], // Lọc dầu động cơ
    sub_categories: getSubCategories([0], [0]), // Cho xe tải
  },
  {
    id: 19,
    name: "Denso 150-3004 Racing Performance Oil Filter",
    img_url: "/images/products/52046262-2.jpg",
    year_of_manufacture: "2024",
    is_best_seller: false,
    price: 450000,
    brand: brands[3], // Denso
    category: [categories[1]], // Lọc dầu hiệu suất cao
    sub_categories: getSubCategories([1], [0]), // Lọc dầu cho xe đua
  },
  {
    id: 20,
    name: "Castrol Syntrans 8107 Full Synthetic Oil Filter",
    img_url: "/images/products/phin-inox-loc-dau-ap-luc-cao-3.webp",
    year_of_manufacture: "2023",
    is_best_seller: true,
    price: 600000,
    brand: brands[4], // Castrol
    category: [categories[2]], // Lọc dầu tổng hợp
    sub_categories: getSubCategories([2], [1]), // Dùng cho dầu bán tổng hợp
  },
];
