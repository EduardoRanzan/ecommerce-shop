import type { BrandDTO } from "@/cases/brand/DTO/brand.dto";
import type { categoryDTO } from "@/cases/categories/DTOS/category.dto";

export interface ProductDTO {
  id?: string;
  name: string;
  description?: string;
  price: number;
  active: boolean;
  category: categoryDTO;
  brand?: BrandDTO;
}