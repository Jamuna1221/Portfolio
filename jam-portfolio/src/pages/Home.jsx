import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <span className="name-part">Your</span>
              <span className="name-part">Name</span>
            </h1>
            <p className="hero-title">Full Stack Developer</p>
            <p className="hero-subtitle">
              Crafting elegant solutions to complex problems through clean code and innovative design
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work<span className="btn-arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1"></div>
            <div className="floating-card card-2"></div>
            <div className="floating-card card-3"></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Get to know me</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate developer with expertise in building modern, scalable web applications. My journey in tech started with curiosity and evolved into a commitment to creating meaningful digital experiences.</p>
              <p>With a strong foundation in both frontend and backend technologies, I approach every project with attention to detail and a focus on user experience. I believe in writing clean, maintainable code and staying current with industry best practices.</p>
              <p>When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
