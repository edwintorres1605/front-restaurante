import React from 'react';
import './Loader.css';
import loader from '../../images/loader.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="loading..." />
        </div>
    );
};

export default Loader;