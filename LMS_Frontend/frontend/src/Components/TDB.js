// src/components/TDB.js
import React from 'react';
import { Link } from 'react-router-dom';

function TDB() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Dashboard</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/TDB/MC"
                                        activeClassName="active"
                                    >
                                        My Courses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/TDB/AC"
                                        activeClassName="active"
                                    >
                                        Add Courses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/TDB/myuser"
                                        activeClassName="active"
                                    >
                                        MyUser
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/TDB/PS"
                                        activeClassName="active"
                                    >
                                        Profile Settings
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/TDB/CP"
                                        activeClassName="active"
                                    >
                                        Change Password
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-danger"
                                        to="/logout"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="col-md-9">
                <h3>Welcome to Teacher Dashboard</h3>
                <p>Here you can manage your courses, update your profile, and more!</p>
                </div>
            </div>
        </div>
    );
}

export default TDB;