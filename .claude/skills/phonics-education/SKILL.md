---
name: Phonics Education App Development
description: Guidelines and structures for building AI-powered, gamified phonics learning applications for children.
---

# Phonics Education App Development

This skill captures the patterns and knowledge acquired during the development of PhonixQuest, a React-based platform for teaching the 44 phonemes of English.

## Curriculum Structure

When building phonics apps, organize the content into logical progression levels:
1.  **Level 1: Basic Sounds**: Single vowels (short) and basic consonants.
2.  **Level 2: Complex Sounds**: Digraphs (ch, sh, th, ng), long vowels, and diphthongs.
3.  **Level 3: Blending & Rules**: Magic E, consonant blends (st, tr), and R-controlled vowels.
4.  **Level 4: Fluency**: Sentence reading, intonation patterns, and rhythm.

### The 44 Phonemes Coverage
Ensure the app covers the standard 44 sounds of English. Use IPA symbols correctly in the data layer to facilitate both visual learning and AI accuracy.

## AI Integration (Gemini)

### Speech Feedback Loop
1.  **Capture**: Use the Web Speech API (`SpeechRecognition`) to capture user audio.
2.  **Contextualize**: Provide Gemini with the `targetWord`, the `userTranscript`, and a flag indicating if the word was technically "found" in the transcript.
3.  **Feedback Pattern**:
    -   Keep feedback short (max 10 words).
    -   Provide a specific "Phonics Tip" (e.g., "Put your tongue between your teeth for th").
    -   Always maintain an encouraging, playful tone for children.

## UI/UX Patterns
- **Adventure Map**: Use a vertical or winding path to visualize progress.
- **Interactive HUD**: Display XP, Streaks, and Level clearly.
- **Animations**: Use `framer-motion` for bouncy, playful transitions that respond to user completion.
