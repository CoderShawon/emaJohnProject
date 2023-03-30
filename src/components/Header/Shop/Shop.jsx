import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    // console.log("products",products)
    const storedCart = getShoppingCart();
    const savedCart=[]
    console.log(storedCart);
    //step-1: get id
    for (const id in storedCart) {
      //step 2 get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      console.log(savedCart);
      //get quantity of the product
      if (addedProduct) {
        const quantity = storedCart[id];
        console.log(id, quantity);
        addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products]);
  const handleAddToCart = (product) => {
   //Advance=> Option-3(product quantity)
   let newCart=[]
   const exists=cart.find(pd=>pd.id===product.id);
   //If the product doesn't exist, then set quantity=1
   if(!exists){
    product.quantity=1;
    newCart = [...cart, product];
   }
   //If exist, update the quantity by 1
   else{
    exists.quantity=exists.quantity+1;
    let remaining=cart.filter(pd=>pd.id!==product.id);
    newCart=[...remaining, exists];
   }
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container ">
      <div className="products-container grid grid-cols-3 gap-6 mt-24 mx-10">
        {products.map((product) => (
          <Product key={product.id} handleAddToCart={handleAddToCart}>
            {product}
          </Product>
        ))}
      </div>
      <div className="cart-container mx-auto text-black mt-6 font-semibold">
        <Cart cart={cart}></Cart>
        {/*         
       {
        cart.map(cartItem=><Cart cart={cartItem} key={cartItem.id} handleAddToCart={handleAddToCart}></Cart>)
       } */}
      </div>
    </div>
  );
};

export default Shop;
