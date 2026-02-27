import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>B.E Computer Science Engineering</h3>
          <p className="edu-institution">PSR Engineering College,Sivakasi</p>
          <p className="edu-year">2022 - 2026</p>
          <p className="edu-score">CGPA: 8.4</p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary (12th)</h3>
          <p className="edu-institution">Govt Aided Higher Secondary School</p>
          <p className="edu-year">2020 - 2022</p>
          <p className="edu-score">Percentage: 82%</p>
        </div>

        <div className="education-card">
          <h3>SSLC (10th)</h3>
          <p className="edu-institution">Govt Aided Higher Secondary School</p>
          <p className="edu-year">2019 - 2020</p>
          <p className="edu-score">Percentage: 76%</p>
        </div>

      </div>
    </section>
  );
}

export default Education;