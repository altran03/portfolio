import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/alvintran',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alvintran',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/alvintran',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Email',
      url: 'mailto:alvin@example.com',
      icon: 'fas fa-envelope'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className={link.icon}></i>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Alvin Tran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
