import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  // const cart=props.cart; //Option: 1
  // const{cart}=props;  //Option: 2
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    //Option-1
    // if(product.quantity===0){
    //   product.quantity=1;
    // }

    //Option-2
    // product.quantity = product.quantity || 1;
    total = (total + product.price) * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  return (
    <div className="bg-orange-400 p-20 -mt-6 -mr-12 sticky top-0">
      <h1 className="mb-10 text-2xl">Order Summary</h1>
      <p className="mb-3">Selected items: {quantity}</p>
      <p className="mb-3">Total price: ${total}</p>
      <p className="mb-3">Total shipping charge: ${totalShipping}</p>
      <p className="mb-3">Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
