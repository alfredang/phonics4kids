import React from 'react';
import { MOCK_LESSONS, WORLD_NAMES } from '../constants';
import { UserProgress } from '../types';
import { Star, Lock, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  user: UserProgress;
  onLessonSelect: (lessonId: string) => void;
}

const Dashboard: React.FC<Props> = ({ user, onLessonSelect }) => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-indigo-900 mb-2">Adventure Map</h1>
        <p className="text-slate-600">Select your next mission, explorer!</p>
      </header>

      <div className="space-y-12 relative">
        {/* Path Line (Purely visual vertical line) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-slate-200 -translate-x-1/2 rounded-full hidden md:block -z-10" />

        {MOCK_LESSONS.map((lesson, index) => {
            const isLocked = false; // logic: index > user.completedLessons.length;
            const isCompleted = user.completedLessons.includes(lesson.id);
            const isCurrent = !isLocked && !isCompleted;

            return (
                <motion.div 
                    key={lesson.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}
                >
                    {/* Lesson Card */}
                    <div className={`
                        w-full md:w-5/12 bg-white rounded-2xl p-6 border-b-4 transition-all duration-300 relative overflow-hidden group
                        ${isLocked ? 'border-slate-200 opacity-70 grayscale' : 'border-indigo-100 hover:border-indigo-300 hover:shadow-xl shadow-md cursor-pointer'}
                        ${isCurrent ? 'ring-4 ring-orange-300 border-indigo-200' : ''}
                    `}
                    onClick={() => !isLocked && onLessonSelect(lesson.id)}
                    >
                        {isCurrent && (
                            <div className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                NEXT
                            </div>
                        )}
                        
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                {lesson.level}
                            </span>
                            <div className="flex text-yellow-400">
                                {[1,2,3].map(s => <Star key={s} size={16} fill={isCompleted ? "currentColor" : "none"} className={!isCompleted ? "text-slate-200" : ""} />)}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                            {lesson.title}
                        </h3>
                        <p className="text-slate-500 text-sm mb-4">
                            {lesson.description}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xs font-semibold text-indigo-400 bg-indigo-50 px-2 py-1 rounded">
                                +{lesson.xpReward} XP
                            </span>
                            <button className={`
                                w-10 h-10 rounded-full flex items-center justify-center transition-colors
                                ${isLocked ? 'bg-slate-100 text-slate-400' : 'bg-indigo-600 text-white hover:bg-indigo-700'}
                            `}>
                                {isLocked ? <Lock size={18} /> : <Play size={18} fill="currentColor" />}
                            </button>
                        </div>
                    </div>
                    
                    {/* Connector Dot for Desktop */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-indigo-200 rounded-full hidden md:block z-0" />
                </motion.div>
            );
        })}
      </div>
    </div>
  );
};

export default Dashboard;