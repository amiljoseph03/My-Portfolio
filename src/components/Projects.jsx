import React, { useState } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import infantcare from '../assets/infantcare.jpg';
import homedecor from '../assets/homedecor.jpg';
// import weather from '../assets/weather.jpg';
import bmi from '../assets/bmi.jpg';
import '../Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Infantcare - Child Orphanage Management System',
      image: infantcare,
      tech: ['Php', 'MySQL'],
      // live: 'https://blog-website-two-sigma.vercel.app/',
      desc: 'Child Orphanage Management System  for managing all activities of an orphanage It can make online payments, donations, applications, sponsor items by QR code etc. • Modules: Orphanage, Sponsor, Volunteer, Donation • Features Implemented:  Razorpay (payment integration),User authentication, QR Code, Mail, Chatbot ',
    },
    {
      title: 'Blogify-Travel Blog Website',
      image: project1,
      tech: ['React', 'Firebase', 'Tailwind'],
      live: 'https://blog-website-two-sigma.vercel.app/',
      desc: 'Developed a blog uploading website using React with a clean and responsive UI, Implemented Cloudinary for fast and optimized image uploads. Used Firebase Realtime Database to store and manage blog text content with real-time updates. Added Firebase Authentication for secure user signup and login. ',
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
      title: 'Home Decor',
      image: homedecor,
      tech: ['Next Js'],
      live: 'https://e-commerce-product-listing-n3wfk3nrp-amils-projects-61c27df6.vercel.app/',
      desc: 'E-Commerce web application for listing home decor items.',
    },
    {
      title: 'Dynamic Digital Clock',
      image: project5,
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
      live: 'https://a-dynamic-digital-clock.netlify.app/',
      desc: 'Dynamic digital clock using JavaScript, displaying hours, minutes, and seconds with live updates.Added dark and light mode toggle for improved user experience.',
    },
    // {
    //   title: 'Weather App',
    //   image: weather,
    //   tech: ['HTML', 'CSS', 'JAVASCRIPT', 'API'],
    //   live: 'https://weather-app-six-flax-67.vercel.app/',
    //   desc: 'Developed a dynamic weather app using OpenWeatherMap API with geolocation, and interactive UI ',
    // },
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
