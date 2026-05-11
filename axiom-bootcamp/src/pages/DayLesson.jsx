import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { useCourse } from '../context/CourseContext';
import CodeBlock from '../components/CodeBlock';
import QuizEngine from '../components/QuizEngine';
import { ArrowLeft } from 'lucide-react';

const DayLesson = () => {
  const { id } = useParams();
  const dayId = parseInt(id, 10);
  const { progress } = useCourse();

  const day = curriculum.find(d => d.id === dayId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dayId]);

  if (!day) return <Navigate to="/dashboard" />;
  if (dayId > progress.currentDay) return <Navigate to="/dashboard" />; // Locked

  return (
    <div className="container fade-in" style={{ padding: '40px 24px', maxWidth: '900px' }}>
      <Link to="/dashboard" className="btn btn-ghost btn-sm" style={{ marginBottom: '32px' }}>
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>
      
      <div style={{ marginBottom: '40px' }}>
        <div className="tag" style={{ marginBottom: '8px' }}>DAY {day.id}</div>
        <h1 style={{ fontSize: '36px', color: 'var(--accent)' }}>{day.title}</h1>
      </div>

      <div className="card" style={{ marginBottom: '40px' }}>
        <h2 className="section-label">Briefing</h2>
        <p style={{ fontSize: '18px', color: 'var(--text)' }}>{day.briefing}</p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 className="section-label">Concepts</h2>
        <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
          {day.concepts}
        </div>
      </div>

      {day.codeLabs.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <h2 className="section-label">Code Labs</h2>
          {day.codeLabs.map((lab, idx) => (
            <div key={idx} style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '8px' }}>{lab.title}</h3>
              <p style={{ marginBottom: '16px' }}>{lab.description}</p>
              <CodeBlock code={lab.code} />
            </div>
          ))}
        </div>
      )}

      <div style={{ marginBottom: '40px' }}>
        <h2 className="section-label">Daily Project Spec</h2>
        <div className="card" style={{ background: 'var(--surface-2)', border: '1px solid var(--accent-2)' }}>
          <p>{day.project}</p>
        </div>
      </div>

      <div style={{ marginBottom: '60px' }}>
        <QuizEngine dayId={day.id} quiz={day.quiz} />
      </div>
      
      {progress.completedDays.includes(day.id) && day.id < 10 && (
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid var(--border)' }}>
          <Link to={`/day/${day.id + 1}`} className="btn btn-primary btn-lg">
            Proceed to Day {day.id + 1}
          </Link>
        </div>
      )}
    </div>
  );
};

export default DayLesson;
