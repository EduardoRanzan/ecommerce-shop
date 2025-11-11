import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/product.service";

export function useProductCategory (id: string){
    return useQuery({
        queryKey: ['products'],
        queryFn: () => productService.findProductByCategory(id)
    })
}