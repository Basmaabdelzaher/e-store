import React, { useContext } from "react";
import { IoClose, IoArrowForwardSharp } from "react-icons/io5";

import { ShoppingCartContext } from "../context/ShoppingCartContext";
const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(ShoppingCartContext);

  return (
    <div className={`shopping-cart card sidebar ${showSidebar ? "show-sidebar" : ""}`}>
      <div className="card-header py-3">
        <span className="float-left font-weight-bold">SHOPPING CART(0)</span>
        <span className="float-right">
          <IoArrowForwardSharp size={25} onClick={() => setShowSidebar(false)} />
        </span>
        
      </div>
      <div className="card-body">Body</div>
      <div className="card-footer py-3">footer</div>
    </div>
  );
};

export default Sidebar;
