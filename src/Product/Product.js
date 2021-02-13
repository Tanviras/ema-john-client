import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Product = (props) => {//Product function er input dilam "props"=fakeData theke recieved data
//   console.log(props);
return (
        <div className="productDiv">
        <div> 
            <img src={props.product.img} alt=""/>
        </div>
        <div className="productDiv-Name">
            <h4>{props.product.name}</h4>
            <p>By {props.product.seller}</p>
            {/* props gulor name niye nilam, etai return korbo */}
            <br/>
            <p>${props.product.price}</p>
            <p>Only {props.product.stock} left in stock - Order fast</p>
            <button onClick={()=>{props.handleAddProduct(props.product)}}
            >
                <FontAwesomeIcon icon={faShoppingCart}/>
                 add to cart</button>
            
        </div>
        </div>
    );
};

export default Product;