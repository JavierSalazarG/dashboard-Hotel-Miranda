import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterRoomsContextProps {
  filter: string;
  setAll: () => void;
  setActive: () => void;
  setInactive: () => void;
}

export const FilterRoomsContext = createContext<
  FilterRoomsContextProps | undefined
>(undefined);

interface FilterRoomsProviderProps {
  children: ReactNode;
}

export const FilterRoomsProvider: React.FC<FilterRoomsProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string>("All");

  const setAll = () => setFilter("All");
  const setActive = () => setFilter("Active");
  const setInactive = () => setFilter("Inactive");

  const contextValue: FilterRoomsContextProps = {
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
