import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  targetWord: string;
  onComplete: (isCorrect: boolean) => void;
}

const WordBuilder: React.FC<Props> = ({ targetWord, onComplete }) => {
  const letters = targetWord.split('');
  // Shuffle letters for the "bank"
  const [bank, setBank] = useState<string[]>(
    [...letters].sort(() => Math.random() - 0.5)
  );
  const [slots, setSlots] = useState<string[]>(new Array(letters.length).fill(''));

  const handleSlotClick = (index: number) => {
    // Return letter to bank
    const letter = slots[index];
    if (letter) {
      const newSlots = [...slots];
      newSlots[index] = '';
      setSlots(newSlots);
      setBank([...bank, letter]);
    }
  };

  const handleBankClick = (letter: string, bankIndex: number) => {
    // Move letter to first empty slot
    const emptyIndex = slots.findIndex(s => s === '');
    if (emptyIndex !== -1) {
      const newSlots = [...slots];
      newSlots[emptyIndex] = letter;
      setSlots(newSlots);
      
      const newBank = [...bank];
      newBank.splice(bankIndex, 1);
      setBank(newBank);

      // Check win condition
      if (emptyIndex === slots.length - 1) { // If this was the last slot
         const formedWord = newSlots.join('');
         if (formedWord === targetWord) {
             onComplete(true);
         }
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-12">
      {/* Slots */}
      <div className="flex space-x-4">
        {slots.map((char, i) => (
            <motion.div
                key={`slot-${i}`}
                onClick={() => handleSlotClick(i)}
                className={`w-16 h-20 rounded-xl border-4 flex items-center justify-center text-4xl font-bold cursor-pointer transition-colors
                    ${char ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-slate-100 border-dashed border-slate-300'}
                `}
                whileHover={{ scale: 1.05 }}
            >
                {char}
            </motion.div>
        ))}
      </div>

      {/* Bank */}
      <div className="flex flex-wrap justify-center gap-4 max-w-lg p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
         {bank.map((char, i) => (
             <motion.button
                key={`bank-${i}`}
                onClick={() => handleBankClick(char, i)}
                className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg font-bold text-2xl shadow-sm hover:bg-orange-200 border-b-4 border-orange-200 active:border-b-0 active:translate-y-1 transition-all"
                layoutId={`letter-${char}-${i}`}
             >
                 {char}
             </motion.button>
         ))}
      </div>

      <p className="text-slate-500 text-sm">Tap letters to build the word!</p>
    </div>
  );
};

export default WordBuilder;