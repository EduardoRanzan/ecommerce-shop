import { Button } from "@/components/ui/button";
import { useCart } from "../hooks/use-cart";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function LayoutCarrinho() {
  const { cart, dispatch } = useCart();

  const navigate = useNavigate()

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleHome() {
    navigate("/")
  }

  return (
    <div className="max-w-9/10 m-auto p-6">

      <h1 className="text-xl font-semibold mb-4">Seu Carrinho:</h1>

      {cart.length === 0 && 
      <div className="flex items-center">
        <span className="pr-2">Carrinho Vazio...</span>

        <Button onClick={handleHome}>
          Voltar às Compras
        </Button>
      </div>
      }

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-2 border-b">
          <div>
            <p>{item.name}</p>
            <p className="text-sm text-gray-400">
              {item.quantity} × R$ {item.price.toFixed(2)}
            </p>
          </div>

          <Button
            variant="destructive"
            onClick={() => dispatch({ type: "REMOVE", id: item.id })}
            >
            Remover
          </Button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="flex justify-between items-center">
          <Button
          variant="outline"
          className="my-6"
          onClick={() => dispatch({ type: "CLEAR" })}
          >
            Limpar Carrinho
          </Button>
          <Badge variant="outline" className="h-12 text-sm">
            Total: R$ {total.toFixed(2)}
          </Badge>
        </div>
      )}
    </div>
  );
}
