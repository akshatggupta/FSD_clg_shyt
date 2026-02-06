import React, { useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError('Please fill in all fields.');
            return;
        }
        // Add login logic here
        alert('Logged in!');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: '#fff',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(44, 62, 80, 0.2)',
                    width: '100%',
                    maxWidth: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.2rem'
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#2575fc' }}>Login</h2>
                <div>
                    <label htmlFor="email" style={{ fontWeight: 'bold', color: '#333' }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.7rem',
                            marginTop: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                            fontSize: '1rem'
                        }}
                        placeholder="Enter your email"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="password" style={{ fontWeight: 'bold', color: '#333' }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={form.password}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.7rem',
                            marginTop: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                            fontSize: '1rem'
                        }}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />
                </div>
                {error && (
                    <div style={{ color: 'red', textAlign: 'center', fontSize: '0.95rem' }}>{error}</div>
                )}
                <button
                    type="submit"
                    style={{
                        background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                        color: '#fff',
                        padding: '0.8rem',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                    }}
                >
                    Login
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.95rem', color: '#666' }}>
                    Don't have an account? <a href="#" style={{ color: '#2575fc', textDecoration: 'underline' }}>Sign up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;