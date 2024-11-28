import React from 'react';
import {Link,Outlet } from 'react-router-dom';

function Mycourses() {
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
                                    <Link className="nav-link" to="/dashboard/mycourses">My Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard/favouritecourses">Favourite Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard/recommendedcourses">Recommended Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard/profilesettings">Profile Setting</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard/changepassword">Change Password</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-danger" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-md-9">
                <div className='card'>
                <div className='card-header'>
                    <h3>My Courses</h3>
                </div>
                    <div className='card-body'>
                    
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Created By</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Python full stack</td>
                                <td>Tejaswi</td>
                                <td><button className="btn btn-dark">Delete</button></td>
                            </tr>
                            <tr>
                                <td>Artificial Intelligence</td>
                                <td>Ruhinaaz</td>
                                <td><button className='btn btn-dark'>Delete</button></td>
                            </tr>
                            <tr>
                                <td>Data Science</td>
                                <td>Meghana</td>
                                <td><button className='btn btn-dark'>Delete</button></td>
                            </tr>
                            <tr>
                                <td>Cyber Security</td>
                                <td>Poojitha</td>
                                <td><button className='btn btn-dark'>Delete</button></td>
                            </tr>


                        </tbody>
                    </table>
                    </div>
                    </div>

                    {/* Render additional dashboard routes here */}
                    <Outlet />
                </div>
            </div>
        </div>
    
    );
}

export default Mycourses;