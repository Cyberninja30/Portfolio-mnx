const Timeline = () => {
    const timelineData = [
      ['2017', 'First Lines of Code', 'Began programming with C++, explored basic logic, loops, and file handling. Built small programs like calculators, grade systems, and pattern generators.'],
      ['2019 ','Python Enters the Picture', 'Started learning Python, focusing on functions, data structures, and modules. Gained a strong foundation in writing clean and efficient code.'],
      ['2020', 'First Web Application: Library Management System', 'Built my first full-stack project — a Library Management System. Tech Stack: Python (frontend + backend) & MySQL (database).'],
      ['2022', 'Expanding Horizons', 'Started exploring Web3. Learned about smart contracts, wallets, and Web3 architecture. As a summer trainee at Metacrafters, built Web3 applications with practical use-cases. Built AlgoPool on the Algorand Ecosystem and decentralized protocols.'],
      ['2023', 'Got interested in cybersecurity', 'Started a carrier in cybersecurity , on exploring more got into bug bounty, play CTFs, etc...']  

];
  
    return (
      <section id="timeline">
          <div class="right">
        <h2 className="section-title glitch-text" data-text="TimeLIne">TimeLine</h2>
        <div className="section-underline">=========</div>
        </div>
        <div className="timeline-section">
          {timelineData.map(([date, title, description]) => (
            <div key={date} className="timeline-item">
              <span className="timeline-date pulse-glow">{date}</span>
              <div className="timeline-content">
                <h3 className="timeline-title">{title}</h3>
                <div className="timeline-description">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Timeline;