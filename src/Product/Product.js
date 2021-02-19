import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';




const Product = (props) => {//Product function er input dilam "props"=fakeData theke recieved data
// console.log(props);
return (
        <div className="productDiv">
        <div> 
            <img src={props.product.img} alt=""/>
        </div>
        <div>
            <h4 className="productName"><Link to={"/product/"+ props.product.key}> {props.product.name}</Link></h4>
            {/*      "/product/"+ props.product.key= /product/B01LWPSB57         */}
            {/*        Full url is: http://localhost:3000/product/B01LWPSB57      */}
            <p>By {props.product.seller}</p>
            <br/>
            <p>${props.product.price}</p>
            <p>Only {props.product.stock} left in stock - Order fast</p>


                {props.showAddToCart===true && 
                <button className="main-button" onClick={()=>{props.handleAddProduct(props.product)}}>
                <FontAwesomeIcon icon={faShoppingCart}/>
                 add to cart</button>}
            
        </div>
        </div>
    );
};

export default Product;