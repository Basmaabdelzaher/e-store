import React, { useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Products from '../components/Products';

const Home = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div>
      {products && <Products products= { products } />}
    </div>
  )
}

export default Home