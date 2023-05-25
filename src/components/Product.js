import React from 'react'

const Product = ({product}) => {
  const {id, title, price, image} = product;
  return (
    <div>{price}</div>
  )
}

export default Product