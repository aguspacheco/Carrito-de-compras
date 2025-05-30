// Importación de useState desde React
import { useState } from "react";
// Importación del contexto global de filtros
import { FiltersContext } from "./FiltersContext";

/**
 * Componente FiltersProvider
 * Este proveedor de contexto gestiona el estado de los filtros de productos dentro de la aplicación.
 * Props:
 * - children: los componentes hijos que tendrán acceso al contexto.
 */
export function FiltersProvider({ children }) {
  // Estado local de los filtros con valores iniciales por defecto
  const [filters, setFilters] = useState({
    // todas las categorías
    category: "all",
    // precio mínimo inicial
    minPrice: 250,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
}
