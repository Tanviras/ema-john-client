import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';



const Review = () => {
    const [cart,setCart]=useState([])
    const [orderPlaced,setOrderPlaced]=useState(false);

    const handlePlaceOrder=()=>{
    // console.log('order placed');
    setCart([]); 
    setOrderPlaced(true);
    processOrder();
                               }


    const handleRemoveProduct= (productKey) =>{
        
        const newCart= cart.filter(pd=>pd.key !==productKey);
        // newCart er moddhe oisosb product rakhbo jara uporer "productKey" er under a pore na.
        setCart(newCart);
        removeFromDatabaseCart(productKey);//local-storage theke soranor jonno,unless reload korle abar local-storage theke chole ashbe.
    }


    useEffect(()=>{
           const savedCart= getDatabaseCart();//local storage theke niye ashlam
           const productKeys= Object.keys(savedCart);//
        //    console.log(productKeys);
           const cartProducts = productKeys.map(key=>{
           const product=fakeData.find(pd=> pd.key===key);
           product.quantity=savedCart[key]; 
           return product;
                  });
           setCart(cartProducts);
                  },[]);

       let thankYou;
       if(orderPlaced){
           thankYou=<img src={happyImage} alt=""/>
       }
    return (
        <div className="reviewShop-conatiner">
           {/* <h1>This is review</h1>
           <h1>{cart.length}</h1> */}

          <div className="reviewProduct-conatiner">
          {
            cart.map(pd=> <ReviewItem product={pd} key={pd.key}  handleRemoveProduct={handleRemoveProduct}>
            </ReviewItem>)
           }

           {
               thankYou
           }
          </div>




          <div className="cart-conatiner">
          <Cart cart={cart}>
              <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
          </Cart>
          </div>

        </div>
    );
};

export default Review;