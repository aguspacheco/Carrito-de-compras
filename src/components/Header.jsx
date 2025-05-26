// Importa el componente de filtros que se muestra dentro del encabezado
import { Filters } from "./Filters";

/**
 * Componente Header que representa el encabezado principal de la aplicación.
 * Tiene
 * Un título con el nombre de la tienda.
 * El componente Filters, para aplicar filtros por categoría y precio.
 */
export function Header() {
  return (
    <header>
      <h1>Tienda en React 🛒</h1>
      <Filters />
    </header>
  );
}
