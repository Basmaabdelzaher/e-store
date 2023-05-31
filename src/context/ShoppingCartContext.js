import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartContextProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const value = {
        showSidebar,
        setShowSidebar
    }
    return (
        <ShoppingCartContext.Provider value={value}>
            { children }
        </ShoppingCartContext.Provider>
    )
}