import React, { useState, useEffect } from 'react';
import { Lesson, LessonStep } from '../types';
import { MOCK_LESSONS } from '../constants';
import { playGeminiTTS, startListening } from '../services/speechService';
import { generateLessonFeedback } from '../services/geminiService';
import PhonemeDisplay from '../components/PhonemeDisplay';
import WordBuilder from '../components/WordBuilder';
import IntonationVisualizer from '../components/IntonationVisualizer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RefreshCw, Mic, CheckCircle, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  lessonId: string;
  onExit: () => void;
  onComplete: (score: number) => void;
}

const LessonView: React.FC<Props> = ({ lessonId, onExit, onComplete }) => {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [step, setStep] = useState<LessonStep>(LessonStep.LISTEN);
  
  // Interaction State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<{msg: string, tip: string} | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Load lesson
    const found = MOCK_LESSONS.find(l => l.id === lessonId);
    if (found) setLesson(found);
  }, [lessonId]);

  const handleNextStep = () => {
    setFeedback(null);
    setTranscript('');
    
    if (step === LessonStep.LISTEN) setStep(LessonStep.PRACTICE);
    else if (step === LessonStep.PRACTICE) setStep(LessonStep.PLAY);
    else if (step === LessonStep.PLAY) setStep(LessonStep.ASSESS);
    else if (step === LessonStep.ASSESS) onComplete(score);
  };

  const playSound = async () => {
    if (!lesson) return;
    setIsPlayingAudio(true);
    let textToSay = "";
    if (lesson.phonemes.length > 0) {
         textToSay = `${lesson.phonemes[0].symbol}. ${lesson.phonemes[0].exampleWord}.`;
    } else if (lesson.sentence) {
        textToSay = lesson.sentence;
    }
    await playGeminiTTS(textToSay);
    setIsPlayingAudio(false);
  };

  const handleMicClick = () => {
    if (isListening) return;
    setIsListening(true);
    setTranscript('');
    setFeedback(null);

    startListening(
        (result) => {
            setTranscript(result);
        },
        async () => {
            setIsListening(false);
            // Quick mock check or AI check
            if (!transcript) return;
            
            const target = lesson?.words[0] || lesson?.sentence || lesson?.phonemes[0].exampleWord || "apple";
            // Simple robust check for demo (case insensitive)
            const isCorrect = transcript.toLowerCase().includes(target.toLowerCase());
            
            // Get AI feedback
            const aiResponse = await generateLessonFeedback(target, transcript, isCorrect);
            setFeedback({ msg: aiResponse.feedback, tip: aiResponse.tip });
            
            if (isCorrect) {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                setScore(s => s + 10);
            }
        }
    );
  };

  if (!lesson) return <div>Loading adventure...</div>;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-20 pb-10 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto w-full flex items-center justify-between mb-8">
        <button onClick={onExit} className="text-slate-400 hover:text-slate-600 font-bold">EXIT</button>
        <div className="flex space-x-2">
            {[LessonStep.LISTEN, LessonStep.PRACTICE, LessonStep.PLAY, LessonStep.ASSESS].map((s, i) => (
                <div key={s} className={`h-2 w-16 rounded-full transition-colors ${step === s ? 'bg-indigo-600' : 'bg-slate-200'}`} />
            ))}
        </div>
        <div className="font-bold text-indigo-900">{lesson.title}</div>
      </div>

      {/* Main Content Card */}
      <main className="flex-1 max-w-3xl mx-auto w-full bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-10 relative overflow-hidden flex flex-col items-center">
        
        <AnimatePresence mode="wait">
            
            {/* --- LISTEN PHASE --- */}
            {step === LessonStep.LISTEN && (
                <motion.div 
                    key="listen"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-center w-full"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Listen & Learn</h2>
                    <p className="text-slate-500 mb-8">Tap to hear the sound.</p>
                    
                    {lesson.phonemes.length > 0 ? (
                        <PhonemeDisplay 
                            phoneme={lesson.phonemes[0]} 
                            isPlaying={isPlayingAudio} 
                            onPlay={playSound} 
                        />
                    ) : (
                        <div className="p-10 text-center">
                            <p className="text-3xl font-bold mb-6">{lesson.sentence}</p>
                            <button onClick={playSound} className="bg-indigo-600 text-white p-4 rounded-full"><Volume2 /></button>
                        </div>
                    )}
                </motion.div>
            )}

            {/* --- PRACTICE PHASE --- */}
            {step === LessonStep.PRACTICE && (
                <motion.div 
                    key="practice"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-center w-full"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-8">Your Turn!</h2>
                    
                    <div className="bg-indigo-50 rounded-2xl p-8 mb-8 w-full text-center">
                        <p className="text-sm text-indigo-400 font-bold uppercase mb-2">SAY THIS WORD</p>
                        <p className="text-4xl font-black text-indigo-900">
                           {lesson.phonemes[0]?.exampleWord || lesson.sentence || "Cat"}
                        </p>
                    </div>

                    {/* Mic Interaction */}
                    <div className="relative mb-8">
                        <motion.button 
                            onClick={handleMicClick}
                            className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all ${isListening ? 'bg-rose-500 text-white ring-4 ring-rose-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                            animate={isListening ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <Mic size={40} />
                        </motion.button>
                        {isListening && <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48"><IntonationVisualizer isListening={true} /></div>}
                    </div>

                    {/* Feedback Area */}
                    <div className="h-24 w-full flex flex-col items-center justify-center">
                        {transcript && <p className="text-slate-400 italic mb-2">"{transcript}"</p>}
                        {feedback && (
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={`px-6 py-3 rounded-xl border ${feedback.msg.includes("Great") || feedback.msg.includes("Awesome") ? 'bg-green-50 border-green-200 text-green-700' : 'bg-orange-50 border-orange-200 text-orange-700'}`}
                            >
                                <p className="font-bold">{feedback.msg}</p>
                                <p className="text-xs mt-1">{feedback.tip}</p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}

            {/* --- PLAY PHASE --- */}
            {step === LessonStep.PLAY && (
                <motion.div 
                    key="play"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-center w-full"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-8">Mini Game: Build It!</h2>
                    
                    <WordBuilder 
                        targetWord={lesson.words[0] || lesson.phonemes[0]?.exampleWord || "test"} 
                        onComplete={(correct) => {
                            if(correct) {
                                confetti();
                                setFeedback({ msg: "Perfect!", tip: "You built the word!" });
                            }
                        }}
                    />
                    
                    {feedback && <div className="mt-8 text-green-600 font-bold text-xl animate-bounce">{feedback.msg}</div>}
                </motion.div>
            )}

            {/* --- ASSESS PHASE --- */}
            {step === LessonStep.ASSESS && (
                <motion.div 
                    key="assess"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-center w-full text-center"
                >
                    <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                        <CheckCircle size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-800 mb-4">Lesson Complete!</h2>
                    <p className="text-slate-600 mb-8">You earned <span className="text-indigo-600 font-bold">+{lesson.xpReward} XP</span></p>

                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs text-slate-400 uppercase font-bold">Accuracy</p>
                            <p className="text-2xl font-bold text-emerald-500">92%</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs text-slate-400 uppercase font-bold">Fluency</p>
                            <p className="text-2xl font-bold text-blue-500">Good</p>
                        </div>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="mt-auto w-full flex justify-end pt-8 border-t border-slate-100">
            <button 
                onClick={handleNextStep}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold flex items-center shadow-lg hover:shadow-xl transition-all"
            >
                {step === LessonStep.ASSESS ? 'Finish' : 'Next'} <ChevronRight className="ml-2" />
            </button>
        </div>

      </main>
    </div>
  );
};

export default LessonView;