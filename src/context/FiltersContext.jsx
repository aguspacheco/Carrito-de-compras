import { createContext, useState, useEffect } from "react";

export const FiltersContext = createContext();

const defaultFilters = {
  minPrice: 0,
  category: "all",
};

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(() => {
    const saved = localStorage.getItem("filters");
    return saved ? JSON.parse(saved) : defaultFilters;
  });

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
};
