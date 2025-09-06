const RecentUpdates = () => {
    const updates = [

      ['July 2025', 'Filed Two Patents, Multifunctional Patient Bed & Suit and a Steam-powered Fabric Dry Washer.'],
      ['June 2025', 'Building EduSphera (alumni networking for School) & TeleRehab (digitalised gamified rehab platform).'],
      ['May 2025', 'Started Content Writing for Entrelogy Business School.']
    
    ];
  
    return (
      <section id="recent-updates">
        <div className="right">
          <h2 className="section-title glitch-text" data-text="Life-Updates~">Life-Updates~</h2>
          <div className="section-underline">=============</div>
        </div>
        <div className="timeline-section">
          {updates.map(([date, update]) => (
            <div key={date} className="timeline-item">
              <span className="timeline-date pulse-glow">{date}</span>
              <div className="timeline-content">
                <div className="timeline-description">{update}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default RecentUpdates;
  