import React, { useState } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import weather from '../assets/weather.jpg';
import bmi from '../assets/bmi.jpg';
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
      title: 'Resume Builder',
      image: project2,
      tech: ['React', 'REST API', 'JSON'],
      live: 'https://resume-builder-9wjx.vercel.app',
      desc: 'User can add, edit, delete details, PDF download, history feature.',
    },
    {
      title: 'Discount Calculator',
      image: project3,
      tech: ['React'],
      live: 'https://discount-calculator-flax.vercel.app/',
      desc: 'Responsive React application to calculate discounted prices based on amount and discount percentage. Implemented real-time calculations using React state and event handling.',
    },
    {
      title: 'Car Webpage',
      image: project4,
      tech: ['React'],
      live: 'https://dreamy-car-567004.netlify.app/',
      desc: 'Responsive React car showcase with optimized UI.',
    },
    {
      title: 'Dynamic Digital Clock',
      image: project5,
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
      live: 'https://a-dynamic-digital-clock.netlify.app/',
      desc: 'Dynamic digital clock using JavaScript, displaying hours, minutes, and seconds with live updates.Added dark and light mode toggle for improved user experience.',
    },
    {
      title: 'Weather App',
      image: weather,
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'API'],
      live: 'https://weather-app-six-flax-67.vercel.app/',
      desc: 'Developed a dynamic weather app using OpenWeatherMap API with geolocation, and interactive UI ',
    },
    {
      title: 'BMI Calculator',
      image: bmi,
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
      live: 'https://bmi-calculator-beta-ten.vercel.app/',
      desc: 'Built a JavaScript-based BMI calculator that takes age, weight, and height inputs to instantly display BMI and its corresponding category.',
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState('All');
  const techFilters = ['All', ...new Set(projects.flatMap((p) => p.tech))];

  // Filter 
  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(selectedFilter));

  return (
    <section className="projects-container">
      <h1 className="project-heading">My Projects</h1>

   
      <div className="filter-buttons">
        {techFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedFilter(tech)}
            className={`filter-btn ${
              selectedFilter === tech ? 'active-filter' : ''
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
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
