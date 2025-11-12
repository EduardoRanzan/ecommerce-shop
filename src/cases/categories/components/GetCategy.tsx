import { useParams } from "react-router-dom";
import { useCategoryById } from "../hooks/use-category";

export default function GetCategory () {
    const { id } = useParams<{ id: string }>();

    const {
        data: category,
        isLoading,
        error
    } = useCategoryById(id!)

    console.log(category)

    return(
        <>
            <main>
            </main>
        </>
    )
}