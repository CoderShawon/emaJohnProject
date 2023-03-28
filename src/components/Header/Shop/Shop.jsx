import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const[cart, setCart]=useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart=(product)=>{
    const newCart=[...cart,product]
    setCart(newCart)
  }
  return (
    <div className="shop-container ">
      <div className="products-container grid grid-cols-3 gap-6 mt-24 mx-10">
        {
            products.map(product=><Product key={product.id} handleAddToCart={handleAddToCart}>{product}</Product>)
        }
      </div>
      <div className="cart-container mx-auto text-black mt-6 font-semibold">
        <h1 className="mb-10 text-2xl">Order Summary</h1>
        <p>Selected items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
