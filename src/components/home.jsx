// home.jsx
import React, { useEffect, useState } from 'react';
import img from "../assets/my.png";
import Certifications from './certification.jsx';
import Contact from './contact.jsx';
import Projects from './project.jsx';
import Skills from './skills.jsx';
import Timeline from './timeline.jsx';
import LifeUpdates from './recent-updates.jsx';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStats, setSystemStats] = useState({
    uptime: '00:00:00',
    connections: Math.floor(Math.random() * 50) + 10,
    threats: Math.floor(Math.random() * 5),
    status: 'SECURE',
  });

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const statsInterval = setInterval(() => {
      setSystemStats(prev => ({
        ...prev,
        connections: Math.floor(Math.random() * 50) + 10,
        threats: Math.floor(Math.random() * 5),
        uptime: new Date(Date.now() - Math.random() * 86400000)
          .toISOString()
          .substr(11, 8),
      }));
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(statsInterval);
    };
  }, []);

  useEffect(() => {
    const createMatrixRain = () => {
      const container = document.querySelector('.matrix-rain');
      if (!container) return;
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノマミムメモヤユヨラリルレロワヲン';
      for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${Math.random() * 100}%`;
        column.style.animationDuration = `${Math.random() * 3 + 2}s`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        let text = '';
        for (let j = 0; j < 20; j++) {
          text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        column.textContent = text;
        container.appendChild(column);
      }
    };
    const timer = setTimeout(createMatrixRain, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const snippets = [
      'def scan_ports(target):',
      'nmap -sS -O target',
      'import socket, sys',
      'while True: exploit()',
      'if vulnerability_found:',
      'payload = shellcode',
      'connect(target, 443)',
      'decrypt(hash_value)',
      'for i in range(256):',
      'subprocess.call(cmd)',
    ];

    const createFloatingCode = () => {
      const snippet = snippets[Math.floor(Math.random() * snippets.length)];
      const el = document.createElement('div');
      el.className = 'floating-code';
      el.textContent = snippet;
      el.style.top = `${Math.random() * window.innerHeight}px`;
      el.style.animationDuration = `${Math.random() * 10 + 15}s`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 20000);
    };

    const interval = setInterval(createFloatingCode, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="matrix-rain" />
      <div className="terminal-grid" />
      <div className="scanlines" />

      {/* SYSTEM STATS */}
      <div className="system-status">
        <div className="status-line">
          <span>SYSTEM STATUS</span>
          <span className="pulse-glow">{systemStats.status}</span>
        </div>
        <div className="status-line">
          <span>UPTIME</span>
          <span>{systemStats.uptime}</span>
        </div>
        <div className="status-line">
          <span>CONNECTIONS</span>
          <span>{systemStats.connections}</span>
        </div>
        <div className="status-line">
          <span>THREATS</span>
          <span style={{ color: systemStats.threats > 2 ? '#ff4444' : '#00ff41' }}>
            {systemStats.threats}
          </span>
        </div>
        <div className="status-line">
          <span>TIME</span>
          <span>{currentTime.toLocaleTimeString()}</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 8 }}>
          <span className="status-indicator status-online" />
          <span>FIREWALL ACTIVE</span>
        </div>
        <div style={{ fontSize: 8 }}>
          <span className="status-indicator status-online" />
          <span>IDS MONITORING</span>
        </div>
        <div style={{ fontSize: 8 }}>
          <span className="status-indicator status-warning" />
          <span>UPDATES PENDING</span>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="About">
        <div class="right">
        <h2 className="section-title glitch-text" data-text="WHOAMI~">WHOAMI~</h2>
        <div className="section-underline">=======</div>
        </div>
        
        
        <div className="profile-section">
          <img src={img} alt="Cybersecurity Enthusiast" className="profile-image" />
          <div className="profile-info">
            <p>GM folks!!, I am <strong className="pulse-glow">Moinak Niyogi</strong>. I love to learn new things and build cool stuff.</p>
            <br />
            <p>Intern @<strong className="pulse-glow">Gurugram Police Cyber Cell</strong> </p>
            <p>Secretary & RD Lead @<strong className="pulse-glow">Association for Cyber Security</strong></p>
            <p>Mentor @<strong className="pulse-glow">Albus Security</strong></p>
            <p>Ex-Research Intern <strong className="pulse-glow">@IIIT Kalyani</strong></p>
            <p>Content Writer @<strong className="pulse-glow">Entrelogy Business School</strong> </p>
            <p>Software Engineering Fellow @<strong className="pulse-glow">Headstarter.ai</strong></p>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <LifeUpdates />
      <Contact />
    </>
  );
};

export default Home;
