import React, { useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Product from '../components/Product';

const Home = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div>
      {products && products.map(product => {
          return <Product key={product.id} product={product}/>
        })}
    </div>
  )
}

export default Home