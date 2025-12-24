import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
          <span className="logo-text">Portfolio</span>
        </a>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </nav>
        <button 
          className={`menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;