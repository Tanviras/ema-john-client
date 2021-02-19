import React, { useEffect, useState } from 'react';
import "./Shop.css";
import "../../fakeData";
import fakeData from '../../fakeData';
import Product from '../../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';



const Shop = () => {
    const firstTen= fakeData.slice(0,10);
    const [products, setProducts]= useState(firstTen);
//   console.log(products);//products= data from fakeData
    const [cart,setCart]=useState([]);// initially 0 na diye faka array rakha good practice

useEffect(()=>{
const savedCart=getDatabaseCart();
console.log(savedCart);
const productKeys= Object.keys(savedCart);
const previousCart= productKeys.map(existingKey =>{
    const product= fakeData.find(pd=>pd.key===existingKey);
    product.quantity=savedCart[existingKey];
    return product;
})
setCart(previousCart);
},[])



//details of "add to cart" button

const handleAddProduct = (product) => {//setState ei Shop.js er moddhe,tai handler ekhane thakai valo jodio actual button ekhane nei.
    // console.log(`Product added`,product);
    const productToBeAdded=product.key;
    const sameProduct= cart.find(pd=>pd.key===productToBeAdded);

    let count=1;
    let newCart;
    if(sameProduct){
        count= sameProduct.quantity+1;
        sameProduct.quantity=count; 
        const others=cart.filter(pd=>pd.key!==productToBeAdded);
        newCart=[...others,sameProduct];//filter gives output as an array
    }
    else{
        product.quantity=1;
        newCart = [...cart,product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key,count);
};
//end of details of "add to cart" button


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
              <Cart cart={cart}>
              <Link to="/orderReview"><button className="main-button">Review Order</button></Link>
              </Cart>
          </div>
            
        </div> 
        
    );
};

export default Shop;