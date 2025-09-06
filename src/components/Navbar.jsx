import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Get the current directory based on the route
  const getCurrentDirectory = () => {
    const path = location.pathname;
    if (path === '/') return 'home/';
    return `${path.substring(1)}/`;
  };

  return (
    <header className="terminal-header">
      <div className="terminal-prompt pulse-glow">
        root@kali-mnx:~# {getCurrentDirectory()}<span className="terminal-cursor" />
      </div>
      <nav className="terminal-nav">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          🏠home
        </Link>
        <Link 
          to="/timeline" 
          className={location.pathname === '/timeline' ? 'active' : ''}
        >
          🕒timeline
        </Link>
        <Link 
          to="/projects" 
          className={location.pathname === '/projects' ? 'active' : ''}
        >
          💼projects
        </Link>
        <Link 
          to="/skills" 
          className={location.pathname === '/skills' ? 'active' : ''}
        >
          🛠️skills
        </Link>
        <Link 
          to="/certifications" 
          className={location.pathname === '/certifications' ? 'active' : ''}
        >
          🏆achievements
        </Link>
        <a 
          href="/Resume_Moinak.pdf" 
          download="Moinak_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          📄resume.pdf
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
