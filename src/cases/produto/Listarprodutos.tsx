import { useParams } from "react-router-dom";

export default function ListarProdutos () {
    const { id } = useParams<{ id: string }>();

    return(
        <>
            {id}
        </>
    )
}