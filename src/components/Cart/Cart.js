import React from 'react';
// import Shop from '../Shop/Shop'

const Cart = (props) => {
    const cart = props.cart;
    // way-1
    // const totalPrice= cart.reduce((total,prd) => total+prd.price , 0);
    // way-2
    let totalPrice=0;
    for (let i=0;i<cart.length;i++){
        const product=cart[i];
        totalPrice=totalPrice+product.price;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered:{cart.length}</h5>
            <p>Total Price:{totalPrice}</p>
        </div>
    );
};

export default Cart;