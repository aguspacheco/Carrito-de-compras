// Importa un hook para generar IDs únicos y el hook personalizado de filtros
import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
// Importación de estilos del componente
import "./Filters.css";

/**
 * Componente Filters que renderiza un panel de filtros para buscar productos según
 * - Precio mínimo o categoria
 * Props:
 * - categories: array de strings con las categorías disponibles para filtrar.
 */
export function Filters({ categories }) {
  // Obtiene el estado de los filtros y su función actualizadora desde el contexto
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  /**
   * Maneja el cambio en el input de precio mínimo.
   * Convierte el valor del input a un número antes de guardarlo.
   */
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  /**
   * Maneja el cambio en el select de categorías.
   */
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      {/* Filtro de categoría */}
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category[0].toUpperCase() + category.slice(1).replace(/-/g, " ")}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
