import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Header({ onLoginClick }) {
    const navigate = useNavigate();
    
    const handle = () => {
        navigate('/Home')

    }
    return (
        <nav className="navbar navbar-expand-lg bg-secondary" navbar-light>

            <div className="container-fluid">
                <Link className="navbar-brand" to="#">ONLINE LEARNING</Link>
                <button className="navbar-toggle"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" onClick={() => handle('/hpme')}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/courses">Courses</Link>  
                        <div className="dropdown">
                            <button 
                                className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="dropdownMenuButton" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                style={{color:'black'}}
                            >
                                Teachers
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <Link className="dropdown-item" to="/Tlogin" onClick={onLoginClick}>Login</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/TRegister">Register</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/TDB">Dashboard</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Tlogout">Logout</Link>
                                </li>
                            </ul>  
                            </div>
                    <Link className="nav-link" to="/about">About Us</Link>
                    <div className="dropdown">
                            <button 
                                className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="dropdownMenuButton" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                style={{color:'black'}}
                            >
                                User
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <Link className="dropdown-item" to="/login" onClick={onLoginClick}>Login</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/SRegister">Register</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;