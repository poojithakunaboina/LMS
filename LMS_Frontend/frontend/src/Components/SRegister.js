import { useState, useEffect } from "react";
import './SRegister.css';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/student/';

function SRegister() {
  // State for teacher data
  const [studentData, setStudentData] = useState({
    full_name: '',
    mobile_number: '',
    qualification: '',
    skills: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  // Handle input changes
  const handleChange = (event) => {
    setStudentData({
      ...studentData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Password validation
    if (studentData.password !== studentData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    // Create form data
    const studentFormData = new FormData();
    studentFormData.append("full_name", studentData.full_name);
    studentFormData.append("mobile_number", studentData.mobile_number);
    studentFormData.append("qualification", studentData.qualification);
    studentFormData.append("skills", studentData.skills);
    studentFormData.append("email", studentData.email);
    studentFormData.append("password", studentData.password);
    studentFormData.append("confirm_password",studentData.confirm_password);

    // Axios POST request
    axios.post(baseUrl, studentFormData)
      .then((response) => {
        console.log(response.data);
        alert("Registration Successful");
        // Reset form
        setStudentData({
          full_name: '',
          mobile_number: '',
          qualification: '',
          skills: '',
          email: '',
          password: '',
          confirm_password: '',
        });
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        alert("Error during registration. Please check the console for details.");
      });
  };

  // Set page title using useEffect
  useEffect(() => {
    document.title = "Student Registration";
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="full_name"
              value={studentData.full_name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile_number"
              value={studentData.mobile_number}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Enter your mobile number"
            />
            <small>Enter a valid 10-digit phone number</small>
          </div>

          {/* Qualification */}
          <div className="form-group">
            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              value={studentData.qualification}
              onChange={handleChange}
              required
              placeholder="Enter your qualification"
            />
          </div>

          {/* Skills */}
          <div className="form-group">
            <label>Skills</label>
            <input
              type="text"
              name="skills"
              value={studentData.skills}
              onChange={handleChange}
              required
              placeholder="Enter your skills"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={studentData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={studentData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value={studentData.confirm_password}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SRegister;
