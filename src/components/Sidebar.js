import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const Sidebar = () => {
    const {showSidebar, setShowSidebar} = useContext(ShoppingCartContext);

    return (
    <div className={`sidebar ${showSidebar? 'show-sidebar' : ''}`}>
        <IoClose onClick={() => setShowSidebar(false)}/>
        <p>I am the sidebar!</p>
    </div>
    );
};

export default Sidebar;
