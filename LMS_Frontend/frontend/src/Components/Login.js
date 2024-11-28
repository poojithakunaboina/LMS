import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Login({ show, onClose}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password);

        
        if (username === 'poojitha' && password === 'password') {
            alert('Login successful!');
            onClose(); // Close modal on success
        } else {
            setError('Invalid credentials!'); //set error message
        }
    };

    return (
        <Modal show={show} onHide={onClose} >
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <div className='alert alert-danger'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="btn btn-primary">Login</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default Login;
        