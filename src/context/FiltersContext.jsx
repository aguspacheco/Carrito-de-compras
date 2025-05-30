// Importación de funciones necesarias desde React
import { createContext, useState, useEffect } from "react";

/**
 * Contexto global para manejar los filtros aplicados en la tienda.
 * Permite compartir el estado de los filtros  entre componentes sin necesidad de pasar props manualmente.
 */
export const FiltersContext = createContext();

// Filtros sin categoría específica y precio mínimo en 0
const defaultFilters = {
  minPrice: 0,
  category: "all",
};

/**
 * Componente FiltersProvider
 * Provee el contexto de filtros a toda la aplicación o a los componentes que lo necesiten.
 * Permite leer y actualizar los filtros desde cualquier parte del componente hijo, guarda y recupera el estado de los filtros en localStorage para persistencia.
 * Props: children: componentes hijos que tendrán acceso al contexto.
 */
export const FiltersProvider = ({ children }) => {
  // Estado de los filtros, inicializado desde localStorage si existe
  const [filters, setFilters] = useState(() => {
    const saved = localStorage.getItem("filters");
    return saved ? JSON.parse(saved) : defaultFilters;
  });

  // Efecto: guarda los filtros en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
};
