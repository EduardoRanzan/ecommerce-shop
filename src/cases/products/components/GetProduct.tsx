import { useParams } from "react-router-dom";

export default function GetProduct () {
    const { id } = useParams<{ id: string }>();

    return(
        <>
            <main>
            </main>
        </>
    )
}