import React from "react";
import "./Certificates.css";

import pythonCert from "../assets/Certificate/python basic.jpeg";
import mernCert from "../assets/certificate/python advance.jpeg";
import reactCert from "../assets/certificate/guvi.jpeg";
import jsCert from "../assets/certificate/acm.jpeg";
import htmlCert from "../assets/certificate/anjana.jpeg";
import cssCert from "../assets/certificate/FC.jpeg";   

const Certificates = () => {
  const certificates = [
    {
      title: "Python Basic Certification",
      image: pythonCert,
      issuer: "Gold Heart Foundation"
    },
    {
      title: "Python Advance Certification",
      image: mernCert,
      issuer: "Gold Heart Foundation"
    },
    {
      title: "External Participation Certification",
      image: reactCert,
      issuer: "AAA College of Engineering,Sivakasi"
    },
    {
      title: "GUVI Learnathon Participation Certification",
      image: jsCert,
      issuer: "GUVI"
    },
    {
      title: "Internship Certification",
      image: htmlCert,
      issuer: "Anjana Infotech,Rajapalayam"
    },
    {
      title: "DSA Training Certification",
      image: cssCert,
      issuer: "CodingMart Technologies,Coimbotore"
    }
  ];

  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title">My Certifications</h2>

      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.image} alt={cert.title} />
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <a href={cert.image} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;