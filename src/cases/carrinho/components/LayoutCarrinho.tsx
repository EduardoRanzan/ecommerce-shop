import { useCart } from "../hooks/use-cart";


export default function LayoutCarrinho() {
  const { cart, dispatch } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Seu Carrinho</h1>

      {cart.length === 0 && <p>Carrinho vazio.</p>}

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between py-2 border-b">
          <div>
            <p>{item.name}</p>
            <p className="text-sm text-gray-400">
              {item.quantity} × R$ {item.price.toFixed(2)}
            </p>
          </div>

          <button
            className="text-red-600 hover:underline"
            onClick={() => dispatch({ type: "REMOVE", id: item.id })}
          >
            Remover
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Limpar Carrinho
        </button>
      )}
    </div>
  );
}
