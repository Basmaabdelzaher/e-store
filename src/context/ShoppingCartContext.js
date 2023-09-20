import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [shoppingCartItemsCount, setShoppingCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // const addToShoppingCart = (item) => {
  //   setShoppingCartItems([...shoppingCartItems, {
  //   }]);
  // }
  useEffect(()=>{
    setShoppingCartItemsCount(shoppingCartItems.reduce((acc, item) => acc + item.count , 0));
    setTotalPrice(shoppingCartItems.reduce((acc, item) => acc + item.price * item.count , 0));
  }, [shoppingCartItems]);

  const updateShoppingCartItem = (id, changeBy) => {
    let index = shoppingCartItems.findIndex(item => item.id === id);
    if(shoppingCartItems[index].count + changeBy > 0){
      let shoppingListCopy = [...shoppingCartItems];
      shoppingListCopy.splice(index, 1, {...shoppingCartItems[index], count: shoppingListCopy[index].count + changeBy});
      setShoppingCartItems(shoppingListCopy);
    }else{
      removeFromShoppingCart(id)
    }
  };

  const addToShoppingCart = (newItem) => {
    const index = shoppingCartItems.findIndex(item => item.id === newItem.id);
    if(index < 0){
      //item is new added
      setShoppingCartItems([...shoppingCartItems, {...newItem, count: 1}]);
    }
    else {
      //item already exists
      let shoppingListCopy = [...shoppingCartItems];
      shoppingListCopy.splice(index, 1, {...newItem, count: shoppingListCopy[index].count + 1});
      setShoppingCartItems(shoppingListCopy);
    }
  }

  const removeFromShoppingCart = (id) => {
    setShoppingCartItems(shoppingCartItems.filter((item) => item.id !== id));
  };

  const emptyshoppingCart = () => {
    setShoppingCartItems([]);
  }

  const value = {
    showSidebar,
    setShowSidebar,
    shoppingCartItems,
    updateShoppingCartItem,
    removeFromShoppingCart,
    addToShoppingCart,
    shoppingCartItemsCount,
    totalPrice,
    emptyshoppingCart
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
