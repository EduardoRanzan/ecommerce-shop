import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCategory } from "../hooks/use-category"
import { Spinner } from "@/components/ui/spinner"
import ListarProdutos from "@/cases/products/components/Listarprodutos"


export default function ListCategory () {
    const {
        data: categorias,
        isLoading,
        error
    } = useCategory()

    if (isLoading) return <p>Carregando categorias...</p>
    if (error) return <p>Erro ao carregar categorias</p>
    if (!categorias || categorias.length === 0) return <p>Nenhuma categoria encontrada</p>

    return(
        <>
            {
                isLoading && 
                <>Carregando...<Spinner /></>
            }
            { !isLoading && categorias.length && !error &&
                <Tabs defaultValue={categorias![0].name} className="w-full">
                    <TabsList className="flex flex-wrap gap-2">
                        {categorias?.map((category) => (
                            <TabsTrigger key={category.name} value={category.name}>
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                        {categorias?.map((category) => (
                            <TabsContent key={category.name} value={category.name}>
                                <ListarProdutos category={category}/>
                            </TabsContent>
                        ))}
                </Tabs>
            }
        </>
    )
}