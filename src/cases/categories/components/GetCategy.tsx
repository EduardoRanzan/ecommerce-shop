import { useParams } from "react-router-dom";
import ListProducts from "@/cases/products/components/ListProducts";
import { useCategoryById } from "../hooks/use-category";
import Loading from "@/components/layout/Loading";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function GetCategory () {
    const { id } = useParams<{ id: string }>();

    const { 
        data: category,
        isLoading,
        error
     } = useCategoryById(id!);


    return(
        <>
        { isLoading &&
            <Loading />
        }
        {
            category && !error &&
            <main className="justify-center items-center h-9/10 w-9/10 m-auto my-10 gap-2">
                <span className="flex ">
                    <Badge variant="secondary">Você está na categoria: </Badge>
                    <h2 className="text-2xl ml-5"><strong>{category.name}</strong></h2> <br />
                </span>
                <Separator className="my-10" />
                <ListProducts category={category!} />
            </main>
        }
        </>
    )
}