import React from 'react';
import './Logo.css';

const Logo = ({children}) => {
    return (
        <div>
            <a href="#" className="logo">{children}</a>
        </div>
    );
};

export default Logo;

