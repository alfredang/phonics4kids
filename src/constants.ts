import { LevelType, Lesson, GameType } from './types';

export const INITIAL_USER_STATE = {
  currentLevel: 1,
  xp: 120,
  completedLessons: ['l1-short-a'], // Mocking one completed lesson
  streak: 3
};

const DEFAULT_CONTENT = {
  listen: {
    introAudioUrl: '/audio/intro_default.mp3',
    visualFocus: { symbol: '?', ipa: '/?/', soundType: 'vowel', description: 'Default', exampleWord: 'Test' }
  },
  practice: {
    words: ['test', 'word'],
    drills: []
  },
  play: {
    gameType: 'tap-sound' as GameType,
    config: {}
  },
  assess: {
    criteria: { accuracyWeight: 0.5, fluencyWeight: 0.3, intonationWeight: 0.2 }
  }
};

export const MOCK_LESSONS: Lesson[] = [
  // --- LEVEL 1: SINGLE CHARACTER PHONICS (A-Z) ---
  {
    id: 'l1-short-a',
    title: 'Short Vowel A',
    level: LevelType.SINGLE_CHAR,
    description: 'Master the /æ/ sound like in "Cat".',
    phonemes: [{ symbol: 'a', ipa: '/æ/', soundType: 'vowel', description: 'Open your mouth wide and say "aaah"!', exampleWord: 'Apple' }],
    content: {
      listen: { introAudioUrl: '/audio/a_intro.mp3', visualFocus: { symbol: 'a', ipa: '/æ/', soundType: 'vowel', description: 'Open your mouth wide and say "aaah"!', exampleWord: 'Apple' } },
      practice: { words: ['cat', 'bat', 'map', 'hat'], drills: [{ type: 'repetition', prompt: 'Say "Cat"', correct: 'cat' }] },
      play: { gameType: 'pop-phoneme', config: { targetPhoneme: 'a' } },
      assess: { criteria: { accuracyWeight: 0.8, fluencyWeight: 0.2, intonationWeight: 0 } }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-b',
    title: 'Consonant B',
    level: LevelType.SINGLE_CHAR,
    description: 'The "B" sound starts with your lips together.',
    phonemes: [{ symbol: 'b', ipa: '/b/', soundType: 'consonant', description: 'Press your lips together and make a quick puff!', exampleWord: 'Bear' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/b_intro.mp3', visualFocus: { symbol: 'b', ipa: '/b/', soundType: 'consonant', description: 'Press your lips together and make a quick puff!', exampleWord: 'Bear' } },
      practice: { words: ['box', 'ball', 'big', 'back'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-c',
    title: 'Consonant C',
    level: LevelType.SINGLE_CHAR,
    description: 'The hard "C" sound, like a tiny cough.',
    phonemes: [{ symbol: 'c', ipa: '/k/', soundType: 'consonant', description: 'Make a quick sound at the back of your throat!', exampleWord: 'Cat' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/c_intro.mp3', visualFocus: { symbol: 'c', ipa: '/k/', soundType: 'consonant', description: 'Make a quick sound at the back of your throat!', exampleWord: 'Cat' } },
      practice: { words: ['cup', 'can', 'cot', 'cap'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-d',
    title: 'Consonant D',
    level: LevelType.SINGLE_CHAR,
    description: 'The "D" sound is like a little drum.',
    phonemes: [{ symbol: 'd', ipa: '/d/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Dog' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/d_intro.mp3', visualFocus: { symbol: 'd', ipa: '/d/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Dog' } },
      practice: { words: ['dad', 'dig', 'dot', 'den'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-short-e',
    title: 'Short Vowel E',
    level: LevelType.SINGLE_CHAR,
    description: 'The /ɛ/ sound like in "Egg".',
    phonemes: [{ symbol: 'e', ipa: '/ɛ/', soundType: 'vowel', description: 'Open your mouth halfway and relax your tongue.', exampleWord: 'Egg' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/e_intro.mp3', visualFocus: { symbol: 'e', ipa: '/ɛ/', soundType: 'vowel', description: 'Open your mouth halfway and relax your tongue.', exampleWord: 'Egg' } },
      practice: { words: ['bed', 'hen', 'red', 'ten'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-f',
    title: 'Consonant F',
    level: LevelType.SINGLE_CHAR,
    description: 'The "F" sound is like a soft wind.',
    phonemes: [{ symbol: 'f', ipa: '/f/', soundType: 'consonant', description: 'Put your top teeth on your bottom lip and blow!', exampleWord: 'Fish' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/f_intro.mp3', visualFocus: { symbol: 'f', ipa: '/f/', soundType: 'consonant', description: 'Put your top teeth on your bottom lip and blow!', exampleWord: 'Fish' } },
      practice: { words: ['fan', 'fig', 'fox', 'fun'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-g',
    title: 'Consonant G',
    level: LevelType.SINGLE_CHAR,
    description: 'The hard "G" sound from the throat.',
    phonemes: [{ symbol: 'g', ipa: '/g/', soundType: 'consonant', description: 'Make a gulping sound in your throat!', exampleWord: 'Goat' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/g_intro.mp3', visualFocus: { symbol: 'g', ipa: '/g/', soundType: 'consonant', description: 'Make a gulping sound in your throat!', exampleWord: 'Goat' } },
      practice: { words: ['gap', 'get', 'gum', 'gas'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-h',
    title: 'Consonant H',
    level: LevelType.SINGLE_CHAR,
    description: 'The "H" sound is a tired breath.',
    phonemes: [{ symbol: 'h', ipa: '/h/', soundType: 'consonant', description: 'Open your mouth and breathe out quickly!', exampleWord: 'Hat' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/h_intro.mp3', visualFocus: { symbol: 'h', ipa: '/h/', soundType: 'consonant', description: 'Open your mouth and breathe out quickly!', exampleWord: 'Hat' } },
      practice: { words: ['hop', 'hen', 'hug', 'hit'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-short-i',
    title: 'Short Vowel I',
    level: LevelType.SINGLE_CHAR,
    description: 'The /ɪ/ sound like in "Igloo".',
    phonemes: [{ symbol: 'i', ipa: '/ɪ/', soundType: 'vowel', description: 'Pull the corners of your mouth back slightly.', exampleWord: 'Igloo' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/i_intro.mp3', visualFocus: { symbol: 'i', ipa: '/ɪ/', soundType: 'vowel', description: 'Pull the corners of your mouth back slightly.', exampleWord: 'Igloo' } },
      practice: { words: ['bin', 'dig', 'sit', 'pig'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-j',
    title: 'Consonant J',
    level: LevelType.SINGLE_CHAR,
    description: 'The "J" sound is a jumping sound.',
    phonemes: [{ symbol: 'j', ipa: '/dʒ/', soundType: 'consonant', description: 'Push your tongue forward and make a quick burst!', exampleWord: 'Jam' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/j_intro.mp3', visualFocus: { symbol: 'j', ipa: '/dʒ/', soundType: 'consonant', description: 'Push your tongue forward and make a quick burst!', exampleWord: 'Jam' } },
      practice: { words: ['jet', 'job', 'jug', 'jog'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-k',
    title: 'Consonant K',
    level: LevelType.SINGLE_CHAR,
    description: 'The "K" sound is sharp and quick.',
    phonemes: [{ symbol: 'k', ipa: '/k/', soundType: 'consonant', description: 'Tap the back of your tongue against the roof!', exampleWord: 'Kite' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/k_intro.mp3', visualFocus: { symbol: 'k', ipa: '/k/', soundType: 'consonant', description: 'Tap the back of your tongue against the roof!', exampleWord: 'Kite' } },
      practice: { words: ['kid', 'kit', 'kin', 'keg'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-l',
    title: 'Consonant L',
    level: LevelType.SINGLE_CHAR,
    description: 'The "L" sound is like a singing sound.',
    phonemes: [{ symbol: 'l', ipa: '/l/', soundType: 'consonant', description: 'Put your tongue behind your top teeth and hum!', exampleWord: 'Lion' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/l_intro.mp3', visualFocus: { symbol: 'l', ipa: '/l/', soundType: 'consonant', description: 'Put your tongue behind your top teeth and hum!', exampleWord: 'Lion' } },
      practice: { words: ['lap', 'leg', 'lid', 'log'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-m',
    title: 'Consonant M',
    level: LevelType.SINGLE_CHAR,
    description: 'The "M" sound is a humming sound.',
    phonemes: [{ symbol: 'm', ipa: '/m/', soundType: 'consonant', description: 'Press your lips together and hum like a bee!', exampleWord: 'Monkey' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/m_intro.mp3', visualFocus: { symbol: 'm', ipa: '/m/', soundType: 'consonant', description: 'Press your lips together and hum like a bee!', exampleWord: 'Monkey' } },
      practice: { words: ['map', 'men', 'mud', 'mom'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-n',
    title: 'Consonant N',
    level: LevelType.SINGLE_CHAR,
    description: 'The "N" sound comes out your nose.',
    phonemes: [{ symbol: 'n', ipa: '/n/', soundType: 'consonant', description: 'Put your tongue up and make a sound through your nose!', exampleWord: 'Nest' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/n_intro.mp3', visualFocus: { symbol: 'n', ipa: '/n/', soundType: 'consonant', description: 'Put your tongue up and make a sound through your nose!', exampleWord: 'Nest' } },
      practice: { words: ['net', 'nap', 'not', 'nut'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-short-o',
    title: 'Short Vowel O',
    level: LevelType.SINGLE_CHAR,
    description: 'The /ɒ/ sound like in "Octopus".',
    phonemes: [{ symbol: 'o', ipa: '/ɒ/', soundType: 'vowel', description: 'Open your mouth in a large circle shape.', exampleWord: 'Octopus' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/o_intro.mp3', visualFocus: { symbol: 'o', ipa: '/ɒ/', soundType: 'vowel', description: 'Open your mouth in a large circle shape.', exampleWord: 'Octopus' } },
      practice: { words: ['box', 'dot', 'hop', 'pot'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-p',
    title: 'Consonant P',
    level: LevelType.SINGLE_CHAR,
    description: 'The "P" sound is a quiet pop.',
    phonemes: [{ symbol: 'p', ipa: '/p/', soundType: 'consonant', description: 'Press your lips and pop them open quietly!', exampleWord: 'Pig' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/p_intro.mp3', visualFocus: { symbol: 'p', ipa: '/p/', soundType: 'consonant', description: 'Press your lips and pop them open quietly!', exampleWord: 'Pig' } },
      practice: { words: ['pan', 'pig', 'pot', 'pen'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-q',
    title: 'Consonant Q',
    level: LevelType.SINGLE_CHAR,
    description: 'The "Q" always brings its buddy "U".',
    phonemes: [{ symbol: 'q', ipa: '/kw/', soundType: 'consonant', description: 'Make a quick /k/ sound followed by /w/!', exampleWord: 'Queen' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/q_intro.mp3', visualFocus: { symbol: 'q', ipa: '/kw/', soundType: 'consonant', description: 'Make a quick /k/ sound followed by /w/!', exampleWord: 'Queen' } },
      practice: { words: ['quit', 'quiz', 'quack', 'quick'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-r',
    title: 'Consonant R',
    level: LevelType.SINGLE_CHAR,
    description: 'The "R" is a growling sound.',
    phonemes: [{ symbol: 'r', ipa: '/r/', soundType: 'consonant', description: 'Curl your tongue back and make a growl!', exampleWord: 'Rabbit' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/r_intro.mp3', visualFocus: { symbol: 'r', ipa: '/r/', soundType: 'consonant', description: 'Curl your tongue back and make a growl!', exampleWord: 'Rabbit' } },
      practice: { words: ['rat', 'red', 'run', 'rip'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-s',
    title: 'Consonant S',
    level: LevelType.SINGLE_CHAR,
    description: 'The "S" is a hissing sound.',
    phonemes: [{ symbol: 's', ipa: '/s/', soundType: 'consonant', description: 'Hiss like a snake between your teeth!', exampleWord: 'Sun' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/s_intro.mp3', visualFocus: { symbol: 's', ipa: '/s/', soundType: 'consonant', description: 'Hiss like a snake between your teeth!', exampleWord: 'Sun' } },
      practice: { words: ['sun', 'sit', 'sad', 'six'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-t',
    title: 'Consonant T',
    level: LevelType.SINGLE_CHAR,
    description: 'The tapping "T" sound.',
    phonemes: [{ symbol: 't', ipa: '/t/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Tiger' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/t_intro.mp3', visualFocus: { symbol: 't', ipa: '/t/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Tiger' } },
      practice: { words: ['top', 'ten', 'tag', 'tip'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-short-u',
    title: 'Short Vowel U',
    level: LevelType.SINGLE_CHAR,
    description: 'The /ʌ/ sound like in "Umbrella".',
    phonemes: [{ symbol: 'u', ipa: '/ʌ/', soundType: 'vowel', description: 'Open your mouth and let the sound out!', exampleWord: 'Umbrella' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/u_intro.mp3', visualFocus: { symbol: 'u', ipa: '/ʌ/', soundType: 'vowel', description: 'Open your mouth and let the sound out!', exampleWord: 'Umbrella' } },
      practice: { words: ['bus', 'cup', 'mud', 'sun'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-v',
    title: 'Consonant V',
    level: LevelType.SINGLE_CHAR,
    description: 'The "V" is a vibrating sound.',
    phonemes: [{ symbol: 'v', ipa: '/v/', soundType: 'consonant', description: 'Vibrate your top teeth on your bottom lip!', exampleWord: 'Van' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/v_intro.mp3', visualFocus: { symbol: 'v', ipa: '/v/', soundType: 'consonant', description: 'Vibrate your top teeth on your bottom lip!', exampleWord: 'Van' } },
      practice: { words: ['van', 'vet', 'vim', 'vat'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-w',
    title: 'Consonant W',
    level: LevelType.SINGLE_CHAR,
    description: 'The "W" is a whistling-start sound.',
    phonemes: [{ symbol: 'w', ipa: '/w/', soundType: 'consonant', description: 'Round your lips and blow quickly!', exampleWord: 'Watch' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/w_intro.mp3', visualFocus: { symbol: 'w', ipa: '/w/', soundType: 'consonant', description: 'Round your lips and blow quickly!', exampleWord: 'Watch' } },
      practice: { words: ['wig', 'wet', 'win', 'wag'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-x',
    title: 'Consonant X',
    level: LevelType.SINGLE_CHAR,
    description: 'The "X" is two sounds in one!',
    phonemes: [{ symbol: 'x', ipa: '/ks/', soundType: 'consonant', description: 'Make a /k/ sound then immediately /s/!', exampleWord: 'X-ray' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/x_intro.mp3', visualFocus: { symbol: 'x', ipa: '/ks/', soundType: 'consonant', description: 'Make a /k/ sound then immediately /s/!', exampleWord: 'X-ray' } },
      practice: { words: ['box', 'fox', 'six', 'tax'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-y',
    title: 'Consonant Y',
    level: LevelType.SINGLE_CHAR,
    description: 'The "Y" is a yelling start sound.',
    phonemes: [{ symbol: 'y', ipa: '/j/', soundType: 'consonant', description: 'Open your mouth and make a quick sound!', exampleWord: 'Yo-yo' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/y_intro.mp3', visualFocus: { symbol: 'y', ipa: '/j/', soundType: 'consonant', description: 'Open your mouth and make a quick sound!', exampleWord: 'Yo-yo' } },
      practice: { words: ['yes', 'yap', 'yum', 'yet'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-z',
    title: 'Consonant Z',
    level: LevelType.SINGLE_CHAR,
    description: 'The "Z" is a buzzing sound.',
    phonemes: [{ symbol: 'z', ipa: '/z/', soundType: 'consonant', description: 'Buzz like a bee between your teeth!', exampleWord: 'Zebra' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/z_intro.mp3', visualFocus: { symbol: 'z', ipa: '/z/', soundType: 'consonant', description: 'Buzz like a bee between your teeth!', exampleWord: 'Zebra' } },
      practice: { words: ['zap', 'zip', 'zig', 'zoo'], drills: [] }
    },
    xpReward: 50
  },

  // --- HIGHER LEVELS ---
  {
    id: 'l2-blending-st',
    title: 'Blend: ST',
    level: LevelType.BLENDING,
    description: 'Slide sounds together with the "ST" blend.',
    phonemes: [{ symbol: 'st', ipa: '/st/', soundType: 'blend', description: 'Snake sound /s/ meets the tapping /t/.', exampleWord: 'Star' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/st_intro.mp3', visualFocus: { symbol: 'st', ipa: '/st/', soundType: 'blend', description: 'Snake sound /s/ meets the tapping /t/.', exampleWord: 'Star' } },
      practice: { words: ['stop', 'fast', 'nest', 'star'], drills: [] }
    },
    xpReward: 75
  },
  {
    id: 'l3-silent-e',
    title: 'Magic Silent E',
    level: LevelType.RULES,
    description: 'The silent E makes the vowel say its name!',
    phonemes: [{ symbol: 'a_e', ipa: '/eɪ/', soundType: 'vowel', description: 'Silent E jumps over one consonant to change the vowel.', exampleWord: 'Cake' }],
    content: DEFAULT_CONTENT,
    xpReward: 100
  },
  {
    id: 'l4-intonation',
    title: 'Rising Intonation',
    level: LevelType.SENTENCE,
    description: 'Learn how your voice goes up for questions.',
    phonemes: [],
    content: DEFAULT_CONTENT,
    xpReward: 125
  }
] as Lesson[];

export const WORLD_NAMES = {
  1: 'Letters Land',
  2: 'Blend Bridge',
  3: 'Rule City',
  4: 'Rhythm Road',
  5: 'Story Kingdom'
};
