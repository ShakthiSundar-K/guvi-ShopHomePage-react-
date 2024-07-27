import React from "react";
import { useState } from "react";

function Card({ cart, setCart }) {
  let [toggle, setToggle] = useState(true);
  return (
    <>
      <div className='col mb-5'>
        <div className='card h-100'>
          {/* <!-- Product image--> */}
          <img
            className='card-img-top'
            src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
            alt='...'
          />
          {/* <!-- Product details--> */}
          <div className='card-body p-4'>
            <div className='text-center'>
              {/* <!-- Product name--> */}
              <h5 className='fw-bolder'>Fancy Product</h5>
              {/* <!-- Product price--> */}
              $40.00 - $80.00
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
            {toggle ? (
              <div className='text-center'>
                <button
                  className='btn btn-outline-dark mt-auto'
                  onClick={() => {
                    setCart(cart + 1); //add product to cart
                    setToggle((prev) => !prev); //another way of writing setToggle(!toggle)
                  }}
                >
                  Add To Cart
                </button>
              </div>
            ) : (
              <div className='text-center'>
                <button
                  className='btn btn-dark mt-auto'
                  onClick={() => {
                    setCart(cart - 1); //remove product from cart
                    setToggle((prev) => !prev); //another way of writing setToggle(!toggle)
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
