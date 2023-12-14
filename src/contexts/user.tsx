import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface UserContextProps {
  Login: (userEmail: string, userPassword: string) => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("User");

  const Login = (userEmail: string, userPassword: string) => {
    setEmail(userEmail);
    setPassword(userPassword);
    localStorage.setItem("isLoggedIn", "true");
  };

  const userValue: UserContextProps = {
    Login,
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
  };

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};
