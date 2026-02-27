import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#home" className="logo">
    RAJALAKSHMI
  </a>


      <div className = "nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}