import { Button } from "@/components/ui/button";
import { useCart } from "../hooks/use-cart";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function LayoutCarrinho() {
  const { cart, dispatch } = useCart();

  const navigate = useNavigate()

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleHome() {
    navigate("/")
  }

  function handleRemove(id: string) { 
    toast.custom((t) => (
      <div className="bg-white rounded-md shadow-lg p-4 flex flex-col gap-3">
        <p className="font-semibold">Remover item do carrinho?</p>
        
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => toast.dismiss(t)}
          >
            Cancelar
          </Button>

          <Button
            onClick={() => {
              dispatch({ type: "REMOVE", id })
              toast.dismiss(t);
              toast.success("Produto removido do carrinho!");
            }}
          >
            Confirmar
          </Button>
        </div>
      </div>
    ));
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
            onClick={() => handleRemove(item.id!)}
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
