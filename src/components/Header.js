import React, { useContext, useState, useEffect } from 'react'
import { BsHandbag } from 'react-icons/bs';
import { TbHanger } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
const Header = () => {
  const {setShowSidebar, shoppingCartItemsCount} = useContext(ShoppingCartContext);
  const [transparentHeader, setTransparentHeader] = useState(true);
  useEffect(() => {
    if(typeof window != undefined)
      window.addEventListener("scroll", () => {
        setTransparentHeader(window.pageYOffset < 200);
    })
  }, []);
  return (
    <div className={`header row px-5 py-2 align-items-baseline fixed-top ${transparentHeader? 'transparent-header' : 'white-header'}`}>
      <div className="col-6">
        <Link to="/">
          <TbHanger size={45} />
        </Link>
      </div>
      <div className="col-6 text-right">
        <div className='shoppingcart-icon d-inline-block clickable' onClick={() => setShowSidebar(true)}>
          <BsHandbag size={30} />
          <span className="itemsCount">{shoppingCartItemsCount}</span>
        </div>
      </div> 
    </div>
  )
}

export default Header