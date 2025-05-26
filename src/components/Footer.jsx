// Importación del archivo de estilos del componente Footer
import "./Footer.css";

/**
 * Componente Footer
 * Renderiza el pie de página de la aplicación.
 * Contiene una descripción del proyecto y una firma.
 */
export function Footer() {
  return (
    <footer className="footer">
      <h4>
        Carrito de Compras con React -<span>@agus</span>
      </h4>
    </footer>
  );
}
