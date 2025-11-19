import { useCart } from "@/cases/carrinho/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link to="/carrinho" className="relative my-auto">
      <ShoppingCart size="30" />

      {totalItems > 0 && (
        <span
          className="
            absolute -top-2 -right-2
            bg-red-600 text-white text-xs
            rounded-full px-2 py-0.5
          "
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}
