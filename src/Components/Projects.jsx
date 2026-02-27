import { FaPython, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      icon: <FaPython />,
      tech: "Python",
      description:
        "An interactive Tic Tac Toe game developed using Python with game logic and win-condition detection.",
      features: [
        "Two-player game system",
        "Win & draw detection logic",
        "Input validation handling",
      ],
      github: "https://github.com/Developerraji/Tic-toc-tac",
    },
    {
      title: "Snake Game",
      icon: <FaPython />,
      tech: "Python",
      description:
        "Classic snake game built using Python and Pygame with smooth keyboard controls and score tracking.",
      features: [
        "Collision detection logic",
        "Real-time score tracking",
        "Increasing difficulty level",
      ],
      github: "https://github.com/Developerraji/Snake-game",
    },
    {
      title: "E-Learn App",
      icon: <FaReact />,
      tech: "MERN Stack",
      description:
        "Full-stack e-learning platform developed using MongoDB, Express, React, and Node.js with authentication and course management.",
      features: [
        "User login & registration",
        "Course listing & enrollment",
        "Responsive UI design",
      ],
      github: "https://github.com/Developerraji/e-learn-",
    },
    {
      title: "Travel Explorer",
      icon: <FaNodeJs />,
      tech: "MERN Stack",
      description:
        "Travel booking web application allowing users to explore destinations and book hotel, food, and cab services.",
      features: [
        "Destination browsing system",
        "Booking interface integration",
        "Modern responsive layout",
      ],
      github: "https://github.com/Developerraji/Travel_App",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>

            <h3>{project.title}</h3>
            <span className="tech-tag">{project.tech}</span>

            <p>{project.description}</p>

            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            <div className="project-btn">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}