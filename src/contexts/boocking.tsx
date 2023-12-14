import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterBookingContextProps {
  filter: string;
  setAll: () => void;
  setCheckingIn: () => void;
  setCheckingOut: () => void;
  setInProgress: () => void;
  setWithMessage: () => void;
}

export const FilterBookingContext = createContext<
  FilterBookingContextProps | undefined
>(undefined);

interface FilterBookingProviderProps {
  children: ReactNode;
}

export const FilterBookingProvider: React.FC<FilterBookingProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string>("All");

  const setAll = () => setFilter("All");
  const setCheckingIn = () => setFilter("Check In");
  const setCheckingOut = () => setFilter("Check Out");
  const setInProgress = () => setFilter("In Progress");
  const setWithMessage = () => setFilter("With Message");

  const contextValue: FilterBookingContextProps = {
    filter,
    setAll,
    setCheckingIn,
    setCheckingOut,
    setInProgress,
    setWithMessage,
  };

  return (
    <FilterBookingContext.Provider value={contextValue}>
      {children}
    </FilterBookingContext.Provider>
  );
};
