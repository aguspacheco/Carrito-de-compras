export function getAllProductsWithCategory(carts = []) {
  const allProducts = [];

  carts.forEach((cart) => {
    cart.prodcuts.forEach((product) => {
      const categoryMatch = product.thumbnail.match(/prodcuts\/images\/([^/]+)\//);
      const category = categoryMatch ? categoryMatch[1] : "unknown";

      allProducts.push({
        ...product,
        category,
      });
    });
  });

  return allProducts;
}
