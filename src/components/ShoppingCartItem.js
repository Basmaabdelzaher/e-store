import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const ShoppingCartItem = ({ shoppingCartItem }) => {
  const { id, title, price, image, count } = shoppingCartItem;
  const { removeFromShoppingCart, updateShoppingCartItem } = useContext(ShoppingCartContext);
  console.log("in item")
  return (
    <div className="row shopping-cart-item">
      {/* photo */}
      <div className="col-2">
        <img src={image} alt="product-image" className="img-fluid" />
      </div>

      <div className="col-10">
        <div className="clearfix">
          <p className="font-weight-bold d-inline float-left">
            {title.substr(0, 50)}
          </p>
          <IoClose size={20} className="clickable float-right" onClick={() => removeFromShoppingCart(id)} />
        </div>
        <div className="">
          <span className="count-controller">
            <button>
              <AiOutlinePlus size={13} onClick={() => updateShoppingCartItem(id, 1)} />
            </button>
            <input type="text" value={count} onChange={(e) => updateShoppingCartItem(id, e.target.value - count)}/>
            <button>
              <AiOutlineMinus size={13} onClick={() => updateShoppingCartItem(id, -1)} />
            </button>
          </span>

          <span className="text-secondary font-weight-bold ml-5">
            $ {price}
          </span>

          <span className="font-weight-bold pt-1 float-right">$ {parseFloat(count * price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
