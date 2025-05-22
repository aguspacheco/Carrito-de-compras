export function getAllProductsWithCategory(carts = []) {
  const allProducts = [];

  if (!Array.isArray(carts)) {
    console.error("❌ Error: 'carts' no es un array", carts);
    return [];
  }

  carts.forEach((cart) => {
    if (Array.isArray(cart.products)) {
      cart.products.forEach((product) => {
        const categoryMatch = product.thumbnail.match(/products\/images\/([^/]+)\//);
        const category = categoryMatch ? categoryMatch[1] : "unknown";

        allProducts.push({
          ...product,
          category,
        });
      });
    }
  });

  return allProducts;
}

export function getUniqueCategories(products) {
  const categories = products.map((p) => p.category);
  return Array.from(new Set(categories));
}
