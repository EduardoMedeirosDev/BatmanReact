import React from "react";
import { createContext } from "react";

export const userContext = createContext();

export const UserStore = ({ children }) => {
    return (
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}