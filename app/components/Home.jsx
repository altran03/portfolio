import React from 'react';
import Link from 'next/link';
import './Home.css';

const Home = () => {
  return (
    <main className="container">
      <section className="hero">
        <h1 className="name">Alvin Tran</h1>
        <p className="subtitle">Software Developer & Computer Science Student</p>
        
        <div className="about-section">
          <h2>About Me</h2>
          <p className="about-text">
            I'm a passionate software developer with a love for creating innovative solutions 
            and building meaningful applications. Currently pursuing Computer Science, I enjoy 
            working on projects that challenge me and help me grow as a developer.
          </p>
          <p className="about-text">
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open source projects, or working on personal side projects that interest me.
          </p>
        </div>

        <div className="cta-section">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <i className="fas fa-file-pdf"></i>
            View Resume
          </a>          
          <Link href="/portfolio" className="portfolio-btn">
            View Portfolio
            <i className="fas fa-arrow-right"></i>
          </Link>

        </div>
      </section>
    </main>
  );
};

export default Home;
