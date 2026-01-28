export enum LevelType {
  SINGLE_CHAR = 'Single Character Phonics',
  BLENDING = 'Blending & Word Formation',
  RULES = 'Phonics Rules & Exceptions',
  SENTENCE = 'Sentence Reading & Intonation',
  STORY = 'Paragraph & Story Reading'
}

export enum LessonStep {
  LISTEN = 'LISTEN',
  PRACTICE = 'PRACTICE',
  PLAY = 'PLAY',
  ASSESS = 'ASSESS'
}

export interface Phoneme {
  symbol: string; // The letter(s)
  ipa: string; // IPA symbol
  soundType: 'vowel' | 'consonant' | 'digraph' | 'blend';
  description: string;
  exampleWord: string;
}

export interface Lesson {
  id: string;
  title: string;
  level: LevelType;
  description: string;
  phonemes: Phoneme[];
  words: string[]; // Practice words
  sentence?: string; // For level 4+
  story?: string; // For level 5
  xpReward: number;
}

export interface UserProgress {
  currentLevel: number;
  xp: number;
  completedLessons: string[];
  streak: number;
}
