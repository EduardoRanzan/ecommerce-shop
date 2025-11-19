import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/product.service";

export function useProductCategory (id: string){
    return useQuery({
        queryKey: ['products'],
        queryFn: () => productService.findProductByCategory(id)
    })
}

export function useProduct() {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => productService.findAll()
    })
}

export function useProductById(id: string) {
    return useQuery({
        queryKey: ['productById'],
        queryFn: () => productService.findProductById(id)
    })
}