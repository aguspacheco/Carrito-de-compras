// Importación de componentes principales de la app
import { Products } from "./components/Products.jsx";
import { Filters } from "./components/Filters.jsx";
// Contexto que provee el estado global de filtros
import { FiltersProvider } from "./context/FiltersContext.jsx";
// Datos simulados (mock) de productos
import productsData from "./mocks/products.json";

// Utilidades para procesar productos y obtener categorías únicas
import { getAllProductsWithCategory, getUniqueCategories } from "./utils/products.js";
// Hook personalizado para aplicar filtros sobre los productos
import { useFilters } from "./hooks/useFilters.js";

// Procesa todos los productos y les asigna una categoría extraída del thumbnail
const allProducts = getAllProductsWithCategory(productsData.carts);
// Obtiene la lista de categorías únicas desde los productos
const categories = getUniqueCategories(allProducts);

/**
 * Renderiza el contenido principal de la app el filtro y la lista de productos.
 * Aplica los filtros actuales a la lista completa de productos.
 */
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

/**
 * Envuelve la aplicación dentro del FiltersProvider, que permite
 * compartir el estado de los filtros entre componentes.
 */
export default function App() {
  return (
    <FiltersProvider>
      <AppContent />
    </FiltersProvider>
  );
}
