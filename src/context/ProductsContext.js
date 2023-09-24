import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const filteredProducts = data.filter((product) => {
        return (
          product.category === "men's clothing" ||
          product.category === "women's clothing"
        );
      });
      setProducts(filteredProducts);
    };
    
    fetchProducts();
  }, []);

  const getProductById = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return product;
  }

  const value = { 
    products,
    // getProductById
   };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
