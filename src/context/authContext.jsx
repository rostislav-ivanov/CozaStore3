import { createContext } from "react";
import usePresistedState from "../hooks/usePresistedState";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePresistedState("auth", {});

  const values = {
    userId: auth.id,
    username: auth.username,
    email: auth.email,
    accessToken: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
    setAuth,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
