import React, { useState, useEffect } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager"; //connection to database

const Shop = () => {
  const [products, setProducts] = useState([]);//no initial products
  const [cart, setCart] = useState([]);//no initial product in cart


  // egula maybe pore add korse
  useEffect(() => {
    fetch("https://shrouded-sands-52244.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

   // egula maybe pore add korse
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    fetch("https://shrouded-sands-52244.herokuapp.com/productsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);


//handler of "add to cart"
  const handleAddProduct = (product) => {//product selected
    const toBeAddedKey = product.key;//key nilam
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);//cart a search kore proti ta product key niye oitar sathe mililam

    let sameProductCount = 1;//same product kokhon hobe? jokhon age thekei oi jinishta ekbar thakbe
    let newCart;

    if (sameProduct) {//jodi same product hoy
      sameProductCount = sameProduct.quantity + 1;//sameproduct quantity increases
      sameProduct.quantityy = sameProductCount; //updated
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);//others manei toh same key hobe na
      newCart = [...others, sameProduct];//new cart contains both same products & others
    } 
    else {
      product.quantity = 1;//jodi same product na hoy,then oita to unique, 1 in number
      newCart = [...cart, product];//new cart contains ager jinishpati & ekhon selected product
    }


    setCart(newCart);
    addToDatabaseCart(product.key, sameProductCount);//local storage er moddhe rekhe dilam
  };



  return (
    <div className="twin-container">

      {/* product-portion */}
      <div className="product-container">
        {
        //ekhane products gulo ashlo kivabe? uporer 2 ta topic jegula pore asche,okhaner karshaji mone hoy
        products.map(pd => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pd}
          ></Product>
        )
        )
        }
      </div>
      {/* product-portion-end */}


      {/* cart-portion */}

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-button">Review Order</button>
          </Link>
        </Cart>
      </div>
      {/* cart-portion-end */}

    </div>
  );
};

export default Shop;