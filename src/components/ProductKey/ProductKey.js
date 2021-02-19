import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../../Product/Product';

const ProductKey = () => {
    const {productKey}= useParams();
    const product = fakeData.find(pd=>pd.key===productKey);
    // console.log(product);
    return (
        <div>
            <h1>{productKey} is coming soon</h1>
            <Product showAddToCart={false} product={product}></Product>
            {/* he he he eta diyei toh shop er moddhe sob element ke dekhaisilam */}
        </div>
    );
};

export default ProductKey;