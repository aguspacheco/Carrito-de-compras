// Importación de estilos específicos para el listado de productos
import "./Products.css";
// Importación de íconos visuales para los botones
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
// Hook que da acceso al estado del carrito
import { useCart } from "../hooks/useCart.js";

/**
 * Componente Products que renderiza una lista de productos para agregar o quitar productos del carrito de compras.
 * Cada producto tiene que tener
 *  id: identificador único
 *  title: nombre
 *  price: precio
 *  thumbnail: URL de imagen del producto
 */
export function Products({ products }) {
  // Accede a las funciones y estado del carrito desde el contexto
  const { addToCart, removeFromCart, cart } = useCart();

  /**
   * Verifica si un producto ya esta en el carrito.
   * @param {Object} product - Producto que se verifica
   * @returns {boolean} - verdadero si está en el carrito, falso si no
   */
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product, index) => {
          const isProductCart = checkProductInCart(product);

          return (
            <li key={`${product.id}-${index}`}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                {/* Botón para agregar o quitar del carrito según el estado actual */}
                <button
                  style={{ backgroundColor: isProductCart ? "red" : "#09f" }}
                  onClick={() => {
                    isProductCart ? removeFromCart(product) : addToCart(product);
                  }}
                >
                  {isProductCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
