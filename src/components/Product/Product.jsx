import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.children;
  const handleAddToCart=props.handleAddToCart;
  return (
    <div>
      <div className="card card-compact w-full h-full bg-white shadow-xl text-black  border-2 border-gray-300">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="mb-10">Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} star</p>
          <div className=" button flex justify-center gap-2 bg-orange-400 p-4 w-full rounded-sm">
            <button onClick={()=>{handleAddToCart(props.children)}} className="text-xl">Add To cart</button>
            <span className="flex justify-center items-center">
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
