import React from 'react'

const ProductDetails = () => {
  return (
    <div className="product-wrapper container-fluid">
      <div className="row h-100 w-100 justify-content-center align-items-center">
        <div className="col-md-9">
          <div className="row align-items-center justify-content-around">
            <div className="col-9 col-md-5 col-lg-3 text-center mb-4">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className='img-fluid' />
            </div>
            <div className="col-md-6">
              <h5 className='font-weight-bold w-75'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
              <p className='text-danger font-weight-bold'>$ 100.95</p>
              <p className='my-4'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
              <button className='black-btn py-2 px-3 font-weight-bold'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails