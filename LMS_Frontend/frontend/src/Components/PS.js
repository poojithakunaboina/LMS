import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PS() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    profilePhoto: null,
    password: '',
    interest: '',
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    // Preview profile photo if uploaded
    if (name === 'profilePhoto' && files) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  // Form validation function
  const validateForm = () => {
    const formErrors = {};
    if (!formData.fullName) formErrors.fullName = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = 'Valid Email is required';
    if (!formData.password || formData.password.length < 6)
      formErrors.password = 'Password must be at least 6 characters';
    if (!formData.interest) formErrors.interest = 'Interest is required';
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    // If there are no errors, proceed with submission
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);

      // Optionally reset the form
      setFormData({
        fullName: '',
        email: '',
        profilePhoto: null,
        password: '',
        interest: '',
      });
      setImagePreview(null);
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
                  <Link className="nav-link" to="/TDB/mycourses">My Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/addcourses">Add Courses</Link>
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

        {/* Profile Settings Form */}
        <div className="col-md-9">
          <div className="profile-settings">
            <h2>Profile Setting</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label>Profile Photo</label>
                <input
                  type="file"
                  name="profilePhoto"
                  onChange={handleChange}
                  className="form-control"
                />
                {imagePreview && (
                  <div className="image-preview">
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="form-group">
                <label>Interest</label>
                <input
                  type="text"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.interest && <p className="error">{errors.interest}</p>}
              </div>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PS;