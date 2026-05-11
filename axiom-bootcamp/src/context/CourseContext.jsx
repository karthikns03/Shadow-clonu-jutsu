import React, { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCourse = () => useContext(CourseContext);

// eslint-disable-next-line react-refresh/only-export-components
export const CourseProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('axiomProgress');
    return saved ? JSON.parse(saved) : {
      currentDay: 1,
      completedDays: [],
      quizScores: {},
      streak: 0,
      lastLogin: new Date().toISOString()
    };
  });

  useEffect(() => {
    localStorage.setItem('axiomProgress', JSON.stringify(progress));
  }, [progress]);

  const completeDay = (dayId) => {
    setProgress(prev => ({
      ...prev,
      completedDays: [...new Set([...prev.completedDays, dayId])],
      currentDay: Math.max(prev.currentDay, dayId + 1 > 10 ? 10 : dayId + 1)
    }));
  };

  const updateQuizScore = (dayId, score) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [dayId]: score
      }
    }));
  };

  return (
    <CourseContext.Provider value={{ progress, completeDay, updateQuizScore }}>
      {children}
    </CourseContext.Provider>
  );
};
