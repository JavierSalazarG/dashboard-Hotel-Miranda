import React, { createContext, useState } from "react";

export const Archived = createContext();

export const ArchivedProvider = ({ children }) => {
  const [isArchived, setIsArchived] = useState(false);

  const setArchived = () => {
    setIsArchived(true);
  };

  const setAllContacts = () => {
    setIsArchived(false);
  };

  return (
    <Archived.Provider value={{ isArchived, setArchived, setAllContacts }}>
      {children}
    </Archived.Provider>
  );
};
