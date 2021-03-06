import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  //props: key,showAddToCart, handleAddProduct, product
  //product itself has img, name, seller, price, stock, key
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      
      {/* image */}
      <div>
        <img src={img} alt="" />
      </div>
 
      <div>

        {/* product_name */}
        <h4 className="product-name">
          {" "}
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />

        <p>
          <small>by: {seller}</small>
        </p>

        <p>${price}</p>
        <br />

        <p>
          <small>Only {stock} left in stock - Order Soon</small>
        </p>

        {props.showAddToCart===true && (
          <button className="main-button"  onClick={() => props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart}/> add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;