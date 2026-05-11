import React from 'react';
import { useCourse } from '../context/CourseContext';
import ProgressBar from '../components/ProgressBar';
import { CheckCircle, Circle } from 'lucide-react';

const Progress = () => {
  const { progress } = useCourse();

  return (
    <div className="container fade-in" style={{ padding: '40px 24px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Your Agent Journey</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Track your path to production readiness.</p>

      <div className="card" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '24px' }}>Overall Completion</h2>
        <ProgressBar progress={progress.completedDays.length} total={10} />
      </div>

      <div className="card">
        <h2 style={{ fontSize: '20px', marginBottom: '24px' }}>Day Checkpoints</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[...Array(10)].map((_, i) => {
            const dayId = i + 1;
            const isCompleted = progress.completedDays.includes(dayId);
            const score = progress.quizScores[dayId];

            return (
              <div key={dayId} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '16px',
                background: 'var(--surface-2)',
                borderRadius: '8px',
                border: isCompleted ? '1px solid rgba(16,185,129,0.3)' : '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {isCompleted ? <CheckCircle color="var(--success)" /> : <Circle color="var(--text-muted)" />}
                  <span style={{ fontWeight: 600, color: isCompleted ? 'var(--text)' : 'var(--text-muted)' }}>
                    Day {dayId}
                  </span>
                </div>
                {isCompleted && score !== undefined && (
                  <span className="badge badge-accent">Quiz Score: {score}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Progress;
