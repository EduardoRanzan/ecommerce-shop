import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/category.service";

export function useCategory() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryService.findAll()
    })
}

export function useCategoryById(id: string) {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => categoryService.findById(id)
    })
}