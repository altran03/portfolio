import React from 'react';
import Link from 'next/link';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Rapid Relief AI - Humane Tech 2025",
      description: "A full-stack application for real-time call transcription and visualization, combining a FastAPI backend with a Next.js frontend. Features live call transcription via VAPI webhooks, WebSocket server for real-time streaming, and a modern dashboard for monitoring and analysis.",
      technologies: ["Next.js", "FastAPI", "Python", "TypeScript", "WebSocket", "VAPI"],
      github: "https://github.com/n8thantran/humane-tech-2025",
      live: "https://youtube.com/shorts/nQHImVZYsAA?si=76vgd3ak_DzBPdx9"
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
                  Demo
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
