import { useState } from "react";
import { SearchContext } from "./search-context-value";

const initialSearchData = {
  origin: "2",
  destination: "1",
  date: "2026-11-08",
  people: "1",
};

export function SearchProvider({ children }) {
  const [searchData, setSearchData] = useState(initialSearchData);
  const [selectedCompany, setSelectedCompany] = useState("all");

  return (
    <SearchContext.Provider
  value={{
    searchData,
    setSearchData,
    selectedCompany,
    setSelectedCompany,
  }}
>
      {children}
    </SearchContext.Provider>
  );
}