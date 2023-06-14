import React from "react";
import { FaPlus, FaRegEye } from "react-icons/fa";

const Product = ({ product }) => {
  const { id, title, price, image, category } = product;
  return (
    <div className="product col-sm-6 col-md-4 col-lg-3 my-4">
      <div className="product-img-section">
        {/* product image + controller */}
        <div className="text-center py-5">
          <img src={image} alt="product-img" className="product-img" />
          <div className="product-btns">
            <button className="controller controller-1">
              <FaPlus />
            </button>
            <a className="controller controller-2 mt-1">
              <FaRegEye />
            </a>
          </div>
        </div>
      </div>
      {/* product info */}
      <div className="text-left text-capitalize py-3">
        <label className="text-secondary font-weight-bold ">{category}</label>
        <h6 className="font-weight-bold">{title}</h6>
        <h6>$ {price}</h6>
      </div>
    </div>
  );
};

export default Product;
