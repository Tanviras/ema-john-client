import React, { useState } from 'react';
import "./Shop.css";
import "../../fakeData";
import fakeData from '../../fakeData';
import Product from '../../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
    const firstTen= fakeData.slice(0,10);
    const [products, setProducts]= useState(firstTen);
//   console.log(products);//products= data from fakeData
    const [cart,setCart]=useState([]);// initially 0 na diye faka array rakha good practice

const handleAddProduct = (product) => {//setState ei Shop.js er moddhe,tai handler ekhane thakai valo jodio actual button ekhane nei.
    // console.log(`Product added`,product);
    const newCart = [...cart,product];//to bring all the elements of cart to newCart,use ...
    setCart(newCart);

    const sameProduct= newCart.filter(pd=>pd.key===product.key);
    const numberOfSameProduct= sameProduct.length;
    addToDatabaseCart(product.key,numberOfSameProduct);
};
    return (
        <div className="shop-container">


           <div className="product-container">
                {
                    products.map(pd => <Product
                        showAddToCart={true}
                        handleAddProduct = {handleAddProduct}
                         product={pd}
                         key={pd.key}
                         ></Product>)
                }
            
           </div> {/* product-container */}
          
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
            
        </div> 
        
    );
};

export default Shop;