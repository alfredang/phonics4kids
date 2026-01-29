---
name: Gemini AI Integration
description: Procedures for integrating Gemini AI for real-time educational evaluation, story generation, and voice feedback loops.
---

# Gemini AI Integration

This skill focuses on leveraging Gemini models (like `gemini-1.5-flash`) for dynamic, real-time interactions in web applications.

## Feedback Generation Loop
- **Input**: User action (e.g., speech transcript, quiz answer).
- **Prompt Strategy**: Use "Few-shot" or highly descriptive role-playing (e.g., "You are a friendly teacher for children").
- **Output Format**: Enforce JSON output using `responseMimeType: "application/json"` to ensure programmatic stability.

## Standard Prompt Template
```text
Role: Friendly Phonics Tutor
Task: Evaluate pronunciation for "{{target}}".
Transcript: "{{transcript}}"
Guidelines: Max 10 words feedback, 15 words tip.
JSON Keys: "feedback", "tip"
```

## Performance Optimization
- **Fallback Logic**: Always provide a hardcoded fallback response in case of API errors or rate limiting.
- **Loading States**: Since AI responses usually take 1-3 seconds, implement "Thinking..." micro-animations to maintain user engagement.

## Security
- Never expose API keys in the source code.
- Use environment variables (Vite: `import.meta.env`) and CI/CD secret management for production.
