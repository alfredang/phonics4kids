import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  isListening: boolean;
}

const IntonationVisualizer: React.FC<Props> = ({ isListening }) => {
  const [bars, setBars] = useState<number[]>(new Array(5).fill(10));

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isListening) {
      interval = setInterval(() => {
        setBars(prev => prev.map(() => Math.random() * 40 + 10));
      }, 100);
    } else {
        setBars(new Array(5).fill(5));
    }
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <div className="flex items-end justify-center h-20 space-x-2">
        {bars.map((height, i) => (
            <motion.div
                key={i}
                className="w-4 bg-emerald-400 rounded-t-lg"
                animate={{ height: `${height}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        ))}
    </div>
  );
};

export default IntonationVisualizer;