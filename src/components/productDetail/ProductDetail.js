import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://shrouded-sands-52244.herokuapp.com/product/" + productKey)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productKey]);

  return (
    <div>
      <>
        <center>
          <h1>Your Product Detail</h1>
        </center>
        <Product showAddToCart={false} product={product}></Product>
      </>
    </div>
  );
};

export default ProductDetail;