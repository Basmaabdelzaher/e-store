import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import ProductDetails from "../components/ProductDetails";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if(products)
      setProduct(products.find(item => item.id == id))

    // If you will get it from server..
    // const fetchProduct = async () => {
    //   let fetched = await getProductById(id);
    //   setProduct(fetched);
    // };
    // fetchProduct();
  }, [products]);

  
  return (
    <div className='page-wrapper'>
      { product && <ProductDetails product={product} />}
      { !product && <p className="font-weight-bold">Trying to get product info ...  </p> }

    </div>
  );
};

export default ProductPage;
