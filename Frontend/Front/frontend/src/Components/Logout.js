import React from 'react';
import './Logout.css';

const Logout = () => {
    return (
        <div className="container">
            <div className="card">
                <h2>Logout</h2>
                <p>You have successfully logged out.</p>
                <a href="/login">Login again</a>
            </div>
        </div>
    );
};

export default Logout;
