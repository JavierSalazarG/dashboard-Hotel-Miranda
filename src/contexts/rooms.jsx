import React, { createContext, useContext, useState } from "react";

// Crear el contexto
export const FilterRoomsContext = createContext();

// Crear el proveedor del contexto
export const FilterRoomsProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  const setAll = () => setFilter("All");
  const setActive = () => setFilter("Active");
  const setInactive = () => setFilter("Inactive");

  const contextValue = {
    filter,
    setAll,
    setActive,
    setInactive,
  };

  return (
    <FilterRoomsContext.Provider value={contextValue}>
      {children}
    </FilterRoomsContext.Provider>
  );
};
