import React from 'react'
import Product from './Product';
const Products = ({products}) => {
  return (
    <div className='row p-5'>
        {products.map(product => {
          return <Product key={product.id} product={product}/>
        })}
    </div>
  )
}

export default Products