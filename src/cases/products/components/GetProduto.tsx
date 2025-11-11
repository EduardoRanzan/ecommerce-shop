import { useParams } from "react-router-dom";

export default function GetProduto () {
    const { id } = useParams<{ id: string }>();

    return(
        <>
            {id}
        </>
    )
}