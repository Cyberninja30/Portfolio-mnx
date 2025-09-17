const Certifications = () => {
  const certs = [
    {
      year: '2025',
      entries: [
        ['Ethical Hacker', 'Completed Ethical Hacker Course from Cisco Networking Academy'],
        ['Networking Basics & Advanced', 'Completed Networking Basics & Advanced Course from Cisco Networking Academy'],
        ['Introduction to Cybersecurity', 'Completed Introduction to Cybersecurity Course from Cisco Networking Academy']
      ]
    },
    {
      year: '2024',
      entries: [
        ['🥇 Winner – Project Expo 2024', 'Secured 1st place in the Interdisciplinary Category.'],
        ['🥇 Winner – EEP 2024', 'Clinched 1st place in EEP.'],
        ['Certified Algorand Developer', 'Completed Algorand Developer Bootcamp 2024.']
      ]
    },
    {
      year: '2023',
      entries: [
        ['🏅 Top 5 – BFCET Hack 1.0', 'Ranked among the top 5 teams in BFCET Hackathon 1.0 for building a high-impact project under time constraints.']
      ]
    },
    {
      year: '2022',
      entries: [
        ['🏅 3rd Position – Hack Bengal 3.0', 'Secured 3rd position at Hack Bengal 3.0, demonstrating skills in collaborative development and innovative thinking.'],
        ['Certified Ethical Hacker (CEH) v12', 'Ethical hacking certification covering latest attack vectors.']
      ]
    },
    {
      year: '2021',
      entries: [
        ['🥈 2nd Place – ACM India East Hackathon, Kolkata', 'Secured 2nd position for developing an innovative tech solution in a 24-hour coding sprint.'],
        ['AWS Certified Security – Specialty', 'Expertise in securing AWS workloads and infrastructure.']
      ]
    }
  ];

  return (
    <section id="achievements">
      <h2 className="section-title glitch-text" data-text="Certifications & Achievements">
        Certifications & Achievements
      </h2>
      <div className="section-underline">================================</div>
      <div className="timeline-section">
        {certs.map(({ year, entries }) => (
          <div key={year} className="timeline-item">
            <span className="timeline-date pulse-glow">{year}</span>
            <div className="timeline-content">
              {entries.map(([title, desc], index) => (
                <div key={index} className="timeline-entry">
                  <div className="timeline-title">{title}</div>
                  <div className="timeline-description">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
