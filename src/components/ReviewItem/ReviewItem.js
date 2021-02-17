import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name,quantity}=props.product;
    const reviewItemStyle={
        borderBottom:"1px solid lightgrey",
        marginBottom:"5px",
        paddingBottom:"5px",
        marginLeft:"200px"
                          }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h1>This is review item</h1>
            <h3 className="productName">{name} </h3>
            <h4>Quantity:{quantity}</h4>
            <br/>
            <button className="main-button"> Remove Item </button>
        </div>
    );
};

export default ReviewItem;