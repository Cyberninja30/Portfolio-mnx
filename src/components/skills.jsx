import { useNavigate } from "react-router-dom";

const Skills = () => {
    const skillSet = [
      ['Offensive Security', ['Penetration Testing', 'Vulnerability Assessment', 'Red Team Operations', 'Social Engineering', 'Exploit Development', 'Web App Security']],
      ['Defensive Security', ['Incident Response', 'Threat Hunting', 'SIEM Management', 'Digital Forensics', 'Security Monitoring', 'Malware Analysis']],
      ['Security Tools', ['Metasploit', 'Burp Suite', 'Nmap & Nessus', 'Wireshark & tcpdump', 'Splunk & ELK', 'Kali & Parrot']],
      ['Programming & Scripting', ['Python', 'PowerShell & Bash', 'JavaScript', 'SQL Injection', 'C/C++', 'Go']],
      ['Cloud Security', ['AWS Security', 'Azure Security Center', 'GCP Security', 'Container Security', 'Kubernetes Security', 'IaC']],
      ['Compliance & Frameworks', ['NIST Cyber', 'ISO 27001/27002', 'PCI DSS', 'GDPR', 'SOX', 'OWASP Top 10']]
    ];
    const navigate = useNavigate()
    return (
      <section id="skills">
             {/* <button
        onClick= {()=>{navigate(-1)}}
        >back</button> */}
        <h2 className="section-title glitch-text" data-text="Technical Arena">Technical Arena</h2>
        <div className="section-underline">=================</div>
        <div className="skills-grid">
          {skillSet.map(([cat, skills]) => (
            <div key={cat} className="skill-category">
              <h3>{cat}</h3>
              <ul className="skill-list">
                {skills.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  