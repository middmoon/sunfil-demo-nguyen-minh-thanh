export interface FilterItem {
  id: number;
  name: string;
  quality?: number;
}

export interface PriceRange {
  id: number;
  moTa: string;
  min?: number;
  max?: number;
}

export interface YearItem {
  id: number;
  year: number;
  quality: number;
}

export interface OriginItem {
  id: number;
  name: string;
  quality: number;
}
