import { useEffect, useState } from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman, SiCanva } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import "./Skills.css";

const skills = [
  { name: "Java", level: 80, icon: <FaJava /> },
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },
  { name: "React.js", level: 80, icon: <FaReact /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs /> },
  { name: "Express.js", level: 70, icon: <SiExpress /> },
  { name: "MongoDB", level: 70, icon: <SiMongodb /> },
  { name: "VS Code", level: 90, icon: <VscCode /> },
  { name: "Postman", level: 80, icon: <SiPostman /> },
  { name: "Canva", level: 80, icon: <SiCanva /> },
];

function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-card">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <div className="skill-name">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
                <span>{animate ? skill.level / 10 : 0}/10</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: animate ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;