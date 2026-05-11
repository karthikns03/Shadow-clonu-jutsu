import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';

const QuizEngine = ({ dayId, quiz }) => {
  const { progress, updateQuizScore, completeDay } = useCourse();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(!!progress.quizScores[dayId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simplified grading logic: assume correct if they wrote something.
    // In a real version, we'd check against keywords.
    const score = Object.keys(answers).length;
    updateQuizScore(dayId, score);
    setSubmitted(true);
    completeDay(dayId);
  };

  if (quiz.length === 0) {
    return <div className="card"><p>No quiz for today. Proceed to the checkpoint.</p></div>;
  }

  return (
    <div className="card">
      <h3 className="section-label">Knowledge Check</h3>
      {submitted ? (
        <div style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-success">Passed</span>
          Score: {progress.quizScores[dayId]}/{quiz.length}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {quiz.map((q, idx) => (
            <div key={idx}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text)' }}>
                {idx + 1}. {q.question}
              </label>
              <textarea
                required
                rows={3}
                style={{
                  width: '100%',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  padding: '12px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font)'
                }}
                value={answers[idx] || ''}
                onChange={e => setAnswers({ ...answers, [idx]: e.target.value })}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary">Submit Answers</button>
        </form>
      )}
    </div>
  );
};

export default QuizEngine;
