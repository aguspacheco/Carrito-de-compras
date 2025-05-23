import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart tiene que usarse dentro de un CartProvider");
  }

  return context;
};
