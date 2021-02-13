import React, { useState } from 'react';
import "./Shop.css";
import "../../fakeData";
import fakeData from '../../fakeData';
import Product from '../../Product/Product'
import Cart from '../Cart/Cart';


const Shop = () => {
    const firstTen= fakeData.slice(0,10);
    const [products, setProducts]= useState(firstTen);
//   console.log(products);//products= data from fakeData
    const [cart,setCart]=useState([]);// initially 0 na diye faka array rakha good practice

const handleAddProduct = (product) => {//setState ei Shop.js er moddhe,tai handler ekhane thakai valo jodio actual button ekhane nei.
    // console.log(`Product added`,product);
    const newCart = [...cart,product];
    setCart(newCart);
};
    return (
        <div className="shop-container">


           <div className="product-container">
                {
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                         product={pd}
                         ></Product>)
                         
                    // fakeData(=products) er element gulo alada kore nibo map diye. ekek element er name dilam pd. Taderke send korlam <Product></Product> er moddhe(mane taderke niye component create korlam). 

                    // <Product></Product> er vetore habijabi likhsi because of props purpose
                    //props:product={pd}
                }
            
           </div> {/* product-container */}
          
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
            
        </div> 
        
    );
};

export default Shop;