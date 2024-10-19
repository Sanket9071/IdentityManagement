import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://localhost:7164/api/Auth/register', { email, password });
            navigate('/login'); 
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Create Account</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleRegister}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Create Account</button>
                </form>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
