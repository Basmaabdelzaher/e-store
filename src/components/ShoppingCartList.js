import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
const ShoppingCartList = ({shoppingCartItems}) => {
  return (
    <div>
        {
           shoppingCartItems.map(shoppingCartItem => {
            return <ShoppingCartItem key={shoppingCartItem.id} shoppingCartItem = {shoppingCartItem} />
          })
        }
    </div>
  )
}

export default ShoppingCartList