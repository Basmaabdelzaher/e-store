import React from 'react'

const Product = ({product}) => {
  const {id, title, price, image} = product;
  return (
    <div>{title}</div>
  )
}

export default Product