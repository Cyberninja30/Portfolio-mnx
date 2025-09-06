import React from 'react';

const Loading = () => {
  return (
    <div className="loading-screen" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      color: 'var(--terminal-text)',
      fontFamily: 'JetBrains Mono, monospace'
    }}>
      <div className="loading-text" style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
        Loading<span className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
