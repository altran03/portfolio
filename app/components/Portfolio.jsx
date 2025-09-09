import React from 'react';
import Link from 'next/link';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=E-Commerce+Platform",
      github: "https://github.com/alvintran/ecommerce-platform",
      live: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Task+Management+App",
      github: "https://github.com/alvintran/task-manager",
      live: "https://taskmanager-demo.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Weather+Dashboard",
      github: "https://github.com/alvintran/weather-dashboard",
      live: "https://weather-demo.com"
    },
    {
      id: 4,
      title: "Machine Learning Model",
      description: "A Python-based machine learning model for image classification with a web interface for testing and visualization.",
      technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=ML+Model",
      github: "https://github.com/alvintran/ml-classifier",
      live: "https://ml-demo.com"
    }
  ];

  return (
    <main className="portfolio-container">
      <div className="portfolio-header">
        <Link href="/" className="back-btn">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
        <h1 className="portfolio-title">My Portfolio</h1>
        <p className="portfolio-subtitle">A collection of my recent projects and work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                  Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
