import type { categoryDTO } from "@/cases/categories/DTOS/category.dto"
import { useProductCategory } from "../hooks/use-product"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Loading from "@/components/layout/Loading"

interface ListarProdutosProps{
    category: categoryDTO
}

export default function ListProducts ({category: {id}}: ListarProdutosProps) {

    const {
        data: products,
        isLoading,
        error
    } = useProductCategory(id!)

    return(
        <>
            { 
                isLoading && 
                <Loading />
            }
            { !isLoading && !error && products &&
            <div className="flex flex-wrap gap-4 justify-center">
                {products?.map((product) => (
                    <a href={`/produto/${product.id}`} key={product.id}>
                        <Card
                            className="hover:shadow-lg transition-shadow duration-200 min-w-2xs max-w-2xs"
                            >
                            <CardHeader className="flex justify-between">
                                <CardTitle className="text-lg truncate">{product.name}</CardTitle>
                                <Badge variant="default" className="px-3">{product.brand?.name}</Badge>
                            </CardHeader>

                            <CardContent className="max-w-full h-48 bg-gray-300">
                                {/* ibagens */}
                            </CardContent>

                            <CardContent>
                                <p className="text-sm text-muted-foreground line-clamp-1">
                                {product.description || "Sem descrição"}
                                </p>
                            </CardContent>

                            <CardFooter className="justify-end">
                                <span className="font-semibold">R$ {product.price?.toFixed(2)}</span>
                            </CardFooter>
                        </Card>
                    </a>
                ))}
            </div>
            }
        </>
    )
}