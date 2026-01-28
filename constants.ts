import { LevelType, Lesson } from './types';

export const INITIAL_USER_STATE = {
  currentLevel: 1,
  xp: 120,
  completedLessons: [],
  streak: 3
};

export const MOCK_LESSONS: Lesson[] = [
  {
    id: 'l1-short-a',
    title: 'Short Vowel A',
    level: LevelType.SINGLE_CHAR,
    description: 'Master the /æ/ sound like in "Cat".',
    phonemes: [
      { symbol: 'a', ipa: '/æ/', soundType: 'vowel', description: 'Open your mouth wide and say "aaah"!', exampleWord: 'Apple' }
    ],
    words: ['cat', 'bat', 'map', 'hat'],
    xpReward: 50
  },
  {
    id: 'l2-blending-st',
    title: 'Blend: ST',
    level: LevelType.BLENDING,
    description: 'Slide sounds together with the "ST" blend.',
    phonemes: [
      { symbol: 'st', ipa: '/st/', soundType: 'blend', description: 'Snake sound /s/ meets the tapping /t/.', exampleWord: 'Star' }
    ],
    words: ['stop', 'fast', 'nest', 'star'],
    xpReward: 75
  },
  {
    id: 'l3-silent-e',
    title: 'Magic Silent E',
    level: LevelType.RULES,
    description: 'The silent E makes the vowel say its name!',
    phonemes: [
      { symbol: 'a_e', ipa: '/eɪ/', soundType: 'vowel', description: 'Silent E jumps over one consonant to change the vowel.', exampleWord: 'Cake' }
    ],
    words: ['cake', 'hope', 'bike', 'cute'],
    xpReward: 100
  },
  {
    id: 'l4-intonation',
    title: 'Rising Intonation',
    level: LevelType.SENTENCE,
    description: 'Learn how your voice goes up for questions.',
    phonemes: [],
    words: [],
    sentence: 'Do you like pizza?',
    xpReward: 125
  }
];

export const WORLD_NAMES = {
  1: 'Letters Land',
  2: 'Blend Bridge',
  3: 'Rule City',
  4: 'Rhythm Road',
  5: 'Story Kingdom'
};
