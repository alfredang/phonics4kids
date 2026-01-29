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
  // --- LEVEL 1: BASIC SOUNDS (25 PHONEMES) ---
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
    id: 'l1-short-e',
    title: 'Short Vowel E',
    level: LevelType.SINGLE_CHAR,
    description: 'The /e/ sound like in "Egg".',
    phonemes: [{ symbol: 'e', ipa: '/e/', soundType: 'vowel', description: 'Open your mouth halfway and relax your tongue.', exampleWord: 'Egg' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/e_intro.mp3', visualFocus: { symbol: 'e', ipa: '/e/', soundType: 'vowel', description: 'Open your mouth halfway and relax your tongue.', exampleWord: 'Egg' } },
      practice: { words: ['bed', 'hen', 'red', 'ten'], drills: [] }
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
    id: 'l1-consonant-b',
    title: 'Consonant B',
    level: LevelType.SINGLE_CHAR,
    description: 'The /b/ sound starts with your lips together.',
    phonemes: [{ symbol: 'b', ipa: '/b/', soundType: 'consonant', description: 'Press your lips together and make a quick puff!', exampleWord: 'Bear' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/b_intro.mp3', visualFocus: { symbol: 'b', ipa: '/b/', soundType: 'consonant', description: 'Press your lips together and make a quick puff!', exampleWord: 'Bear' } },
      practice: { words: ['box', 'ball', 'big', 'back'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-d',
    title: 'Consonant D',
    level: LevelType.SINGLE_CHAR,
    description: 'The /d/ sound is like a little drum.',
    phonemes: [{ symbol: 'd', ipa: '/d/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Dog' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/d_intro.mp3', visualFocus: { symbol: 'd', ipa: '/d/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Dog' } },
      practice: { words: ['dad', 'dig', 'dot', 'den'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-f',
    title: 'Consonant F',
    level: LevelType.SINGLE_CHAR,
    description: 'The /f/ sound is like a soft wind.',
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
    description: 'The hard /g/ sound from the throat.',
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
    description: 'The /h/ sound is a tired breath.',
    phonemes: [{ symbol: 'h', ipa: '/h/', soundType: 'consonant', description: 'Open your mouth and breathe out quickly!', exampleWord: 'Hat' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/h_intro.mp3', visualFocus: { symbol: 'h', ipa: '/h/', soundType: 'consonant', description: 'Open your mouth and breathe out quickly!', exampleWord: 'Hat' } },
      practice: { words: ['hop', 'hen', 'hug', 'hit'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-j',
    title: 'Consonant J',
    level: LevelType.SINGLE_CHAR,
    description: 'The /dʒ/ sound is a jumping sound.',
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
    description: 'The /k/ sound is sharp and quick.',
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
    description: 'The /l/ sound is like a singing sound.',
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
    description: 'The /m/ sound is a humming sound.',
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
    description: 'The /n/ sound comes out your nose.',
    phonemes: [{ symbol: 'n', ipa: '/n/', soundType: 'consonant', description: 'Put your tongue up and make a sound through your nose!', exampleWord: 'Nest' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/n_intro.mp3', visualFocus: { symbol: 'n', ipa: '/n/', soundType: 'consonant', description: 'Put your tongue up and make a sound through your nose!', exampleWord: 'Nest' } },
      practice: { words: ['net', 'nap', 'not', 'nut'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-p',
    title: 'Consonant P',
    level: LevelType.SINGLE_CHAR,
    description: 'The /p/ sound is a quiet pop.',
    phonemes: [{ symbol: 'p', ipa: '/p/', soundType: 'consonant', description: 'Press your lips and pop them open quietly!', exampleWord: 'Pig' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/p_intro.mp3', visualFocus: { symbol: 'p', ipa: '/p/', soundType: 'consonant', description: 'Press your lips and pop them open quietly!', exampleWord: 'Pig' } },
      practice: { words: ['pan', 'pig', 'pot', 'pen'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-r',
    title: 'Consonant R',
    level: LevelType.SINGLE_CHAR,
    description: 'The /r/ is a growling sound.',
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
    description: 'The /s/ is a hissing sound.',
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
    description: 'The tapping /t/ sound.',
    phonemes: [{ symbol: 't', ipa: '/t/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Tiger' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/t_intro.mp3', visualFocus: { symbol: 't', ipa: '/t/', soundType: 'consonant', description: 'Tap your tongue behind your top teeth!', exampleWord: 'Tiger' } },
      practice: { words: ['top', 'ten', 'tag', 'tip'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-v',
    title: 'Consonant V',
    level: LevelType.SINGLE_CHAR,
    description: 'The /v/ is a vibrating sound.',
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
    description: 'The /w/ is a whistling-start sound.',
    phonemes: [{ symbol: 'w', ipa: '/w/', soundType: 'consonant', description: 'Round your lips and blow quickly!', exampleWord: 'Watch' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/w_intro.mp3', visualFocus: { symbol: 'w', ipa: '/w/', soundType: 'consonant', description: 'Round your lips and blow quickly!', exampleWord: 'Watch' } },
      practice: { words: ['wig', 'wet', 'win', 'wag'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-consonant-y',
    title: 'Consonant Y',
    level: LevelType.SINGLE_CHAR,
    description: 'The /j/ sound is a yelling start sound.',
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
    description: 'The /z/ is a buzzing sound.',
    phonemes: [{ symbol: 'z', ipa: '/z/', soundType: 'consonant', description: 'Buzz like a bee between your teeth!', exampleWord: 'Zebra' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/z_intro.mp3', visualFocus: { symbol: 'z', ipa: '/z/', soundType: 'consonant', description: 'Buzz like a bee between your teeth!', exampleWord: 'Zebra' } },
      practice: { words: ['zap', 'zip', 'zig', 'zoo'], drills: [] }
    },
    xpReward: 50
  },
  {
    id: 'l1-schwa',
    title: 'The Schwa Sound',
    level: LevelType.SINGLE_CHAR,
    description: 'The most common sound in English: /ə/.',
    phonemes: [{ symbol: 'ə', ipa: '/ə/', soundType: 'vowel', description: 'A relaxed, quick "uh" sound.', exampleWord: 'About' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/schwa_intro.mp3', visualFocus: { symbol: 'ə', ipa: '/ə/', soundType: 'vowel', description: 'A relaxed, quick "uh" sound.', exampleWord: 'About' } },
      practice: { words: ['about', 'banana', 'pencil', 'zebra'], drills: [] }
    },
    xpReward: 60
  },
  {
    id: 'l1-short-oo',
    title: 'Short OO Sound',
    level: LevelType.SINGLE_CHAR,
    description: 'The /ʊ/ sound like in "Book".',
    phonemes: [{ symbol: 'oo', ipa: '/ʊ/', soundType: 'vowel', description: 'Keep your lips slightly rounded.', exampleWord: 'Book' }],
    content: {
      ...DEFAULT_CONTENT,
      listen: { introAudioUrl: '/audio/oo_short_intro.mp3', visualFocus: { symbol: 'oo', ipa: '/ʊ/', soundType: 'vowel', description: 'Keep your lips slightly rounded.', exampleWord: 'Book' } },
      practice: { words: ['book', 'foot', 'cook', 'wood'], drills: [] }
    },
    xpReward: 60
  },

  // --- LEVEL 2: COMPLEX SOUNDS (19 PHONEMES) ---
  {
    id: 'l2-digraph-ch',
    title: 'Digraph CH',
    level: LevelType.BLENDING,
    description: 'The /tʃ/ sound like a train!',
    phonemes: [{ symbol: 'ch', ipa: '/tʃ/', soundType: 'digraph', description: 'Make a quick sneeze sound!', exampleWord: 'Chair' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'ch', ipa: '/tʃ/', soundType: 'digraph', description: 'Make a quick sneeze sound!', exampleWord: 'Chair' },
      practice: { words: ['chip', 'chin', 'rich', 'much'], drills: [] }
    },
    xpReward: 70
  },
  {
    id: 'l2-digraph-sh',
    title: 'Digraph SH',
    level: LevelType.BLENDING,
    description: 'The /ʃ/ sound tells someone to be quiet.',
    phonemes: [{ symbol: 'sh', ipa: '/ʃ/', soundType: 'digraph', description: 'Push your lips out and blow softly.', exampleWord: 'Shoe' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'sh', ipa: '/ʃ/', soundType: 'digraph', description: 'Push your lips out and blow softly.', exampleWord: 'Shoe' },
      practice: { words: ['ship', 'shop', 'fish', 'dish'], drills: [] }
    },
    xpReward: 70
  },
  {
    id: 'l2-th-thin',
    title: 'Unvoiced TH',
    level: LevelType.BLENDING,
    description: 'The quiet /θ/ sound.',
    phonemes: [{ symbol: 'th', ipa: '/θ/', soundType: 'digraph', description: 'Put your tongue between your teeth and blow!', exampleWord: 'Thin' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'th', ipa: '/θ/', soundType: 'digraph', description: 'Put your tongue between your teeth and blow!', exampleWord: 'Thin' },
      practice: { words: ['thin', 'math', 'bath', 'path'], drills: [] }
    },
    xpReward: 75
  },
  {
    id: 'l2-th-this',
    title: 'Voiced TH',
    level: LevelType.BLENDING,
    description: 'The buzzing /ð/ sound.',
    phonemes: [{ symbol: 'th', ipa: '/ð/', soundType: 'digraph', description: 'Buzz your tongue between your teeth!', exampleWord: 'This' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'th', ipa: '/ð/', soundType: 'digraph', description: 'Buzz your tongue between your teeth!', exampleWord: 'This' },
      practice: { words: ['this', 'then', 'that', 'with'], drills: [] }
    },
    xpReward: 75
  },
  {
    id: 'l2-digraph-ng',
    title: 'Digraph NG',
    level: LevelType.BLENDING,
    description: 'The /ŋ/ sound at the end of a word.',
    phonemes: [{ symbol: 'ng', ipa: '/ŋ/', soundType: 'digraph', description: 'Make a sound in the back of your nose.', exampleWord: 'Ring' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'ng', ipa: '/ŋ/', soundType: 'digraph', description: 'Make a sound in the back of your nose.', exampleWord: 'Ring' },
      practice: { words: ['sing', 'long', 'bang', 'wing'], drills: [] }
    },
    xpReward: 75
  },
  {
    id: 'l2-digraph-zh',
    title: 'Digraph ZH',
    level: LevelType.BLENDING,
    description: 'The rare /ʒ/ sound.',
    phonemes: [{ symbol: 'zh', ipa: '/ʒ/', soundType: 'digraph', description: 'A buzzing "sh" sound.', exampleWord: 'Measure' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'zh', ipa: '/ʒ/', soundType: 'digraph', description: 'A buzzing "sh" sound.', exampleWord: 'Measure' },
      practice: { words: ['measure', 'vision', 'treasure'], drills: [] }
    },
    xpReward: 80
  },
  {
    id: 'l2-long-a',
    title: 'Long Vowel A',
    level: LevelType.RULES,
    description: 'The /eɪ/ sound says its name!',
    phonemes: [{ symbol: 'a-e', ipa: '/eɪ/', soundType: 'vowel', description: 'The long "A" sound.', exampleWord: 'Cake' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'a-e', ipa: '/eɪ/', soundType: 'vowel', description: 'The long "A" sound.', exampleWord: 'Cake' },
      practice: { words: ['cake', 'rain', 'day', 'game'], drills: [] }
    },
    xpReward: 90
  },
  {
    id: 'l2-long-e',
    title: 'Long Vowel E',
    level: LevelType.RULES,
    description: 'The /i:/ sound like "See".',
    phonemes: [{ symbol: 'ee', ipa: '/i:/', soundType: 'vowel', description: 'The long "E" sound.', exampleWord: 'Bee' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'ee', ipa: '/i:/', soundType: 'vowel', description: 'The long "E" sound.', exampleWord: 'Bee' },
      practice: { words: ['bee', 'leaf', 'sea', 'tree'], drills: [] }
    },
    xpReward: 90
  },
  {
    id: 'l2-long-i',
    title: 'Long Vowel I',
    level: LevelType.RULES,
    description: 'The /aɪ/ sound like "My".',
    phonemes: [{ symbol: 'i-e', ipa: '/aɪ/', soundType: 'vowel', description: 'The long "I" sound.', exampleWord: 'Bike' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'i-e', ipa: '/aɪ/', soundType: 'vowel', description: 'The long "I" sound.', exampleWord: 'Bike' },
      practice: { words: ['bike', 'light', 'sky', 'night'], drills: [] }
    },
    xpReward: 90
  },
  {
    id: 'l2-long-o',
    title: 'Long Vowel O',
    level: LevelType.RULES,
    description: 'The /əʊ/ sound like "Go".',
    phonemes: [{ symbol: 'o-e', ipa: '/əʊ/', soundType: 'vowel', description: 'The long "O" sound.', exampleWord: 'Boat' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'o-e', ipa: '/əʊ/', soundType: 'vowel', description: 'The long "O" sound.', exampleWord: 'Boat' },
      practice: { words: ['boat', 'rope', 'go', 'snow'], drills: [] }
    },
    xpReward: 90
  },
  {
    id: 'l2-long-u',
    title: 'Long Vowel U',
    level: LevelType.RULES,
    description: 'The /u:/ sound like "Moon".',
    phonemes: [{ symbol: 'u-e', ipa: '/u:/', soundType: 'vowel', description: 'The long "U" sound.', exampleWord: 'Moon' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'u-e', ipa: '/u:/', soundType: 'vowel', description: 'The long "U" sound.', exampleWord: 'Moon' },
      practice: { words: ['moon', 'blue', 'glue', 'tube'], drills: [] }
    },
    xpReward: 90
  },
  {
    id: 'l2-diphthong-oi',
    title: 'Diphthong OI',
    level: LevelType.BLENDING,
    description: 'The /ɔɪ/ sound from "Oil".',
    phonemes: [{ symbol: 'oi', ipa: '/ɔɪ/', soundType: 'vowel', description: 'A sliding sound from "o" to "i".', exampleWord: 'Coin' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'oi', ipa: '/ɔɪ/', soundType: 'vowel', description: 'A sliding sound from "o" to "i".', exampleWord: 'Coin' },
      practice: { words: ['coin', 'boy', 'join', 'toy'], drills: [] }
    },
    xpReward: 85
  },
  {
    id: 'l2-diphthong-ou',
    title: 'Diphthong OU',
    level: LevelType.BLENDING,
    description: 'The /aʊ/ sound from "Out".',
    phonemes: [{ symbol: 'ou', ipa: '/aʊ/', soundType: 'vowel', description: 'A sliding sound from "a" to "u".', exampleWord: 'Cow' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'ou', ipa: '/aʊ/', soundType: 'vowel', description: 'A sliding sound from "a" to "u".', exampleWord: 'Cow' },
      practice: { words: ['cow', 'out', 'loud', 'how'], drills: [] }
    },
    xpReward: 85
  },
  {
    id: 'l2-r-ar',
    title: 'R-Controlled AR',
    level: LevelType.RULES,
    description: 'The /ɑ:/ sound in "Car".',
    phonemes: [{ symbol: 'ar', ipa: '/ɑ:/', soundType: 'vowel', description: 'Open wide for the Pirate sound!', exampleWord: 'Car' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'ar', ipa: '/ɑ:/', soundType: 'vowel', description: 'Open wide for the Pirate sound!', exampleWord: 'Car' },
      practice: { words: ['car', 'star', 'park', 'barn'], drills: [] }
    },
    xpReward: 85
  },
  {
    id: 'l2-r-er',
    title: 'R-Controlled ER',
    level: LevelType.RULES,
    description: 'The /ɜ:r/ sound in "Her".',
    phonemes: [{ symbol: 'er', ipa: '/ɜ:r/', soundType: 'vowel', description: 'A growling vowel sound.', exampleWord: 'Bird' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'er', ipa: '/ɜ:r/', soundType: 'vowel', description: 'A growling vowel sound.', exampleWord: 'Bird' },
      practice: { words: ['bird', 'her', 'nurse', 'surf'], drills: [] }
    },
    xpReward: 85
  },
  {
    id: 'l2-r-or',
    title: 'R-Controlled OR',
    level: LevelType.RULES,
    description: 'The /ɔ:/ sound in "Fork".',
    phonemes: [{ symbol: 'or', ipa: '/ɔ:/', soundType: 'vowel', description: 'A round vowel with an R.', exampleWord: 'Fork' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'or', ipa: '/ɔ:/', soundType: 'vowel', description: 'A round vowel with an R.', exampleWord: 'Fork' },
      practice: { words: ['fork', 'horn', 'port', 'born'], drills: [] }
    },
    xpReward: 85
  },
  {
    id: 'l2-r-air',
    title: 'R-Controlled AIR',
    level: LevelType.RULES,
    description: 'The /eə/ sound in "Chair".',
    phonemes: [{ symbol: 'air', ipa: '/eə/', soundType: 'vowel', description: 'A sliding air sound.', exampleWord: 'Chair' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'air', ipa: '/eə/', soundType: 'vowel', description: 'A sliding air sound.', exampleWord: 'Chair' },
      practice: { words: ['chair', 'hair', 'care', 'fair'], drills: [] }
    },
    xpReward: 85
  },
  {
    id: 'l2-r-ear',
    title: 'R-Controlled EAR',
    level: LevelType.RULES,
    description: 'The /ɪə/ sound in "Near".',
    phonemes: [{ symbol: 'ear', ipa: '/ɪə/', soundType: 'vowel', description: 'Listen with your ear!', exampleWord: 'Near' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'ear', ipa: '/ɪə/', soundType: 'vowel', description: 'Listen with your ear!', exampleWord: 'Near' },
      practice: { words: ['near', 'deer', 'fear', 'hear'], drills: [] }
    },
    xpReward: 85
  },
  {
    id: 'l2-r-ure',
    title: 'R-Controlled URE',
    level: LevelType.RULES,
    description: 'The /ʊə/ sound in "Pure".',
    phonemes: [{ symbol: 'ure', ipa: '/ʊə/', soundType: 'vowel', description: 'A rare R-controlled sound.', exampleWord: 'Pure' }],
    content: {
      ...DEFAULT_CONTENT,
      visualFocus: { symbol: 'ure', ipa: '/ʊə/', soundType: 'vowel', description: 'A rare R-controlled sound.', exampleWord: 'Pure' },
      practice: { words: ['pure', 'cure', 'lure'], drills: [] }
    },
    xpReward: 90
  }
] as Lesson[];


export const WORLD_NAMES = {
  1: 'Letters Land',
  2: 'Blend Bridge',
  3: 'Rule City',
  4: 'Rhythm Road',
  5: 'Story Kingdom'
};
