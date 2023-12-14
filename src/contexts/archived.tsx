import React, { createContext, useState, ReactNode } from "react";

interface ArchivedContextProps {
  isArchived: boolean;
  setArchived: () => void;
  setAllContacts: () => void;
}

export const Archived = createContext<ArchivedContextProps | undefined>(
  undefined
);

interface ArchivedProviderProps {
  children: ReactNode;
}

export const ArchivedProvider: React.FC<ArchivedProviderProps> = ({
  children,
}) => {
  const [isArchived, setIsArchived] = useState<boolean>(false);

  const setArchived = () => {
    setIsArchived(true);
  };

  const setAllContacts = () => {
    setIsArchived(false);
  };

  const contextValue: ArchivedContextProps = {
    isArchived,
    setArchived,
    setAllContacts,
  };

  return <Archived.Provider value={contextValue}>{children}</Archived.Provider>;
};
