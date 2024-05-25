import React from 'react';
import "../footer/Footer.css";
import logo from "../../assets/logo2.png"; // Import your logo image here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="copyright">
            <p>&copy; 2024 Maharajer Darbare ; All Rights Reserved.</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
