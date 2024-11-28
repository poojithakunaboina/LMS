import React from 'react';
import {Link,Outlet } from 'react-router-dom';


function MC() {
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
                                    <Link className="nav-link" to="/TDB/MC">My Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/TDB/AC">Add Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/TDB/myuser">MyUser</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/TDB/PS">Profile Setting</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/TDB/CP">Change Password</Link>
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
                    <h3>My Courses</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Total Enrolled</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Python full stack</td>
                                <td>150</td>
                                <td><button className="btn btn-dark">Delete</button></td>
                            </tr>
                            <tr>
                                <td>Artificial Intelligence</td>
                                <td>120</td>
                                <td><button className='btn btn-dark'>Delete</button></td>
                            </tr>
                            <tr>
                                <td>Data Science</td>
                                <td>100</td>
                                <td><button className='btn btn-dark'>Delete</button></td>
                            </tr>
                            <tr>
                                <td>Cyber Security</td>
                                <td>98</td>
                                <td><button className='btn btn-dark'>Delete</button></td>
                            </tr>


                        </tbody>
                    </table>

                    {/* Render additional dashboard routes here */}
                    <Outlet />
                </div>
            </div>
        </div>
    
    );
}

export default MC;