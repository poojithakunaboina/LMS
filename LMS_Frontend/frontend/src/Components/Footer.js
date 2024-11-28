import React from 'react';
import './Footer.css'; // Optional: import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="row">
          
          <div className="col">
            <h5>Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

    