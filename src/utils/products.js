/**
 * Recibe un array de carritos, donde cada carrito tiene productos y devuelve una lista unificada de todos los productos, agregando a cada uno
 * una propiedad `category` extraída desde la URL del `thumbnail`.
 * Esta función es útil cuando los productos no tienen explícitamente una categoría
 * definida, pero dicha información se puede deducir del enlace de la imagen.
 *
 * @param {Array} carts - Lista de carritos, cada uno con una lista de productos
 * @returns {Array} Lista de productos enriquecidos con la propiedad `category`
 */
export function getAllProductsWithCategory(carts = []) {
  const allProducts = [];

  if (!Array.isArray(carts)) {
    // Validación defensiva
    console.error("❌ Error: 'carts' no es un array", carts);
    return [];
  }

  carts.forEach((cart) => {
    if (Array.isArray(cart.products)) {
      cart.products.forEach((product) => {
        // Extrae la categoría desde la URL del thumbnail con expresión regular
        const categoryMatch = product.thumbnail.match(/products\/images\/([^/]+)\//);
        const category = categoryMatch ? categoryMatch[1] : "unknown";

        // Agrega el producto al resultado, incluyendo la categoría extraída
        allProducts.push({
          ...product,
          category,
        });
      });
    }
  });

  return allProducts;
}

/**
 * A partir de una lista de productos (que contienen la propiedad `category`),
 * devuelve un array con todas las categorías únicas, sin repeticiones.
 * Esta función es útil para generar dinámicamente un `<select>` con filtros de categoría.
 * @param {Array} products - Lista de productos que contienen una propiedad `category`
 * @returns {Array} Lista de categorías únicas (strings)
 */
export function getUniqueCategories(products) {
  const categories = products.map((p) => p.category);
  return Array.from(new Set(categories));
}
