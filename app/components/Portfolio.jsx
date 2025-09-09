import React from 'react';
import Link from 'next/link';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [];

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
        <div className="empty-state">
          <h3>Portfolio Coming Soon</h3>
          <p>Projects will be added here soon. Check back later!</p>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
