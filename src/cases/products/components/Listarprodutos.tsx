import type { categoryDTO } from "@/cases/categories/DTOS/category.dto"
import { useProductCategory } from "../hooks/use-product"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ListarProdutosProps{
    category: categoryDTO
}

export default function ListarProdutos ({category: {id}}: ListarProdutosProps) {

    const {
        data: products
    } = useProductCategory(id!)

    return(
        <div className="flex flex-wrap gap-4 justify-start">
            {products?.map((product) => (
                <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow duration-200 min-w-2xs max-w-2xs"
                >
                <CardHeader className="flex justify-between">
                    <CardTitle className="text-lg truncate">{product.name}</CardTitle>
                    <Badge variant="default">{product.brand?.name}</Badge>
                </CardHeader>

                <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                    {product.description || "Sem descrição"}
                    </p>
                </CardContent>

                <CardFooter className="flex justify-between items-center">
                    <span className="font-semibold">R$ {product.price?.toFixed(2)}</span>
                </CardFooter>
                </Card>
            ))}
        </div>
    )
}