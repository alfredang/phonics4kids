import React, { useState, useEffect } from 'react';
import { Lesson, LessonStep } from '../types';
import { MOCK_LESSONS } from '../constants';
import { playGeminiTTS, startListening } from '../services/speechService';
import { generateLessonFeedback } from '../services/geminiService';
import PhonemeDisplay from '../components/PhonemeDisplay';
import WordBuilder from '../components/WordBuilder';
import IntonationVisualizer from '../components/IntonationVisualizer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RefreshCw, Mic, CheckCircle, Volume2, X } from 'lucide-react';
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
    const [feedback, setFeedback] = useState<{ msg: string, tip: string } | null>(null);
    const [score, setScore] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        // Load lesson
        const found = MOCK_LESSONS.find(l => l.id === lessonId);
        if (found) setLesson(found);
    }, [lessonId]);

    const handleNextStep = () => {
        setFeedback(null);
        setTranscript('');

        if (step === LessonStep.LISTEN) {
            setStep(LessonStep.PRACTICE);
            setCurrentWordIndex(0);
        } else if (step === LessonStep.PRACTICE) {
            const words = lesson?.content.practice.words || [];
            if (currentWordIndex < words.length - 1) {
                setCurrentWordIndex(prev => prev + 1);
            } else {
                setStep(LessonStep.PLAY);
            }
        } else if (step === LessonStep.PLAY) {
            setStep(LessonStep.ASSESS);
        } else if (step === LessonStep.ASSESS) {
            onComplete(score);
        }
    };

    const handlePreviousWord = () => {
        if (currentWordIndex > 0) {
            setCurrentWordIndex(prev => prev - 1);
            setFeedback(null);
            setTranscript('');
        }
    };

    const playSound = async () => {
        if (!lesson) return;
        setIsPlayingAudio(true);
        const textToSay = lesson.content.listen.visualFocus.exampleWord || `${lesson.content.listen.visualFocus.symbol}.`;
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
                if (!transcript && !window.speechSynthesis) return; // Fallback for no mic

                const practiceWords = lesson?.content.practice.words || [];
                const target = step === LessonStep.PRACTICE ? practiceWords[currentWordIndex] : (lesson?.content.listen.visualFocus.exampleWord || "apple");
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

    if (!lesson) return <div className="text-white text-center pt-20">Loading adventure...</div>;

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 px-4">
                <button onClick={onExit} className="flex items-center space-x-2 text-white/70 hover:text-white font-bold p-2 px-4 bg-white/10 hover:bg-white/20 rounded-full transition-all group">
                    <X size={20} className="group-hover:rotate-90 transition-transform" />
                    <span>Home</span>
                </button>
                <div className="flex space-x-2">
                    {[LessonStep.LISTEN, LessonStep.PRACTICE, LessonStep.PLAY, LessonStep.ASSESS].map((s, i) => (
                        <div key={s} className={`h-2 w-12 sm:w-16 rounded-full transition-colors ${step === s ? 'bg-brand-secondary shadow-[0_0_10px_rgba(236,72,153,0.5)]' : 'bg-white/20'}`} />
                    ))}
                </div>
                <div className="font-heading font-bold text-white text-lg hidden sm:block">{lesson.title}</div>
            </div>

            {/* Main Content Card */}
            <main className="flex-1 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 relative overflow-hidden flex flex-col items-center mx-4 mb-4 border border-white/40">

                <AnimatePresence mode="wait">

                    {/* --- LISTEN PHASE --- */}
                    {step === LessonStep.LISTEN && (
                        <motion.div
                            key="listen"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center w-full max-w-2xl"
                        >
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-2">Listen & Learn</h2>
                            <p className="text-slate-500 mb-8 font-semibold">Tap the card to hear the sound!</p>

                            <PhonemeDisplay
                                phoneme={lesson.content.listen.visualFocus}
                                isPlaying={isPlayingAudio}
                                onPlay={playSound}
                            />
                        </motion.div>
                    )}

                    {/* --- PRACTICE PHASE --- */}
                    {step === LessonStep.PRACTICE && (
                        <motion.div
                            key="practice"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center w-full max-w-2xl"
                        >
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-secondary mb-8">Your Turn!</h2>

                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 mb-4 w-full text-center border-2 border-indigo-100 shadow-inner relative">
                                <div className="absolute top-4 right-6 text-xs font-bold text-indigo-300">
                                    {currentWordIndex + 1} / {lesson.content.practice.words.length}
                                </div>
                                <p className="text-sm text-indigo-400 font-bold uppercase mb-2 tracking-widest">SAY THIS WORD</p>
                                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary filter drop-shadow-sm">
                                    {lesson.content.practice.words[currentWordIndex]}
                                </p>
                            </div>

                            {/* Word Navigation */}
                            <div className="flex space-x-4 mb-4">
                                {currentWordIndex > 0 && (
                                    <button
                                        onClick={handlePreviousWord}
                                        className="text-indigo-400 hover:text-indigo-600 font-bold flex items-center text-sm"
                                    >
                                        <RefreshCw size={14} className="mr-1" /> Previous Word
                                    </button>
                                )}
                            </div>

                            {/* Mic Interaction */}
                            <div className="relative mb-8">
                                <motion.button
                                    onClick={handleMicClick}
                                    className={`w-28 h-28 rounded-full flex items-center justify-center shadow-xl transition-all border-4 border-white ${isListening ? 'bg-rose-500 text-white shadow-rose-500/50' : 'bg-brand-primary text-white hover:bg-indigo-600 shadow-indigo-500/50'}`}
                                    animate={isListening ? { scale: [1, 1.1, 1], boxShadow: "0 0 20px 5px rgba(244, 63, 94, 0.5)" } : {}}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <Mic size={48} />
                                </motion.button>
                                {isListening && <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48"><IntonationVisualizer isListening={true} /></div>}
                            </div>

                            {/* Feedback Area */}
                            <div className="h-28 w-full flex flex-col items-center justify-center">
                                {transcript && <p className="text-slate-400 italic mb-2 font-medium">"{transcript}"</p>}
                                {feedback && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className={`px-6 py-4 rounded-xl border-l-4 shadow-sm ${feedback.msg.includes("Great") || feedback.msg.includes("Awesome") ? 'bg-green-50 border-green-500 text-green-800' : 'bg-orange-50 border-orange-500 text-orange-800'}`}
                                    >
                                        <p className="font-bold text-lg">{feedback.msg}</p>
                                        <p className="text-sm mt-1 opacity-90">{feedback.tip}</p>
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
                            className="flex flex-col items-center w-full max-w-2xl"
                        >
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-warning mb-8">Mini Game: Build It!</h2>

                            <WordBuilder
                                targetWord={lesson.content.practice.words[0] || "cat"}
                                onComplete={(correct) => {
                                    if (correct) {
                                        confetti();
                                        setFeedback({ msg: "Perfect!", tip: "You built the word!" });
                                    }
                                }}
                            />

                            {feedback && <div className="mt-8 text-brand-success font-black text-2xl animate-bounce">{feedback.msg}</div>}
                        </motion.div>
                    )}

                    {/* --- ASSESS PHASE --- */}
                    {step === LessonStep.ASSESS && (
                        <motion.div
                            key="assess"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center w-full text-center max-w-2xl"
                        >
                            <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full flex items-center justify-center text-white mb-6 shadow-2xl shadow-amber-200">
                                <CheckCircle size={64} className="drop-shadow-md" />
                            </div>
                            <h2 className="text-4xl font-heading font-black text-slate-800 mb-4">Lesson Complete!</h2>
                            <p className="text-slate-600 mb-8 font-medium">You earned <span className="text-brand-primary font-bold text-xl inline-block bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100">+{lesson.xpReward} XP</span></p>

                            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Accuracy</p>
                                    <p className="text-3xl font-black text-emerald-500">92%</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Fluency</p>
                                    <p className="text-3xl font-black text-blue-500">Good</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                {/* Footer Navigation */}
                <div className="mt-auto w-full flex justify-end pt-8 border-t border-slate-100">
                    <button
                        onClick={handleNextStep}
                        className="bg-brand-primary hover:bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                    >
                        {step === LessonStep.ASSESS ? 'Finish Adventure' :
                            (step === LessonStep.PRACTICE && currentWordIndex < lesson.content.practice.words.length - 1) ? 'Next Word' : 'Next Step'}
                        <ChevronRight className="ml-2" />
                    </button>
                </div>

            </main>
        </div>
    );
};

export default LessonView;