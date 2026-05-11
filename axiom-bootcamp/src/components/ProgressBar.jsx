import React from 'react';

const ProgressBar = ({ progress, total }) => {
  const percentage = Math.round((progress / total) * 100) || 0;

  return (
    <div style={{ width: '100%' }}>
      <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
        <span className="tag">Course Progress</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--accent)' }}>
          {percentage}%
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
