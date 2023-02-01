import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

export const UserStore = ({ children }) => {
    
    const [login, setLogin] = useState(false)
    const [data, setData] = useState({})

    const produtos = [
        {nome: 'Batedeira', id:20},
        {nome: 'Ventilador', id:22},
        {nome: 'Computador', id:30},
    ]

    
    useEffect(() =>{
        setData({name: 'Edu', age: 19})
    }, [])

    
    
    return (
        <userContext.Provider value={{login, setLogin, data, setData, produtos}}>
            {children}
        </userContext.Provider>
    )
}