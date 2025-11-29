import React from 'react';
import '../Education.css';


import educationImg from '../assets/educationImg.jpg';

export default function Education() {
  const educationList = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institute: 'Kerala Technological University',
      duration: '2022 - 2024',
    //   desc: 'Specialized in software development, data analysis, and machine learning. Completed projects in full-stack web development.',
    },
   
  ];

  return (
    <section className="education-section" id="education">
      <h2 className="education-heading">Education</h2>

      <div className="education-container">
        {/* Left: Education Cards */}
        <div className="education-cards">
          {educationList.map((edu, index) => (
            <div className="education-card" key={index}>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institute">{edu.institute}</p>
              <p className="edu-duration">{edu.duration}</p>
              <p className="edu-desc">{edu.desc}</p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="education-img">
          <img src={educationImg} alt="Education Illustration" />
        </div>
      </div>
    </section>
  );
}
