import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import loadingSpinner from '../../images/loadingSpinner.gif';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [loading,setLoading]=useState(true);
    const [product, setProduct] = useState({});
    document.title="product detail";
    
    useEffect(() => {
        fetch('http://localhost:5000/product/'+ productKey)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            setLoading(false);
        });
    }, [productKey])
    
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            {
                loading? <img src={loadingSpinner} alt='' className="loadingPosition"/> :
                <Product showAddToCart={false} product={product}></Product>
            }
            
        </div>
    );
};

export default ProductDetail;