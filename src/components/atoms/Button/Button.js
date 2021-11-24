import React from 'react';
import './Button.css';

const Button = ({children, type, isActive}) => {
    return (
        <div>
            <a href={`#${children}`}
                className={`button ${type}`}> {/* ${isActive} ? active */}
                {children}
            </a>
        </div>
    );
};

export default Button;
