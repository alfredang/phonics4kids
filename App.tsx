import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import LessonView from './pages/LessonView';
import GamificationHUD from './components/GamificationHUD';
import { UserProgress } from './types';
import { INITIAL_USER_STATE } from './constants';

enum View {
  DASHBOARD,
  LESSON
}

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.DASHBOARD);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [user, setUser] = useState<UserProgress>(INITIAL_USER_STATE);

  const handleLessonSelect = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setView(View.LESSON);
  };

  const handleLessonComplete = (score: number) => {
    setUser(prev => ({
        ...prev,
        xp: prev.xp + score,
        completedLessons: currentLessonId ? [...prev.completedLessons, currentLessonId] : prev.completedLessons
    }));
    setView(View.DASHBOARD);
    setCurrentLessonId(null);
  };

  const handleExitLesson = () => {
    setView(View.DASHBOARD);
    setCurrentLessonId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <GamificationHUD user={user} />
      
      {view === View.DASHBOARD && (
        <main className="pt-20">
             <Dashboard user={user} onLessonSelect={handleLessonSelect} />
        </main>
      )}

      {view === View.LESSON && currentLessonId && (
        <div className="fixed inset-0 z-50 bg-white">
            <LessonView 
                lessonId={currentLessonId} 
                onExit={handleExitLesson} 
                onComplete={handleLessonComplete} 
            />
        </div>
      )}
    </div>
  );
};

export default App;