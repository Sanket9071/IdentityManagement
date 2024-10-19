import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Timesheet Application</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/logout">Logout</a>
            </nav>
        </header>
    );
};

export default Header;
