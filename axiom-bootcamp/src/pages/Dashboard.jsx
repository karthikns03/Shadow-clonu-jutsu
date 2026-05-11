import React from 'react';
import { useCourse } from '../context/CourseContext';
import { curriculum } from '../data/curriculum';
import DayCard from '../components/DayCard';
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
  const { progress } = useCourse();

  return (
    <div className="container fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Bootcamp Dashboard</h1>
        <p style={{ color: 'var(--text-muted)' }}>Welcome back. Resume your training below.</p>
      </div>

      <div className="card" style={{ marginBottom: '40px', padding: '32px' }}>
        <ProgressBar progress={progress.currentDay - 1} total={10} />
        <div style={{ display: 'flex', gap: '24px', marginTop: '24px' }}>
          <div>
            <div className="section-label">Current Day</div>
            <div style={{ fontSize: '24px', fontFamily: 'var(--mono)', fontWeight: 700 }}>{progress.currentDay} / 10</div>
          </div>
          <div>
            <div className="section-label">Streak</div>
            <div style={{ fontSize: '24px', fontFamily: 'var(--mono)', fontWeight: 700, color: 'var(--warning)' }}>{progress.streak} Days</div>
          </div>
        </div>
      </div>

      <div className="section-label">Curriculum</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {curriculum.map(day => {
          const isLocked = day.id > progress.currentDay;
          const isCompleted = progress.completedDays.includes(day.id);
          
          return (
            <DayCard 
              key={day.id} 
              day={day} 
              isLocked={isLocked} 
              isCompleted={isCompleted} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
