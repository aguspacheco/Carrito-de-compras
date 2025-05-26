// Importación de estilos específicos para el carrito
import "./Cart.css";
// Importación de hooks y componentes
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

/**
 * Representa un producto dentro del carrito.
 * - thumbnail: URL de la imagen del producto.
 * - price: Precio del producto.
 * - title: Nombre del producto.
 * - quantity: Cantidad del producto en el carrito.
 * - addToCart: Función para incrementar la cantidad del producto.
 */
function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

/**
 * Componente Cart que representa el carrito de compras completo.
 * Incluye un botón de acceso al carrito, lista de productos y botón para vaciarlo.
 */

export function Cart() {
  // Genera un ID único para asociar el input y su label
  const cartCheckboxId = useId();
  // Accede al estado del carrito y funciones desde el contexto
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      {/* Botón que abre y cierra el carrito */}
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      {/* Contenido del carrito */}
      <aside className="cart">
        <ul>
          {/* Renderiza cada producto del carrito */}
          {cart.map((product) => (
            <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
          ))}
        </ul>

        {/* Botón para vaciar el carrito */}
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
