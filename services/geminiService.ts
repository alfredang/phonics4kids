import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const generateLessonFeedback = async (
  targetWord: string,
  userTranscript: string,
  isCorrect: boolean
): Promise<{ feedback: string; tip: string }> => {
  const ai = getAIClient();
  if (!ai) {
    return {
      feedback: isCorrect ? "Great job!" : "Not quite right.",
      tip: "Keep practicing!"
    };
  }

  try {
    const prompt = `
      The user is a child (age 9-15) learning phonics.
      Target word: "${targetWord}"
      User said: "${userTranscript}"
      Result: ${isCorrect ? "Correct" : "Incorrect"}

      Provide a short, encouraging feedback message (max 10 words) and a specific phonics tip (max 15 words).
      Be friendly and constructive.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            feedback: { type: Type.STRING },
            tip: { type: Type.STRING }
          },
          required: ["feedback", "tip"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No text response");
    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini Feedback Error:", error);
    return {
      feedback: isCorrect ? "Awesome!" : "Try again!",
      tip: "Listen closely to the sound."
    };
  }
};

export const generateStoryPassage = async (topic: string): Promise<string> => {
    const ai = getAIClient();
    if(!ai) return "Once upon a time, there was a cat who sat on a mat.";

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Write a very short 3-sentence story for a phonics learner about ${topic}. Use simple words suitable for grade 4 reading level.`,
        });
        return response.text || "Story generation failed.";
    } catch (e) {
        return "The cat saw a bat. The bat had a hat. They sat together.";
    }
}
