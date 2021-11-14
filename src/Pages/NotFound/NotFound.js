import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';
const NotFound = () => {
    return (
        <div className="not-found-container" style={{backgroundImage:'linear-gradient(to right, #22c1c3 , #fdbb2d)',height:'100vh',fontFamily: 'Dancing Script, cursive'}}>
            <div className="content-container">
                <h1 className="text-danger display-3 text-center">Sorry !</h1>
                <h1 className="text-danger display-3 text-center">Page Not Found </h1>
                <Link to="/"><button className="btn btn-primary">Go To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;