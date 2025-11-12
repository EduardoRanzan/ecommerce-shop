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

    return(
        <>
            {
                isLoading && 
                <>Carregando...<Spinner /></>
            }
            { !isLoading && categorias?.length && !error &&
                <div>
                    <Tabs defaultValue={categorias![0].name} className="flex flex-wrap">
                        <TabsList className="flex flex-wrap gap-2 w-fit ml-auto">
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
                </div>
            }
        </>
    )
}