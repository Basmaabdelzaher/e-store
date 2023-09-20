import React, { useContext } from "react";
import { IoArrowForwardSharp, IoTrashOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ShoppingCartList from "./ShoppingCartList";
const Sidebar = () => {
  const { showSidebar, setShowSidebar, shoppingCartItems, shoppingCartItemsCount, totalPrice, emptyshoppingCart} = useContext(ShoppingCartContext);  
  return (
    <div className={`shopping-cart card sidebar ${showSidebar ? "show-sidebar" : ""}`}>
      <div className="card-header py-3">
        <span className="float-left font-weight-bold">SHOPPING CART({shoppingCartItemsCount})</span>
        <span className="float-right">
          <IoArrowForwardSharp size={25} onClick={() => setShowSidebar(false)} className="clickable"/>
        </span>
        
      </div>
      <div className="card-body">
        { shoppingCartItems.length > 0 ? 
          <ShoppingCartList shoppingCartItems={shoppingCartItems}/> : <p>Your shopping cart is empty </p> }
            
      </div>
      <div className="card-footer p-3">
          <hr />
          <div className="d-flex justify-content-between align-items-baseline">
            <span className="font-weight-bold">Total: $ { parseFloat(totalPrice).toFixed(2) } </span>
            <button className="delete-btn" onClick={() => emptyshoppingCart()}>
              <IoTrashOutline color="white" size={23}/>
            </button>
          </div>
          <button className="btn-block text-center py-2 mt-2 gray-btn">View cart</button>
          <button className="btn-block text-center py-2 black-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Sidebar;
