// Importa el hook useContext de React
import { useContext } from "react";
// Importa el contexto del carrito definido previamente
import { CartContext } from "../context/CartContext.js";

/**
 * useCart
 * Custom hook para acceder al contexto del carrito de compras.
 * Provee acceso directo al estado del carrito y a las funciones para agregar, quitar o vaciar.
 * Este hook se tiene que usar solo dentro de un componente
 * que esté envuelto por <CartProvider>. Si se usa afuera, se lanza un error.
 * @returns {Object} - El valor del contexto del carrito: { cart, addToCart, removeFromCart, clearCart }
 */
export const useCart = () => {
  const context = useContext(CartContext);
  // Si el contexto es undefined, significa que no está dentro del CartProvider
  if (!context) {
    throw new Error("useCart tiene que usarse dentro de un CartProvider");
  }

  return context;
};
