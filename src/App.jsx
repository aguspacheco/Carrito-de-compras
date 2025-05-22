import { Products } from "./components/Products.jsx";
import { Filters } from "./components/Filters.jsx";
import { FiltersProvider } from "./context/FiltersContext.jsx";
import productsData from "./mocks/products.json";
import { getAllProductsWithCategory, getUniqueCategories } from "./utils/products.js";
import { useFilters } from "./hooks/useFilters.js";

const allProducts = getAllProductsWithCategory(productsData.carts);
const categories = getUniqueCategories(allProducts);

function AppContent() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(allProducts);

  return (
    <>
      <Filters categories={categories} />
      <Products products={filteredProducts} />
    </>
  );
}

export default function App() {
  return (
    <FiltersProvider>
      <AppContent />
    </FiltersProvider>
  );
}
