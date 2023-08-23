import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const ShoppingCartItem = ({ shoppingCartItem }) => {
  const { id, title, price, image, count } = shoppingCartItem;
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
          <IoClose size={20} className="float-right" />
        </div>
        <div className="">
          <span className="count-controller">
            <button>
              <AiOutlinePlus size={13} />
            </button>
            <input type="text" value={count} />
            <button>
              <AiOutlineMinus size={13} />
            </button>
          </span>

          <span className="text-secondary font-weight-bold pt-3 mx-5">
            $ {price}
          </span>

          <span className="pt-1 font-weight-bold float-right">$ {count * price}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
