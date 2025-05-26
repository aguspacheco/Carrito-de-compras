// Importación de hooks de React
import { useReducer, useEffect } from "react";
// Importación del reducer y estado inicial del carrito
import { cartReducer, cartInitialState } from "../reducers/cart";
// Importación del contexto global del carrito
import { CartContext } from "./CartContext";

/**
 * Maneja el estado del carrito usando el useReducer y sincroniza el estado del carrito con localStorage.
 * - addToCart: agrega un producto al carrito.
 * - removeFromCart: quita un producto del carrito.
 * - clearCart: elimina todos los productos del carrito.
 */
function useCartReducer() {
  // Inicializa el estado del carrito, recuperando desde localStorage si existe
  const [state, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : cartInitialState;
  });

  // Sincroniza el carrito con localStorage cada vez que cambia el estado
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  // Agrega un producto al carrito
  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });
  //Quita un producto del carrito
  const removeFromCart = (product) => dispatch({ type: "REMOVE_FROM_CART", payload: product });
  //vacia completamente el carrito
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart };
}

/**
 * Componente CartProvider
 * Provee el contexto del carrito a todos los componentes hijos.
 * tiene que envolver a toda la aplicación o a las partes que necesiten acceso al carrito.
 * Props
 * children: los componentes hijos que tendrán acceso al carrito.
 */
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
