import { api } from "@/lib/axios"
import type { ProductDTO } from "../DTOS/product.dto";

const endPoint = 'products';

export const productService = {
    async findAll (): Promise<ProductDTO[]> {
        const products = await api.get(endPoint);

        return products.data;
    },

    async findProductByCategory(id: string): Promise<ProductDTO[]> {
        const products = await api.get(`${endPoint}/category/${id}`)

        return products.data;
    },

    async findProductById(id: string): Promise<ProductDTO> {
        const product = await api.get(`${endPoint}/${id}`)

        return product.data
    },
}