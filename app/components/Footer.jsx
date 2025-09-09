import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/altran03',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tralvin',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Email',
      url: 'mailto:alvin.tran127@gmail.com',
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
