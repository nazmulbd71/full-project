import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound-Container'>
            <h1 className='heading-one'>Oops!</h1>
            <h2>404-Page Not Found</h2>
            <Link to="/"><button className='notFound-btn'>Go To Home Page</button></Link>
        </div>
    );
};

export default NotFound;