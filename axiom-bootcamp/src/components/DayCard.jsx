import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Unlock, CheckCircle } from 'lucide-react';

const DayCard = ({ day, isLocked, isCompleted }) => {
  return (
    <div className={`card ${!isLocked ? 'card-glow' : ''}`} style={{ 
      opacity: isLocked ? 0.6 : 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div className="flex justify-between items-center">
        <div className="tag">DAY {day.id}</div>
        {isCompleted ? (
          <CheckCircle size={20} color="var(--success)" />
        ) : isLocked ? (
          <Lock size={20} color="var(--text-muted)" />
        ) : (
          <Unlock size={20} color="var(--accent)" />
        )}
      </div>
      
      <h3 style={{ fontSize: '18px', color: isLocked ? 'var(--text-muted)' : 'var(--text)' }}>
        {day.title}
      </h3>
      
      <p style={{ fontSize: '14px', flex: 1, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
        {day.briefing}
      </p>

      {isLocked ? (
        <button className="btn btn-ghost" disabled style={{ width: '100%', justifyContent: 'center' }}>Locked</button>
      ) : isCompleted ? (
        <Link to={`/day/${day.id}`} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Review Material</Link>
      ) : (
        <Link to={`/day/${day.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Start Day {day.id}</Link>
      )}
    </div>
  );
};

export default DayCard;
