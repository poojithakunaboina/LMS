import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Changepassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation function
  const validateForm = () => {
    const formErrors = {};
    if (!formData.newPassword || formData.newPassword.length < 6)
      formErrors.newPassword = 'Password must be at least 6 characters';
    if (formData.newPassword !== formData.confirmPassword)
      formErrors.confirmPassword = 'Passwords do not match';
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, proceed with password update
    if (Object.keys(formErrors).length === 0) {
      console.log('Password updated:', formData.newPassword);

      // Optionally reset the form
      setFormData({
        newPassword: '',
        confirmPassword: '',
      });
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
                  <Link className="nav-link" to="/dashboard/my-courses">My Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/favouritecourses">Favorite Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/recommended-courses">Recommended Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profilesettings">Profile Setting</Link>
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

        {/* Change Password Form */}
        <div className="col-md-6 offset-md-1">
          <h2>Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className="form-control"
              />
              {errors.newPassword && <p className="error text-danger">{errors.newPassword}</p>}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                className="form-control"
              />
              {errors.confirmPassword && <p className="error text-danger">{errors.confirmPassword}</p>}
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;