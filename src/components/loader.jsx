import React from 'react';
import './styles/loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-text">Searching database...</div>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
