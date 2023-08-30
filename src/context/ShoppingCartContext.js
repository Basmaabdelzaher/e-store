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
      count: 2,
    },
  ]);
  // const addToShoppingCart = (item) => {
  //   setShoppingCartItems([...shoppingCartItems, {
  //   }]);
  // }
  const updateShoppingCartItem = (id, changeBy) => {
    console.log(changeBy);

    setShoppingCartItems(
      shoppingCartItems.map((item) => {
        if (item.id === id) {
          item.count = item.count + changeBy;
          if (item.count < 0)
            item.count = 0
        }
        return item;
      })
    );

  };

  const removeFromShoppingCart = (id) => {
    setShoppingCartItems(shoppingCartItems.filter((item) => item.id !== id));
  };

  const value = {
    showSidebar,
    setShowSidebar,
    shoppingCartItems,
    updateShoppingCartItem,
    removeFromShoppingCart,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
