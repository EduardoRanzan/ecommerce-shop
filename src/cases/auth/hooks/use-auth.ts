import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";


export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("Use within AuthProvider");

  return ctx;
}
