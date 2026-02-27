import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; 
import profile from "../assets/profile.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <h1>Hi, I'm <span>Rajalakshmi</span></h1>
        <h2>Final Year Student | Full Stack Developer</h2>

        <p>
          I am passionate about coding and building real-world applications.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/resume.pdf" download className="btn">Download Resume</a>
        </div>

        
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/rajalakshmi-s-aa3746246" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Developerraji" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://leetcode.com/u/raji_2026/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>

          <a href="mailto:srajalakshmi19082004@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="home-img">
        <img src={profile} alt="Rajalakshmi" />

      </div>
    </section>
  );
}