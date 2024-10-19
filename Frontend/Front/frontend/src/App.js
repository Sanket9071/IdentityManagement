import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout';
import Dashboard from './Components/Dashboard';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<h2>Welcome to the Timesheet Application</h2>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;


