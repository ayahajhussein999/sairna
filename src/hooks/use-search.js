import { useContext } from "react";
import { SearchContext } from "../context/search-context-value";

export function useSearch() {
  return useContext(SearchContext);
}