import React, { useContext } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
const Header = () => {
  const {setShowSidebar} = useContext(ShoppingCartContext);

  return (
    <div>
      <span>Header</span>
      <BsCart2 onClick={() => setShowSidebar(true)}/>
    </div>
  )
}

export default Header