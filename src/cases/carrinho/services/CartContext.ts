import { createContext } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../DTOS/CartItem";

export interface CartContextType {
  cart: CartItem[];
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
}

export type CartAction =
  | { type: "ADD"; item: Omit<CartItem, "quantity"> }
  | { type: "REMOVE"; id: string | undefined }
  | { type: "CLEAR" };

export const CartContext = createContext<CartContextType | undefined>(undefined);

export interface CartProviderProps {
  children: ReactNode;
}
