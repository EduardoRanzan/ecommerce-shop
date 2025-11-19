import { useEffect, useReducer } from "react";
import { CartContext, type CartAction, type CartContextType, type CartItem, type CartProviderProps } from "../services/CartContext";

const initialState: CartItem[] = (() => {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
})();

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD":
      const exists = state.find((i) => i.id === action.item.id);
      if (exists) {
        return state.map((i) =>
          i.id === action.item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...state, { ...action.item, quantity: 1 }];

    case "REMOVE":
      return state.filter((i) => i.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value: CartContextType = {
    cart,
    dispatch,
    totalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
