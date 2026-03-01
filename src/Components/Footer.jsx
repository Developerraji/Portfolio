import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>Rajalakshmi S</h3>
          <p>Web Developer | Designer | Problem Solver</p>
        </div>


        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect with me</h4>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/raji_qt_04/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:srajalakshmi19082004@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rajalakshmi S</p>
      </div>
    </footer>
  );
};

export default Footer;