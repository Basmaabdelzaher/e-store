import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 522.99,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        count: 1
    }, 
  ]);
  const value = {
    showSidebar,
    setShowSidebar,
    shoppingCartItems,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
