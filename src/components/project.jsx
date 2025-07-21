import { useNavigate } from "react-router-dom";

const Projects = () => {
  const projects = [
    ['2025', 'NetProbe – Networking Simulation Toolkit', 'A hands-on networking simulator to enhance networking skills via problem-solving and lab automation. Tech stack: Cisco Packet Tracer, advanced web tools (HTML/CSS/JS), and automation logic.'],
    ['2025', 'Miss Robot – 403 Forbidden Bypass Tool', 'A penetration testing utility to bypass restricted directories using logic-based automation. Tech stack: Python, Bash, HTTP header manipulation, and directory fuzzing.'],
    ['2025', 'Network Analyzer – Full-stack Recon & Logger Tool', 'Combines packet sniffing, keylogging, and web scraping to analyze traffic and log user input for research and audit purposes. Built using Python, BeautifulSoup, and socket programming.'],
    ['2024', 'ThreatHunter Pro – Advanced SIEM Analytics', 'Open‑source threat hunting with ML‑powered anomaly detection (Python, ELK, React); used by 500+ teams.'],
    ['2023', 'Zero‑Day Discovery in Smart Home Devices', 'Found critical IoT vulnerabilities; CVE‑2023‑XXXX; published at Black Hat USA 2023.'],
    ['2022', 'Enterprise SOC Transformation', 'Modernized SOC for 10k+ organization; reduced MTTR by 75% and false‑positives by 60%.']
  ];

    return (

      <section id="projects">
       <div class="right">
        <h2 className="section-title glitch-text" data-text="Projects">Projects</h2>
        <div className="section-underline">=========</div>
        </div>
        <div className="timeline-section">
          {projects.map(([year, title, desc]) => (
            <div key={year} className="timeline-item">
              <span className="timeline-date">{year}</span>
              <div className="timeline-content">
                <div className="timeline-title">{title}</div>
                <div className="timeline-description">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  
