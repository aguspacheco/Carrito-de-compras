// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartProvider.jsx"; //
import { FiltersProvider } from "./context/FiltersProvider"; //

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
