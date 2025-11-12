import { api } from "@/lib/axios";
import type { categoryDTO } from "../DTOS/category.dto";

const endPonint = 'categories';

export const categoryService = {
    async findAll (): Promise<categoryDTO[]> {
        const category = await api.get(endPonint);

        return category.data;
    },

    async findById (id: string): Promise<categoryDTO> {
        const category = await api.get(`${endPonint}/${id}`)

        return category.data
    }
}