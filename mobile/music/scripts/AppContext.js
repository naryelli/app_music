import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [, setUser] = useState("");

    return (
        <AppContext.Provider value={{ token, setToken,  setUser }}>
            {children}
        </AppContext.Provider>
    )
}