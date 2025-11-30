import React from 'react';
import '../Experience.css';


import experienceImg from '../assets/experienceImg.jpg';

export default function Experience() {
  const experiences = [
    {
      company: 'Luminar Technolab.',
      role: 'Full Stack Developer Intern',
      duration: 'July 2025 - Dec 2025',
      desc: 'Worked on full-stack development projects using React and Node.js, developed dashboards, and optimized APIs.',
    },
    {
      company: 'IDatalytics',
      role: 'Data Analytics Intern',
      duration: 'Sep 2024 - Dec 2024',
      desc: 'Performed data cleaning, visualization, and created reports in Power BI, Tableau, SQL and Python.',
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-container">
        <div className="experience-img">
          <img src={experienceImg} alt="Experience Illustration" />
        </div>

        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h3 className="exp-company">{exp.company}</h3>
              <p className="exp-role">{exp.role}</p>
              <p className="exp-duration">{exp.duration}</p>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
