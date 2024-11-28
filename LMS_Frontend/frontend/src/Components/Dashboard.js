// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
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
                                        to="/dashboard/mycourses"
                                        activeClassName="active"
                                    >
                                        My Courses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard/favouritecourses"
                                        activeClassName="active"
                                    >
                                        Favourite Courses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard/recommendedcourses"
                                        activeClassName="active"
                                    >
                                        Recommended Courses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard/profilesettings"
                                        activeClassName="active"
                                    >
                                        Profile Settings
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard/changepassword"
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
                <h3>Welcome to your Dashboard</h3>
                <p>Here you can manage your courses, update your profile, and more!</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;