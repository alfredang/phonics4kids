import React from 'react';
import { UserProgress } from '../types';
import { WORLD_NAMES } from '../constants';
import { Trophy, Flame, Map } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  user: UserProgress;
  onMapClick?: () => void;
}

const GamificationHUD: React.FC<Props> = ({ user, onMapClick }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 z-50 flex items-center justify-between px-4 sm:px-6">
      
      {/* Level / World Info */}
      <div className="flex items-center space-x-3">
        <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
          {user.currentLevel}
        </div>
        <div className="hidden sm:block">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Current World</p>
            <p className="text-sm font-bold text-slate-800">{WORLD_NAMES[user.currentLevel as keyof typeof WORLD_NAMES] || 'Unknown World'}</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex items-center space-x-6">
        
        {/* Streak */}
        <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-1 text-orange-500"
        >
            <Flame size={20} fill="currentColor" />
            <span className="font-bold text-lg">{user.streak}</span>
        </motion.div>

        {/* XP */}
        <div className="flex flex-col items-end w-32">
            <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                <Trophy size={16} fill="currentColor" />
                <span className="font-bold text-sm">{user.xp} XP</span>
            </div>
            {/* XP Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(user.xp % 100)}%` }}
                    className="bg-yellow-400 h-full rounded-full" 
                />
            </div>
        </div>

        {/* Map Button (Mobile only mostly) */}
        {onMapClick && (
            <button 
                onClick={onMapClick}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700"
            >
                <Map size={20} />
            </button>
        )}
      </div>
    </div>
  );
};

export default GamificationHUD;