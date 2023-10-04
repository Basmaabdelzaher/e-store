import React, { useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Products from '../components/Products';
import Hero from '../components/Hero';

const Home = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div className='page-wrapper'>
      <Hero />
      {products && <Products products= { products } />}
    </div>
  )
}

export default Home