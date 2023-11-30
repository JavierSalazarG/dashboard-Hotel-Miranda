import React, { createContext, useContext, useState } from "react";

export const FilterBookingContext = createContext();

export const FilterBookingProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  const setAll = () => setFilter("All");
  const setCheckingIn = () => setFilter("Check In");
  const setCheckingOut = () => setFilter("Check Out");
  const setInProgress = () => setFilter("In Progress");
  const setWithMessage = () => setFilter("With Message");

  const contextValue = {
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
