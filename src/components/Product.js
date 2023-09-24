import React from "react";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, price, image, category } = product;
  const { addToShoppingCart } = useContext(ShoppingCartContext);
  return (
    <div className="product col-sm-6 col-md-4 col-lg-3 my-4">
      <div className="product-img-section">
        {/* product image + controller */}
          <div className="text-center py-5">
            <img src={image} alt="product-img" className="product-img" />
            <div className="product-btns">
              <button
                className="controller controller-1"
                onClick={() =>
                  addToShoppingCart({
                    id,
                    title,
                    price,
                    image,
                  })
                }
              >
                <FaPlus />
              </button>
              <Link to={`product/${id}`} className="controller controller-2 mt-1">
                <FaRegEye />
              </Link>
            </div>
          </div>
      </div>
      {/* product info */}
      <div className="text-left text-capitalize py-3">
        <label className="text-secondary font-weight-bold ">{category}</label>
        <Link to={`product/${id}`} ><h6 className="font-weight-bold">{title}</h6></Link>
        <h6>$ {price}</h6>
      </div>
    </div>
  );
};

export default Product;
