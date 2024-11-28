import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
const baseUrl = 'http://127.0.0.1:8000/api/course';

function AC() {
    const [cats, setCats] = useState([]);  // Categories state
    const [formData,setformData] = useState({
        Title: '',
        description: '',
        category: '', // Set default category value if necessary
        teacher: '1',  // Assuming teacher ID 1 for testing
        featured_img:null,
        technologies: '',
    });

    // Fetch categories from backend
    useEffect(() => {
        axios.get(`${baseUrl}/category/`)
            .then((res) => {
                setCats(res.data);
            })
            .catch((error) => {
                console.error('Request failed with status code', error.response.status);
                console.error('Error details:', error.response.data);
            
    });
}, []);

    // Handle input field changes
    const handleChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Handle file input change
    const handleFileChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.files[0]
        });
    };

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare FormData for submission
        const formData = new FormData();
        formData.append('Title',formData.Title);
        formData.append('description',formData.description);
        formData.append('category',formData.category);
        formData.append('teacher',formData.teacher);
        formData.append('featured_img',formData.featured_img);
        formData.append('technologies',formData.technologies);

        try {
            axios.post(`${baseUrl}/course/`,formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
            })
            .then((res) => {
                console.log(res.data);
                // Reset the form after submission
                setformData({
                    Title: '',
                    description: '',
                    category: '',
                    teacher: '1',
                    featured_img:null,
                    technologies: '',
                });
            });
        } catch (error) {
            console.error('Error response:', error.response.data);
            console.error('Status:', error.response.status);
          }
    };

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
                                    <Link className="nav-link" to="/TDB/myuser">Myuser</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/TDB/profile">Profile Setting</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/TDB/Change-password">Change Password</Link>
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
                    <div className="card">
                        <div className="card-header">
                            <h3>Add Courses</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="Title"
                                        value={formData.Title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Course Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="featured_img"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Technologies</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="technologies"
                                        value={formData.technologies}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                <label className="form-label">Category</label>
                                    <select
                                        className="form-control"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {cats.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.Title}
                                            </option>
                                        ))}
                                        </select>
                                        </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            </div>
                        </div>

                    {/* Render additional dashboard routes here */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AC;