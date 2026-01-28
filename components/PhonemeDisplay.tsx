import React from 'react';
import { Phoneme } from '../types';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

interface Props {
  phoneme: Phoneme;
  isPlaying: boolean;
  onPlay: () => void;
}

const PhonemeDisplay: React.FC<Props> = ({ phoneme, isPlaying, onPlay }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10">
      
      {/* Main Card */}
      <motion.div 
        className="relative bg-white border-4 border-indigo-100 rounded-3xl shadow-xl p-12 w-64 h-64 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-300 transition-colors"
        onClick={onPlay}
        whileTap={{ scale: 0.95 }}
        animate={isPlaying ? { scale: [1, 1.05, 1], boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)" } : {}}
      >
        <span className={`text-8xl font-black ${phoneme.soundType === 'vowel' ? 'text-rose-500' : 'text-indigo-600'}`}>
          {phoneme.symbol}
        </span>
        <span className="text-2xl text-slate-400 font-mono mt-2">{phoneme.ipa}</span>
        
        <motion.button 
            className="absolute -bottom-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.1 }}
        >
            <Volume2 size={24} />
        </motion.button>
      </motion.div>

      {/* Description / Mouth visual placeholder */}
      <div className="text-center max-w-md">
        <p className="text-xl text-slate-700 font-medium mb-4">"{phoneme.description}"</p>
        
        {/* Abstract Mouth Visual */}
        <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">MOUTH POSITION</p>
            <div className="flex justify-center space-x-4">
               {/* Simple SVG representation of mouth shape based on type */}
               <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-800">
                  {phoneme.soundType === 'vowel' ? (
                      <ellipse cx="30" cy="20" rx="15" ry="10" stroke="currentColor" strokeWidth="3" />
                  ) : (
                      <line x1="10" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  )}
               </svg>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhonemeDisplay;