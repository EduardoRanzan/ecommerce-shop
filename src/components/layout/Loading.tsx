import { Spinner } from "../ui/spinner";

interface LoadingProp {
    message?: string;
}

export default function Loading({
    message = "Carregando..."
}: LoadingProp) {
    return (
        <div className="flex items-center justify-center h-full w-full m-auto">
            <p className="text-lg text-gray-600">{message}...</p>
            <Spinner />
        </div>
    );
}