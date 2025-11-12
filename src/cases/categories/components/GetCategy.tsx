import { useParams } from "react-router-dom";
import ListProducts from "@/cases/products/components/ListProducts";
import { useCategoryById } from "../hooks/use-category";
import Loading from "@/components/layout/Loading";

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
            <main className="flex justify-center items-center h-9/10 w-9/10 m-auto">
                
                <ListProducts category={category!} />
            </main>
        }
        </>
    )
}