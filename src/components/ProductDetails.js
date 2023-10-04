import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const ProductDetails = ({ product }) => {
  const { addToShoppingCart } = useContext(ShoppingCartContext);
  const { id, title, price, image, description } = product;
  return (
      <div className="row product-wrapper w-100 justify-content-center align-items-center pt-5 pt-md-0">
        <div className="col-md-9">
          <div className="row align-items-center justify-content-around">
            <div className="col-9 col-md-5 col-lg-3 text-center mb-4">
              <img
                alt="product-img"
                src={image}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h5 className="font-weight-bold w-75">{title}</h5>
              <p className="text-danger font-weight-bold">$ {price}</p>
              <p className="my-4">{description}</p>
              <button
                className="black-btn py-2 px-3 font-weight-bold"
                onClick={ () => addToShoppingCart({id, title, price, image})}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetails;
