import { useContext } from "react";
import { CartContext } from "../services/CartContext";


export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro do CartProvider.");
  return ctx;
}
