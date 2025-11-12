import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCategory } from "../hooks/use-category"
import ListProducts from "@/cases/products/components/ListProducts"
import Loading from "@/components/layout/Loading"


export default function ListCategories () {
    const {
        data: categorias,
        isLoading,
        error
    } = useCategory()

    return(
        <>
            {
                isLoading && 
                <Loading></Loading>
            }
            { !isLoading && categorias?.length && !error &&
                <div>
                    <Tabs defaultValue={categorias![0].name} className="flex flex-wrap">
                        <TabsList className="flex flex-wrap gap-4 w-fit ml-auto shadow-md mb-4">
                            {categorias?.map((category) => (
                                <TabsTrigger key={category.name} value={category.name}>
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                            {categorias?.map((category) => (
                                <TabsContent key={category.name} value={category.name}>
                                    <ListProducts category={category}/>
                                </TabsContent>
                            ))}
                    </Tabs>
                </div>
            }
        </>
    )
}