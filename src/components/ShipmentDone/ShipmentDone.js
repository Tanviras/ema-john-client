import React from 'react';
import happyImage from '../../images/giphy.gif';
import './ShipmentDone.css';

const ShipmentDone = () => {
    
    return (
        <div>
           <h3 className='textPosition'>We have recieved your order!</h3> 
           <br/>
            <img src={happyImage} alt="happyImage" className='imgPosition'/>
        </div>
    );
};

export default ShipmentDone;