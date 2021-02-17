import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="logo.png" alt="ema-john-logo"/>
            {/* seshe keno jani / dey */}
           
            <nav>
                <div className="navDiv">
                <a href="/shop">Shop</a>
                <a href="/orderReview">Order Review</a>
                <a href="manage">Manage Inventory Here</a>
                </div>
            
            </nav>
            
            
        </div>
    );
};

export default Header;