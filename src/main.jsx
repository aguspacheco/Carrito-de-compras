// Importaciones esenciales de React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Componente principal de la aplicación
import App from "./App.jsx";
// Estilos globales de la aplicación
import "./index.css";

// Contextos globales para manejar el estado del carrito y los filtros
import { CartProvider } from "./context/CartProvider.jsx"; //
import { FiltersProvider } from "./context/FiltersProvider"; //

/**
 * Punto de entrada de la aplicación React.
 * Se utiliza ReactDOM.createRoot para montar la aplicación en el DOM,
 * dentro del elemento con ID "root".
 * - <React.StrictMode>: ayuda a detectar errores en desarrollo.
 * - <CartProvider>: proporciona el contexto global del carrito.
 * - <FiltersProvider>: proporciona el contexto global de filtros de productos.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </CartProvider>
  </React.StrictMode>
);
