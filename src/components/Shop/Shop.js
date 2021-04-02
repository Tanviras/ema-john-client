import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';

const Shop = () => {
    // const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    //Initially sending data to database
    const handleSubmit=()=>{
        fetch("http://localhost:5000/shopProducts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(products),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
}

//data getting from database to show in shop
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])



    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])





    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }





    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        key={pd.key}
                        showAddToCart={true}
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        ></Product>)
                }
                {/* <button onClick={handleSubmit}>Click to add to database</button> */}
                {/* Initially sending data to database by this button,now commented out because not needed anymore */}
            </div>




            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>
               </Cart>
            </div>
            
        </div>
    );
};

export default Shop;