// Importa la función createContext de React para crear un contexto global
import { createContext } from "react";

/**
 * Contexto global para manejar el estado del carrito de compras y permite compartir el estado del carrito y las funciones
 * como agregar, quitar o vaciar
 */
export const CartContext = createContext();
