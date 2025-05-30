// Importación del hook useContext desde React
import { useContext } from "react";
// Importación del contexto global de filtros
import { FiltersContext } from "../context/FiltersContext.jsx";

/**
 * Custom hook que proporciona acceso al contexto de filtros.
 * Permite leer y actualizar los filtros globales, y aplicar
 * una función para filtrar productos según esos criterios.
 * @returns {Object} Un objeto con:
 *  - filters: estado actual de los filtros
 *  - setFilters: función para modificar los filtros
 *  - filterProducts: función que recibe una lista de productos
 *                    y devuelve solo los que cumplen con los filtros
 */
export function useFilters() {
  // Accede al estado y la función para modificar filtros desde el contexto
  const { filters, setFilters } = useContext(FiltersContext);

  /**
   * Filtra una lista de productos de acuerdo a los filtros actuales.
   * @param {Array} products - Lista de productos a filtrar
   * @returns {Array} Lista de productos que cumplen con los filtros
   */
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
