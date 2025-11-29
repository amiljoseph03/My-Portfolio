import React from 'react';

// Import images
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

// Import CSS
import '../Projects.css';



export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      image: project3,
      tech: ['React', 'GSAP', 'Tailwind'],
      live: 'https://your-live-link.com',
      desc: 'A futuristic virtual portfolio with dynamic animations and 3D effects.',
    },
    {
      title: 'E-Commerce Store',
      image: project1,
      tech: ['MERN', 'Redux', 'Stripe'],
      live: 'https://your-live-link.com',
      desc: 'A complete MERN-based shopping platform with authentication and payment gateway.',
    },
    {
      title: 'AI Chatbot',
      image: project2,
      tech: ['Python', 'NLP', 'React'],
      live: 'https://your-live-link.com',
      desc: 'AI-powered chatbot with real-time NLP interaction and cloud deployment.',
    },
  ];

  return (
    <section className="projects-container">
      <h1 className="project-heading">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            {/* IMAGE + HOLOGRAM */}
            <div className="project-img-wrapper">
              <img src={p.image} className="project-img" alt={p.title} />

              <div className="project-hologram">
                <p>{p.desc}</p>
              </div>
            </div>

      
            <h2 className="project-title">{p.title}</h2>

            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <a href={p.live} target="_blank" className="project-link">
              Live Link →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}