import { ShoppingBasketIcon } from "lucide-react";

export default function Logo() {
    return(
        <div className="text-xl font-semibold">
            <span className="flex flex-wrap gap-2">
                <ShoppingBasketIcon />
                Shop!
            </span>
        </div>
    )
}