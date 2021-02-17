import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart]=useState([])
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
                  });
       
    return (
        <div>
           <h1>This is review</h1>
           <h1>{cart.length}</h1>
           {
            cart.map(pd=> <ReviewItem product={pd} key={pd.key}></ReviewItem>)
           }
           
        </div>
    );
};

export default Review;