import { Filters } from "./Filters";
export function Header({ changeFilters }) {
  return (
    <header>
      <h1>Tienda en React</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
}
