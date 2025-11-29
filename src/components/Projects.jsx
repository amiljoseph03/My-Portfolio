import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import '../Projects.css';



export default function Projects() {
  const projects = [
    {
      title: 'Blogify-Travel Blog Website',
      image: project1,
      tech: ['React', 'Firebase', 'Tailwind'],
      live: 'https://blog-website-two-sigma.vercel.app/',
      desc: 'A futuristic virtual portfolio with dynamic animations and 3D effects.',
    },
    {
      title: 'Resume Builder ',
      image: project2,
      tech: ['React', 'REST API', 'JSON'],
      live: 'https://resume-builder-9wjx.vercel.app',
      desc: 'Enabled users to add, edit,update and delete details step by step.Integrated jsPDF and html2canvas for PDF resume downloads. Implemented a download history feature for tracking resumes. Used SweetAlert for user-friendly alerts and confirmations.  Deployed frontend on Vercel and backend on Render. ',
    },
    {
      title: 'Discount Calculator',
      image: project3,
      tech: ['React'],
      live: 'https://discount-calculator-flax.vercel.app/',
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