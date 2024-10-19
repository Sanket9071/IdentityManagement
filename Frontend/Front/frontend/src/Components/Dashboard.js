import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleLogout();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            <p>This is a protected area of the application.</p>
            <p>You can manage your account settings and more here.</p>
            <div className="timer">
                <h2>Your session will be logged out in {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} minutes.</h2>
            </div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
