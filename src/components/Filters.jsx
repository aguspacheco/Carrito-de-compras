import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
import "./Filters.css";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

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

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="beauty">Belleza</option>
          <option value="groceries">Alimentos</option>
          <option value="sports-accessories">Deportes</option>
          <option value="smartphones">Smartphones</option>
          <option value="mobile-accessories">Accesorios móviles</option>
          <option value="womens-watches">Relojes mujer</option>
          <option value="mens-watches">Relojes hombre</option>
          <option value="sunglasses">Lentes</option>
          <option value="laptops">Laptops</option>
          <option value="kitchen-accessories">Cocina</option>
          <option value="furniture">Muebles</option>
          <option value="vehicle">Vehículos</option>
        </select>
      </div>
    </section>
  );
}
